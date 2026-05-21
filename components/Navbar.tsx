'use client'
import { useState, useEffect, useRef } from "react"
import { HomePageNavLinks } from "@/constants/navLinks"
import { useWindowSize } from '@uidotdev/usehooks'
import { Menu } from 'lucide-react';

const Navbar = () => {
    const size = useWindowSize()
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const navRef = useRef<HTMLElement>(null)
    const isMobile = size.width ? size.width < 768 : false

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false)
        }
    }, [isMobile])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isOpen])

    const NavbarContent = ({ isMobileMenu = false }) => {
        return (
            <ul 
                className={`${isMobileMenu ? 'absolute top-full -right-2 flex flex-col gap-2 bg-white border p-4 z-50' : 'flex gap-x-6'} list-none m-0 w- p-1`}
                style={{ fontFamily: 'var(--font-fredoka)' }}
            >
                {HomePageNavLinks.map((link) => (
                    <li key={link.href}>
                        <a 
                            href={link.href} 
                            className="text-lg font-bold nav-link block"
                            onClick={() => isMobileMenu && setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <nav className="w-auto p-1 relative" ref={navRef}>
            {isMobile 
                ? (
                    <>
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 nav-link hamburger-menu"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                        {isOpen && (
                            <NavbarContent isMobileMenu={true} />
                        )}
                    </>
                ) : (
                    <NavbarContent isMobileMenu={false} />
                )
            }
        </nav>
    )
}

export default Navbar