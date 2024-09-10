export type Restaurant = {
  id: string;
  name: string;
  location: string;
  photo: {
    url: string | null;
  };
  rating: number;
  is_closed: boolean;
  description: string;
  price_level: number;
  category: string;
}
