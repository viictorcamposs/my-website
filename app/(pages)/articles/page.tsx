import { compareDesc } from 'date-fns'
import type { Article } from 'contentlayer/generated'
import { allArticles } from 'contentlayer/generated'

import Main from '~/app/components/Main'
import ListArticles from '~/app/components/ListArticles'
import HeaderSecondary from '~/app/components/HeaderSecondary'

export default function Page() {
  const articles: Article[] = allArticles.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  return (
    <>
      <HeaderSecondary />

      <Main>
        <ListArticles articles={articles} />
      </Main>
    </>
  )
}
