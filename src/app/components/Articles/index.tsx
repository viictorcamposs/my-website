import Link from 'next/link'

import type { IPost } from '~/app/api/posts/route'

interface IArticles {
  posts: IPost[]
}

const Articles: React.FC<IArticles> = ({ posts }) => (
  <ul className="mt-5">
    {posts.map(({ paramId, title, description, releaseDate }, i) => (
      <li
        key={i}
        className={
          i === 0
            ? 'relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]'
            : i === posts.length - 1
            ? 'relative mt-6 pb-6'
            : 'relative mt-6 pb-6 border-b border-[#cdcedf] dark:border-[#464444]'
        }
      >
        <Link scroll href={`/blog/${encodeURIComponent(paramId)}`}>
          <h3 className="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[70%]">
            {title}
          </h3>

          <p className="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]">
            {description}
          </p>

          <span className="sm:absolute sm:top-1 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]">
            {releaseDate}
          </span>
        </Link>
      </li>
    ))}
  </ul>
)

export default Articles
