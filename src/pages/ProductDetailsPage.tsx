import { useParams } from "react-router";
import type { Product } from "../features/product/types/product";
import { Link } from "../core/components/ui/Link";
import { Rate } from "../core/components/ui/Rate";
import { Button } from "../core/components/ui/Button";
import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const allProducts: Product[] = [
  {
    id: 1,
    name: "Florero de cerámica artesanal",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    rating: 4.8,
    description:
      "Elegante florero de cerámica hecho a mano por artesanos locales. Cada pieza es única con pequeñas variaciones que destacan su carácter artesanal. Perfecto para decorar cualquier espacio de tu hogar",
    seller: "CeramicaCreativa",
    stock: 10,
    isNew: true,
  },
];

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    console.log("add to cart");
  };

  const handleAddToWishlist = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    console.log("share");
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= (product?.stock || 10)) {
      setQuantity(newQuantity);
    }
  };

  return (
    <main className="container mx-auto px-4 py-6 m-5 border border-red-200 shadow-md rounded-lg">
      <section className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          {/* Seller and rating */}
          <div className="flex justify-between items-center">
            <p className="text-primary hover:text-primary-dark">
              <Link to={`/artesanos/${product?.seller}`}>
                {product?.seller}
              </Link>
            </p>
            <div className="flex items-center gap-1">
              <Rate disabled allowHalf defaultValue={product?.rating} />
              <p className="text-sm text-gray-500">({product?.rating})</p>
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col">
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
              {product?.name}
            </h1>
            <p className="text-2xl font-bold text-primary-dark mb-4">
              ${product?.price}
            </p>
            <p className="text-gray-600 mb-4">{product?.description}</p>
          </div>

          {/* Product actions */}
          <hr className="my-4 border-gray-200" />
          <div className="mt-auto border-t pt-6">
            {product?.stock && product?.stock > 0 ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      ghost
                      size="small"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <MinusOutlined size={16} />
                    </Button>
                    <span className="px-4">{quantity}</span>
                    <Button
                      ghost
                      size="small"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= (product.stock || 10)}
                    >
                      <PlusOutlined size={16} />
                    </Button>
                  </div>
                  <span className="text-gray-600 text-sm">
                    {product.stock} disponibles
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    onClick={handleAddToCart}
                    icon={<ShoppingCartOutlined />}
                  >
                    Añadir al carrito
                  </Button>

                  <Button onClick={handleAddToWishlist} type="text" ghost>
                    {isFavorite ? (
                      <HeartFilled style={{ color: "red", fontSize: "20px" }} />
                    ) : (
                      <HeartOutlined
                        style={{ color: "black", fontSize: "20px" }}
                      />
                    )}
                  </Button>
                  <Button onClick={handleShare} ghost type="text">
                    <ShareAltOutlined style={{ fontSize: "20px" }} />
                  </Button>
                </div>
              </>
            ) : (
              <Button disabled className="w-full">
                Agotado
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
