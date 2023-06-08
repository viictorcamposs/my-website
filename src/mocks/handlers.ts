import { rest } from 'msw'

import Month from '~/utils/month'

import { articles, mostRecentArticle } from './mocks'

export const handlers = [
  rest.get('http://localhost:3000/api/articles', (req, res, ctx) => {
    const data = articles
      .sort(
        (a, b) => Date.parse(String(b.data.releaseDate)) - Date.parse(String(a.data.releaseDate))
      )
      .slice(1)
      .map(article => {
        const timestamp = Date.parse(String(article.data.releaseDate))

        let formattedDate: Date | string = new Date(timestamp)

        const date = formattedDate.getDate()
        const month = Month[formattedDate.getMonth()]
        const year = formattedDate.getFullYear()

        return {
          ...article,
          data: {
            ...article.data,
            releaseDate: `${month} ${date}, ${year}`
          }
        }
      })

    return res(ctx.status(200), ctx.json(data))
  }),
  rest.get('http://localhost:3000/api/articles/mostRecent', (_, res, ctx) =>
    res(ctx.status(200), ctx.json(mostRecentArticle))
  )
]
