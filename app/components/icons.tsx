'use client'

import {
  GithubLogo,
  LinkedinLogo,
  Article,
  List,
  ArrowUpRight,
  X,
  ArrowSquareUp,
  CaretDoubleUp,
  CaretDoubleDown
} from '@phosphor-icons/react'

function QuoteMark({ className }: { className: string }) {
  return (
    <svg
      fill="#262626"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64px"
      height="64px"
      viewBox="0 0 349.078 349.078"
      xmlSpace="preserve"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
      <g id="SVGRepo_iconCarrier">
        {' '}
        <g>
          {' '}
          <path
            d={`
              M198.779,322.441v-58.245c0-7.903,6.406-14.304,14.304-14.304c28.183,0,43.515-28.904,45.643-85.961h-45.643 
              c-7.897,0-14.304-6.41-14.304-14.304V26.64c0-7.9,6.406-14.301,14.304-14.301h121.69c7.896,0,14.305,6.408,14.305,14.301v122.988 
              c0,27.349-2.761,52.446-8.181,74.611c-5.568,22.722-14.115,42.587-25.398,59.049c-11.604,16.917-26.132,30.192-43.155,39.437 
              c-17.152,9.304-37.09,14.026-59.267,14.026C205.186,336.745,198.779,330.338,198.779,322.441z M14.301,249.887 
              C6.404,249.887,0,256.293,0,264.185v58.257c0,7.896,6.404,14.298,14.301,14.298c22.166,0,42.114-4.723,59.255-14.026 
              c17.032-9.244,31.558-22.508,43.161-39.437c11.29-16.462,19.836-36.328,25.404-59.061c5.423-22.165,8.178-47.263,8.178-74.6V26.628 
              c0-7.9-6.41-14.301-14.304-14.301H14.301C6.404,12.327,0,18.734,0,26.628v122.988c0,7.899,6.404,14.304,14.301,14.304h45.002 
              C57.201,220.982,42.09,249.887,14.301,249.887z
            `}
          />{' '}
        </g>{' '}
      </g>
    </svg>
  )
}

export {
  GithubLogo,
  LinkedinLogo,
  Article,
  List,
  ArrowUpRight,
  ArrowSquareUp,
  CaretDoubleUp,
  CaretDoubleDown,
  X,
  QuoteMark
}
