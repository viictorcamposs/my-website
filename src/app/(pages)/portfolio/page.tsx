import { Suspense } from 'react'
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

async function getPortfolio(): Promise<{ projects: IProject[] }> {
  const response = await fetch('http://localhost:3000/api/projects')

  const data = await response.json()

  return data
}

export default async function Page() {
  const { projects } = await getPortfolio()

  return (
    <Main>
      <PageTitle>Get to know me as an engineer</PageTitle>

      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
        mattis iaculis.
      </PageParagraph>

      <PageSubtitle>Projects</PageSubtitle>

      <Suspense fallback={'Loading...'}>
        <ul className="min-[375px]:px-[10px]">
          {projects.map(({ title, description, imageUrl }, i) => (
            <li
              key={title + i}
              className={
                i > 0
                  ? 'grid grid-cols-[100px_1fr] gap-4 items-center mt-7'
                  : 'grid grid-cols-[100px_1fr] gap-4 items-center'
              }
            >
              <div className="relative overflow-hidden w-[100px] h-[100px] rounded">
                <Image fill sizes="50vw" quality={100} src={imageUrl} alt={title} />
              </div>

              <div>
                <h3 className="text-sm font-body font-semibold text-[#0c0f17]">{title}</h3>

                <p className="text-xs font-body font-normal text-[#464444] mt-3.5">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Suspense>
    </Main>
  )
}
