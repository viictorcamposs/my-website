import type { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<unknown> {}

const Button: React.FC<IButton> = () => (
  <button
    type="submit"
    className="h-12 w-full font-body rounded-lg text-sm font-normal text-[#f7f5f9] bg-[#0c0f17]"
  >
    Send
  </button>
)

export default Button
