interface IPageSubtitle {
  children: React.ReactNode
}

const PageSubtitle: React.FC<IPageSubtitle> = ({ children }) => (
  <h2 className="mt-[60px] mb-5 font-body font-bold text-2xl text-[#0c0f17]">{children}</h2>
)

export default PageSubtitle
