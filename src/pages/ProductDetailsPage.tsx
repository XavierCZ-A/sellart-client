import { useParams } from "react-router";
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
import { useEffect, useState } from "react";
import instance from "../core/api/instance";
import type { Product } from "../features/product/types/product";

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState(product?.image_url?.[0]);

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

  useEffect(() => {
    if (product?.image_url?.[0]) {
      setMainImage(product.image_url[0]);
    }
  }, [product]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await instance.get(`/products/${id}`);
    console.log(data);
    setProduct(data);
  };

  return (
    <main className="container mx-auto px-4 py-6 m-5 shadow-md rounded-lg">
      <section className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 grid gap-4">
          <img
            src={mainImage}
            alt={product?.name}
            className="w-full h-96 rounded-md object-cover"
          />
          {product?.additionalImages &&
            product?.additionalImages.length > 0 && (
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product?.additionalImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${mainImage === img ? "border-primary" : "border-transparent"}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - vista ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
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
          <div className="mt-auto border-t border-gray-200 pt-6">
            {/* Quantity */}
            {product?.stock && product?.stock > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center rounded-md">
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

                {/* Add to cart and wishlist */}
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
              </div>
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
