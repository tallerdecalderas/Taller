/**
 * Tipos principales para el catálogo de productos
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  available: boolean;
  sku: string;
  tags?: string[];
  stock?: number;
}

export interface Filter {
  search?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  availability?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
}
