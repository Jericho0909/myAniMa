"use client";

import { useState } from "react";

const useImage = () => {
    const [ preview, setPreview ] = useState<string | null>(null);
    const [ loadingImg, setLoadingImg ] = useState<boolean>(false);
    const [ progress, setProgress ] = useState<number>(0);

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoadingImg(true);
        setProgress(0);

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "AnimeManga");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/daxhmcpkq/image/upload",
                {
                    method: "POST",
                    body: formData,
                }
            )

            const data = await res.json();

            if (data.secure_url) {
                setPreview(data.secure_url);
            }
        } catch (err) {
            console.error("Upload error:", err);
        } finally {
            setLoadingImg(false);
        }
    };

    return {
        preview,
        setPreview,
        loadingImg,
        progress,
        handleUpload,
    }
};

export default useImage;