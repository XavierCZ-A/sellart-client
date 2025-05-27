import { useEffect } from "react";
import { useState } from "react";
import { ProductCard } from "../features/product/components/ProductCard";
import type { Product } from "../features/product/types/product";
import instance from "../core/api/instance";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await instance.get("/products");
    setProducts(data);
  };

  return (
    <div className="flex flex-wrap gap-4 container mx-auto px-4 py-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
