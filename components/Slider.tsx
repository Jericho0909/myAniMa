'use client'
import { AnimatePresence, motion } from "framer-motion"
import { useSlider } from "@/hooks/useSlider";
import { ANIME_SLIDER_DATA } from "@/constants/animeData";

const Slider = () => {
    const { currentItem, goTo } = useSlider(ANIME_SLIDER_DATA)

    return (
        <section className="w-full p-1 relative overflow-hidden">
            <div className="relative overflow-hidden rounded-t-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.img
                            src={currentItem.image}
                            alt={currentItem.title}
                            className={`w-full h-[63svh] ${currentItem.type === "Anime" ? "object-fill" : "object-contain"}`}
                            initial={{ scale: 1.05 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 1.02 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        />
                        <div className="absolute inset-0 bg-black/50" />
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.35, delay: 0.1 }}
                            className="text-white absolute bottom-4 left-4 p-4 max-w-[50%] min-h-[40%] leading-relaxed tracking-wide"
                        >
                            <h2 
                                className="text-3xl font-bold"
                                style={{ fontFamily: 'var(--font-fredoka)' }}
                            >
                                {currentItem.title}
                            </h2>
                            <span className="text-sm mt-1 font-medium text-gray-300"
                                style={{ fontFamily: 'var(--font-fredoka)' }}
                            >
                                {currentItem.type}
                            </span>
                            <p 
                                className="text-sm mt-4 font-medium text-gray-300"
                                style={{ fontFamily: 'var(--font-lato)' }}
                            >
                                {currentItem.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {currentItem.genre.map((genre) => (
                                    <span
                                        key={genre}
                                        className="inline-block text-white text-xs font-medium px-2 py-1 rounded-full border-b"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center">
                {ANIME_SLIDER_DATA.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full mx-1 ${currentItem.id === ANIME_SLIDER_DATA[index].id ? "bg-pink-600" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Slider;