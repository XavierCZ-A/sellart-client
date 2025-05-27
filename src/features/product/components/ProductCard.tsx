import { StarFilled, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { Badge, Card } from "antd";
import { useState } from "react";
import { Link } from "../../../core/components/ui/Link";
import { Button } from "../../../core/components/ui/Button";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    // TODO: Agregar a favoritos en la base de datos
    console.log("Agregar a favoritos");
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    // TODO: Agregar al carrito en la base de datos
    e.stopPropagation();
    console.log("Agregar al carrito");
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <div className="relative">
          <img
            alt="example"
            src={product.image_url?.[0]}
            className="w-full rounded-t-lg h-48 object-cover"
          />

          {product.isNew && (
            <div className="absolute top-2 left-2">
              <Badge color="#8b5a2b" count="Nuevo" />
            </div>
          )}

          <button
            type="button"
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 shadow-md transition-all duration-200 hover:scale-110"
          >
            {isFavorite ? (
              <HeartFilled style={{ color: "red", fontSize: "20px" }} />
            ) : (
              <HeartOutlined style={{ color: "white", fontSize: "20px" }} />
            )}
          </button>
        </div>
      }
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm text-gray-500">{product.seller}</p>
          <div className="flex items-center text-amber-500">
            <StarFilled className="h-3 w-3 fill-current" />
            <span className="text-xs ml-1">{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="link-link">{product.name}</h3>
        </Link>
        <p className="font-bold text-lg text-primary">${product.price}</p>
      </div>
      <div className="flex justify-start mt-4">
        <Button type="primary" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </div>
    </Card>
  );
};
