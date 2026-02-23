import React from "react";
import { Link } from 'react-router-dom';
import s from './Intro.module.css';

const Intro = () => {
  return (
    <section className={s.introSection}>
        <div className="container">
          <Link to="/" className={s.backLink}>
             <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1L1 10L10 19" stroke="#C6A664" strokeWidth="1.5"/>
                <path d="M0 10H40" stroke="#C6A664" strokeWidth="1.5"/>
             </svg>
          </Link>
          
          <span className={s.sectionLabel}>ИНТЕРЬЕРЫ ПОД КЛЮЧ</span>
          
          <div className={s.introGrid}>
            <div className={s.introLeft}>
              <p>Комплексный подход к воплощению вашего идеального жилого или рабочего пространства.</p>
              <p>Мы берем на себя каждый этап — от рождения концепции и создания дизайн-проекта до монтажа напольных покрытий, стеновых панелей, мебели, окон, фасадов и ворот.</p>
            </div>
            
            <div className={s.quoteBox}>
              <p>В итоге вы получаете безупречный, продуманный до мелочей интерьер, полностью готовый к жизни, — без лишних забот и суеты.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Intro;