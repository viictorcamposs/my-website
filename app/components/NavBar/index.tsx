'use client'
import { useState } from 'react'

import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

import links from '~/app/utils/links'

import NavLink from '../NavLink'

const NavContainer = (props: HTMLMotionProps<'span'>) => (
  <motion.span
    {...props}
    className={`
      relative
      cursor-pointer px-6 py-0.5
      text-sm font-normal font-main text-[#c7c8e0]
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

  return (
    <nav className="grid grid-cols-3 gap-y-4 sm:flex sm:items-center">
      {links.map(link => {
        const isHovered = hovered === link.identification

        return (
          <NavLink key={link.identification} href={link.href} target={link.target}>
            <NavContainer
              onHoverStart={() => setHovered(link.identification)}
              onHoverEnd={() => setHovered('')}
            >
              {isHovered && (
                <NavHovered
                  layoutId="navItem"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: 'easeOut', duration: 0.3 }}
                />
              )}

              {link.identification}
            </NavContainer>
          </NavLink>
        )
      })}
    </nav>
  )
}
