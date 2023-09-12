/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import { allPosts } from 'contentlayer/generated'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/jpg'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) return {}

  const response = await fetch(`https://victorcampos.vercel.app/og?title=${post.title}`)

  const image = await response.arrayBuffer()

  const { title } = post

  if (!image) return {}

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <img
          src={image as unknown as string}
          alt={title}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            objectPosition: 'bottom',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
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
    ),
    {
      ...size
    }
  )
}
