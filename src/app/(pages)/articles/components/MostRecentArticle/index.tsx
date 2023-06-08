import Link from 'next/link'
import Image from 'next/image'

import { PrismicText } from '@prismicio/react'
import type { BlogArticleDocument } from '@/prismicio-types'

async function getMostRecentArticle(): Promise<BlogArticleDocument> {
  const response = await fetch('http://localhost:3000/api/articles/mostRecent', {
    next: {
      revalidate: 0 //! remember to come back after the project is done
    }
  })

  const article = await response.json()

  return article
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
