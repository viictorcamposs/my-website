import Image from 'next/image'

import type { IProject } from '~/app/(pages)/projects/page'

import ProjectHovered from './ProjectHovered'
import ProjectClient from '../ProjectClient'

interface IProjectProps {
  index: number
  project: IProject
}

export default function Project({ index, project }: IProjectProps) {
  return (
    <ProjectClient project={project}>
      <ProjectHovered index={index}>
        <div
          className={`
            grid grid-cols-[minmax(50px,100px)_1fr] gap-3
            min-[400px]:gap-5 md:gap-7
            md:flex md:flex-col
            md:px-5 md:py-5
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
      </ProjectHovered>
    </ProjectClient>
  )
}
