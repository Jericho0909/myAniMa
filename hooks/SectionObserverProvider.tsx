'use client'

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import IntersectionObserver from './useIntersectionObserver'

type SectionId = 'home' | 'anime' | 'manga'

type SectionObserverContextValue = {
  activeSection: SectionId
  sectionRefs: Record<SectionId, any>
}

const SectionObserverContext = createContext<SectionObserverContextValue | null>(null)

export const SectionObserverProvider = ({ children }: { children: ReactNode }) => {
  const homeObserver = IntersectionObserver({ th: 0.4 })
  const animeObserver = IntersectionObserver({ th: 0.4 })
  const mangaObserver = IntersectionObserver({ th: 0.4 })

  const [activeSection, setActiveSection] = useState<SectionId>('home')

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

  const value = useMemo(
    () => ({
      activeSection,
      sectionRefs: {
        home: homeObserver.ref,
        anime: animeObserver.ref,
        manga: mangaObserver.ref,
      },
    }),
    [activeSection, homeObserver.ref, animeObserver.ref, mangaObserver.ref],
  )

  return <SectionObserverContext.Provider value={value}>{children}</SectionObserverContext.Provider>
}

export const useSectionObserverContext = () => {
  const context = useContext(SectionObserverContext)
  if (!context) {
    throw new Error('useSectionObserverContext must be used inside SectionObserverProvider')
  }
  return context
}
