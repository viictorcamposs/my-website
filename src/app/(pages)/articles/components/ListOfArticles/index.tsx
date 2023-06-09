import Link from 'next/link'

import { PrismicText } from '@prismicio/react'
import type { BlogArticleDocument } from '@/prismicio-types'

import Month from '~/utils/month'

interface IListOfArticles {
  articles: BlogArticleDocument[]
}

export default function ListOfArticles({ articles: data }: IListOfArticles) {
  const articles = data.slice(1).map(article => {
    const timestamp = Date.parse(String(article.data.releaseDate))

    let formattedDate: Date | string = new Date(timestamp)

    const date = formattedDate.getDate()
    const month = Month[formattedDate.getMonth()]
    const year = formattedDate.getFullYear()

    return {
      ...article,
      data: {
        ...article.data,
        releaseDate: `${month} ${date}, ${year}`
      }
    }
  })

  return (
    <ul aria-label="articles" className="flex flex-col gap-6 mt-5">
      {articles.map(article => (
        <li
          key={article.uid}
          className="relative pt-6 border-t border-[#cdcedf] dark:border-[#464444]"
        >
          <Link scroll href={article.url!}>
            <h3 className="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[80%]">
              <PrismicText field={article.data.title} />
            </h3>

            <p className="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]">
              <PrismicText field={article.data.description} />
            </p>

            <span className="sm:absolute sm:top-6 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]">
              {article.data.releaseDate}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
