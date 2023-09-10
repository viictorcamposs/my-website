import Image from 'next/image'

interface IHero {
  title: string
  imgSrc: string
  imgAlt: string
  placeholder: string
}

const container = `
  relative aspect-video
  py-4 px-5 sm:px-10 mb-8 md:mb-12 xl:mb-16
  flex items-end sm:items-center sm:justify-center
  sm:rounded-lg overflow-hidden
  after:absolute after:bottom-0
  after:left-0 after:right-0 
  after:top-0 after:w-full after:h-full 
  after:bg-black/30
`

export default function Hero({ title, imgSrc, imgAlt, placeholder }: IHero) {
  return (
    <div className="relative">
      <div className={container}>
        {placeholder ? (
          <Image
            fill
            priority
            src={imgSrc}
            alt={imgAlt}
            sizes="100vw"
            placeholder="blur"
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
            blurDataURL={placeholder}
          />
        ) : (
          <Image
            fill
            priority
            src={imgSrc}
            alt={imgAlt}
            sizes="50vw"
            style={{ objectFit: 'cover', objectPosition: 'bottom' }}
          />
        )}

        <h1 className="relative z-[1] font-bold font-heading text-2xl min-[790px]:text-4xl xl:text-[42px]/tight sm:text-center text-primary">
          {title}
        </h1>
      </div>

      <p className="absolute left-0 text-xs font-medium -bottom-6 [&>a]:underline [&>a]:underline-offset-2 text-other">
        Photo by{' '}
        <a
          target="_blank"
          href="https://unsplash.com/@zoltantasi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Zoltan Tasi
        </a>{' '}
        on{' '}
        <a
          target="_blank"
          href="https://unsplash.com/photos/b3PuuRU8IPc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </p>
    </div>
  )
}
