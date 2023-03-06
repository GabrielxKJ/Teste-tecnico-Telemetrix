import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import "./styles.css";

export interface Product {
  id?: string;
  name: string;
  value: number;
  icmsTax: number;
  ipiTax: number;
  isWarehouse: string;
  minPuchaseQuantity: number;
  description: string;
}

export function Form() {
  const [product, setProduct] = useState<Product>({
    name: "",
    value: 0,
    icmsTax: 0,
    ipiTax: 0,
    isWarehouse: "",
    minPuchaseQuantity: 0,
    description: "",
  });

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (value === "true" || value === "false") {
      value = JSON.parse(value);
    }

    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitProducts = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("Product", product);

      const notify = () =>
        toast.success("Formulário enviado com sucesso 😎", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

      setProduct({
        name: "",
        value: 0,
        icmsTax: 0,
        ipiTax: 0,
        isWarehouse: "",
        minPuchaseQuantity: 0,
        description: "",
      });
      notify();

      console.log(response);
    } catch (error) {
      const notify = () =>
        toast.error("Erro no envio do formulário, tente novamente 😥", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      notify();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitProducts}>
      <h2 className="form-title">Registre seu produto</h2>
      <label htmlFor="name">
        <input
          className="text-input"
          id="name"
          type="text"
          placeholder="Digite o nome do produto"
          value={product.name}
          name="name"
          onChange={handleChangeProduct}
        />
      </label>
      <label htmlFor="ProductValue">
        <input
          className="number-input-large"
          id="ProductValue"
          type="number"
          placeholder="Digite o valor do produto"
          value={product.minPuchaseQuantity || ""}
          name="minPuchaseQuantity"
          onChange={handleChangeProduct}
        />
      </label>
      <div className="input-wrapper">
        <label htmlFor="icmsValue">
          <input
            className="number-input-small"
            id="icmsValue"
            type="number"
            placeholder="Valor do ICMS"
            value={product.icmsTax || ""}
            name="icmsTax"
            onChange={handleChangeProduct}
          />
        </label>
        <label htmlFor="ipiValue">
          <input
            className="number-input-small"
            id="ipiValue"
            type="number"
            placeholder="Valor do IPI"
            value={product.ipiTax || ""}
            name="ipiTax"
            onChange={handleChangeProduct}
          />
        </label>
      </div>
      <select
        className="warehouse"
        name="isWarehouse"
        id="warehouse"
        value={product.isWarehouse}
        /* @ts-ignore */
        onChange={handleChangeProduct}
      >
        <option selected disabled>
          Está em estoque?
        </option>
        <option value="true">sim</option>
        <option value="false">não</option>
      </select>
      <textarea
        className="description"
        name="description"
        id=""
        cols={30}
        rows={10}
        placeholder="Digite a descrição do produto..."
        value={product.description}
        onChange={handleChangeProduct}
      ></textarea>
      <input className="button-submit" type="submit" value="Registrar" />
    </form>
  );
}
