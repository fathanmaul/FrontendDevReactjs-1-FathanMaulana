import Rating from "./Rating";
import { IsClosed } from "./RestaurantCard";
import { Restaurant } from "../data/types/restaurant";

export default function RestaurantDetail({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-[90%] mx-auto gap-8 ">
        <div className="h-[300px] w-full lg:w-[450px] bg-neutral-300">
          {restaurant.photo && (
            <img
              src={
                restaurant.photo.url?? ""
              }
              alt=""
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <div className="flex flex-col gap-3 pt-2">
          <IsClosed isClosed={
            restaurant.is_closed
          } />
          <h2 className="font-light">{restaurant.name}</h2>
          <div className="">
            <Rating value={restaurant.rating} />
          </div>
          <div className="mt-1 ">
            <p className="text-sm text-neutral-500">
              {restaurant.category} <span className="pr-1">●</span>
              {restaurant.price_level === 1
                ? "$"
                : restaurant.price_level === 2
                ? "$$"
                : restaurant.price_level === 3
                ? "$$$"
                : restaurant.price_level === 4
                ? "$$$$"
                : "N/A"}
            </p>
          </div>
          <div className="max-w-3xl ">
            <p>
              {
                restaurant.description
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
