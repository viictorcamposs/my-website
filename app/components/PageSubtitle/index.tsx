interface IPageSubtitle {
  children: React.ReactNode
  addClassName?: string
}

export default function PageSubtitle({ children, addClassName }: IPageSubtitle) {
  const tailwindClassNames = addClassName
    ? `mt-[60px] md:mt-[100px] mb-7 xl:mb-9 font-heading font-bold text-2xl xl:text-[28px] text-[#f7f5f9] ${addClassName}`
    : 'mt-[60px] md:mt-[100px] mb-7 xl:mb-9 font-heading font-bold text-2xl xl:text-[28px] text-[#f7f5f9]'

  return <h2 className={tailwindClassNames}>{children}</h2>
}
