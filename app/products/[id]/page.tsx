import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/data/products";
import { ProductDetail } from "@/app/components/ProductDetail";
import Link from "next/link";
import { Metadata } from "next";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
  const product = getProductById(params.id);

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

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  // Productos relacionados (misma categoría)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Inicio
            </Link>
            <span className="text-gray-400">›</span>
            <Link href="/products" className="text-blue-600 hover:text-blue-700">
              Productos
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Contenido del producto */}
      <section className="max-w-7xl mx-auto px-4">
        <ProductDetail product={product} />
      </section>

      {/* Productos relacionados */}
      {relatedProducts.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 mt-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                >
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden">
                    <div className="w-full h-40 bg-gray-200 relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-1 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-blue-600">
                        ${relatedProduct.price.toFixed(2)}
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
