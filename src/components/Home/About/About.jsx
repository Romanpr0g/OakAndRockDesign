import React from "react";
import s from "./About.module.css";
import about1 from "../../../assets/svg/about1.svg";
import about2 from "../../../assets/svg/about2.svg";
import about3 from "../../../assets/svg/about3.svg";

const About = () => {
  return (
    <>
      {/* 1. ЧЕРНАЯ СЕКЦИЯ С НАЕЗЖАЮЩИМ ТЕКСТОМ */}
      <section className={s.blackSection}>
        {/* Блок, который наезжает на Hero */}
        <div className={s.overlapBox}>
          <span className={`section-label ${s.label}`}>КТО МЫ ТАКИЕ</span>
          <h2 className={`serif ${s.title}`}>
            Уникальная вертикально интегрированная компания, специализирующаяся
            на эксклюзивной мебели и интерьерах под ключ, с полным контролем
            цепочки
          </h2>
          <p className={s.desc}>
            от сырья до финального продукта, гарантируя премиум-качество и
            индивидуальный подход.
          </p>
        </div>
      </section>

      {/* 2. СЕРАЯ СЕКЦИЯ С КАРТОЧКАМИ */}
      <section className={s.graySection}>
        <div className="container">
          <div className={s.features}>
            <div className={s.card}>
              <div className={s.icon}>
                <img src={about1} className={s.icon__img} alt="" />
              </div>
              <h3>Полный контроль цепочки</h3>
              <p>Минимум рисков, конкурентные цены.</p>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <img src={about2} className={s.icon__img} alt="" />
              </div>
              <h3>Европейские стандарты</h3>
              <p>Мы сочетаем европейское качество с локальной гибкостью.</p>
            </div>
            <div className={s.card}>
              <div className={s.icon}>
                <img src={about3} className={s.icon__img} alt="" />
              </div>
              <h3>Индивидуальный подход</h3>
              <p>Нет шаблонам. Мы адаптируем проект под ваши желания.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
