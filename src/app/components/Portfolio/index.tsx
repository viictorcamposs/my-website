import Link from 'next/link'
import Image from 'next/image'

import type { IProject } from '~/app/(pages)/portfolio/page'

interface IPortfolio {
  projects: IProject[]
}
const portfolioCardMobile = 'grid grid-cols-[100px_1fr] gap-4 items-center'

const portfolioCardDesktop = `
  sm:block sm:w-full sm:p-7 
  sm:hover:bg-[#0c0f17]/10 sm:dark:hover:bg-[#f7f5f9]/10 
  sm:rounded-lg sm:transition-all sm:duration-200
`

const Portfolio: React.FC<IPortfolio> = ({ projects }) => (
  <ul className="flex flex-col gap-7 sm:grid sm:grid-cols-2 sm:px-0 sm:gap-0">
    {projects.map(({ title, description, imageUrl }, i) => (
      <Link key={title + i} href="/">
        <li className={`${portfolioCardMobile} ${portfolioCardDesktop}`}>
          <div className="relative overflow-hidden max-[640px]:w-[100px] max-[640px]:h-[100px] sm:aspect-video rounded sm:rounded-lg">
            <Image fill priority sizes="50vw" quality={100} src={imageUrl} alt={title} />
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg/[1.25] font-body font-semibold sm:font-bold text-[#0c0f17 dark:text-[#f7f5f9] sm:mt-4 sm:mb-3">
              {title}
            </h3>

            <p className="text-xs sm:text-sm md:text-base font-body font-normal text-[#464444] dark:text-[#cdcedf] mt-3.5 sm:mt-3">
              {description}
            </p>
          </div>
        </li>
      </Link>
    ))}
  </ul>
)

export default Portfolio
