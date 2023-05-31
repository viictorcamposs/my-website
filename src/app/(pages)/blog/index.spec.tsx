import React from 'react'

import { server } from '~/mocks/server'
import { render, screen, waitFor } from '@testing-library/custom'

import Page from './page'

function renderPage() {
  render(<Page />)
}

describe('Blog Page', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should display loading indicators before list of and most recent article contents are rendered', async () => {
    await waitFor(() => renderPage())

    const loadingMostRecentArticle = screen.getByTitle('Loading most recent article')
    const loadingListOfArticles = screen.getByTitle('Loading list of articles')

    expect(loadingMostRecentArticle).toBeInTheDocument()
    expect(loadingListOfArticles).toBeInTheDocument()
  })
})
