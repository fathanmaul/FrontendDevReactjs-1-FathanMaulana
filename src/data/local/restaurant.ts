import { Restaurant } from "../types/restaurant";

export function filterByPrice(
  restaurants: Restaurant[],
  price_level: number
): Restaurant[] {
  if (price_level === 0) {
    return restaurants;
  }
  const filtered = restaurants.filter((restaurant) => restaurant.price_level === price_level);
  return filtered
}

export function filterByIsOpen(
  restaurants: Restaurant[],
  openNow: boolean
): Restaurant[] {
  if (!openNow) {
    return restaurants;
  }
  const filtered = restaurants.filter((restaurant) => restaurant.is_closed === false);
  return filtered
}