export default function ReviewItem({
  review
}: {
  review: {
    id: number;
    name: string;
    review: string;
  }
}) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-12 h-12 overflow-hidden rounded-full">
        <img
          src={`https://ui-avatars.com/api/?name=${review.name}`}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h5>{review.name}</h5>
        <p className="text-sm">{review.review}</p>
      </div>
    </li>
  );
}
