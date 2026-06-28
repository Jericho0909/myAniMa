'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
import { usePathname } from "next/navigation";
import { MoveRight } from 'lucide-react';

interface HeaderProps {
    children: React.ReactNode;
}

const Header =({ children }: HeaderProps) => {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    const handleBack = () => {
        router.back()
    }

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
        className={`fixed flex justify-between items-center px-4 py-3 w-full z-20 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white border-b border-black': 'bg-transparent'}`}
    >
        {/* Left: Logo */}
        <div
            className="text-3xl font-bold"
            style={{ fontFamily: 'var(--font-fredoka)' }}
        >
            <Link href="/">MyAniMa</Link>
        </div>

        {/* Right: Navbar */}
        {pathname === "/" 
            ? children
            : (
                <button
                    type="button"
                    onClick={handleBack}
                >
                    <MoveRight
                        size={24}
                        strokeWidth={3}
                        className="text-pink-600"
                    />
                </button>
            )
        }
    </header>
  )
}

export default Header
