import RestaurantCard from './RestaurantCard'
import { Restaurant } from '../data/types/restaurant'


export default function RestaurantList(
  {restaurants} : {
    restaurants: Restaurant[]
  }
) {
  return (
    <div className="grid w-full grid-cols-1 gap-8 py-4 lg:grid-cols-4">
        {
          restaurants && (
            restaurants.map(
              (value, index) =>
                value.name && (
                  <RestaurantCard
                    key={index}
                    id={value.id}
                    name={value.name}
                    rating={value.rating}
                    cuisine={value.category}
                    price_level={value.price_level.toString()}
                    is_closed={value.is_closed}
                    image_url={value.photo.url!}
                  />
                )
            )
          )
        }
      </div>
  )
}
