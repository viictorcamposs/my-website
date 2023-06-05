import { rest, server } from '~/mocks/server'
import { screen, render, waitFor } from '@testing-library/custom'

import MostRecentArticle from './index'

const article = {
  paramId: 'como-foi-a-experiencia-de-criar-meu-site-e-blog-pessoal',
  title: 'Como foi a experiência de criar meu site e blog pessoal',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis iaculis...',
  releaseDate: 1671678000000,
  imageUrl:
    'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
}

async function renderMostRecentArticle() {
  const mostRecentArticle = await MostRecentArticle()

  render(mostRecentArticle)
}

describe('MostRecentArticle', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  it('should render proper content', async () => {
    server.use(
      rest.get('http://localhost:3000/api/articles/mostRecent', (req, res, ctx) =>
        res(ctx.status(200), ctx.json(article))
      )
    )

    await waitFor(() => renderMostRecentArticle())

    expect(screen.getByText(article.title)).toBeInTheDocument()

    expect(screen.getByText(article.description)).toBeInTheDocument()

    expect(screen.getByRole('link').getAttribute('href')).toContain(article.paramId)

    expect(screen.getByRole('img')).toHaveProperty('alt', article.title)

    expect(screen.getByRole('img').getAttribute('src')).toContain(
      encodeURIComponent(article.imageUrl)
    )
  })
})
