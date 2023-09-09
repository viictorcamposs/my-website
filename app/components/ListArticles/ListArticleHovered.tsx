'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

function ListArticleAnim(props: HTMLMotionProps<'span'>) {
  return (
    <motion.span
      {...props}
      className={`
        hidden xl:block
        absolute
        -left-5 -right-5 
        top-0 bottom-0
        rounded-lg
        bg-secondary
      `}
    />
  )
}

interface IListArticleHovered extends HTMLMotionProps<'span'> {
  index: number
  children: React.ReactNode
}

export default function ListArticleHovered({ index, ...props }: IListArticleHovered) {
  const [hovered, setHovered] = useState<number | string>('')

  const isHovered = index === hovered

  return (
    <motion.span
      {...props}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className="relative"
    >
      {isHovered && (
        <ListArticleAnim
          layoutId="listArticle"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.35 }}
        />
      )}

      {props.children}
    </motion.span>
  )
}
