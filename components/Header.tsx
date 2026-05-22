'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HeaderProps {
    children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed flex justify-between items-center px-4 py-3 w-full z-10 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white border-b border-black': 'bg-transparent'}`}
    >
      {/* Left: Logo */}
      <div
        className="text-3xl font-bold"
        style={{ fontFamily: 'var(--font-fredoka)' }}
      >
        <Link href="/">MyAniMa</Link>
      </div>

      {/* Right: Navbar */}
      {children}
    </header>
  )
}
