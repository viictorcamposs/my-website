import Image from 'next/image'

interface IHero {
  title: string
  imageUrl: string
  imageAlt: string
}

const container = `
  relative aspect-video
  py-4 px-5 sm:px-10 mb-8 md:mb-12
  flex items-end sm:items-center sm:justify-center
  bg-black/60 sm:rounded-lg overflow-hidden
`

const heading = `
  relative 
  font-bold font-heading 
  text-2xl min-[790px]:text-4xl xl:text-[42px]/tight
  sm:text-center text-[#f7f5f9]
`

export default function Hero({ title, imageUrl, imageAlt }: IHero) {
  return (
    <div className={container}>
      <Image fill priority src={imageUrl} alt={imageAlt} className="z-[-1]" />

      <h1 className={heading}>{title}</h1>
    </div>
  )
}
