import type { LabelHTMLAttributes } from 'react'

interface ILabel extends LabelHTMLAttributes<unknown> {}

const Label: React.FC<ILabel> = ({ children, ...props }) => (
  <label
    {...props}
    className="block mb-2 font-body text-sm xl:text-base text-[#464444] dark:text-[#cdcedf]"
  >
    {children}
  </label>
)

export default Label
