export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  likes: number;
  isLiked?: boolean;
  categoryId: number;
  kaspiLink: string;
}