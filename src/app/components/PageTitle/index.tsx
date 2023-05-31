interface IPageTitle {
  children: React.ReactNode
}

export default function PageTitle({ children }: IPageTitle) {
  return (
    <h1 className="mb-5 text-[42px]/[52px] md:text-5xl/tight font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0658A0] from-0% to-[#01B0EA] to-55%">
      {children}
    </h1>
  )
}
