import type { InputHTMLAttributes } from 'react'

interface IInput extends InputHTMLAttributes<unknown> {
  textarea?: boolean
}

const Input: React.FC<IInput> = ({ textarea, ...props }) => {
  const tailwindClass =
    'w-full px-4 py-3 font-body font-normal text-xs xl:text-sm text-[#464444] focus:outline-0 bg-transparent rounded-lg border border-[#464444] focus:border-[#01B0EA]'

  return textarea ? (
    <textarea rows={5} {...props} className={tailwindClass} />
  ) : (
    <input {...props} className={tailwindClass} />
  )
}

export default Input
