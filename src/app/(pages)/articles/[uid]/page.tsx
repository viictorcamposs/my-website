import type { Metadata, ResolvingMetadata } from 'next'

import { SliceZone } from '@prismicio/react'
import { asLink } from '@prismicio/client'
import { components } from '@/slices'
import type { BlogArticleDocument } from '@/prismicio-types'
import { createClient } from '@/prismicio'

import Main from '~/app/components/Main'

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

  const article = await client.getByUID('blog_article', uid, {
    fetchOptions: {
      next: { tags: ['prismic'], revalidate: 60 }
    }
  })

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

  const articles = await client.getAllByType('blog_article')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return articles.map((article: any) => asLink(article))
}

async function getArticle(uid: string): Promise<BlogArticleDocument> {
  const client = createClient()

  return await client.getByUID('blog_article', uid, {
    fetchOptions: {
      next: { tags: ['prismic'], revalidate: 60 }
    }
  })
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
      <SliceZone slices={article.data.slices} components={components} />
    </Main>
  )
}

{
  /* 
    <article 
      className="
        px-5 sm:px-12 xl:px-5 xl:max-w-[780px] 
        xl:mx-auto pt-8 
        text-sm md:text-base text-[#464444] dark:text-[#cdcedf]" 
    /> 
  */
}
