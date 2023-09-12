/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import { allPosts } from 'contentlayer/generated'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/jpg'

const Container = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </div>
)

const ImageResponseFallback = ({ text }: { text: string }) => <Container>{text}</Container>

export default async function Image({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === params.slug)

  if (!post) {
    return new ImageResponse(<ImageResponseFallback text="Victor Campos" />)
  }

  let imageRequest: string = ''

  if (process.env.NODE_ENV == 'development') {
    imageRequest = `http://localhost:3000/og?title=${post.title}`
  } else {
    const path = process.env.NEXT_PUBLIC_VERCEL_URL || process.env.VERCEL_URL

    imageRequest = `https://${path}/og?title=${post.title}`
  }

  const response = await fetch(imageRequest)

  const image = await response.arrayBuffer()

  const { title } = post

  if (!image) {
    return new ImageResponse(<ImageResponseFallback text={title} />)
  }

  return new ImageResponse(
    (
      <Container>
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
      </Container>
    ),
    {
      ...size
    }
  )
}
