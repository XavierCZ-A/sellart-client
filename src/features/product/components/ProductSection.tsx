import { Link } from "../../../core/components/ui/Link";

export const ProductSection: React.FC = () => {
  return (
    <section className="relative bg-artisan-cream py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark mb-4 leading-tight">
            Hecho a mano,{" "}
            <span className="text-primary-lighter">hecho con amor</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-lg mb-8 max-w-md">
            Descubre productos artesanales únicos creados por talentosos
            artesanos y comparte tu propio arte con el mundo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-primary hover:bg-primary-light text-white px-3 py-2 text-base rounded-md"
            >
              Explorar productos
            </Link>
            <Link
              to="/products"
              className="border border-primary text-primary hover:bg-primary-light/20 px-3 py-2 text-base rounded-md"
            >
              Empezar a vender
            </Link>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-xl animate-fade-in">
          <div className="aspect-video md:aspect-square grid grid-cols-2 gap-1 bg-white p-1">
            <div className="aspect-square overflow-hidden rounded-tl-lg">
              <img
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                alt="Producto artesanal"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-tr-lg">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                alt="Producto artesanal"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-bl-lg">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
                alt="Producto artesanal"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-br-lg">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22"
                alt="Producto artesanal"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-12 left-8 w-16 h-16 rounded-full bg-artisan-light/30 -z-10"></div>
      <div className="absolute bottom-12 right-24 w-24 h-24 rounded-full bg-artisan-terracotta/20 -z-10"></div>
      <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-artisan-accent/20 -z-10"></div>
    </section>
  );
};
