"use client";

import {createContext, useState, useEffect, useCallback, useMemo } from "react";
import { getAllAnimeManga } from "@/lib/animeManga";
import type { AnimeMangaType } from "@/type/model";

interface AnimeMangaTypes {
    loading: boolean;
    animeManga: AnimeMangaType[];
    fetchData: () => Promise<void>;
}

const AnimeMangaContext = createContext<AnimeMangaTypes | null>(null);

export const AnimeMangaProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [loading, setLoading] = useState(true);
    const [animeManga, setAnimeManga] = useState<AnimeMangaType[]>([]);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);

            const data = await getAllAnimeManga();

            console.log('[Provider] Fetched data:', data.length, 'items');
            setAnimeManga([...data]);

        } catch (error) {
            console.log("Fetch error:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        console.log("CONTEXT UPDATED:", animeManga.length)
    }, [animeManga])

    const value = useMemo(
        () => ({
            loading,
            animeManga,
            fetchData,
        }),
        [loading, animeManga, fetchData]
    );

    return (
        <AnimeMangaContext.Provider value={value}>
            {children}
        </AnimeMangaContext.Provider>
    );
};


export default AnimeMangaContext;