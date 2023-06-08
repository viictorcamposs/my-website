import { NextResponse } from 'next/server'

import { createClient } from '@/prismicio'

export async function GET() {
  const client = createClient()

  const articles = await client.getAllByType('blog_article', {
    fetchOptions: {
      next: {
        tags: ['prismic'],
        revalidate: 0 //! correct value for revalidation: 604800
      }
    }
  })

  const mostRecent = articles.sort(
    (a, b) => Date.parse(String(b.data.releaseDate)) - Date.parse(String(a.data.releaseDate))
  )[0]

  return NextResponse.json(mostRecent)
}
