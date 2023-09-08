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
        <h5 className="text-sm font-medium pb-3 border-b border-b-[#C1C2E050] text-[#C1C2E050]">
          CONTENT ON THIS PAGE
        </h5>

        <ul className="space-y-1">
          {content.map(({ heading, text, slug }) => (
            <li key={slug} className={heading === 3 ? `pl-3` : heading === 4 ? `pl-5` : ``}>
              <Link slug={slug}>{text}</Link>
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-t-[#C1C2E050]">
          <BackToTop />
        </div>
      </div>
    </aside>
  )
}
