import { useContext } from "react"
import SectionObserverContext from "@/context/SectionObserverContext"

export const useSectionObserverContext = () => {
  const context = useContext(SectionObserverContext)
  if (!context) {
    throw new Error('useSectionObserverContext must be used inside SectionObserverProvider')
  }
  return context
}