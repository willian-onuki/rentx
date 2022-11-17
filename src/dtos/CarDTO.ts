export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  fuel_type: string;
  photos: string[];
  rent: {
    period: string;
    price: number;
  }
  accessories: {
    name: string;
    type: string;
  }[],
  thumbnail: string;
  about: string;
}
