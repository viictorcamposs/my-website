import Link from 'next/link'

import type IArticle from '~/types/article'

import Month from '~/utils/month'

async function getListOfArticles(): Promise<IArticle[]> {
  const response = await fetch('http://localhost:3000/api/articles')

  const articles = await response.json()

  return articles
}

export default async function ListOfArticles() {
  let articles = await getListOfArticles()

  articles = articles
    .sort((a, b) => Number(b.releaseDate) - Number(a.releaseDate))
    .slice(1)
    .map(article => {
      let formattedDate: Date | string = new Date(article.releaseDate)

      const date = formattedDate.getDate()
      const month = Month[formattedDate.getMonth()]
      const year = formattedDate.getFullYear()

      formattedDate = `${month} ${date}, ${year}`

      return {
        ...article,
        releaseDate: formattedDate
      }
    })

  return (
    <ul aria-label="articles" className="flex flex-col gap-6 mt-5">
      {articles.map(article => (
        <li
          key={article.paramId}
          className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]"
        >
          <Link scroll href={`/blog/${encodeURIComponent(article.paramId)}`}>
            <h3 className="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[80%]">
              {article.title}
            </h3>

            <p className="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]">
              {article.description}
            </p>

            <span className="sm:absolute sm:top-1 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]">
              {article.releaseDate as string}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
