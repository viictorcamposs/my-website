'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

function ProjectHoveredAnim(props: HTMLMotionProps<'span'>) {
  return (
    <motion.span
      {...props}
      className={`
        absolute -z-10
        left-0 right-0
        top-0 bottom-0
        rounded-lg
        bg-[#1E1D20]
      `}
    />
  )
}

interface IProjectHoveredHovered extends HTMLMotionProps<'span'> {
  index: number
  children: React.ReactNode
}

export default function ProjectHovered({ index, ...props }: IProjectHoveredHovered) {
  const [hovered, setHovered] = useState<number | string>('')
  const isHovered = index === hovered

  return (
    <motion.span
      {...props}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className={`
        relative
      `}
    >
      {isHovered && (
        <ProjectHoveredAnim
          layoutId="project"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        />
      )}

      {props.children}
    </motion.span>
  )
}
