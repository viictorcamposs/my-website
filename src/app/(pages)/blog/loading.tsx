interface ILoading {
  recent?: boolean
  list?: boolean
}

export default function Loading({ recent = false, list = false }: ILoading) {
  if (recent) {
    return (
      <div className="w-full max-w-[350px] animate-pulse">
        <div className="rounded-lg mb-4 aspect-video bg-[#464444]/20 dark:bg-[#cdcedf]/20" />
        <div className="h-6 rounded-lg mt-4 mb-3 bg-[#464444]/20 dark:bg-[#cdcedf]/20" />
        <div className="h-2 w-[90%] rounded-lg mt-4 mb-3 bg-[#464444]/20 dark:bg-[#cdcedf]/20" />
        <div className="h-2 w-[95%] rounded-lg mt-4 mb-3 bg-[#464444]/20 dark:bg-[#cdcedf]/20" />
        <div className="h-2 w-[70%] rounded-lg mt-4 mb-3 bg-[#464444]/20 dark:bg-[#cdcedf]/20" />
      </div>
    )
  }

  if (list) {
    return (
      <div className="flex flex-col gap-6 mt-5 animate-pulse">
        <div className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]">
          <div className="mb-4 sm:max-w-[70%] h-4 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[50%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[60%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="sm:absolute sm:top-1 sm:right-0 h-4 w-16 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
        </div>

        <div className="relative pb-6 border-b border-[#cdcedf] dark:border-[#464444]">
          <div className="mb-4 sm:max-w-[70%] h-4 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[50%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[60%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="sm:absolute sm:top-1 sm:right-0 h-4 w-16 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
        </div>

        <div className="relative pb-6">
          <div className="mb-4 sm:max-w-[70%] h-4 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[50%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="hidden sm:block mt-4 sm:max-w-[60%] h-2 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
          <div className="sm:absolute sm:top-1 sm:right-0 h-4 w-16 bg-[#464444]/20 dark:bg-[#cdcedf]/20 rounded-lg" />
        </div>
      </div>
    )
  }

  return <></>
}
