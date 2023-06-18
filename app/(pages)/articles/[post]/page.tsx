// import type { Metadata } from 'next'
import HelloWorld from '~/app/articles/hello-world.mdx'

import Main from '~/app/components/Main'

// interface IPageProps {
//   params: {
//     post: string
//   }
// }

// export async function generateMetadata({ params: { uid } }: IPageProps): Promise<Metadata> {}

// export async function generateStaticParams() {}

// async function getArticle(uid: string): Promise<unknown> {}

export default async function Page() {
  // const article = await getArticle(uid)
  return (
    <Main
      className={`
        sm:w-full sm:max-w-[780px] lg:max-w-[960px]
        pb-6 px-0 sm:py-6 sm:px-5 md:px-0 md:py-8 sm:mx-auto
      `}
    >
      <HelloWorld />
    </Main>
  )
}
