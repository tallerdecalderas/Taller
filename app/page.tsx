import Link from "next/link";
import { config } from "@/lib/config";
import { getFeaturedProducts } from "@/lib/products/product-service";
import { categories } from "@/lib/data/categories";

function CategoryIcon({ type }: { type: string }) {
  const commonProps = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "category-svg",
    "aria-hidden": true,
  };

  switch (type) {
    case "boiler":
      return (
        <svg {...commonProps}>
          <rect x="18" y="12" width="28" height="38" rx="6" />
          <path d="M24 12V6h16v6" />
          <path d="M24 24h16M24 32h16M26 46h12" />
          <path d="M32 20v26" />
        </svg>
      );
    case "recycle":
      return (
        <svg {...commonProps}>
          <path d="M20 22l-8 8 8 8" />
          <path d="M12 30h20c6 0 10 4 10 10v1" />
          <path d="M44 42l8-8-8-8" />
          <path d="M52 34H32c-6 0-10-4-10-10v-1" />
        </svg>
      );
    case "parts":
      return (
        <svg {...commonProps}>
          <circle cx="22" cy="22" r="6" />
          <circle cx="42" cy="22" r="6" />
          <circle cx="22" cy="42" r="6" />
          <circle cx="42" cy="42" r="6" />
          <path d="M28 22h8M22 28v8M36 28v8M28 42h8" />
        </svg>
      );
    case "thermostat":
      return (
        <svg {...commonProps}>
          <path d="M28 18v20a6 6 0 1012 0V18a6 6 0 10-12 0Z" />
          <path d="M32 20v18" />
          <path d="M32 38c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4Z" />
          <path d="M28 26h8" />
        </svg>
      );
    case "radiator":
      return (
        <svg {...commonProps}>
          <rect x="18" y="14" width="28" height="36" rx="5" />
          <path d="M20 26h24M20 32h24M20 38h24" />
          <path d="M26 14v36M38 14v36" />
        </svg>
      );
    case "ventilation":
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="12" />
          <path d="M32 10v8M32 46v8M10 32h8M46 32h8M16 16l6 6M42 42l6 6M16 48l6-6M42 22l6-6" />
        </svg>
      );
    case "accessories":
      return (
        <svg {...commonProps}>
          <path d="M18 18h12v12H18zM34 18h12v12H34zM18 34h12v12H18zM34 34h12v12H34z" />
          <path d="M24 12v6M40 12v6M24 46v6M40 46v6M12 24h6M46 24h6M12 40h6M46 40h6" />
        </svg>
      );
    default:
      return (
        <svg {...commonProps}>
          <circle cx="32" cy="32" r="18" />
          <path d="M32 18v28M18 32h28" />
        </svg>
      );
  }
}

export default function Home() {
  const featuredProducts = getFeaturedProducts(6);

  return (
    <div className="landing-page">
      <section className="hero-shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Servicio técnico de calefacción en Pilar</span>
            <h1 className="text-shadow-amber-500">
              Somos el mejor servicio técnico de <span>Zona norte</span>
            </h1>
            <p>
              Instalación, reparación y mantenimiento de calderas, termotanques y
              sistemas a gas con atención rápida, garantías claras y soluciones
              pensadas para tu hogar o edificio.
            </p>

            <div className="hero-actions">
              <Link href="/productos" className="btn btn-primary">
                Ver catálogo
              </Link>
              <a
                href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20necesito%20ayuda%20t%C3%A9cnica%20para%20mi%20calefacci%C3%B3n`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Pedir un técnico ahora
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <strong>Historial</strong>
                <span>services</span>
              </div>
              <div className="stat-item">
                <strong>22 años</strong>
                <span>De experiencia</span>
              </div>
              <div className="stat-item">
                <strong>Garantía</strong>
                <span>Escrita</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="service-card service-card-primary">
              <span className="service-label">Urgencias</span>
              <h3>Calefacción sin interrupciones</h3>
              <p>
                Diagnóstico rápido y solución técnica para hogares, locales y
                consorcios.
              </p>
            </div>

            <div className="stacked-cards">
              <div className="mini-card">
                <span className="mini-bullet" />
                Técnicos matriculados
              </div>
              <div className="mini-card">
                <span className="mini-bullet" />
                Repuestos originales
              </div>
              <div className="mini-card">
                <span className="mini-bullet" />
                Cobertura Pilar, Zona norte y CABA 
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading">
          <span className="eyebrow eyebrow-muted">Qué resolvemos</span>
          <h2>Soluciones para tu casa y tu equipo de calefacción</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Instalación</h3>
            <p>
              Montaje profesional de calderas, Climatizadores, Paneles solares puesta en marcha segura y eficiente.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Reparación</h3>
            <p>
              Detección precisa de fallas, piezas agotadas y desperfectos para
              volver a operar tu sistema sin demoras.
            </p>
          </article>

          <article className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Mantenimiento</h3>
            <p>
              Revisiones preventivas, limpieza y ajustes para alargar la vida útil
              y evitar cortes inesperados.
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell alt-shell">
        <div className="section-heading">
          <span className="eyebrow eyebrow-muted">Catálogo</span>
          <h2>Productos para mantener tu sistema en perfecto estado</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/productos?category=${encodeURIComponent(category.id)}`}
              className="category-card"
            >
              <span className="category-icon" aria-label={category.name}>
                <CategoryIcon type={category.icon} />
              </span>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading section-heading-row">
          <div>
            <span className="eyebrow eyebrow-muted">Productos destacados</span>
            <h2>Repuestos y soluciones que acompañan cada trabajo</h2>
          </div>
          <Link href="/productos" className="text-link">
            Ver todos →
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/productos/${product.id}`} className="product-card-link">
              <article className="product-card">
                <div className="product-image-wrap">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {!product.available && (
                    <div className="product-badge">Agotado</div>
                  )}
                </div>
                <div className="product-body">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.name}</h3>
                  {product.shortDescription && (
                    <p>{product.shortDescription}</p>
                  )}
                  <div className="product-meta">
                    <span className="price">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className={product.available ? "status ok" : "status bad"}>
                      {product.available ? "Disponible" : "Agotado"}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-content">
          <span className="eyebrow eyebrow-cta">Confianza y rapidez</span>
          <h2>
            Necesitás resolver una falla o agendar mantenimiento.
          </h2>
          <p>
            Nuestro equipo está listo para ayudarte con la mejor atención del
            sector en Pilar.
          </p>
        </div>

        <div className="cta-actions">
          <Link href="/productos" className="btn btn-primary">
            Ver catálogo
          </Link>
          <a
            href={`https://wa.me/${config.company.whatsappNumber}?text=Hola%2C%20quiero%20consultar%20por%20un%20servicio%20t%C3%A9cnico`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary light"
          >
            Contactar ahora
          </a>
        </div>
      </section>
    </div>
  );
}
