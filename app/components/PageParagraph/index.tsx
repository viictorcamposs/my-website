interface IPageParagraph {
  children: React.ReactNode
  addClassName?: string
}

export default function PageParagraph({ children, addClassName }: IPageParagraph) {
  const tailwindClassName = addClassName
    ? `mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#c7c8e0] ${addClassName}`
    : 'mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#c7c8e0]'

  return (
    <p data-testid="page-paragraph" className={tailwindClassName}>
      {children}
    </p>
  )
}
