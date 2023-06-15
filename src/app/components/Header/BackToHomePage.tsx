import Link from 'next/link'

export default function BackToHomePage() {
  return (
    <Link href="/">
      <span className="font-extrabold font-heading text-xl sm:text-2xl xl:text-[28px] sm:w-[60px] sm:block text-[#f7f5f9]">
        VC
      </span>
    </Link>
  )
}
