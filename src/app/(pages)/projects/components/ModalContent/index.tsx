'use client'

import Link from 'next/link'
import Image from 'next/image'

import { ArrowUpRight } from '@phosphor-icons/react'

import type { IProject } from '../../page'

interface IModalContent {
  project: IProject
}

export default function ModalContent({ project }: IModalContent) {
  return (
    <div className="w-full max-w-[350px]">
      <div
        className={`
          relative aspect-video
          overflow-hidden rounded-lg
        `}
      >
        <Image
          fill
          priority
          sizes="50vw"
          src={project.image}
          alt={project.title}
          className="object-cover"
        />
      </div>

      <h3
        className={`
          mt-6 mb-4
          font-semibold font-body
          text-lg text-[#f7f5f9]
        `}
      >
        {project.title}
      </h3>

      <p
        className={`
          mt-4 mb-6
          font-body text-sm text-[#cdcedf]
        `}
      >
        {project.description}
      </p>

      <h4
        className={`
          mt-6 mb-4
          font-semibold font-body
          text-lg text-[#f7f5f9]
        `}
      >
        Tech:
      </h4>

      <ul
        className={`
          mt-4 mb-20 pl-8
          list-disc
        `}
      >
        {project.techs.map(tech => (
          <li
            key={tech}
            className={`
              font-body text-sm text-[#cdcedf]
            `}
          >
            {tech}
          </li>
        ))}
      </ul>

      <Link
        href={project.github}
        target="_blank"
        className={`
          flex items-center gap-1
          text-[#f7f5f9]
        `}
      >
        <span className="font-body text-sm underline">See on GitHub</span>
        <ArrowUpRight className="w-5 h-5" />
      </Link>
    </div>
  )
}
