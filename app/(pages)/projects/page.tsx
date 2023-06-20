import type { StaticImageData } from 'next/image'

import Project from '~/app/components/Project'
import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'

import projectImg from '~/public/static/img/projects/img-project.jpg'
import projectImg4 from '~/public/static/img/projects/img-project-4.jpg'
import projectImg3 from '~/public/static/img/projects/img-project-3.jpg'
import projectImg2 from '~/public/static/img/projects/img-project-2.jpg'

export interface IProject {
  title: string
  description: string
  image: StaticImageData | string
  techs: string[]
  github: string
}

const projects: IProject[] = [
  {
    title: 'Nullam lobortis ullamcorper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis. Lorem ipsum dolor sit amet.',
    image: projectImg,
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis. Risus mattis iaculis. Lorem ipsum dolor sit amet.',
    image: projectImg2,
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis. Risus mattis iaculis. Lorem ipsum dolor sit amet.',
    image: projectImg3,
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis. Risus mattis iaculis. Lorem ipsum dolor sit amet. Risus mattis iaculis. 
      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      <br /><br /> 
      Risus mattis iaculis. Risus mattis iaculis. Lorem ipsum dolor sit amet. Risus mattis iaculis. Lorem ipsum dolor sit amet. 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis. Risus mattis iaculis. 
      Lorem ipsum dolor sit amet. Risus mattis iaculis. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      <br /> <br /> 
      Risus mattis iaculis. Risus mattis iaculis. Lorem ipsum dolor sit amet. Risus mattis iaculis. Lorem ipsum dolor sit amet.
    `,
    image: projectImg4,
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  }
]

export default function Page() {
  return (
    <Main>
      <PageTitle>Get to know me as an engineer</PageTitle>

      <PageParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper risus
        mattis iaculis.
      </PageParagraph>

      <PageSubtitle>Projects</PageSubtitle>

      <div
        className={`
          flex md:grid flex-col md:flex-none
          md:grid-cols-2 
          gap-8 md:gap-0
        `}
      >
        {projects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </div>
    </Main>
  )
}
