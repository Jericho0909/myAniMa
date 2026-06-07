import { Copyright } from 'lucide-react';
const Footer = () => {
    return (
        <footer
            className="w-full h-14 bg-gray-800 flex items-center justify-center gap-2 text-gray-300"
        >
            <Copyright size={20} strokeWidth={2} />

            <span
                className="text-sm"
                style={{ fontFamily: "var(--font-lato)" }}
            >
                {new Date().getFullYear()} My Ani Ma. All rights reserved.
            </span>
        </footer>
    )
}

export default Footer