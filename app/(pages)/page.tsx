import { compareDesc } from 'date-fns'
import type { Article } from 'contentlayer/generated'
import { allArticles } from 'contentlayer/generated'

import ListArticles from '../components/ListArticles'
import Header from '../components/Header'

const main = `
  w-full max-w-[680px] mx-auto 
  px-5 min-[375px]:px-7 md:px-0
`

export default function Home() {
  const articles: Article[] = allArticles.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  return (
    <>
      <Header />

      <main className={main}>
        <ListArticles articles={articles} />
      </main>
    </>
  )
}
