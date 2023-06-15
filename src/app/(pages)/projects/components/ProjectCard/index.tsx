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
          min-[400px]:gap-5
          cursor-pointer
        `}
      >
        <div
          className={`
            relative aspect-square w-full max-w-[100px] 
            rounded overflow-hidden
          `}
        >
          <Image
            fill
            sizes="50vw"
            className="object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>

        <div className="py-2">
          <h3
            className={`
              mb-3.5
              font-semibold font-body
              text-sm text-[#f7f5f9]
            `}
          >
            {project.title}
          </h3>

          <p
            className={`
              font-body font-normal
              text-xs text-[#cdcedf]
            `}
          >
            {project.description}
          </p>
        </div>
      </div>
    </ProjectCardClient>
  )
}
