import type { IconItem } from "@/type/model";
import { Eye, Check, Bookmark, BookOpenText } from "lucide-react";

export const icons: Record<string, IconItem> = {
    Watching: {
        status: "Watching",
        icon: <Eye size={20} strokeWidth={3} />,
        style: "bg-blue-500 text-white",
    },
    Reading: {
        status: "Reading",
        icon: <BookOpenText size={20} strokeWidth={3} />,
        style: "bg-purple-500 text-white",
    },
    Completed: {
        status: "Completed",
        icon: <Check size={20} strokeWidth={3} />,
        style: "bg-green-500 text-white",
    },
    PlanToWatch: {
        status: "PlanToWatch",
        icon: <Bookmark size={20} strokeWidth={3} />,
        style: "bg-amber-500 text-white",
    },
    PlanToRead: {
        status: "PlanToRead",
        icon: <Bookmark size={20} strokeWidth={3} />,
        style: "bg-orange-500 text-white",
    },
};
