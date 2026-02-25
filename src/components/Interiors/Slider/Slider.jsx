import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SLIDES } from "../../../utils/constants";
import Arrow from "../../../assets/svg/arrow.svg?react";

import s from "./Slider.module.css";

const Slider = () => {
  let slidesForRender = SLIDES;

  // Дублируем слайды, если их мало (для плавного loop)
  while (slidesForRender.length > 0 && slidesForRender.length < 6) {
    slidesForRender = [...slidesForRender, ...slidesForRender];
  }

  return (
    <section className={s.sliderSection}>
      <div className={s.sliderContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          // Базовые настройки
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          speed={800} // Плавная анимация (0.8с)
          loopAdditionalSlides={3}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          // НАСТРОЙКА ОТСТУПОВ (Брейкпоинты)
          breakpoints={{
            320: {
              spaceBetween: 20, // Мобильные
            },
            768: {
              spaceBetween: 40, // Планшеты
            },
            1200: {
              spaceBetween: 96, // Десктоп (КАК В ДИЗАЙНЕ)
            },
          }}
          className={s.swiper}
        >
          {slidesForRender.map((img, i) => (
            // Ключ должен быть уникальным
            <SwiperSlide key={`${i}-${img}`} className={s.slide}>
              {({ isActive }) => (
                <div
                  className={`${s.slideContent} ${isActive ? s.active : ""}`}
                >
                  <img src={img} alt="Interior" />
                  {/* Затемнение для неактивных слайдов */}
                  <div className={s.overlay} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кнопки навигации */}

        <Arrow
          className={`swiper-button-prev-custom ${s.navBtn} ${s.prevBtn}`}
        />

        <Arrow
          className={`swiper-button-next-custom ${s.navBtn} ${s.nextBtn}`}
        />
      </div>
    </section>
  );
};

export default Slider;
