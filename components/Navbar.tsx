'use client'
import { useState, useEffect, useRef, useContext, type MouseEvent as ReactMouseEvent } from "react"
import { HomePageNavLinks } from "@/constants/navLinks"
import useWindowSize from "@/hooks/useWindowSize"
import { Menu } from 'lucide-react';
import SectionObserverContext from "@/context/SectionObserverContext";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const navRef = useRef<HTMLElement>(null)
    const { isMobile } = useWindowSize()
    

    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false)
        }
    }, [isMobile])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
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

    const { activeSection } = useContext(SectionObserverContext)!

    const handleNavClick = (
        event: ReactMouseEvent<HTMLAnchorElement>,
        link: typeof HomePageNavLinks[number],
        isMobileMenu: boolean,
    ) => {
        if (link.openInNewTab) {
            if (isMobileMenu) setIsOpen(false)
            return
        }

        const isHomeLink = link.href === "/"
        const isSectionLink = link.href.startsWith("/#")
        const isSamePage = window.location.pathname === "/"

        if (isHomeLink && isSamePage) {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
        } else if (isSectionLink && isSamePage) {
            event.preventDefault()
            const targetId = link.href.split("#")[1]
            const target = document.getElementById(targetId)

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" })
            } else {
                window.location.href = link.href
            }
        }

        if (isMobileMenu) setIsOpen(false)
    }

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
                            target={link.openInNewTab ? "_blank" : undefined}
                            rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                            className={`text-lg font-bold nav-link block ${!link.openInNewTab && link.id === activeSection ? 'text-pink-600' : ''}`}
                            aria-current={!link.openInNewTab && link.id === activeSection ? 'page' : undefined}
                            onClick={(event) => handleNavClick(event, link, isMobileMenu)}
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