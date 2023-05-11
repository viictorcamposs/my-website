import Link from 'next/link'
import Image from 'next/image'

import type { IPost } from '~/app/api/posts/route'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'

async function getPosts(): Promise<IPost[]> {
  const response = await fetch('http://localhost:3000/api/posts')

  const data = await response.json()

  return data
}

export default async function Page() {
  const posts = await getPosts()

  const mostRecentArticle = posts[0]

  const allArticlesExceptTheMostRecentOne = posts.slice(1)

  return (
    <Main>
      <section className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <PageTitle>Let me share something with you...</PageTitle>

          <PageParagraph addClassName="lg:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis ullamcorper risus mattis iaculis.
          </PageParagraph>
        </div>

        <div>
          <PageSubtitle addClassName="lg:mt-0">Most recent</PageSubtitle>

          {mostRecentArticle && (
            <div className="w-full max-w-[350px]">
              <Link href={`/blog/${mostRecentArticle.paramId}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 w-full">
                  <Image
                    fill
                    priority
                    sizes="50vw"
                    src={mostRecentArticle.imageUrl}
                    alt={mostRecentArticle.title}
                  />
                </div>

                <h3 className="font-body font-bold text-lg text-[#0c0f17] mt-4 mb-3">
                  {mostRecentArticle.title}
                </h3>

                <p className="font-body font-normal text-sm mt-3">
                  {mostRecentArticle.description}
                </p>
              </Link>
            </div>
          )}
        </div>
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <ul className="mt-5">
          {allArticlesExceptTheMostRecentOne.map(
            ({ paramId, title, description, releaseDate }, i) => (
              <li
                key={i}
                className={
                  i === 0
                    ? 'relative pb-6 border-b border-[#cdcedf]'
                    : i === allArticlesExceptTheMostRecentOne.length - 1
                    ? 'relative mt-6 pb-6'
                    : 'relative mt-6 pb-6 border-b border-[#cdcedf]'
                }
              >
                <Link scroll href={`/blog/${paramId}`}>
                  <h3 className="font-body font-bold text-base sm:text-lg mb-4 sm:max-w-[70%]">
                    {title}
                  </h3>

                  <p className="hidden sm:block font-body font-normal text-sm text-[#464444] mt-4 sm:max-w-[70%]">
                    {description}
                  </p>

                  <span className="sm:absolute sm:top-1 sm:right-0 font-normal font-body text-xs xl:text-sm text-[#464444]">
                    {releaseDate}
                  </span>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </Main>
  )
}
