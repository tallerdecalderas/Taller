import { Suspense } from "react";
import { ProductsCatalog } from "@/components/productos/ProductsCatalog";
import { getProducts } from "@/lib/products/product-service";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={null}>
      <ProductsCatalog products={products} />
    </Suspense>
  );
}
