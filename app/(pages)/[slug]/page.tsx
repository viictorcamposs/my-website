import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { allPosts } from 'contentlayer/generated'

import { components } from '~/app/components/MdxComponents'
import Hero from '~/app/components/Hero'
import HeaderSecondary from '~/app/components/HeaderSecondary'
import ArticleContentMenu from '~/app/components/ArticleContentMenu'

import { getPartialPost } from '~/app/lib/contentlayer'

interface IProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params: { slug } }: IProps): Promise<Metadata> {
  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  if (!post) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.'
    }
  }

  const title = post.title.replaceAll(':', '40SC04')

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/${slug}`
    },
    openGraph: {
      url: `/${slug}`,
      title: post.title,
      description: post.description,
      type: 'article',
      images: [
        {
          url: `/og?title=${title}`,
          width: 844,
          height: 440,
          alt: post.title
        }
      ]
    }
  }
}

export default function Page({ params: { slug } }: IProps) {
  const post = allPosts.find(post => post.slug === slug)

  if (!post) notFound()

  const { title, body, headings, hero } = getPartialPost(post)

  const MDXContent = useMDXComponent(body.code)

  return (
    <>
      <HeaderSecondary />

      <main className="pb-6 pt-[100px] px-0 sm:pb-6 sm:px-5 md:px-0 md:pb-8 xl:pt-0 sm:mx-auto sm:w-full sm:max-w-[780px] lg:max-w-[960px] xl:max-w-full">
        <Hero title={title} author={hero.author} image={hero.image} />

        <article className="relative mx-auto mt-12 px-6 min-[700px]:px-0 w-full max-w-[680px]">
          <MDXContent components={components} />

          {headings && <ArticleContentMenu content={headings} />}
        </article>
      </main>
    </>
  )
}
