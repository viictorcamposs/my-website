import Link from 'next/link'
import Image from 'next/image'

import type IArticle from '~/types/article'

async function getMostRecentArticle(): Promise<IArticle> {
  const response = await fetch('http://localhost:3000/api/articles/mostRecent')

  const article = await response.json()

  return article
}

const styles = `
  w-full max-w-[350px]
`

export default async function MostRecentArticle() {
  const article = await getMostRecentArticle()

  return (
    <div className={styles}>
      <Link href={`/blog/${encodeURIComponent(article.paramId)}`}>
        <div className="relative aspect-video rounded-lg overflow-hidden mb-4 w-full">
          <Image fill priority sizes="50vw" src={article.imageUrl} alt={article.title} />
        </div>

        <h3 className="font-body font-bold text-base text-[#0c0f17] dark:text-[#f7f5f9] mt-4 mb-3">
          {article.title}
        </h3>

        <p className="mt-3 font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf]">
          {article.description}
        </p>
      </Link>
    </div>
  )
}
