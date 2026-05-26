import { useState, useEffect, useMemo } from "react"
import IntersectionObserver from "./useIntersectionObserver"

type SectionId = 'home' | 'anime' | 'manga'

interface SectionObserverContextValue {
    activeSection: SectionId
    sectionRefs: Record<SectionId, any>
}

export const useSectionObserver = (): SectionObserverContextValue => {
    const homeObserver = IntersectionObserver({ th: 0.4 })
    const animeObserver = IntersectionObserver({ th: 0.4 })
    const mangaObserver = IntersectionObserver({ th: 0.4 })
    const [ activeSection, setActiveSection ] = useState<SectionId>("home")

    useEffect(() => {
        if (mangaObserver.isIntersecting) {
            setActiveSection('manga')
            return
        }

        if (animeObserver.isIntersecting) {
            setActiveSection('anime')
            return
        }

        if (homeObserver.isIntersecting) {
            setActiveSection('home')
            return
        }
    }, [homeObserver.isIntersecting, animeObserver.isIntersecting, mangaObserver.isIntersecting])

    const value = useMemo(() => ({
        activeSection,
        sectionRefs: {
            home: homeObserver.ref,
            anime: animeObserver.ref,
            manga: mangaObserver.ref,
        },
        }),[activeSection, homeObserver.ref, animeObserver.ref, mangaObserver.ref],
    )

    return value
}

