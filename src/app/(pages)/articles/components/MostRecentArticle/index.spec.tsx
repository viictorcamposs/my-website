import { mostRecentArticle } from '~/mocks/mockData'
import { screen, render } from '@testing-library/custom'
import type { BlogArticleDocument } from '@/prismicio-types'

import MostRecentArticle from './index'

async function renderMostRecentArticle() {
  render(<MostRecentArticle article={mostRecentArticle as unknown as BlogArticleDocument} />)
}

describe('MostRecentArticle', () => {
  it('should render proper content', async () => {
    renderMostRecentArticle()

    expect(screen.getByText(mostRecentArticle.data.title[0].text)).toBeInTheDocument()

    expect(screen.getByText(mostRecentArticle.data.description[0].text)).toBeInTheDocument()

    expect(screen.getByRole('link').getAttribute('href')).toContain(mostRecentArticle.url)

    expect(screen.getByRole('img')).toHaveProperty('alt', mostRecentArticle.data.image.alt)

    expect(screen.getByRole('img').getAttribute('src')).toContain(
      encodeURIComponent(mostRecentArticle.data.image.url)
    )
  })
})
