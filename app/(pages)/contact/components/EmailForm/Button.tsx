import type { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<unknown> {}

export default function Button(props: IButton) {
  return (
    <button
      {...props}
      className={`
        group
        h-12 w-full rounded-lg
        bg-[#f7f5f9]
        hover:bg-gradient-to-r hover:from-[#0658A0] hover:from-0% hover:to-[#01B0EA] hover:to-55%
      `}
    >
      <span
        className={`
          font-body text-sm font-semibold
          xl:text-base text-[#0c0f17]
          group-hover:text-[#f7f5f9]
        `}
      >
        Send
      </span>
    </button>
  )
}
