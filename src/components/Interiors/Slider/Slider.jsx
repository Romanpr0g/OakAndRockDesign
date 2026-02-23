import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { SLIDES } from "../../../utils/constants";

import s from "./Slider.module.css";

const Slider = () => {
  return (
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
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1200: { slidesPerView: 2.5 },
          }}
          className={s.swiper}
        >
          {SLIDES.map((img, i) => (
            <SwiperSlide key={i} className={s.slide}>
              {({ isActive }) => (
                <div
                  className={`${s.slideContent} ${isActive ? s.active : ""}`}
                >
                  <img src="../../assets/home.jpg" alt={`Interior ${i}`} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Кастомные стрелки (вынесены, чтобы стилизовать как на макете) */}
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
