import { articles, mostRecentArticle, articleWithHighestReleaseDate } from '~/mocks/mockData'
import { screen, render, waitFor, within } from '@testing-library/custom'

import ListOfArticles from './index'

async function renderListOfArticles() {
  const listOfArticles = await ListOfArticles()

  render(listOfArticles)
}

jest.mock('@/prismicio', () => ({
  createClient: () => ({
    getAllByType: jest
      .fn()
      .mockImplementation(() =>
        articles.sort(
          ({ data: a }, { data: b }) =>
            Date.parse(String(b.releaseDate)) - Date.parse(String(a.releaseDate))
        )
      )
  })
}))

describe('ListOfArticles', () => {
  beforeEach(async () => {
    await waitFor(() => renderListOfArticles())
  })

  it('should render list of articles without the most recent written', () => {
    const list = screen.getByRole('list', {
      name: /articles/i
    })

    const items = within(list).getAllByRole('listitem')

    expect(items).toHaveLength(articles.length - 1)
    expect(within(list).queryByText(mostRecentArticle.data.title[0].text)).toBeNull()
  })

  it('should render list of articles sorted by highest release date', () => {
    const [first] = screen.getAllByRole('listitem')

    const title = within(first).getByRole('heading')

    expect(title).toHaveTextContent(articleWithHighestReleaseDate.data.title[0].text)
  })

  it('should render list of articles with formatted release date', () => {
    const datePattern = /^[A-Z][a-z]{2}\s\d{1,2}\,\s\d{4}$/g

    const list = screen.getAllByRole('listitem')

    for (const article of list) {
      const releaseDate = article.getElementsByTagName('span')[0].textContent

      expect(releaseDate).toMatch(datePattern)
    }
  })
})
