import Image from 'next/image'

interface IArticleHeroComponent {
  title: string
  imageUrl: string
  imageAlt: string
}

export default function ArticleHeroComponent({ title, imageUrl, imageAlt }: IArticleHeroComponent) {
  return (
    <section
      className={`
        relative aspect-video
        py-4 px-5 sm:px-10 mb-8 md:mb-12
        flex items-end sm:items-center sm:justify-center
        bg-black/60 sm:rounded-lg overflow-hidden
      `}
    >
      <Image fill priority src={imageUrl} alt={imageAlt} className="z-[-1]" />

      <h1
        className={`
          relative 
          font-bold font-heading font-in text-2xl min-[790px]:text-4xl 
          sm:text-center xl:text-[42px]/tight
          text-[#f7f5f9]
        `}
      >
        {title}
      </h1>
    </section>
  )
}
