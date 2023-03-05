import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";

import "./styles.css";

export function Products() {
  return (
    <section className="products">
      <div className="cards-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
