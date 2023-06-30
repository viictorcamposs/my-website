import Image from 'next/image'

import profile from '~/public/static/img/profile.jpg'

const ProfileImage = () => (
  <Image
    width={80}
    height={80}
    src={profile}
    alt="Victor Campos"
    placeholder="blur"
    className={`
      border-[2px] rounded-full
      w-16 h-16 md:w-20 md:h-20
      border-[#f7f5f9] bg-[#f7f5f9]
    `}
  />
)

const Title = () => (
  <h1
    className={`
      font-main font-extrabold 
      text-xl min-[375px]:text-2xl md:text-3xl
      text-[#f7f5f9]
    `}
  >
    Victor Campos
  </h1>
)

const Subtitle = () => (
  <h2
    className={`
      flex items-center gap-2 mt-1
      font-medium font-main 
      text-sm md:text-lg
      text-[#dfdff0]
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
      <ProfileImage />

      <div>
        <Title />
        <Subtitle />
      </div>
    </div>
  )
}
