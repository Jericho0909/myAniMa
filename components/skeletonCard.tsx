import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface AnimeMangaCardSkeletonProps  {
  w: string;
};

const AnimeMangaCardSkeleton = ({ w }: AnimeMangaCardSkeletonProps) => {
  return (
    <div className="w-full">
        <div className={`rounded-tl-xl rounded-br-xl overflow-hidden ${w}`}>
            <Skeleton
                height={320}
            />
        </div>
    </div>
  )
}

export default AnimeMangaCardSkeleton