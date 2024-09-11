import ReviewItem from "./ReviewItem";

export default function Review() {
  
  return (
    <div className="mt-10 max-w-[90%] mx-auto">
      <h3>Review</h3>
      <div className="mt-4">
        <ReviewList />
      </div>
    </div>
  );
}

function ReviewList() {
  const reviewsList = reviews
  return <ul className="flex flex-col gap-4">
    {
      reviewsList.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))
    }
  </ul>;
}


export const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Great place to eat👍",
  },
  {
    id: 2,
    name: "Jane Doe",
    review: "Impressive service👏",
  },
  {
    id: 3,
    name: "John Smith",
    review: "Best place to hangout👌",
  },
  {
    id: 4,
    name: "Michael Smith",
    review: "Good food and service👍",
  },
  {
    id: 5,
    name: "Simeon Yetarian",
    review: "Price is high but food is good👍",
  }
];