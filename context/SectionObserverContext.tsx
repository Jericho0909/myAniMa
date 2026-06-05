'use client'

import { createContext, ReactNode } from 'react'
import { useSectionObserver } from '../hooks/useSectionObserver'

type SectionId = 'home' | 'anime' | 'manga'

interface SectionObserverContextValue {
    activeSection: SectionId
    setActiveSection: React.Dispatch<React.SetStateAction<SectionId>>
    sectionRefs: Record<SectionId, any>
}

const SectionObserverContext = createContext<SectionObserverContextValue | null>(null)

export const SectionObserverProvider = ({ children }: { children: ReactNode }) => {
    const value = useSectionObserver()

    return (
        <SectionObserverContext.Provider value={value}>
        {children}
        </SectionObserverContext.Provider>
    )
}

export default SectionObserverContext