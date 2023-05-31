import type { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<unknown> {}

export default function Button(props: IButton) {
  return (
    <button
      {...props}
      type="submit"
      className="h-12 w-full font-body rounded-lg text-sm xl:text-base font-normal text-[#f7f5f9] dark:text-[#0c0f17] bg-[#0c0f17] dark:bg-[#f7f5f9]"
    >
      Send
    </button>
  )
}
