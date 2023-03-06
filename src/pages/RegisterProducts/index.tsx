import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form/index";

import "./styles.css";

export function RegisterProducts() {
  return (
    <section className="register-products">
      <div className="wrapper">
        <Form onSucess={() => null} />
        <img
          className="register-product-img"
          src="../../../public/images/register-product.jpg"
          alt="Carro branco com luzes do farol acessa"
        />
      </div>
    </section>
  );
}
