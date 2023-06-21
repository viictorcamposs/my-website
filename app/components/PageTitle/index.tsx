interface IPageTitle {
  children: React.ReactNode
}

export default function PageTitle({ children }: IPageTitle) {
  return (
    <h1
      className={`
        animate-title-gradient
        bg-200% bg-clip-text bg-gradient-to-r
        from-[#0658a0] from-20%
        via-[#01b0ea] via-50%
        to-[#0658a0] to-80%
        text-[42px]/[52px] md:text-5xl/tight 
        font-heading font-extrabold text-transparent
        mb-8
      `}
    >
      {children}
    </h1>
  )
}
