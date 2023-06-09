import { rest } from 'msw'

import { articles, mostRecentArticle } from './mockData'

export const handlers = [
  rest.get(
    'https://viictorcamposs-website-blog.cdn.prismic.io/api/v2/documents/search',
    (req, res, ctx) => res(ctx.status(200), ctx.json(articles))
  ),
  rest.get('https://viictorcamposs-website-blog.cdn.prismic.io/api/v2', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mostRecentArticle))
  )
]
