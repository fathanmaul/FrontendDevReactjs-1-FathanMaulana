import { IoStar, IoStarOutline } from "react-icons/io5";

interface RatingProps {
  value: number;
}

export default function Rating({ value }: RatingProps) {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return starValue <= value ? (
          <IoStar key={index} />
        ) : (
          <IoStarOutline key={index} className="text-neutral-300" />
        );
      })}
    </div>
  );
}
