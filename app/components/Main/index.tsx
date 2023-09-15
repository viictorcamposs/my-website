interface IMain {
  children: React.ReactNode
  className?: string
  addClassName?: string
}

export default function Main({ children, className, addClassName }: IMain) {
  const tailwindClass = className
    ? className
    : addClassName
    ? `w-full max-w-[680px] pt-[100px] px-5 min-[375px]:px-7 md:px-0 mx-auto ${addClassName}`
    : 'w-full max-w-[680px] pt-[200px] px-5 min-[375px]:px-7 md:px-0 mx-auto'

  return <main className={tailwindClass}>{children}</main>
}
