import { compareDesc } from 'date-fns'
import type { Article } from 'contentlayer/generated'
import { allArticles } from 'contentlayer/generated'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'
import ListArticles from '~/app/components/ListArticles/'
import FeaturedArticle from '~/app/components/FeaturedArticle/'

export default async function Page() {
  const [recent, ...articles]: Article[] = allArticles.sort((a, b) =>
    compareDesc(new Date(a.releaseDate), new Date(b.releaseDate))
  )

  const theresMoreThanOneArticle = allArticles.length > 1

  return (
    <Main>
      <section
        className={theresMoreThanOneArticle ? 'lg:grid lg:grid-cols-[1fr_280px] lg:gap-16' : ''}
      >
        <div>
          <PageTitle>Let me share something with you...</PageTitle>

          <PageParagraph addClassName="lg:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis ullamcorper risus mattis iaculis.
          </PageParagraph>
        </div>

        {theresMoreThanOneArticle && (
          <div>
            <PageSubtitle addClassName="lg:mt-0">Most recent</PageSubtitle>

            <FeaturedArticle article={recent} />
          </div>
        )}
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <ListArticles articles={theresMoreThanOneArticle ? articles : [recent]} />
      </section>
    </Main>
  )
}
