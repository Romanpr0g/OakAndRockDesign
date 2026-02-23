import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SLIDES } from "../../../utils/constants";

import s from "./Slider.module.css";

const Slider = () => {
  // === АВТОМАТИЧЕСКОЕ ДУБЛИРОВАНИЕ ===
  // Swiper требует минимум 6 слайдов для корректного loop при slidesPerView: 2.5
  // Мы создаем новый массив, который гарантированно будет длинным
  
  let slidesForRender = SLIDES;
  
  // Пока слайдов меньше 6, мы дублируем массив сам в себя
  // Это спасет ситуацию, даже если у вас будет всего 2 картинки
  while (slidesForRender.length > 0 && slidesForRender.length < 6) {
    slidesForRender = [...slidesForRender, ...slidesForRender];
  }

  return (
    <section className={s.sliderSection}>
      <div className={s.sliderContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          speed={800}
          
          // loopAdditionalSlides помогает, но только если исходных данных достаточно.
          // С нашим дублированием выше, это свойство будет работать корректно.
          loopAdditionalSlides={3} 

          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 2.5 },
          }}
          className={s.swiper}
        >
          {slidesForRender.map((img, i) => (
            // ВАЖНО: Используем индекс 'i' как часть ключа, 
            // так как картинки 'img' теперь повторяются
            <SwiperSlide key={`${i}-${img}`} className={s.slide}>
              {({ isActive }) => (
                <div className={`${s.slideContent} ${isActive ? s.active : ""}`}>
                  <img src={img} alt="Interior" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={`swiper-button-prev-custom ${s.navBtn} ${s.prevBtn}`}>
          ←
        </div>
        <div className={`swiper-button-next-custom ${s.navBtn} ${s.nextBtn}`}>
          →
        </div>
      </div>
    </section>
  );
};

export default Slider;