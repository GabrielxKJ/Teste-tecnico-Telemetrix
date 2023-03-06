import { useEffect, useState } from "react";
import { Product } from "../../components/Form";
import { ProductCard } from "../../components/ProductCard";
import { api } from "../../services/api";

import "./styles.css";

export function Products() {
  const [registeredProduct, setRegisteredProduct] = useState<Product[]>([]);

  useEffect(() => {
    const callProducts = async () => {
      try {
        const response = await api.get("Product");
  
        console.log(response.data)
        setRegisteredProduct(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    callProducts();
  }, []);
  
  return (
    <section className="products">
      <div className="cards-container">
        {registeredProduct.map((product: Product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            value={product.minPuchaseQuantity}
            description={product.description}
            image={`${product.name} car`}
          />
        ))}
      </div>
    </section>
  );
}
