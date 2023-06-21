import Image from 'next/image'

import PageTitle from '~/app/components/PageTitle'
import Main from '~/app/components/Main'

import profilePic from '~/public/static/img/about-bg.jpg'

export default function Page() {
  return (
    <Main>
      <PageTitle>Hi, glad to see you here.</PageTitle>

      <div className="sm:grid sm:grid-cols-2 gap-5">
        <Image
          priority
          src={profilePic}
          placeholder="blur"
          alt="Victor"
          className={`
            w-full max-w-[340px]
            rounded-lg aspect-square
            object-cover
            grayscale
          `}
        />

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
