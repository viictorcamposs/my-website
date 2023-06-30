import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import type { Article as ClArticle } from 'contentlayer/generated'

import ListArticleHovered from './ListArticleHovered'

interface IListArticles {
  articles: ClArticle[]
}

function Article(props: ClArticle) {
  return (
    <>
      <h3 className="font-main font-bold text-lg min-[375px]:text-xl xl:text-2xl text-[#f7f5f9] mb-4 sm:max-w-[80%]">
        {props.title}
      </h3>

      <p className="font-main font-light text-sm text-[#c7c8e0] mt-4 mb-4 xl:mt-6 xl:mb-0 sm:max-w-[70%]">
        {props.description}
      </p>

      <span className="sm:absolute sm:top-7 xl:top-9 sm:right-0 font-normal font-main text-xs xl:text-sm text-[#c7c8e0]">
        {props.releaseDate}
      </span>
    </>
  )
}

export default function ListArticles({ articles: data }: IListArticles) {
  const articles = data.map(article => ({
    ...article,
    releaseDate: format(parseISO(article.releaseDate), 'LLLL d, yyyy')
  }))

  const theresMoreThanOneArticle = articles.length > 1

  return (
    <ul className="flex flex-col mt-5">
      {articles.map((article, idx) => (
        <ListArticleHovered key={article._id} index={idx}>
          <Link href={article.url}>
            <li
              className={
                !theresMoreThanOneArticle
                  ? `relative py-8`
                  : idx === articles.length - 1
                  ? `relative py-8`
                  : `relative py-8 border-b border-[#c7c8e025]`
              }
            >
              <Article {...article} />
            </li>
          </Link>
        </ListArticleHovered>
      ))}
    </ul>
  )
}
