export interface Package {
  id: string;
  name: string;
  description: string;
  price: number; // Represent price in cents or smallest currency unit for accuracy
  features: string[];
  isFeatured?: boolean; // Optional flag for highlighting certain packages
}
