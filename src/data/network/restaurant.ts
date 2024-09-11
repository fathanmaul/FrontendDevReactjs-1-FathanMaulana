import { Restaurant } from "../types/restaurant";
export async function getListRestaurant(
  limit: number,
  page: number,
  category?: string
): Promise<Restaurant[]> {
  try {
    const url = `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_API_HOST}`;
    const response = await fetch(url, {
      headers: {
        "X-Master-Key":
          "$2a$10$JPjH3nwJ5QBjldD0jvj6FOwTq7prbp13eZa5C7cPava1N.BkEtuzi",
      },
    });
    const data = await response.json();
    let filteredRestaurants = data;

    if (category && category !== "all") {
      filteredRestaurants = filteredRestaurants.record.restaurants.filter(
        (restaurant: Restaurant) => restaurant.category === category
      );
    } else {
      filteredRestaurants = data.record.restaurants;
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    filteredRestaurants = filteredRestaurants.slice(startIndex, endIndex);

    return filteredRestaurants;
  } catch (error) {
    throw error;
  }
}

export async function getListCategories(): Promise<string[]> {
  try {
    const url = `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_API_HOST}`;
    const response = await fetch(url, {
      headers: {
        "X-Master-Key":
          "$2a$10$JPjH3nwJ5QBjldD0jvj6FOwTq7prbp13eZa5C7cPava1N.BkEtuzi",
      },
    });
    const data = await response.json();

    const categories = data.record.restaurants.map(
      (restaurant: Restaurant) => restaurant.category
    );

    return Array.from(new Set(categories));
  } catch (error) {
    throw error;
  }
}

export async function getRestaurantById(id: string): Promise<any> {
  try {
    const url = `${import.meta.env.VITE_PROTOCOL}://${import.meta.env.VITE_API_HOST}`;
    const response = await fetch(url, {
      headers: {
        "X-Master-Key":
          "$2a$10$JPjH3nwJ5QBjldD0jvj6FOwTq7prbp13eZa5C7cPava1N.BkEtuzi",
      },
    });
    const data = await response.json();
    const restaurant = data.record.restaurants[parseInt(id) - 1];
    

    if (!restaurant) {
      throw new Error("Restaurant not found");
    }

    return restaurant;
  } catch (error) {
    throw error;
  }
}
