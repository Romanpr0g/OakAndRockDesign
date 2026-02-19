import React from "react";
import s from "./ServicesGrid.module.css";
import apartments from "../../../assets/apartments.jpg";
import horeca from "../../../assets/horeca.jpg";
import home from "../../../assets/home.jpg";
import rightArrow1 from "../../../assets/svg/rightArrow1.svg";

const ServicesGrid = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.label}>ИНТЕРЬЕРЫ ПОД КЛЮЧ</span>
          <img src={rightArrow1} className={s.arrow} alt="arrow" />
        </div>

        <div className={s.grid}>
          <div className={s.upBlock}>
            <div className={`${s.card} ${s.apartments}`}>
              <img src={apartments} alt="Apartments" />
              <span className={s.cardLabel}>Квартиры</span>
            </div>

            <div className={`${s.card} ${s.horeca}`}>
              <img src={horeca} alt="HoReCa" />
              <span className={s.cardLabel}>Объекты HoReCa</span>
            </div>
          </div>
          <div className={s.bottomBlock}>
            <div className={`${s.card} ${s.half} ${s.homes}`}>
              <img src={home} alt="Homes" />
              <span className={s.cardLabel}>Частные дома</span>
            </div>
            <div className={`${s.card} ${s.half} ${s.restoration}`}>
              <img src={home} alt="Homes" />
              <span className={s.cardLabel}>Реставрация</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
