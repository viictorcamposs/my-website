import { NextResponse } from 'next/server'

import type IArticle from '~/types/article'

import articles from '../articles.json'

export async function GET() {
  const mostRecentArticle: IArticle = articles.reduce((before, current) =>
    before.releaseDate > current.releaseDate ? before : current
  )

  return NextResponse.json(mostRecentArticle)
}
