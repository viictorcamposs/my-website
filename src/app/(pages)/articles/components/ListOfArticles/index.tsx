import Link from 'next/link'

import { PrismicText } from '@prismicio/react'
import type { BlogArticleDocument } from '@/prismicio-types'

async function getListOfArticles(): Promise<BlogArticleDocument[]> {
  const response = await fetch('http://localhost:3000/api/articles', {
    next: {
      revalidate: 0 //! remember to come back after the project is done
    }
  })

  const articles = await response.json()

  return articles
}

export default async function ListOfArticles() {
  const articles = await getListOfArticles()

  return (
    <ul aria-label="articles" className="flex flex-col gap-6 mt-5">
      {articles.map(({ uid, url, data: article }) => (
        <li key={uid} className="relative pt-6 border-t border-[#cdcedf] dark:border-[#464444]">
          <Link scroll href={url!}>
            <h3 className="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[80%]">
              <PrismicText field={article.title} />
            </h3>

            <p className="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]">
              <PrismicText field={article.description} />
            </p>

            <span className="sm:absolute sm:top-6 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]">
              {article.releaseDate}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
