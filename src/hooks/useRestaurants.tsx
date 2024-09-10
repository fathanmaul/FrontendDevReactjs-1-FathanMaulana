import React from "react";
import { Restaurant } from "../data/types/restaurant";
import {
  getListCategories,
  getListRestaurant,
} from "../data/network/restaurant";

function useRestaurants(category: string, page: number) {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getListRestaurant(8, page, category);
        setRestaurants((prev) => (page === 1 ? data : [...prev, ...data]));

        const categoryList = await getListCategories();
        setCategories(categoryList);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [category, page]);

  return { restaurants, categories, loading, setRestaurants };
}

export default useRestaurants;