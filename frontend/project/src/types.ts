export interface ListingsInterface {
  address: string;
  bathrooms: number;
  bedrooms: number;
  city: string;
  home_type: string;
  photo_main: string;
  price: number;
  sale_type: string;
  slug: string;
  sqft: string;
  state: string;
  title: string;
}

export interface PaginationProps {
  count: number;
  previous_page: () => void;
  next_page: () => void;
  itemsPerPage: number;
  visitPage: (page: number) => void;
}
