// src/pages/Interiors.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/navigation';

import ServicesGrid from '../components/Home/ServicesGrid/ServicesGrid';
import s from './Interiors.module.css';

// Данные процесса (змейка)
const STEPS = [
  { id: 1, title: 'Первый контакт', desc: 'Бесплатный звонок или встреча, где определяем задачи, стиль и примерный бюджет проекта.' },
  { id: 2, title: 'Консультация', desc: 'Проводим встречу онлайн или офлайн для детального обсуждения пространства и ваших пожеланий.' },
  { id: 3, title: 'Сбор информации', desc: 'Замеряем помещения и фиксируем все технические детали. Уточняем стилистику и предпочтения.' },
  { id: 4, title: 'Разработка концепции', desc: 'Создаем несколько концептуальных решений с планировкой и настроением интерьера.' },
  { id: 5, title: 'Утверждение дизайна', desc: 'Презентуем варианты и вносим правки до полного соответствия вашим ожиданиям.' },
  { id: 6, title: 'Подбор материалов', desc: 'Формируем спецификацию материалов, мебели и света. Организуем закупку.' },
  { id: 7, title: 'Расчет стоимости', desc: 'Готовим подробную смету с учетом материалов, работ и монтажа.' },
  { id: 8, title: 'Изготовление', desc: 'Организуем изготовление мебели и элементов интерьера по индивидуальным чертежам.' },
  { id: 9, title: 'Доставка и монтаж', desc: 'Координируем поставки, подъем и установку всех изделий.' },
  { id: 10, title: 'Сдача объекта', desc: 'Финальная проверка и сдача ключей. Остаемся на связи.', isLast: true },
];

// Картинки для слайдера (Заглушки)
const SLIDES = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
];

const Interiors = () => {
  return (
    <div className={s.page}>
      
      {/* 1. Интро секция */}
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

      {/* 2. Слайдер Swiper */}
      <section className={s.sliderSection}>
        <div className={s.sliderContainer}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5} /* Показываем 1.5 слайда (центр + края) */
            centeredSlides={true} /* Активный слайд по центру */
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
               nextEl: '.swiper-button-next-custom',
               prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
                768: { slidesPerView: 2.2 },
                1200: { slidesPerView: 2.5 }
            }}
            className={s.swiper}
          >
            {SLIDES.map((img, i) => (
              <SwiperSlide key={i} className={s.slide}>
                 {({ isActive }) => (
                   <div className={`${s.slideContent} ${isActive ? s.active : ''}`}>
                      <img src={img} alt={`Interior ${i}`} />
                   </div>
                 )}
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Кастомные стрелки (вынесены, чтобы стилизовать как на макете) */}
          <div className={`swiper-button-prev-custom ${s.navBtn} ${s.prevBtn}`}>←</div>
          <div className={`swiper-button-next-custom ${s.navBtn} ${s.nextBtn}`}>→</div>
        </div>
      </section>

      {/* 3. Процесс (Змейка) */}
      <section className={s.processSection}>
        <div className="container">
          <span className={s.sectionLabel}>НАШ ПРОЦЕСС</span>
          
          <div className={s.stepsContainer}>
             {/* Фоновая линия (SVG) - вставьте сюда реальный SVG из фигмы */}
             <svg className={s.snakeSvg} viewBox="0 0 1000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Пример кривой линии, в реале нужно экспортировать из дизайна */}
                <path d="M100 0 V100 C100 200 900 200 900 300 V500 C900 600 100 600 100 700 V900" stroke="#333" strokeWidth="1" strokeDasharray="5 5"/>
             </svg>

             {STEPS.map((step, index) => (
               <div 
                 key={step.id} 
                 className={`${s.stepCard} ${index % 2 !== 0 ? s.rightCard : s.leftCard}`}
               >
                 <div className={s.stepHeader}>
                    <span className={s.stepNum}>{step.id}.</span>
                    <h3 className={s.stepTitle}>{step.title}</h3>
                 </div>
                 <p className={s.stepDesc}>{step.desc}</p>
                 {step.isLast && <div className={s.pinIcon}>📍</div>}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. Сетка услуг (Ваш готовый компонент) */}
      <div className={s.bottomServices}>
        <ServicesGrid />
      </div>
    </div>
  );
};

export default Interiors;