interface IMain {
  children: React.ReactNode
  className?: string
  addClassName?: string
}

export default function Main({ children, className, addClassName }: IMain) {
  const tailwindClass = className
    ? className
    : addClassName
    ? `w-full max-w-[780px] mx-auto py-6 md:py-8 px-4 min-[375px]:px-5 ${addClassName}`
    : 'w-full max-w-[780px] mx-auto py-6 md:py-8 px-4 min-[375px]:px-5'

  return <main className={tailwindClass}>{children}</main>
}
