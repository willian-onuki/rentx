export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  fuel_type: string;
  photos: {
    id: string;
    photo: string;
  }[];
  period: string;
  price: number;
  accessories: {
    id: string;
    name: string;
    type: string;
  }[];
  thumbnail: string;
  about: string;
}
