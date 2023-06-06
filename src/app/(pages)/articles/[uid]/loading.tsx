/* eslint-disable @next/next/no-img-element */
const skeletonStyle = 'bg-[#464444]/20 dark:bg-[#cdcedf]/20 animate-pulse'

export default function Loading() {
  return (
    <div className="pb-6 px-0 sm:w-full sm:max-w-[780px] xl:max-w-[960px] sm:mx-auto sm:py-6 md:py-8 sm:px-5">
      <div className={`aspect-video bg-black/60 sm:rounded-lg ${skeletonStyle}`} />

      <article className="px-5 sm:px-12 xl:px-5 xl:max-w-[780px] xl:mx-auto pt-8 text-sm md:text-base text-[#464444] dark:text-[#cdcedf]">
        <p className={`h-2 w-full rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-8 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-8 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
        <p className={`h-2 w-full mt-3 rounded-lg ${skeletonStyle}`} />
      </article>
    </div>
  )
}
