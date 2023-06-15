/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/heading-has-content */

import PageTitle from '~/app/components/PageTitle'
import PageSubtitle from '~/app/components/PageSubtitle'
import PageParagraph from '~/app/components/PageParagraph'
import Main from '~/app/components/Main'

const skeletonStyles = 'bg-[#cdcedf]/20 rounded-lg'

export default function Loading() {
  return (
    <Main>
      <section className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">
        <div>
          <PageTitle>Let me share something with you...</PageTitle>

          <PageParagraph addClassName="lg:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis ullamcorper
            risus mattis iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            lobortis ullamcorper risus mattis iaculis.
          </PageParagraph>
        </div>

        <div>
          <PageSubtitle addClassName="lg:mt-0">Most recent</PageSubtitle>

          <div className="w-full max-w-[350px] animate-pulse">
            <img src="" alt="" className={`mb-4 aspect-video ${skeletonStyles}`} />

            <h3 className={`h-6 mt-4 mb-3 ${skeletonStyles}`} />

            <p className={`h-2 w-[90%]  mt-4 mb-3 ${skeletonStyles}`} />
            <p className={`h-2 w-[95%]  mt-4 mb-3 ${skeletonStyles}`} />
            <p className={`h-2 w-[70%]  mt-4 mb-3 ${skeletonStyles}`} />
          </div>
        </div>
      </section>

      <section>
        <PageSubtitle>All articles</PageSubtitle>

        <div className="flex flex-col gap-6 mt-5 animate-pulse">
          <div className="relative pb-6 border-b border-[#464444]">
            <h3 className={`mb-4 sm:max-w-[70%] h-4 ${skeletonStyles}`} />

            <p className={`hidden sm:block mt-4 sm:max-w-[50%] h-2 ${skeletonStyles}`} />
            <p className={`hidden sm:block mt-4 sm:max-w-[60%] h-2 ${skeletonStyles}`} />

            <span className={`sm:absolute sm:top-1 sm:right-0 h-4 w-16 ${skeletonStyles}`} />
          </div>

          <div className="relative pb-6 border-b border-[#464444]">
            <h3 className={`mb-4 sm:max-w-[70%] h-4 ${skeletonStyles}`} />

            <p className={`hidden sm:block mt-4 sm:max-w-[50%] h-2 ${skeletonStyles}`} />
            <p className={`hidden sm:block mt-4 sm:max-w-[60%] h-2 ${skeletonStyles}`} />

            <span className={`sm:absolute sm:top-1 sm:right-0 h-4 w-16 ${skeletonStyles}`} />
          </div>

          <div className="relative pb-6">
            <h3 className={`mb-4 sm:max-w-[70%] h-4 ${skeletonStyles}`} />

            <p className={`hidden sm:block mt-4 sm:max-w-[50%] h-2 ${skeletonStyles}`} />
            <p className={`hidden sm:block mt-4 sm:max-w-[60%] h-2 ${skeletonStyles}`} />

            <span className={`sm:absolute sm:top-1 sm:right-0 h-4 w-16 ${skeletonStyles}`} />
          </div>
        </div>
      </section>
    </Main>
  )
}
