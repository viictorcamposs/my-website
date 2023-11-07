import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'

import ArticleHovered from '../ArticleHovered'

interface IListArticles {
  articles: Post[]
}

export default function ListArticles({ articles: data }: IListArticles) {
  const articles = data.map(article => ({
    ...article,
    releaseDate: format(parseISO(article.releaseDate), 'LLLL d, yyyy')
  }))

  const theresMoreThanOneArticle = articles.length > 1

  return (
    <ul className="flex flex-col">
      {articles.map((article, idx) => (
        <ArticleHovered key={article._id} index={idx}>
          <Link href={`/${article.slug}`}>
            <div
              className={
                !theresMoreThanOneArticle
                  ? `relative z-10 py-8`
                  : idx === articles.length - 1
                  ? `relative z-10 py-8`
                  : `relative z-10 py-8 border-b border-primary`
              }
            >
              <h3 className="font-heading font-bold text-xl xl:text-2xl text-primary mb-4 sm:max-w-[80%]">
                {article.title}
              </h3>

              <p className="font-body font-normal text-sm text-secondary mt-4 mb-4 xl:mt-6 xl:mb-0 sm:max-w-[70%]">
                {article.description}
              </p>

              <span className="sm:absolute sm:top-[42px] sm:right-0 font-normal font-body text-xs xl:text-sm text-secondary">
                {article.releaseDate}
              </span>
            </div>
          </Link>
        </ArticleHovered>
      ))}
    </ul>
  )
}
