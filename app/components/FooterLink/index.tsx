import Link from 'next/link'

import type { FooLinks } from '~/app/(pages)/layout'

interface IFooterLink extends FooLinks {
  children: JSX.Element
}

const textClassNames = `
    hidden sm:block 
    sm:text-[#c7c8e0] sm:hover:text-[#f7f5f9] 
    sm:transition-all sm:duration-200 
    sm:font-body sm:font-normal sm:text-sm xl:text-base
  `

const linkClassNames = `
  sm:flex sm:items-center sm:gap-1 
  group relative
`

const iconClassNames = `
    sm:hidden 
    text-[#c7c8e0]
    xl:absolute xl:-right-6
    xl:block xl:opacity-0 
    xl:group-hover:opacity-100 
    xl:group-hover:text-[#f7f5f9]
    xl:transition-opacity xl:duration-200
  `

export default function FooterLink({ identification, href, target, children }: IFooterLink) {
  return (
    <Link className={linkClassNames} href={href} target={target}>
      <span className={textClassNames}>{identification}</span>

      <span className={iconClassNames}>{children}</span>
    </Link>
  )
}
