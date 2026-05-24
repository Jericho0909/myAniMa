import { useIntersectionObserver } from "@uidotdev/usehooks";

const IntersectionObserver = ({ th = 0 } : { th?: number }) => {
    const [ref, entry] = useIntersectionObserver({
        threshold: th,
        root: null,
        rootMargin: "0px",
    });

    const isIntersecting = entry?.isIntersecting ?? false;

    return { ref, isIntersecting }
}

export default IntersectionObserver