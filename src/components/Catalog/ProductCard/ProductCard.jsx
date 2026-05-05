import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./ProductCard.module.css";
import placeholderImage from "../../../assets/home.jpg";

const ProductCard = ({ uuid, categoryId, title, material, price, image }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/catalog/${categoryId}/${uuid}`);
  };

  return (
    <div className={s.card} onClick={goToProduct}>
      <div className={s.imageWrapper}>
        <img
          src={image || placeholderImage}
          alt={title}
          className={s.image}
        />
      </div>

      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <p className={s.material}>{material}</p>

        <div className={s.bottomRow}>
          <span className={s.price}>{price} BYN</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;