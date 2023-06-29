import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { getMDXComponent } from 'next-contentlayer/hooks'
import { useMDXComponents } from 'mdx-components'
import { allArticles } from 'contentlayer/generated'

import Main from '~/app/components/Main'
import Hero from '~/app/components/Hero'
import HeaderSecondary from '~/app/components/HeaderSecondary'

interface IPage {
  params: {
    post: string
  }
}

export async function generateStaticParams() {
  return allArticles.map(article => ({
    post: article._raw.flattenedPath
  }))
}

export function generateMetadata({ params: { post } }: IPage): Metadata {
  const article = allArticles.find(article => article._raw.flattenedPath === post)

  return {
    title: article?.seo.title,
    description: article?.seo.description
  }
}

export default async function Page({ params: { post } }: IPage) {
  const article = allArticles.find(article => article._raw.flattenedPath === post)

  if (!article) notFound()

  const components = useMDXComponents({})
  const MDXContent = getMDXComponent(article.body.code)

  return (
    <>
      <HeaderSecondary />

      <Main
        className={`
          sm:w-full sm:max-w-[780px] lg:max-w-[960px]
          pb-6 px-0 sm:py-6 sm:px-5 md:px-0 md:py-8 sm:mx-auto
        `}
      >
        <Hero title={article.title} imageUrl={article.image.url} imageAlt={article.image.alt} />

        <article
          className={`
            mt-8 md:mt-12 
            px-6 md:px-10 xl:px-20
          `}
        >
          <MDXContent components={components} />
        </article>
      </Main>
    </>
  )
}
