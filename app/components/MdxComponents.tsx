/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/heading-has-content */
import Link from 'next/link'

import {} from '@mdx-js/loader'

import {
  MDX_HEADING_STYLES,
  MDX_LINK_STYLES,
  MDX_LIST_STYLES,
  MDX_HEADING_LINK_STYLES
} from '~/app/lib/constants'

export const components: any = {
  p: (props: any) => (
    <p className="my-6 font-normal font-body text-secondary text-sm/6 md:text-base/7" {...props} />
  ),
  h2: (props: any) => (
    <h2 className={`${MDX_HEADING_STYLES} mt-10 mb-5 text-lg md:text-2xl`} {...props} />
  ),
  h3: (props: any) => (
    <h3
      className={`${MDX_HEADING_STYLES} ${MDX_HEADING_LINK_STYLES} my-11 pt-8 border-t border-primary text-xl md:text-2xl`}
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className={`${MDX_HEADING_STYLES} ${MDX_HEADING_LINK_STYLES} my-8 text-lg md:text-xl`}
      {...props}
    />
  ),
  strong: (props: any) => <strong className={`font-medium text-primary`} {...props} />,
  ul: (props: any) => (
    <ul className="my-8 space-y-3 [&>li]:relative [&>li]:pl-7 [&>li>p]:my-0" {...props} />
  ),
  li: (props: any) => <li className={MDX_LIST_STYLES} {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return <a href={href} target="_blank" rel="noopener" className={MDX_LINK_STYLES} {...props} />
    }

    return <Link href={href} className={MDX_LINK_STYLES} {...props} />
  }
}
