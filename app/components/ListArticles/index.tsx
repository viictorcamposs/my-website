import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import type { Article } from 'contentlayer/generated'

interface IListOfArticles {
  articles: Article[]
}

export default function ListArticles({ articles: data }: IListOfArticles) {
  const articles = data.map(article => ({
    ...article,
    releaseDate: format(parseISO(article.releaseDate), 'LLLL d, yyyy')
  }))

  const theresMoreThanOneArticle = articles.length > 1

  return (
    <ul className="flex flex-col mt-5">
      {articles.map((article, idx) => (
        <li
          key={article._id}
          className={
            !theresMoreThanOneArticle
              ? 'relative py-8'
              : idx === articles.length - 1
              ? 'relative py-8'
              : 'relative py-8 border-b border-[#c7c8e025]'
          }
        >
          <Link scroll href={article.url}>
            <h3 className="font-body font-bold text-base sm:text-lg text-[#f7f5f9] mb-4 sm:max-w-[80%]">
              {article.title}
            </h3>

            <p className="hidden sm:block font-body font-normal text-sm text-[#c7c8e0] mt-4 sm:max-w-[70%]">
              {article.description}
            </p>

            <span className="sm:absolute sm:top-6 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#c7c8e0]">
              {article.releaseDate}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
