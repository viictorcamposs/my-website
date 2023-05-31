/* eslint-disable jsx-a11y/heading-has-content */
const skeletonStyles = 'bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg'

export default function Loading() {
  return (
    <div title="Loading list of articles" className="flex flex-col gap-6 mt-5 animate-pulse">
      <div className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]">
        <h3 className={`mb-4 sm:max-w-[70%] h-4 ${skeletonStyles}`} />

        <p className={`hidden sm:block mt-4 sm:max-w-[50%] h-2 ${skeletonStyles}`} />
        <p className={`hidden sm:block mt-4 sm:max-w-[60%] h-2 ${skeletonStyles}`} />

        <span className={`sm:absolute sm:top-1 sm:right-0 h-4 w-16 ${skeletonStyles}`} />
      </div>

      <div className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]">
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
  )
}
