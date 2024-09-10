import React from "react";
import RestaurantList from "./RestaurantList";
import { Restaurant as RestaurantType } from "../data/types/restaurant";
import useRestaurants from "../hooks/useRestaurants";

export default function Restaurant() {
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState({
    openNow: false,
    price: "all",
  });
  const [category, setCategory] = React.useState("all");
  const [filteredRestaurants, setFilteredRestaurants] = React.useState<
    RestaurantType[]
  >([]);  

  const { restaurants, categories, loading } = useRestaurants(
    category,
    page
  );

  React.useEffect(() => {
    let data = [...restaurants];
    if (filter.openNow) {
      data = data.filter((restaurant) => !restaurant.is_closed);
    }
    if (filter.price !== "all") {
      data = data.filter(
        (restaurant) => restaurant.price_level === parseInt(filter.price)
      );
    }

    setFilteredRestaurants(data);
  }, [filter, restaurants]);

  const handleLoadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleOpenNowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, openNow: e.target.checked }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(1);
    setCategory(e.target.value);
  };

  const handleResetFilter = () => {
    setFilter({ openNow: false, price: "all" });
    setCategory("all");
    (document.getElementById("open_now") as HTMLInputElement).checked = false;
    (document.getElementById("price") as HTMLSelectElement).value = "all";
    (document.getElementById("categories") as HTMLSelectElement).value = "all";
  };

  return (
    <>
      <div className="flex flex-row justify-between w-full py-5">
        <div className="flex items-center gap-3">
          <p>Filter By:</p>
          <div>
            <input
              type="checkbox"
              id="open_now"
              className=""
              onChange={handleOpenNowChange}
            />
            <label htmlFor="open_now" className="ml-1 text-sm select-none">
              Open Now
            </label>
          </div>
          <div>
            <select
              name="price"
              id="price"
              defaultValue="all"
              className="border-b-[0.4px] text-[var(--primary-color)] text-sm border-black focus:outline-none"
              onChange={handlePriceChange}>
              <option value="all">Price</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
          </div>
          <div>
            <select
              name="categories"
              id="categories"
              className="border-b-[0.4px] text-[var(--primary-color)] text-sm border-black focus:outline-none"
              onChange={handleCategoryChange}
            >
              <option value="all">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <button className="px-8 font-bold border btn border-neutral-800 disabled:border-neutral-300 disabled:text-neutral-400" onClick={
            handleResetFilter
          }>
            CLEAR ALL
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-light">All Restaurants</h2>
      </div>
      <RestaurantList restaurants={filteredRestaurants} />
      <div className="pb-4 mt-4 text-center">
        {loading ? (
          <p className="py-3 ">Loading...</p>
        ) : (
          <button
            className="px-32 py-3 border border-black"
            onClick={handleLoadMore}
          >
            <p className="text-sm font-normal tracking-wider text-[#002B56]">
              {
                filteredRestaurants.length === 0
                  ? "No More Restaurants"
                  : "Load More"
              }
            </p>
          </button>
        )}
      </div>
    </>
  );
}
