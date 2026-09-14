import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productos/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Imagen del producto */}
        <div className="relative w-full h-48 bg-white overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 hover:scale-[1.02] transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          {!product.available && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Agotado</span>
            </div>
          )}
          {product.stock && product.stock < 5 && product.available && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              ¡Solo {product.stock}!
            </div>
          )}
        </div>

        {/* Contenido */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Categoría */}
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2 w-fit">
            {product.category}
          </span>

          {/* Nombre */}
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600">
            {product.name}
          </h3>

          {/* Descripción corta */}
          {product.shortDescription && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
              {product.shortDescription}
            </p>
          )}

          {/* SKU */}
          <p className="text-gray-500 text-xs mb-3">SKU: {product.sku}</p>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1">
              {product.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Precio */}
          <div className="flex items-center justify-between mt-auto pt-3 border-t">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span
              className={`text-sm font-semibold ${
                product.available
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product.available ? "Disponible" : "No disponible"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
