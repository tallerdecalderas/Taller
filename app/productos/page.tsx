import { ProductsCatalog } from "@/components/productos/ProductsCatalog";
import { getProducts } from "@/lib/products/product-service";

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsCatalog products={products} />;
}
