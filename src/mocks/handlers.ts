import { rest } from 'msw'

import articles from '~/app/api/articles/articles.json'

export const handlers = [
  rest.get('http://localhost:3000/api/articles', (req, res, ctx) => {
    const { searchParams } = new URL(req.url)

    const query = searchParams.get('article')

    if (query) {
      const article = articles.find(article => article.paramId === query)
      return res(ctx.status(200), ctx.json(article))
    }

    return res(ctx.status(200), ctx.json(articles))
  }),
  rest.get('http://localhost:3000/api/articles/mostRecent', (_, res, ctx) => {
    const mostRecentArticle = articles.reduce((before, current) =>
      before.releaseDate > current.releaseDate ? before : current
    )

    return res(ctx.status(200), ctx.json(mostRecentArticle))
  })
]
