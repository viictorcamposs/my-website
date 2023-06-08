import type { Metadata, ResolvingMetadata } from 'next'

import { SliceZone } from '@prismicio/react'
import { components } from '@/slices'
import type { BlogArticleDocument } from '@/prismicio-types'
import { createClient } from '@/prismicio'

import Main from '~/app/components/Main'
import ArticleHeroComponent from '../components/ArticleHeroComponent'

interface IPageProps {
  params: {
    uid: string
  }
}

export async function generateMetadata(
  { params: { uid } }: IPageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const client = createClient()

  const article = await client.getByUID('blog_article', uid)

  // ?: optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: article.data.meta_title,
    description: String(article.data.meta_description),
    openGraph: {
      images: [
        '/custom-metadata-image.png', // *: Prismic Metadata Image
        ...previousImages
      ]
    }
  }
}

export async function generateStaticParams() {
  const client = createClient()

  const articles = await client.getAllByType('blog_article', {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: process.env.NODE_ENV === 'production' ? 604800 : 0
      }
    }
  })

  return articles.map(article => ({
    uid: article.uid
  }))
}

async function getArticle(uid: string): Promise<BlogArticleDocument> {
  const client = createClient()

  const response = await client.getByUID('blog_article', uid, {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: process.env.NODE_ENV === 'production' ? 604800 : 60
      }
    }
  })

  return response
}

export default async function Page({ params: { uid } }: IPageProps) {
  const article = await getArticle(uid)

  return (
    <Main
      className={`
        sm:w-full sm:max-w-[780px] lg:max-w-[960px]
        pb-6 px-0 sm:py-6 sm:px-5 md:px-0 md:py-8 sm:mx-auto
      `}
    >
      <ArticleHeroComponent
        title={article.data.title}
        imageUrl={article.data.image.url!}
        imageAlt={article.data.image.alt!}
      />

      <article className="mt-8 md:mt-12 px-6 md:px-10 xl:px-20">
        <SliceZone slices={article.data.slices} components={components} />
      </article>
    </Main>
  )
}
