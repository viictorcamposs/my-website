interface IPageParagraph {
  children: React.ReactNode
}

const PageParagraph: React.FC<IPageParagraph> = ({ children }) => (
  <p className="mt-5 mb-[60px] font-body font-normal text-base text-[#464444]">{children}</p>
)

export default PageParagraph
