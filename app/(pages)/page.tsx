import Link from 'next/link'

import { compareDesc, format, parseISO } from 'date-fns'
import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'

import Header from '../components/Header'
import ArticleHovered from '../components/ArticleHovered'

import { TITLE_GRADIENT_STYLES } from '../lib/constants'

export const metadata = {
  openGraph: {
    images: [
      {
        url: '/og?title=Home',
        width: 844,
        height: 440,
        alt: 'Home | Victor Campos'
      }
    ]
  }
}

export default function Home() {
  const post: Post = allPosts.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )[0]

  return (
    <>
      <Header />

      <main className="w-full max-w-[680px] mx-auto px-5 min-[375px]:px-7 md:px-0">
        <h3 className="pb-4 text-2xl font-extrabold md:pb-10 md:text-3xl font-heading">
          <span className={TITLE_GRADIENT_STYLES}>Latest Article</span>
        </h3>

        <ArticleHovered index={0}>
          <Link href={'/' + post.slug}>
            <div className="relative z-10 py-8">
              <h3 className="font-heading font-bold text-xl xl:text-2xl text-primary mb-4 sm:max-w-[80%]">
                {post.title}
              </h3>

              <p className="font-body font-normal text-sm text-secondary mt-4 mb-4 xl:mt-6 xl:mb-0 sm:max-w-[70%]">
                {post.description}
              </p>

              <span className="sm:absolute sm:top-[42px] sm:right-0 font-normal font-body text-xs xl:text-sm text-secondary">
                {format(parseISO(post.releaseDate), 'LLLL d, yyyy')}
              </span>
            </div>
          </Link>
        </ArticleHovered>
      </main>
    </>
  )
}
