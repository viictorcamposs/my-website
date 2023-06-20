'use client'
import { useState } from 'react'

import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

import NavLink from './NavLink'

const NavContainer = (props: HTMLMotionProps<'span'>) => (
  <motion.span
    {...props}
    className={`
      relative
      cursor-pointer px-6 py-0.5
      text-sm font-normal font-body text-[#c7c8e0]
      hover:text-[#f7f5f9]
      duration-300 transition-all
    `}
  >
    {props.children}
  </motion.span>
)

const NavHovered = (props: HTMLMotionProps<'span'>) => (
  <motion.span
    {...props}
    className={`
      absolute -z-10
      left-0 right-0 
      -top-2.5 -bottom-2.5
      rounded-lg
      bg-[#1E1D20]
    `}
  />
)

export default function NavBar() {
  const [hovered, setHovered] = useState('')

  const pages = ['About', 'Articles', 'Projects']

  return (
    <nav className="hidden sm:flex sm:items-center">
      {pages.map(page => {
        const path = `/${page.toLowerCase()}`
        const isHovered = hovered === page

        return (
          <NavLink key={page} href={path}>
            <NavContainer onHoverStart={() => setHovered(page)} onHoverEnd={() => setHovered('')}>
              {isHovered && (
                <NavHovered
                  layoutId="navItem"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              )}

              {page.toUpperCase()}
            </NavContainer>
          </NavLink>
        )
      })}
    </nav>
  )
}
