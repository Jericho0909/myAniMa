import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AnimeCardListSkeleton = () => {
  return (
    <div className="flex items-center gap-3 p-2 border-2 rounded-2xl mb-2">
        <Skeleton circle width={48} height={48} />

        <div className="flex-1">
            <Skeleton height={24} />
        </div>
    </div>
  );
};

export default AnimeCardListSkeleton;