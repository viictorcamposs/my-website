interface IArticle {
  children: React.ReactNode
}

const styles = `
  mt-8 md:mt-12 
  px-6 md:px-10 xl:px-20
`

export default function Article({ children }: IArticle) {
  return <article className={styles}>{children}</article>
}
