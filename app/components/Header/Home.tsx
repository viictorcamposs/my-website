import Link from 'next/link'

export default function Home() {
  return (
    <Link href="/">
      <span
        className={`
          sm:w-[60px] sm:block
          font-extrabold font-heading
          text-xl sm:text-2xl text-[#f7f5f9]
        `}
      >
        VC
      </span>
    </Link>
  )
}
