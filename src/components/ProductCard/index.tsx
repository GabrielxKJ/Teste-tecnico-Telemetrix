import "./styles.css";

export function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://source.unsplash.com/800x600/?car"
          alt="imagem do card"
        />
      </div>
      <div className="product-general">
        <div className="product-info">
          <h3 className="product-title">título</h3>
          <span className="product-value">R$99,00</span>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur. Mi pellentesque facilisis .
          </p>
        </div>
        <div className="product-buttons">
          <button id="product-btn-update">atualizar</button>
          <button id="product-btn-delete">deletar</button>
        </div>
      </div>
    </div>
  );
}
