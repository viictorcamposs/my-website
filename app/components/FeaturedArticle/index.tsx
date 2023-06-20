import Link from 'next/link'
import Image from 'next/image'

import type { Article } from 'contentlayer/generated'

interface IMostRecentArticle {
  article: Article
}

export default function FeaturedArticle({ article }: IMostRecentArticle) {
  return (
    <div
      data-testid="most-recent-article"
      className={`
        w-full max-w-[350px]
      `}
    >
      <Link href={article.url}>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 w-full">
          <Image fill priority sizes="50vw" src={article.image.url} alt={article.image.alt} />
        </div>

        <h3 className="font-body font-bold text-base text-[#f7f5f9] mt-4 mb-3">{article.title}</h3>

        <p className="mt-3 font-body font-normal text-sm text-[#c7c8e0]">{article.description}</p>
      </Link>
    </div>
  )
}
