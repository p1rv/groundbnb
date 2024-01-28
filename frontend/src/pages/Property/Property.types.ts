export type Amenity = {
  id: number;
  name: string;
};

export type Booking = {
  id: number;
  check_in: string;
  check_out: string;
};

export type Review = {
  id: number;
  user: {
    nick: string;
  };
  rating: number;
  content: string;
  submitted: string;
};

export type PropertyType = {
  id: number;
  name: string;
  description: string;
  postal: string;
  city: string;
  street: string;
  building_no: string;
  flat_no: string;
  rooms: number;
  area: number;
  kitchen: boolean;
  imgs: string[];
  price: number;
  user: {
    nick: string;
  };
  amenities: Amenity[];
  bookings: Booking[];
  reviews: Review[];
};
