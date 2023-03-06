import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

export interface IregisteredProduct {
  title: string;
  value: number;
  description: string;
  image: string;
}

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

export function ProductCard({ title, value, description, image }: IregisteredProduct) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
          headers: {
            Authorization: 'G-z1PuCqW_dXb8cthdztA5bj5tgftcRkFPEFKJvx7o8',
          },
        });
        setImageSrc(response.data.urls.regular);
      } catch (error) {
        console.error(error);
      }
    }
    fetchImage();
  }, []);

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={`https://source.unsplash.com/800x600/?${image}`}
          alt="imagem do card"
        />
      </div>
      <div className="product-general">
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <span className="product-value">R${value}</span>
          <p className="product-description">{description}</p>
        </div>
        <div className="product-buttons">
          <button id="product-btn-update">atualizar</button>
          <button id="product-btn-delete">deletar</button>
        </div>
      </div>
    </div>
  );
}
