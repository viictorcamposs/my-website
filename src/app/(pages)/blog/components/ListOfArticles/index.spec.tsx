import { server } from '~/mocks/server'
import { screen, render, waitFor, within } from '@testing-library/custom'

import articles from '~/app/api/articles/articles.json'

import ListOfArticles from './index'

async function renderListOfArticles() {
  const listOfArticles = await ListOfArticles()

  render(listOfArticles)
}

describe('MostRecentArticle', () => {
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

    expect(articles).toHaveLength(9)
    expect(items).toHaveLength(articles.length - 1)
    expect(within(list).queryByText(/Como testar React Lazy components/i)).toBeNull()
  })

  it('should render list of articles sorted by highest release date', () => {
    const articleWithHighestReleaseDate = articles
      .filter(article => article.releaseDate !== 1686538800000)
      .reduce((a, b) => (a.releaseDate > b.releaseDate ? a : b))

    expect(screen.getAllByRole('listitem')[0]).toMatchInlineSnapshot(`
      <li
        class="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]"
      >
        <a
          href="/blog/${articleWithHighestReleaseDate.paramId}"
        >
          <h3
            class="font-body font-bold text-base sm:text-lg text-[#0c0f17] dark:text-[#f7f5f9] mb-4 sm:max-w-[80%]"
          >
            ${articleWithHighestReleaseDate.title}
          </h3>
          <p
            class="hidden sm:block font-body font-normal text-sm text-[#464444] dark:text-[#cdcedf] mt-4 sm:max-w-[70%]"
          >
            ${articleWithHighestReleaseDate.description}
          </p>
          <span
            class="sm:absolute sm:top-1 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444] dark:text-[#cdcedf]"
          >
            May 17, 2023
          </span>
        </a>
      </li>
    `)
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
