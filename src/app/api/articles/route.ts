import { NextResponse } from 'next/server'

import { createClient } from '@/prismicio'

import Month from '~/utils/month'

export async function GET() {
  const client = createClient()

  const response = await client.getAllByType('blog_article', {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: process.env.NODE_ENV === 'production' ? 604800 : 0
      }
    }
  })

  const articles = response
    .sort((a, b) => Date.parse(String(b.data.releaseDate)) - Date.parse(String(a.data.releaseDate)))
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

  return NextResponse.json(articles)
}
