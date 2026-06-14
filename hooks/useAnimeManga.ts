"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllAnimeManga } from "@/lib/animeManga";

const useAnimeManga = () => {
    return useQuery({
        queryKey: ["animeManga"],
        queryFn: getAllAnimeManga,
    })
}

export default useAnimeManga