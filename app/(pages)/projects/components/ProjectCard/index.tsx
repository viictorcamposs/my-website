import Image from 'next/image'

import ProjectCardClient from '../ProjectCardClient'
import type { IProject } from '../../page'

interface IProjectCard {
  project: IProject
}

export default function ProjectCard({ project }: IProjectCard) {
  return (
    <ProjectCardClient project={project}>
      <div
        className={`
          grid grid-cols-[minmax(50px,100px)_1fr] gap-3
          min-[400px]:gap-5 md:gap-7
          md:flex md:flex-col
          md:px-[26px] md:py-7
          md:rounded-lg md:hover:bg-[#f7f5f9]/10
          md:transition-all md:duration-200
          cursor-pointer
        `}
      >
        <Image
          src={project.image}
          alt={project.title}
          placeholder="blur"
          className={`
            w-full max-w-[100px] md:max-w-full
            aspect-square md:aspect-video
            rounded md:rounded-lg
            object-cover
          `}
        />

        <div className="py-2 md:py-0">
          <h3
            className={`
              mb-3.5 md:mb-4
              font-semibold font-body
              text-sm text-[#f7f5f9]
              md:text-lg md:font-bold
            `}
          >
            {project.title}
          </h3>

          <p
            className={`
              font-body font-normal
              text-xs text-[#c7c8e0]
              md:text-base
            `}
          >
            {project.description.length > 100
              ? project.description.substring(0, 100) + '...'
              : project.description}
          </p>
        </div>
      </div>
    </ProjectCardClient>
  )
}
