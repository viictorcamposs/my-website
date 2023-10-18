/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  let title = searchParams.get('title')!
  title = title.replaceAll('40SC04', ':')

  const [image, poppins] = await Promise.all([
    fetch(new URL('../../assets/preview.png', import.meta.url)).then(res => res.arrayBuffer()),
    fetch(new URL('../../assets/Poppins-Bold.ttf', import.meta.url)).then(res => res.arrayBuffer())
  ])

  let fontSize: string

  if (['articles', 'home'].includes(title.toLowerCase())) {
    fontSize = 'text-4xl'
  } else {
    fontSize = 'text-3xl'
  }

  return new ImageResponse(
    (
      <div tw="relative flex">
        <img src={image as unknown as string} width={844} height={440} />

        <div tw="absolute w-full h-full flex items-center justify-center text-center px-10">
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
