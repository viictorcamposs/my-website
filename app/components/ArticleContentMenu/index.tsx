import Link from './Link'
import BackToTop from './BackToTop'

interface IProps {
  content: {
    heading: number
    text: string
    slug: string
  }[]
}

export default function ArticleContentMenu({ content }: IProps) {
  return (
    <aside className="absolute top-0 hidden h-full min-w-max left-[calc(100%+60px)] xl:block">
      <div className="sticky space-y-2 top-10">
        <h5 className="pb-3 text-sm font-normal border-b font-body border-primary text-other">
          CONTENT ON THIS PAGE
        </h5>

        <ul className="space-y-1">
          {content.map(({ heading, text, slug }) => (
            <li key={slug} className={heading === 3 ? `pl-3` : heading === 4 ? `pl-6` : ``}>
              <Link slug={slug}>{text}</Link>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-primary">
          <BackToTop />
        </div>
      </div>
    </aside>
  )
}
