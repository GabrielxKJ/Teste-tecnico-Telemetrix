import { useEffect, useState } from "react";
import { Product } from "../../components/Form";
import { ProductCard } from "../../components/ProductCard";
import { api } from "../../services/api";

import Lottie from "react-lottie";

import animationData from "../../../public/animations/no-result-found.json";
import "./styles.css";

export function Products() {
  const [registeredProduct, setRegisteredProduct] = useState<Product[]>([]);

  const callProducts = async () => {
    try {
      const response = await api.get("Product");

      setRegisteredProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    callProducts();
  }, []);

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="products">
        {registeredProduct.length ? (
          <div className="cards-container">
            {registeredProduct.map((product: Product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                title={product.name}
                value={product.minPuchaseQuantity}
                description={product.description}
                image={`${product.name} car`}
                callProducts={callProducts}
                fullProduct={product}
              />
            ))}
          </div>
        ) : (
          <div className="animation-fallback">
            <Lottie options={defaultLottieOptions} height={172} width={152} />
            <p>Não encontramos nenhum resultado... Que tal criar um novo produto?</p>
          </div>
        )}
      </section>
    </>
  );
}
