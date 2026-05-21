"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import type { SliderState, UseSliderOptions } from "@/type/model"



export function useSlider<T>(items: T[], { autoPlay = true, interval = 5000 }: UseSliderOptions = {},
) {
    const [ activeIndex, setActiveIndex ] = useState<number>(0)
    const count = items.length

    const currentItem = useMemo(() => items[activeIndex], [items, activeIndex])

    const goTo = useCallback((index: number) => {
        if (index >= 0 && index < count) {
            setActiveIndex(index)
        }
    },[count])

  // Auto-advance on interval
    useEffect(() => {
        if (!autoPlay || count <= 1) return

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % count)
        }, interval)

        return () => clearInterval(timer)
    }, [autoPlay, interval, count])

  return {
    activeIndex,
    currentItem,
    goTo,
    count,
  } as const satisfies SliderState<T>
}

