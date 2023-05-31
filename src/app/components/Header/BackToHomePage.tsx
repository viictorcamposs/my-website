import Link from 'next/link'

export default function BackToHomePage() {
  return (
    <Link
      className="max-sm:absolute max-sm:top-1/2 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:-translate-y-1/2"
      href="/"
    >
      <span className="font-extrabold font-heading text-xl sm:text-2xl xl:text-[28px] sm:w-[60px] sm:block text-[#0c0f17] dark:text-[#f7f5f9]">
        VC
      </span>
    </Link>
  )
}
