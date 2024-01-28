export type PropertyListingType = {
  id: number;
  name: string;
  description: string;
  postal: string;
  city: string;
  building_no: string;
  flat_no: string;
  rooms: number;
  area: number;
  kitchen: boolean;
  imgs: string[];
  averageRating?: number;
  price: number;
};
