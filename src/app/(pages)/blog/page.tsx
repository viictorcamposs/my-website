import { Suspense } from 'react'

import type { IPost } from '~/app/api/posts/route'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import MostRecentArticle from '~/app/components/MostRecentArticle'
import Main from '~/app/components/Main'
import Articles from '~/app/components/Articles'

async function getPosts(): Promise<IPost[]> {
  const response = await fetch('http://localhost:3000/api/posts')

  const data = await response.json()

  return data
}

export default async function Page() {
  const posts = await getPosts()

  const mostRecentArticle = posts[0]

  const allArticlesExceptTheMostRecentOne = posts.slice(1)

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

        <div>
          <PageSubtitle addClassName="lg:mt-0">Most recent</PageSubtitle>

          <Suspense fallback={<>Loading...</>}>
            <MostRecentArticle article={mostRecentArticle} />
          </Suspense>
        </div>
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <Suspense fallback={<>Loading...</>}>
          <Articles posts={allArticlesExceptTheMostRecentOne} />
        </Suspense>
      </section>
    </Main>
  )
}
