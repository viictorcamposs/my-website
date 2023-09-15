import Image from 'next/image'

import { CaretDoubleDown } from '~/app/components/icons'

interface IHero {
  title: string
  author: {
    name: string
    unsplash: {
      account: string
      image: string
    }
  }
  image: {
    src: string
    alt: string
    placeholder: string
  }
}

const container = `
  relative aspect-video xl:w-full xl:h-[100vh]
  py-4 px-5 sm:px-10 mb-8 md:mb-12 xl:mb-16
  flex items-end sm:items-center sm:justify-center
  sm:rounded-lg overflow-hidden
  after:absolute after:bottom-0
  after:left-0 after:right-0 
  after:top-0 after:w-full after:h-full 
  after:xl:bg-gradient-to-b after:max-xl:bg-black/30
  after:xl:from-black/50
  after:xl:to-transparent
  after:xl:to-70%
`

export default function Hero({ title, author, image }: IHero) {
  return (
    <div className="relative">
      <div className={container}>
        <Image
          fill
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 100vw"
          placeholder="blur"
          style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          blurDataURL={image.placeholder}
        />

        <h1 className="relative z-[1] font-bold font-heading text-2xl md:text-3xl min-[790px]:text-4xl xl:text-[48px]/tight sm:text-center text-primary">
          {title}
        </h1>
      </div>

      <CaretDoubleDown
        size={24}
        weight="bold"
        className="hidden xl:block absolute bottom-4 left-[calc(50%-12px)] animate-bounce text-secondary"
      />

      <p className="absolute right-2 lg:left-2 text-[8px] md:text-[10px] xl:text-xs font-medium -bottom-4 sm:-bottom-6 [&>a]:underline [&>a]:underline-offset-2 text-other">
        Photo by{' '}
        <a target="_blank" href={`https://unsplash.com/${author.unsplash.account}`}>
          {author.name}
        </a>{' '}
        on{' '}
        <a target="_blank" href={`https://unsplash.com/photos/${author.unsplash.image}`}>
          Unsplash
        </a>
      </p>
    </div>
  )
}

/**
 * 
 * Photo by <a href="https://unsplash.com/@zoltantasi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zoltan Tasi</a> on <a href="https://unsplash.com/photos/b3PuuRU8IPc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
 */
