/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import sharp from 'sharp'
import path from 'path'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title')

  const slug = title?.toLowerCase().replaceAll(' ', '-').replaceAll('.', '')

  const file = path.join('./public', `/static/img/posts/${slug}.jpg`)

  const { buffer } = await sharp(file).resize(1200, 680).toBuffer()

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          background: 'black',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60
        }}
      >
        <img
          src={buffer as unknown as string}
          alt={title!}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            objectFit: 'cover',
            objectPosition: 'bottom'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#00000030'
          }}
        />

        {title}
      </div>
    )
  )
}
