import { server } from '~/mocks/server'
import { articles, mostRecentArticle, articleWithHighestReleaseDate } from '~/mocks/mocks'
import { screen, render, waitFor, within } from '@testing-library/custom'

import ListOfArticles from './index'

async function renderListOfArticles() {
  const listOfArticles = await ListOfArticles()

  render(listOfArticles)
}

describe('ListOfArticles', () => {
  beforeAll(() => server.listen())

  beforeEach(async () => {
    await waitFor(() => renderListOfArticles())
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

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
