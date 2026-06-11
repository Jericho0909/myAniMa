import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeCardSkeleton = () => {
  return (
    <div className="w-full">
        <div className="rounded-tl-xl rounded-br-xl overflow-hidden">
            <Skeleton height={320} />
        </div>

        <div className="mt-2 p-2">
            <Skeleton height={24} width="100%" />
        </div>

    </div>
  )
}

export default AnimeCardSkeleton