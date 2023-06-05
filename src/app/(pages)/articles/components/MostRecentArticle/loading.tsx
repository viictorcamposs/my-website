/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable @next/next/no-img-element */
const skeletonStyle = 'rounded-lg bg-[#464444]/20 dark:bg-[#cdcedf]/20 animate-pulse'

export default function Loading() {
  return (
    <div title="Loading most recent article" className="w-full max-w-[350px]">
      <img src="" alt="" className={`mb-4 aspect-video ${skeletonStyle}`} />

      <h3 className={`h-6 mt-4 mb-3 ${skeletonStyle}`} />

      <p className={`h-2 w-[90%]  mt-4 mb-3 ${skeletonStyle}`} />
      <p className={`h-2 w-[95%]  mt-4 mb-3 ${skeletonStyle}`} />
      <p className={`h-2 w-[70%]  mt-4 mb-3 ${skeletonStyle}`} />
    </div>
  )
}
