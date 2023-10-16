/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

const getImage = async () => {
  const response = await fetch(new URL('../../assets/preview.png', import.meta.url))

  const image = await response.arrayBuffer()

  return new TextDecoder().decode(image)
}

const getFont = async () => {
  const response = await fetch(new URL('../../assets/Poppins-Bold.ttf', import.meta.url))

  return await response.arrayBuffer()
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const title = searchParams.get('title')!

  const [image, poppins] = await Promise.all([getImage(), getFont()])

  let fontSize: string

  if (['articles', 'home'].includes(title.toLowerCase())) {
    fontSize = 'text-4xl'
  } else {
    fontSize = 'text-3xl'
  }

  return new ImageResponse(
    (
      <div tw="relative flex">
        <img src={image} width={844} height={440} />

        <div tw="absolute w-full h-full flex items-center justify-center">
          <span
            tw={`text-zinc-200 relative top-[68px] ${fontSize}`}
            style={{ fontFamily: 'Poppins' }}
          >
            {title}
          </span>
        </div>
      </div>
    ),
    {
      width: 844,
      height: 440,
      fonts: [
        {
          name: 'Poppins',
          data: poppins,
          style: 'normal'
        }
      ]
    }
  )
}
