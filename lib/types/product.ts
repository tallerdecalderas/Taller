/**
 * Tipos principales para el catálogo de productos
 */

export type ProductCategory =
  | "calderas"
  | "calderas_restauradas"
  | "repuestos_genericos"
  | "repuestos"
  | "termostatos"
  | "radiadores"
  | "ventilacion"
  | "accesorios";
  
  

export type ProductBrand =
  | "BAXI"
  | "PEISA"
  | "GENÉRICO";

export type GasType =
  | "GN"
  | "GL"
  | "GN/GL"


export type ProductService =
  | "Solo calefacción"
  | "Doble servicio";

export type ProductTechnology =
  | "convencional"
  | "condensación";

export interface ProductSpecs {
  powerKw?: number;
  gasType?: GasType;
  service?: ProductService;
  technology?: ProductTechnology;

  liters?: number;
  elementCount?: number;
  compatibleModels?: string[];

  voltage?: string;
  connection?: string;
  pressureBar?: number;

  heightMm?: number;
  widthMm?: number;
  depthMm?: number;

  diameterMm?: string;
  lengthMm?: number;

  ventilationType?: "coaxial" | "dividida";
}

export interface Product {
  id: string;
  name: string;
  
  description: string;
  shortDescription?: string;

  price: number;

  brand: ProductBrand;
  category: ProductCategory;

  image: string;
  images?: string[];

  available: boolean;
  code: string;

  tags?: string[];
  stock?: number;

  specs?: ProductSpecs;

  featured?: boolean;
}

export interface ProductFilters {
  search?: string;
  brand?: ProductBrand;
  category?: ProductCategory;

  technology?: ProductTechnology;
  gasType?: GasType;
  service?: ProductService;

  powerKw?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
}