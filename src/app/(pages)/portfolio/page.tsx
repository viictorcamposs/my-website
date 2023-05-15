import { Suspense } from 'react'

import Portfolio from '~/app/components/Portfolio'
import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'

export interface IProject {
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
        <Portfolio projects={projects} />
      </Suspense>
    </Main>
  )
}
