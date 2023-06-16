// import { screen, render, within } from '@testing-library/custom'

// import ListOfArticles from './index'

// function renderListOfArticles() {
//   render(<ListOfArticles articles={{}} />)
// }

describe('ListOfArticles', () => {
  // beforeEach(() => {
  //   renderListOfArticles()
  // })

  it('should render list of articles without the most recent written', () => {
    // const list = screen.getByRole('list')
    // const items = within(list).getAllByRole('listitem')
    // expect(items).toHaveLength(articles.length - 1)
  })

  it('should render list of articles with formatted release date', () => {
    // const datePattern = /^[A-Z][a-z]{2}\s\d{1,2}\,\s\d{4}$/g
    // const list = screen.getAllByRole('listitem')
    // for (const article of list) {
    //   const releaseDate = article.getElementsByTagName('span')[0].textContent
    //   expect(releaseDate).toMatch(datePattern)
    // }
  })
})
