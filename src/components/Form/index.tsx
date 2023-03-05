import { useState } from "react";
import "./styles.css";

interface Product {
  name: string;
  value: number;
  icms: number;
  ipi: number;
  isWarehouse: boolean;
  quantityAvaible: number;
  description: string
}

export function Form() {

  const [product, setProduct] = useState({} as Product);

  return (
    <form className="form">
      <h2 className="form-title">Registre seu produto</h2>
      <label htmlFor="name">
        <input
          className="text-input"
          id="name"
          type="text"
          placeholder="Digite o nome do produto"
        />
      </label>
      <label htmlFor="ProductValue">
        <input
          className="number-input-large"
          id="ProductValue"
          type="number"
          placeholder="Digite o valor do produto"
        />
      </label>
      <div className="input-wrapper">
        <label htmlFor="icmsValue">
          <input
            className="number-input-small"
            id="icmsValue"
            type="number"
            placeholder="Valor do ICMS"
          />
        </label>
        <label htmlFor="ipiValue">
          <input
            className="number-input-small"
            id="ipiValue"
            type="number"
            placeholder="Valor do IPI"
          />
        </label>
      </div>
      <select className="warehouse" name="warehouse" id="warehouse">
        <option selected disabled>
          Está em estoque?
        </option>
        <option value="yes">sim</option>
        <option value="no">não</option>
      </select>
      <label htmlFor="quantityAvailable">
        <input
          className="quantityAvailable"
          id="quantityAvailable"
          type="number"
          placeholder="Quantidade disponível"
        />
      </label>
      <textarea
        className="description"
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Digite a descrição do produto..."
      ></textarea>
      <input className="button-submit" type="submit" value="Registrar" />
    </form>
  );
}
