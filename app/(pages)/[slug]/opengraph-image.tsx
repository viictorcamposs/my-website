/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

import { allPosts } from 'contentlayer/generated'

export const size = {
  width: 1200,
  height: 630
}

export const alt = 'Blog | Victor Campos'

export const contentType = 'image/jpeg'

export default async function og({ params }: { params: { slug: string } }) {
  const post = allPosts.find(post => post.slug === params.slug)

  const imagePath = `/static/img/posts/${params.slug}.jpg`

  return new ImageResponse(
    (
      <div tw="w-full h-full flex items-center justify-center relative">
        <img
          width={1200}
          height={630}
          alt={post?.title}
          tw="absolute top-0 left-0 right-0 bottom-0"
          src={`https://victorcampos.vercel.app/${imagePath}`}
          style={{ objectFit: 'cover' }}
        />

        <div tw="absolute top-0 left-0 right-0 bottom-0 bg-black/30" />

        <div tw="flex flex-col items-center">
          <span tw="relative text-zinc-200 text-4xl pb-8 border-b border-b-white">
            Victor Campos
          </span>
          <span tw="text-zinc-200 text-5xl mt-8">{post?.title}</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
