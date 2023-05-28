import Image from 'next/image'

import type IArticle from '~/app/types/article'

import Main from '~/app/components/Main'

interface IPage {
  params: {
    article: string
  }
}

export async function generateStaticParams() {
  const response = await fetch('http://localhost:3000/api/articles')

  const articles = await response.json()

  return articles.map((article: IArticle) => ({
    article: article.paramId
  }))
}

async function getArticle(paramId: string): Promise<IArticle> {
  const response = await fetch(`http://localhost:3000/api/articles?article=${paramId}`)

  const article: IArticle = await response.json()

  return article
}

export default async function Page({ params: { article: paramId } }: IPage) {
  const article = await getArticle(paramId)

  return (
    <Main className="pb-6 px-0 sm:w-full sm:max-w-[780px] xl:max-w-[960px] sm:mx-auto sm:py-6 md:py-8 sm:px-5">
      <div className="flex items-end sm:items-center sm:justify-center py-4 px-5 sm:px-10 relative aspect-video bg-black/60 sm:rounded-lg overflow-hidden">
        <Image fill priority src={article.imageUrl} alt={article.title} className="z-[-1]" />

        <h1 className="relative font-bold text-2xl sm:text-4xl xl:text-[42px]/tight sm:text-center text-[#f7f5f9]">
          {article.title}
        </h1>
      </div>

      <article className="px-5 sm:px-12 xl:px-5 xl:max-w-[780px] xl:mx-auto pt-8 text-sm md:text-base text-[#464444] dark:text-[#cdcedf]">
        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat feugiat,
          egestas orci in, feugiat velit. Pellentesque diam libero, scelerisque ultrices odio quis,
          mollis pharetra urna. Proin lobortis bibendum urna, nec rutrum urna malesuada.
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis. Sed ut congue urna. Donec ut ipsum eros. Curabitur in erat feugiat,
          egestas orci in, feugiat velit. Pellentesque diam libero, scelerisque ultrices odio quis,
          mollis pharetra urna. Proin lobortis bibendum urna, nec rutrum urna malesuada.
        </p>

        <p className="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
          mattis iaculis...
        </p>

        <ul className="flex flex-col gap-4 list-disc pl-5">
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>

          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>

          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis...
          </li>
        </ul>
      </article>
    </Main>
  )
}
