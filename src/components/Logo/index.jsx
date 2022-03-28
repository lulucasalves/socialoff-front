import Link from 'next/link'

export function Logo() {
  return (
    <Link href={'/'}>
      <h2 className="logo">
        Social<span>Off</span>
      </h2>
    </Link>
  )
}
