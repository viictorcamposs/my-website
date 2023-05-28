import type { ComponentType } from 'react'
import { lazy, Suspense } from 'react'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import LoadingMostRecentArticle from '~/app/components/MostRecentArticle/Loading'
import Main from '~/app/components/Main'
import LoadingListOfArticles from '~/app/components/ListOfArticles/Loading'

const MostRecentArticle = lazy(async () => {
  const mostRecentArticle = await import('~/app/components/MostRecentArticle')

  return mostRecentArticle as unknown as { default: ComponentType }
})

const ListOfArticles = lazy(async () => {
  const listOfArticles = await import('~/app/components/ListOfArticles')

  return listOfArticles as unknown as { default: ComponentType }
})

export default function Page() {
  return (
    <Main>
      <section className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <PageTitle>Let me share something with you...</PageTitle>

          <PageParagraph addClassName="lg:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis ullamcorper risus mattis iaculis.
          </PageParagraph>
        </div>

        <div data-testid="most-recent-article-section">
          <PageSubtitle addClassName="lg:mt-0">Most recent</PageSubtitle>

          <Suspense fallback={<LoadingMostRecentArticle />}>
            <MostRecentArticle />
          </Suspense>
        </div>
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <Suspense fallback={<LoadingListOfArticles />}>
          <ListOfArticles />
        </Suspense>
      </section>
    </Main>
  )
}
