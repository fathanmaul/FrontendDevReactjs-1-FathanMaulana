import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Restaurant } from "../data/types/restaurant";
import { getRestaurantById } from "../data/network/restaurant";
import RestaurantDetail from "../components/RestaurantDetail";

export default function Detail() {
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant>(
    {} as Restaurant
  );
  const [loading, setLoading] = useState(true);
  // get param from url
  const { id } = useParams<{ id: string }>();

  // fetch restaurant detail
  useEffect(() => {
    async function fetchDetailData() {
      if (id) {
        try {
          const data = await getRestaurantById(id);
          setRestaurantDetail(data);
        } finally {
          setLoading(false);
        }
      }
    }

    fetchDetailData();
  }, []);
  return (
    <div className="container">
      <div className="py-8 ">
        <Link to="/" className="flex items-center gap-2">
          <FaArrowLeft />
          <p className="select-none">Back</p>
        </Link>
      </div>

      <div className="mt-8">
        {loading ? (
          <DetailSkeleton />
        ) : (
          Object.keys(restaurantDetail).length > 0 ? (
            <RestaurantDetail restaurant={restaurantDetail} />
          ) : (
            <p className="text-center">Restaurant not found</p>
          )
        )}
      </div>
    </div>
  );
}

function DetailSkeleton() {
  return (
    <>
      <div className="flex flex-col lg:flex-row max-w-[90%] mx-auto gap-8">
        <div className="h-[300px] w-full lg:w-[450px] bg-neutral-300 animate-pulse"></div>
        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-center gap-1 animate-pulse">
            <div className="w-4 h-4 rounded-full bg-neutral-300"></div>
            <div className="w-20 h-4 rounded-full bg-neutral-300"></div>
          </div>
          <div className="w-1/2 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/4 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/2 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/2 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
        </div>

      </div>
        <div className="max-w-[90%] mx-auto mt-12 animate-pulse flex flex-col gap-4">
          <div className="w-1/5 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/3 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/5 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
          <div className="w-1/3 h-4 rounded-full bg-neutral-300 animate-pulse"></div>
        </div>
    </>
  );
}
