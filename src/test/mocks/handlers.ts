import { rest } from 'msw'
import { faker } from '@faker-js/faker'

import type { IPost } from '~/app/api/posts/route'

export const handlers = [
  rest.get('http://localhost:3000/api/posts', (_, res, ctx) => {
    let posts: IPost[] = []

    for (let i = 0; i < 10; i++) {
      const title = faker.hacker.phrase()

      posts.push({
        title,
        paramId: title.replaceAll(' ', '-'),
        description: faker.lorem.paragraph(4),
        imageUrl: faker.image.urlPicsumPhotos(),
        releaseDate: faker.date.recent({ days: 30 })
      })
    }

    return res(ctx.status(200), ctx.json({ posts }))
  })
]
