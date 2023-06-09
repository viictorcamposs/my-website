import { articles, mostRecentArticle } from '~/mocks/mockData'
import { screen, render, waitFor } from '@testing-library/custom'

import MostRecentArticle from './index'

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

async function renderMostRecentArticle() {
  const mostRecentArticle = await MostRecentArticle()

  render(mostRecentArticle)
}

describe('MostRecentArticle', () => {
  it('should render proper content', async () => {
    await waitFor(() => renderMostRecentArticle())

    expect(screen.getByText(mostRecentArticle.data.title[0].text)).toBeInTheDocument()

    expect(screen.getByText(mostRecentArticle.data.description[0].text)).toBeInTheDocument()

    expect(screen.getByRole('link').getAttribute('href')).toContain(mostRecentArticle.url)

    expect(screen.getByRole('img')).toHaveProperty('alt', mostRecentArticle.data.image.alt)

    expect(screen.getByRole('img').getAttribute('src')).toContain(
      encodeURIComponent(mostRecentArticle.data.image.url)
    )
  })
})
