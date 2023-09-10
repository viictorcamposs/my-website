import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'

import path from 'node:path'
import { getMDXComponent } from 'next-contentlayer/hooks'
import fs from 'fs/promises'
import { allPosts } from 'contentlayer/generated'

import { getArticlePageMetadataProps } from '~/app/lib/metadata'

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
    slug: post.slug
  }))
}

export async function generateMetadata(
  { params: { slug } }: IPage,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find(post => post._raw.flattenedPath === slug)

  const previousImages = (await parent).openGraph?.images || []

  // ! read next.js docs to learn how to handle seo and metadata generation issues for the whole project.

  if (!post)
    return {
      openGraph: {
        images: previousImages
      }
    }

  const metadata = getArticlePageMetadataProps({
    title: post.title,
    description: post.description,
    image: `/static/img/posts/${post?._raw.flattenedPath}.jpg`,
    previousImages,
    keywords: post.keywords
  })

  return metadata
}

function getPost(slug: string) {
  const post = allPosts.find(post => post.slug === slug)

  if (!post) notFound()

  return getPartialPost(post)
}

async function getHeroImage(slug: string, title: string) {
  const image = {
    src: `/static/img/posts/${slug}.jpg`,
    alt: `${title} | Background Image`,
    base64: `/static/img/posts/${slug}.txt`
  }

  try {
    const file = path.join('./public', image.base64)
    const placeholder = await fs.readFile(file, { encoding: 'base64' })

    return {
      ...image,
      placeholder
    }
  } catch (error) {
    return {
      ...image,
      placeholder: ''
    }
  }
}

export default async function Page({ params: { slug } }: IPage) {
  const { title, headings, body } = getPost(slug)

  const { src, alt, base64 } = await getHeroImage(slug, title)

  const MDXContent = getMDXComponent(body.code)

  return (
    <>
      <HeaderSecondary />

      <Main className="pb-6 px-0 sm:py-6 sm:px-5 md:px-0 md:py-8 sm:mx-auto sm:w-full sm:max-w-[780px] lg:max-w-[960px]">
        <Hero title={title} imgSrc={src} imgAlt={alt} placeholder={base64} />

        <article className="relative mx-auto mt-8 md:mt-12 px-6 min-[700px]:px-0 w-full max-w-[680px]">
          <MDXContent components={components} />

          {headings && <ArticleContentMenu content={headings} />}
        </article>
      </Main>
    </>
  )
}