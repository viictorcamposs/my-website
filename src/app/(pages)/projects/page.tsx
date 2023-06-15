import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'
import ProjectCard from './components/ProjectCard'

export interface IProject {
  title: string
  description: string
  image: string
  techs: string[]
  github: string
}

const projects: IProject[] = [
  {
    title: 'Nullam lobortis ullamcorper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
    image:
      'https://images.unsplash.com/photo-1682310916704-8f91c1a1b66b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1766&q=80',
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
    image:
      'https://images.unsplash.com/photo-1686695323307-b0dccdbe136d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
    image:
      'https://images.unsplash.com/photo-1686742745949-bf6603f74866?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80',
    techs: ['React 18', 'Next.js 13', 'Jest + Testing Library (Unit)', 'Cypress (E2E)'],
    github: 'https://github.com/viictorcamposs'
  },
  {
    title: 'Nullam lobortis ullamcorper',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus mattis iaculis.',
    image:
      'https://images.unsplash.com/photo-1686598997804-71e849721105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
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

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Main>
  )
}
