import { notFound } from "next/navigation";
import { getProductById, getProducts, getProductsByCategory } from "@/lib/products/product-service";
import { ProductDetail } from "@/components/productos/ProductDetail";
import Link from "next/link";
import { Metadata } from "next";
import { formatCurrency } from "@/utils/formatMoney";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return {
      title: "Producto no encontrado",
    };
  }

  return {
    title: product.name,
    description: product.description,
    keywords: product.tags?.join(", "),
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  // Productos relacionados (misma categoría)
  const relatedProducts = (await getProductsByCategory(product.category))
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 py-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Inicio
            </Link>
            <span className="text-gray-400">›</span>
            <Link href="/productos" className="text-blue-600 hover:text-blue-700">
              Productos
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Contenido del producto */}
      <section className="mx-auto max-w-7xl px-4">
        <ProductDetail product={product} />
      </section>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <section className="mt-12 bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Productos Relacionados</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/productos/${relatedProduct.id}`}>
                  <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
                    <div className="relative h-40 w-full bg-white">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="h-full w-full object-contain transition-transform hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-1 line-clamp-2 font-bold text-gray-900">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        {formatCurrency(relatedProduct.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
