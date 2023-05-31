interface IPageParagraph {
  children: React.ReactNode
  addClassName?: string
}

export default function PageParagraph({ children, addClassName }: IPageParagraph) {
  const tailwindClassName = addClassName
    ? `mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#464444] dark:text-[#cdcedf] ${addClassName}`
    : 'mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#464444] dark:text-[#cdcedf]'

  return (
    <p data-testid="page-paragraph" className={tailwindClassName}>
      {children}
    </p>
  )
}
