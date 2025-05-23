import { ProductCard } from "../features/product/components/ProductCard";
import type { Product } from "../features/product/types/product";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Florero de cerámica artesanal",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    rating: 4.8,
    seller: "CeramicaCreativa",
    isNew: true,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex flex-wrap gap-4 container mx-auto px-4 py-8">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
