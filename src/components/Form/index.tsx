import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

import "./styles.css";

export interface Product {
  id: number;
  name: string;
  icmsTax: number;
  ipiTax: number;
  isWarehouse: string;
  minPuchaseQuantity: number;
  description: string;
}

type FormValues = {
  productFilled?: {
    id: number;
    name: string;
    icmsTax: number;
    ipiTax: number;
    isWarehouse: string;
    minPuchaseQuantity: number;
    description: string;
  };
  onSucess: () => void;
};

export function Form({ productFilled, onSucess }: FormValues) {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    icmsTax: 0,
    ipiTax: 0,
    isWarehouse: "",
    minPuchaseQuantity: 0,
    description: "",
  });

  useEffect(() => {
    if (productFilled) {
      setProduct({
        id: productFilled.id,
        name: productFilled.name,
        icmsTax: productFilled.icmsTax,
        ipiTax: productFilled.ipiTax,
        isWarehouse: productFilled.isWarehouse,
        minPuchaseQuantity: productFilled.minPuchaseQuantity,
        description: productFilled.description,
      });
    }
  }, [productFilled]);

  const checkForm = () => {
    const { name, minPuchaseQuantity, description, isWarehouse } = product;

    if (name && minPuchaseQuantity && description && isWarehouse) {
      setIsInputDisabled(false);
    } else {
      setIsInputDisabled(true);
    }
  };

  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (value === "true" || value === "false") {
      value = JSON.parse(value);
    }

    setProduct({...product, [name]: value});
  };

  const handleSubmitProducts = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (productFilled) {
      try {
        const response = await api.put(`Product/${productFilled.id}`, product);

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

        onSucess();

        setProduct({
          id: 0,
          name: "",
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

        console.log(error);
      }
    } else {
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
          id: 0,
          name: "",
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

        console.log(error);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmitProducts}>
      <h2 className="form-title">{`${productFilled ? `Atualize seu produto` : `Registre seu produto`}`}</h2>
      <label htmlFor="name">
        <input
          className="text-input"
          id="name"
          type="text"
          placeholder="Digite o nome do produto"
          value={product.name}
          name="name"
          onChange={handleChangeProduct}
          onKeyUp={checkForm}
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
          onKeyUp={checkForm}
        />
      </label>
      <div className="input-wrapper">
        <label htmlFor="icmsValue">
          <input
            className="number-input-small"
            id="icmsValue"
            type="number"
            placeholder="Valor do ICMS (opcional)"
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
            placeholder="Valor do IPI (opcional)"
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
        onKeyUp={checkForm}
      >
        <option value="" disabled hidden selected>
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
        onKeyUp={checkForm}
      ></textarea>
      <input
        disabled={isInputDisabled}
        className={`btn-submit ${
          isInputDisabled ? "btn-disabled" : "btn-active"
        }`}
        type="submit"
        value="Registrar"
      />
    </form>
  );
}
