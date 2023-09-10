import { TITLE_GRADIENT_STYLES } from '../lib/constants'

interface IProps {
  children: React.ReactNode
}

export default function Title({ children }: IProps) {
  return (
    <h1 className="pb-20 text-4xl font-extrabold md:text-5xl font-heading">
      <span className={TITLE_GRADIENT_STYLES}>{children}</span>
    </h1>
  )
}
