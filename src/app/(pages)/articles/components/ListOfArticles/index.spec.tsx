import { articles } from '~/mocks/mockData'
import { screen, render, within } from '@testing-library/custom'
import type { BlogArticleDocument } from '@/prismicio-types'

import ListOfArticles from './index'

function renderListOfArticles() {
  render(<ListOfArticles articles={articles as unknown as BlogArticleDocument[]} />)
}

describe('ListOfArticles', () => {
  beforeEach(() => {
    renderListOfArticles()
  })

  it('should render list of articles without the most recent written', () => {
    const list = screen.getByRole('list', {
      name: /articles/i
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(articles.length - 1)
  })

  // fit('should render list of articles sorted by highest release date', () => {
  //   const [first] = screen.getAllByRole('listitem')

  //   const title = within(first).getByRole('heading')

  //   expect(title).toHaveTextContent(articles[1].data.title[0].text)
  // })

  it('should render list of articles with formatted release date', () => {
    const datePattern = /^[A-Z][a-z]{2}\s\d{1,2}\,\s\d{4}$/g

    const list = screen.getAllByRole('listitem')

    for (const article of list) {
      const releaseDate = article.getElementsByTagName('span')[0].textContent

      expect(releaseDate).toMatch(datePattern)
    }
  })
})
