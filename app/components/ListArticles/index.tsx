import Link from 'next/link'

import { format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'

import ListArticleHovered from './ListArticleHovered'

interface IListArticles {
  articles: Post[]
}

function Article(props: Post) {
  return (
    <>
      <h3 className="font-heading font-bold text-xl xl:text-2xl text-[#F4F5F9] mb-4 sm:max-w-[80%]">
        {props.title}
      </h3>

      <p className="font-body font-normal text-sm text-[#C1C2E0] mt-4 mb-4 xl:mt-6 xl:mb-0 sm:max-w-[70%]">
        {props.description}
      </p>

      <span className="sm:absolute sm:top-[42px] sm:right-0 font-normal font-body text-xs xl:text-sm text-[#C1C2E0]">
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
          <Link href={`/${article.slug}`}>
            <li
              className={
                !theresMoreThanOneArticle
                  ? `relative py-10`
                  : idx === articles.length - 1
                  ? `relative py-10`
                  : `relative py-10 border-b border-[#C1C2E025]`
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
