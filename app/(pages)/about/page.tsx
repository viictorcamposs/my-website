import Image from 'next/image'

import PageTitle from '@/app/components/PageTitle'
import Main from '@/app/components/Main'

const myImage =
  'https://scontent-lga3-1.cdninstagram.com/v/t51.2885-15/326787461_629862378898682_3800492472946303222_n.jpg?stp=dst-jpg_e35_s720x720&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=_zmHQOq4KJUAX9pi4Vh&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAyMzAyNTI5OTA4MDc3NDIxMg%3D%3D.2-ccb7-5&oh=00_AfAt2s4DilhGTSQn4kIVvk7IhGZgjoVbHjeiXBIvP9qJwA&oe=6462DE0A&_nc_sid=1527a3'

export default function Page() {
  return (
    <Main>
      <PageTitle>Hi, glad to see you here.</PageTitle>

      <div className="sm:grid sm:grid-cols-2 gap-5">
        <div className="relative overflow-hidden w-full max-w-[300px] h-[300px] md:max-w-[320px] md:h-[320px] rounded-lg">
          <Image fill priority src={myImage} sizes="50vw" alt="Victor Campos" />
        </div>

        <div className="flex flex-col gap-4 mt-8 sm:mt-2">
          <p className="font-body font-normal text-sm sm:text-base text-[#c7c8e0]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
          </p>

          <p className="font-body font-normal text-sm sm:text-base text-[#c7c8e0]">
            risus mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat
            feugiat, egestas orci in, feugiat velit.
          </p>

          <p className="font-body font-normal text-sm sm:text-base text-[#c7c8e0]">
            Pellentesque diam libero, scelerisque ultrices odio quis, mollis pharetra urna. Proin
            lobortis bibendum urna, nec rutrum urna malesuada et.
          </p>

          <p className="font-body font-normal text-sm sm:text-base text-[#c7c8e0]">
            Pellentesque diam libero, scelerisque ultrices odio quis, mollis pharetra urna. Proin
            lobortis bibendum urna, nec rutrum urna malesuada et.
          </p>
        </div>
      </div>
    </Main>
  )
}
