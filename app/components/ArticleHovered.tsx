'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

function ArticleAnim(props: HTMLMotionProps<'span'>) {
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

interface IArticleHovered extends HTMLMotionProps<'span'> {
  index: number
  children: React.ReactNode
}

export default function ArticleHovered({ index, ...props }: IArticleHovered) {
  const [hovered, setHovered] = useState<number | string>('')

  const isHovered = index === hovered

  return (
    <motion.li
      {...props}
      onHoverStart={() => setHovered(index)}
      onHoverEnd={() => setHovered('')}
      className="relative list-none"
    >
      {isHovered && (
        <ArticleAnim
          layoutId="listArticle"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.35 }}
        />
      )}

      {props.children}
    </motion.li>
  )
}
