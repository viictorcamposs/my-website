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
  text-sm font-normal font-body text-[#464444] dark:text-[#cdcedf]
  hover:bg-[#0c0f17]/10 dark:hover:bg-[#f7f5f9]/10 hover:text-[#0c0f17] dark:hover:text-[#f7f5f9]
  transition-all duration-200
  xl:text-base
  after:content-['']
  after:block after:absolute
  after:bottom-2 after:left-[calc(50%-10px)]
  after:h-[2px] after:w-[20px]
  after:bg-transparent
  after:transition-all after:duration-200
`

export default function ActiveLink({ children, ...props }: IActiveLink) {
  const [computedClassName, setComputedClassName] = useState(linkClassName)

  const pathname = usePathname()

  useEffect(() => {
    const linkPathname = new URL(props.href as string, window.location.href).pathname

    const activeLinkClassName = linkClassName.replace(
      'after:bg-transparent',
      'after:bg-[#0c0f17] dark:after:bg-[#f7f5f9]'
    )

    if (pathname.includes(linkPathname)) {
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
