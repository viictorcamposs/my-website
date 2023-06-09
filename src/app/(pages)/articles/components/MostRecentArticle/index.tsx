import Link from 'next/link'
import Image from 'next/image'

import { PrismicText } from '@prismicio/react'
import type { BlogArticleDocument } from '@/prismicio-types'
import { createClient } from '@/prismicio'

async function getMostRecentArticle(): Promise<BlogArticleDocument> {
  const client = createClient()

  const articles = await client.getAllByType('blog_article', {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: process.env.NODE_ENV === 'production' ? 604800 : 0
      }
    },
    orderings: {
      field: 'my.blog_article.releaseDate',
      direction: 'desc'
    }
  })

  return articles[0]
}

export default async function MostRecentArticle() {
  const article = await getMostRecentArticle()

  return (
    <div
      className={`
        w-full max-w-[350px]
      `}
    >
      <Link href={article.url!}>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 w-full">
          <Image
            fill
            priority
            sizes="50vw"
            src={article.data.image.url!}
            alt={article.data.image.alt!}
          />
        </div>

        <h3 className="font-body font-bold text-base text-[#0c0f17] dark:text-[#f7f5f9] mt-4 mb-3">
          <PrismicText field={article.data.title} />
        </h3>

        <p className="mt-3 font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf]">
          <PrismicText field={article.data.description} />
        </p>
      </Link>
    </div>
  )
}
