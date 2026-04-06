import React from "react";
import s from "./Partners.module.css";

const Partners = () => (
  <section className={s.partners}>
    <div className={s.partners_wrapper}>
      <div className={s.partners__label}>
        <span className="section-label">ДЛЯ АРХИТЕКТОРОВ И ДИЗАЙНЕРОВ</span>
      </div>
      <h2 className={`${s.partners__title} serif`}>
        Партнёрство, которое усиливает ваш проект
      </h2>
      <p className={s.partners__text}>
        Мы открыты к сотрудничеству с профессионалами, которые ценят эстетику,
        точность и индивидуальный подход. Oak & Rock Design предлагает гибкие
        условия для дизайнеров и архитекторов: от разработки нестандартной
        мебели по вашим эскизам до комплексного сопровождения интерьеров под
        ключ.
      </p>
    </div>
  </section>
);

export default Partners;
