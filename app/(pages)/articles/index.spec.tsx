// import { render, screen, within } from '@testing-library/custom'

// import Page from './page'

describe('Articles Page', () => {
  // beforeEach(async () => {
  //   const page = await Page()

  //   render(page)
  // })

  it('should render most recent article with proper content', () => {
    // const article = screen.getByTestId('most-recent-article')
    // expect(article).toBeInTheDocument()
    // const title = within(article).getByRole('heading')
    // expect(title).toHaveTextContent(mostRecentArticle.data.title[0].text)
  })

  it('should render list of articles', () => {
    // const list = screen.getByRole('list')
    // expect(list).toBeInTheDocument()
    // const listOfArticles = articles.filter(
    //   article => article.data.title[0].text !== mostRecentArticle.data.title[0].text
    // )
    // for (let article of listOfArticles) {
    //   const title = within(list).getByRole('heading', {
    //     name: article.data.title[0].text
    //   })
    //   expect(title).toBeInTheDocument()
    // }
  })
})
