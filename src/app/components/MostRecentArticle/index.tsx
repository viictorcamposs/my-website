import Link from 'next/link'
import Image from 'next/image'

import type { IPost } from '~/app/api/posts/route'

interface IMostRecentArticle {
  article: IPost
}

const MostRecentArticle: React.FC<IMostRecentArticle> = ({ article }) => (
  <div className="w-full max-w-[350px]">
    <Link href={`/blog/${encodeURIComponent(article.paramId)}`}>
      <div className="relative aspect-video rounded-lg overflow-hidden mb-4 w-full">
        <Image fill priority sizes="50vw" src={article.imageUrl} alt={article.title} />
      </div>

      <h3 className="font-body font-bold text-lg text-[#0c0f17] dark:text-[#f7f5f9] mt-4 mb-3">
        {article.title}
      </h3>

      <p className="mt-3 font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf]">
        {article.description}
      </p>
    </Link>
  </div>
)

export default MostRecentArticle
