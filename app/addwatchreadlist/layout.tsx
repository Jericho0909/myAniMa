'use client';

import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const [ isLoading, setIsLoading ] = useState<boolean>(true)

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    if (isLoading) {
        return <Loading />
    }
    
    return (
        <>
            {children}
        </>
    );
}