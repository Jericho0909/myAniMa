import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeCardSkeleton = () => {
  return (
    <div className="w-full">
        <Skeleton height={320} borderRadius={16} />

        <div className="mt-3">
            <Skeleton height={24} width="80%" />
        </div>

        <div className="mt-2">
            <Skeleton height={18} width="50%" />
        </div>
    </div>
  )
}

export default AnimeCardSkeleton