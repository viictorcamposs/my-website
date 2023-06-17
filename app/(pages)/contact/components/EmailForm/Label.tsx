import type { LabelHTMLAttributes } from 'react'

interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ children, ...props }: ILabel) {
  return (
    <label {...props} className="block mb-2 font-body text-sm xl:text-base text-[#c7c8e0]">
      {children}
    </label>
  )
}
