import Link from 'next/link'

import type { IPost } from '~/app/api/posts/route'

interface IArticle {
  post: IPost
}

const Article: React.FC<IArticle> = ({ post }) => (
  <li className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]">
    <Link scroll href={`/blog/${encodeURIComponent(post.paramId)}`}>
      <h3 className="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[70%]">
        {post.title}
      </h3>

      <p className="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]">
        {post.description}
      </p>

      <span className="sm:absolute sm:top-1 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]">
        {post.releaseDate}
      </span>
    </Link>
  </li>
)

export default Article
