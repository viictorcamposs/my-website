'use client'

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
  after:transition-all after:duration-200
`

export default function ActiveLink({ children, ...props }: IActiveLink) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      className={
        pathname.startsWith(props.href as string)
          ? `${linkClassName} after:bg-[#0c0f17] dark:after:bg-[#f7f5f9]`
          : `${linkClassName} after:bg-transparent`
      }
    >
      {children}
    </Link>
  )
}
