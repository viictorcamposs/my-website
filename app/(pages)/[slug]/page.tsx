import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

import { getMDXComponent } from 'next-contentlayer/hooks'
import { allPosts } from 'contentlayer/generated'

import { getMetadataProps } from '~/app/lib/metadata'

import { components } from '~/app/components/MdxComponents'
import Main from '~/app/components/Main'
import Hero from '~/app/components/Hero'
import HeaderSecondary from '~/app/components/HeaderSecondary'
import ArticleContentMenu from '~/app/components/ArticleContentMenu'

import { getPartialPost } from '~/app/lib/contentlayer'

interface IPage {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post._raw.flattenedPath
  }))
}

export async function generateMetadata(
  { params: { slug } }: IPage,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  const previousImages = (await parent).openGraph?.images || []

  const metadata = getMetadataProps({
    title: post!.title,
    description: post!.description,
    image: `/static/img/posts/${post?._raw.flattenedPath}.jpg`,
    previousImages,
    keywords: post!.keywords
  })

  return metadata
}

function getPost(slug: string) {
  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  if (!post) notFound()

  const partialPost = getPartialPost(post)

  return {
    ...partialPost,
    imageURL: `/static/img/posts/${post._raw.flattenedPath}.jpg`,
    imageAlt: `${post.title} | Background Image`
  }
}

export default async function Page({ params: { slug } }: IPage) {
  const post = getPost(slug)

  const MDXContent = getMDXComponent(post.body.code)

  return (
    <>
      <HeaderSecondary />

      <Main className="pb-6 px-0 sm:py-6 sm:px-5 md:px-0 md:py-8 sm:mx-auto sm:w-full sm:max-w-[780px] lg:max-w-[960px]">
        <Hero title={post.title} imageUrl={post.imageURL} imageAlt={post.imageAlt} />

        <article className="relative mx-auto mt-8 md:mt-12 px-6 min-[700px]:px-0 w-full max-w-[680px]">
          <MDXContent components={components} />

          {post.headings && <ArticleContentMenu content={post.headings} />}
        </article>
      </Main>
    </>
  )
}
