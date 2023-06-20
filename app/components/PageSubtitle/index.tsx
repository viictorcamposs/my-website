interface IPageSubtitle {
  children: React.ReactNode
  addClassName?: string
}

export default function PageSubtitle({ children, addClassName }: IPageSubtitle) {
  const tailwindClassNames = addClassName
    ? `mt-[60px] md:mt-[80px] mb-6 xl:mb-6 font-heading font-bold text-2xl xl:text-[28px] text-[#f7f5f9] ${addClassName}`
    : 'mt-[60px] md:mt-[80px] mb-6 xl:mb-6 font-heading font-bold text-2xl xl:text-[28px] text-[#f7f5f9]'

  return <h2 className={tailwindClassNames}>{children}</h2>
}
