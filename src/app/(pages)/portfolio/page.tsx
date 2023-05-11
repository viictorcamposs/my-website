import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'

interface IProject {
  title: string
  description: string
  imageUrl: string
}

async function getPortfolio(): Promise<IProject[]> {
  const response = await fetch('http://localhost:3000/api/projects')

  const data = await response.json()

  return data
}

export default async function Page() {
  const projects = await getPortfolio()

  const portfolioCardMobile = 'grid grid-cols-[100px_1fr] gap-4 items-center'

  const portfolioCardDesktop =
    'sm:block sm:w-full sm:p-7 sm:hover:bg-[#0c0f17]/10 sm:rounded-lg sm:transition-all sm:duration-200'

  return (
    <Main>
      <PageTitle>Get to know me as an engineer</PageTitle>

      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
        mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis
        ullamcorper risus mattis iaculis.
      </PageParagraph>

      <PageSubtitle>Projects</PageSubtitle>

      <Suspense fallback={'Loading...'}>
        <ul className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:px-0 sm:gap-0">
          {projects.map(({ title, description, imageUrl }, i) => (
            <Link key={title + i} href="/">
              <li className={`${portfolioCardMobile} ${portfolioCardDesktop}`}>
                <div className="relative overflow-hidden max-[640px]:w-[100px] max-[640px]:h-[100px] sm:aspect-video rounded sm:rounded-lg">
                  <Image fill priority sizes="50vw" quality={100} src={imageUrl} alt={title} />
                </div>

                <div>
                  <h3 className="text-sm sm:text-base md:text-lg/[1.25] font-body font-semibold sm:font-bold text-[#0c0f17] sm:mt-4 sm:mb-3">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base font-body font-normal text-[#464444] mt-3.5 sm:mt-3">
                    {description}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </Suspense>
    </Main>
  )
}
