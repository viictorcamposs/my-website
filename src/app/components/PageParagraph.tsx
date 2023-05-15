interface IPageParagraph {
  children: React.ReactNode
  addClassName?: string
}

const PageParagraph: React.FC<IPageParagraph> = ({ children, addClassName }) => {
  const tailwindClassName = addClassName
    ? `mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#464444] dark:text-[#cdcedf] ${addClassName}`
    : 'mt-5 mb-[60px] font-body font-normal text-sm sm:text-base text-[#464444] dark:text-[#cdcedf]'

  return <p className={tailwindClassName}>{children}</p>
}

export default PageParagraph
