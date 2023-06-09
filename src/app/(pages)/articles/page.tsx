import type { BlogArticleDocument } from '@/prismicio-types'
import { createClient } from '@/prismicio'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'
import MostRecentArticle from './components/MostRecentArticle/'
import ListOfArticles from './components/ListOfArticles/'

async function getArticles(): Promise<BlogArticleDocument[]> {
  const client = createClient()

  const articles = await client.getAllByType('blog_article', {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: process.env.NODE_ENV === 'production' ? 604800 : 0
      }
    },
    orderings: {
      field: 'my.blog_article.releaseDate',
      direction: 'desc'
    }
  })

  return articles
}

export default async function Page() {
  const articles = await getArticles()

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

          <MostRecentArticle article={articles[0]} />
        </div>
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <ListOfArticles articles={articles} />
      </section>
    </Main>
  )
}
