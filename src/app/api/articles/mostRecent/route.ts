import { NextResponse } from 'next/server'

import type IArticle from '~/app/types/article'

import json from '../articles.json'

const articles: IArticle[] = json

export async function GET() {
  const mostRecentArticle: IArticle = articles.reduce((before, current) =>
    before.releaseDate > current.releaseDate ? before : current
  )

  console.log(mostRecentArticle.title)

  return NextResponse.json(mostRecentArticle)
}
