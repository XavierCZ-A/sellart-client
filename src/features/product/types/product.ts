export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string[];
  rating: number;
  seller: string;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  additionalImages?: string[];
}
