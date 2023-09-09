/* eslint-disable jsx-a11y/alt-text */
import NextImage from 'next/image'

import profile from '~/public/static/img/profile.jpg'

const Image = () => (
  <NextImage
    width={80}
    height={80}
    src={profile}
    alt="Victor Campos"
    placeholder="blur"
    className={`
      rounded-full
      w-16 h-16 md:w-20 md:h-20
    bg-[#e4e4e7]
    `}
  />
)

const Title = () => (
  <h1
    className={`
      font-heading font-extrabold 
      text-xl min-[375px]:text-2xl md:text-3xl
      text-primary
    `}
  >
    Victor Campos
  </h1>
)

const Subtitle = () => (
  <h2
    className={`
      flex items-center gap-2 mt-1
      font-medium font-heading 
      text-sm md:text-lg
      text-secondary
    `}
  >
    Web Developer from Brazil <span>🇧🇷</span>
  </h2>
)

export default function Profile() {
  return (
    <div
      className={`
        flex items-center gap-5
      `}
    >
      <Image />

      <div>
        <Title />
        <Subtitle />
      </div>
    </div>
  )
}
