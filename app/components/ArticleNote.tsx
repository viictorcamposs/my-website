interface IProps {
  important?: boolean
  children: React.ReactNode
}

export default function ArticleNote({ important, children }: IProps) {
  const titleStyles = important ? 'text-yellow-600' : 'text-zinc-500'

  const containerStyles = important
    ? 'border-yellow-600 bg-yellow-600/5'
    : 'border-zinc-500 bg-zinc-500/5'

  return (
    <div className={`px-6 pt-6 border-2 rounded-3xl ${containerStyles}`}>
      <h5 className={titleStyles}>{important ? 'Important' : 'Note'}</h5>

      {children}
    </div>
  )
}
