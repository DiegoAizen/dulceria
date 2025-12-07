// app/page.tsx
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "Calidad Premium",
      description: "Dulces elaborados con ingredientes 100% naturales y de la más alta calidad."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Envío Rápido",
      description: "Recibe tus dulces en 24-48 horas en toda la ciudad."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantía de Sabor",
      description: "Si no te encanta, te devolvemos tu dinero."
    }
  ];

  const products = [
    {
      name: "Chocolates Artesanales",
      description: "Chocolates rellenos de frutas y licores finos",
      price: "$25.000",
      imageColor: "bg-rose-200"
    },
    {
      name: "Caramelos de Miel",
      description: "Caramelos naturales endulzados con miel pura",
      price: "$15.000",
      imageColor: "bg-amber-200"
    },
    {
      name: "Galletas Decoradas",
      description: "Galletas con diseños personalizados",
      price: "$30.000",
      imageColor: "bg-purple-200"
    },
    {
      name: "Trufas Especiales",
      description: "Trufas de chocolate belga con rellenos sorpresa",
      price: "$35.000",
      imageColor: "bg-pink-200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
              <span className="text-2xl font-bold font-[family-name:var(--font-dancing-script)] text-primary">
                Dulcería Delicia
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-text hover:text-primary transition-colors">Inicio</a>
              <a href="#productos" className="text-text hover:text-primary transition-colors">Productos</a>
              <a href="#nosotros" className="text-text hover:text-primary transition-colors">Nosotros</a>
              <a href="#contacto" className="text-text hover:text-primary transition-colors">Contacto</a>
            </div>
            
            <button className="flex items-center space-x-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span>Carrito</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-dancing-script)] text-text mb-6">
                Endulza tu vida con nuestros <span className="text-primary">dulces artesanales</span>
              </h1>
              <p className="text-lg text-text/80 mb-8">
                Descubre la magia de los dulces hechos a mano con amor y los ingredientes más selectos. 
                Cada bocado es una experiencia única que te transportará a la infancia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
                  Ordenar Ahora
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
                  Ver Catálogo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className={`w-32 h-32 rounded-2xl ${i % 2 === 0 ? 'bg-rose-300' : 'bg-amber-300'} transform rotate-${i * 6}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-dancing-script)] text-center text-text mb-12">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-rose-50"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-dancing-script)] text-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-text/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="productos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-dancing-script)] text-center text-text mb-12">
            Nuestros Productos Destacados
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 duration-300"
              >
                <div className={`h-48 ${product.imageColor} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-[family-name:var(--font-dancing-script)] text-text mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text/70 mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-text text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                <span className="text-2xl font-bold font-[family-name:var(--font-dancing-script)] text-white">
                  Dulcería Delicia
                </span>
              </div>
              <p className="text-white/80">
                Endulzando momentos especiales desde 2010 con amor y dedicación.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-[family-name:var(--font-dancing-script)] mb-6">
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-white/80 hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#productos" className="text-white/80 hover:text-white transition-colors">Productos</a></li>
                <li><a href="#nosotros" className="text-white/80 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#contacto" className="text-white/80 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-[family-name:var(--font-dancing-script)] mb-6">
                Contacto
              </h4>
              <ul className="space-y-3 text-white/80">
                <li>📍 Calle Dulce 123, Ciudad</li>
                <li>📞 +57 300 123 4567</li>
                <li>✉️ hola@dulceriadelicia.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-[family-name:var(--font-dancing-script)] mb-6">
                Horarios
              </h4>
              <ul className="space-y-3 text-white/80">
                <li>Lunes - Viernes: 9am - 8pm</li>
                <li>Sábados: 10am - 6pm</li>
                <li>Domingos: 11am - 4pm</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>© {new Date().getFullYear()} Dulcería Delicia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}