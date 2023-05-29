import { screen, render, waitFor, within } from '@testing-library/custom'

import articles from '~/app/api/articles/articles.json'

import ListOfArticles from './index'

async function renderListOfArticles() {
  const listOfArticles = await ListOfArticles()

  render(listOfArticles)
}

describe('MostRecentArticle', () => {
  beforeEach(async () => {
    await waitFor(() => renderListOfArticles())
  })

  it('should render list of articles without the most recent written', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(articles.length - 1)
  })

  it('should render list of articles sorted by highest release date', () => {
    const articleWithHighestReleaseDate = articles
      .filter(article => article.releaseDate !== 1686538800000)
      .reduce((a, b) => (a.releaseDate > b.releaseDate ? a : b))

    const [first, _] = screen.getAllByRole('listitem')

    expect(within(first).getByText(articleWithHighestReleaseDate!.title)).toBeTruthy()
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
