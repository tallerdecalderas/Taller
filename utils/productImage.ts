export function getProductImage(image?: string): string {
  return image?.trim() || "/placeholder-product.svg";
}
