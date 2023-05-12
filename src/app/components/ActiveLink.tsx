'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type { LinkProps } from 'next/link'
import Link from 'next/link'

interface IActiveLink extends LinkProps {
  children: React.ReactNode
}

const linkClassName = `
  rounded relative
  py-3 px-5 
  text-sm font-normal font-body text-[#464444]
  hover:bg-[#0c0f17]/10 hover:text-[#0c0f17]
  transition-all duration-200
  xl:text-base
  after:content-['']
  after:block after:absolute
  after:bottom-2 after:left-[calc(50%-10px)]
  after:h-[2px] after:w-[20px]
  after:bg-transparent
  after:transition-all after:duration-200
`

const ActiveLink: React.FC<IActiveLink> = ({ children, ...props }) => {
  const [computedClassName, setComputedClassName] = useState(linkClassName)

  const pathname = usePathname()

  useEffect(() => {
    const linkPathname = new URL(props.href as string, location.href).pathname

    const activeLinkClassName = linkClassName.replace('after:bg-transparent', 'after:bg-[#0c0f17]')

    if (linkPathname === pathname) {
      setComputedClassName(activeLinkClassName)
    } else {
      setComputedClassName(linkClassName)
    }
  }, [props.href, pathname])

  return (
    <Link className={computedClassName} {...props}>
      {children}
    </Link>
  )
}

export default ActiveLink
