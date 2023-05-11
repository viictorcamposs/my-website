interface IMain {
  children: React.ReactNode
  className?: string
}

const Main: React.FC<IMain> = ({ children, className }) => {
  const tailwindClass = className ? className : 'py-6 px-4 min-[375px]:px-5'

  return <main className={tailwindClass}>{children}</main>
}

export default Main
