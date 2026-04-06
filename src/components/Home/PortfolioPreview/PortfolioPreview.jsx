import React from "react";
import portfolio1 from "../../../assets/portfolio1.jpg";
import portfolio2 from "../../../assets/portfolio2.jpg";
import portfolio3 from "../../../assets/portfolio3.jpg";
import s from "./PortfolioPreview.module.css";

const PortfolioPreview = () => (
  <section className={s.portfolio}>
    <div className={s.portfolioWrapper}>
      <div className={s.portfolio__header}>
        <span className="section-label">ПОРТФОЛИО</span>
        <span className={s.portfolio__link}>СМОТРЕТЬ ВСЕ</span>
      </div>
      <div className={s.portfolio__grid}>
        <img className={s.portfolio__image} src={portfolio1} alt="1" />
        <img className={s.portfolio__image} src={portfolio2} alt="2" />
        <img className={s.portfolio__image} src={portfolio3} alt="3" />
      </div>
    </div>
  </section>
);

export default PortfolioPreview;
