import React from "react";
import { STEPS, LINES } from "../../../utils/constants";
import s from "./RoadMap.module.css";
import PinIcon from "../../../assets/svg/pin.svg?react";

const RoadMap = () => {
  return (
    <section className={s.processSection}>
      <div className={s.roadMapContainer}>
        <span className={`header ${s.sectionLabel}`}>НАШ ПРОЦЕСС</span>

        <div className={s.stepsContainer}>
          {STEPS.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === STEPS.length - 1;

            // Получаем конфиг для текущего шага
            const currentConfig = linesConfig[index] || [];

            return (
              <div
                key={step.id}
                className={`${s.stepItem} ${isLeft ? s.leftCol : s.rightCol} ${s[`step_${step.id}`]}`}
              >
                <div className={isLeft ? s.leftContent : s.rightContent}>
                  {/* КОНТЕНТ */}
                  <h3 className={s.stepTitle}>
                    <span className={s.stepNum}>{step.id}. </span>
                    {step.title}
                  </h3>
                  <p className={s.stepDesc}>{step.desc}</p>

                  {/* ОТРИСОВКА ЛИНИЙ */}
                  {/* Линии привязаны к контенту (relative), поэтому они будут двигаться вместе с текстом */}
                  {currentConfig.map((cfg, i) => {
                    // Берем нужную линию из массива LINES по индексу
                    const LineComponent = LINES[cfg.lineIndex];

                    if (!LineComponent) return null;

                    return (
                      <div
                        key={i}
                        className={s.svgContainer}
                        style={{
                          // Применяем индивидуальные стили из конфига
                          top: cfg.top,
                          left: cfg.left,
                          right: cfg.right,
                          width: cfg.width || "300px", // Дефолтная ширина
                          height: cfg.height || "auto",
                          opacity: cfg.opacity || 1,
                        }}
                      >
                        <LineComponent className={s.svgLine} />
                      </div>
                    );
                  })}

                  {/* ПИН (Только у последнего) */}
                  {isLast && (
                    <div className={s.pinWrapper}>
                      <PinIcon className={s.pinIcon} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;

// ==========================================
// КОНФИГУРАЦИЯ ЛИНИЙ (САМОЕ ВАЖНОЕ)
// ==========================================
// Здесь ты настраиваешь положение каждой линии индивидуально.
// lineIndex: 0 - это первая линия из массива LINES (начала 1 шага)
// top/right/left: отступы относительно текстового блока
// width: ширина svg

const linesConfig = {
  // ШАГ 1 (Левая колонка) -> Линии идут вправо
  0: [
    {
      lineIndex: 0,
      top: "7px",
      left: "344px",
      width: "140px",
      height: "6px",
    },
    {
      lineIndex: 1,
      top: "6px",
      left: "542px",
      width: "175px",
      height: "22px",
    },
    {
      lineIndex: 2,
      top: "35px",
      left: "773px",
      width: "140px",
      height: "52px",
    },
    {
      lineIndex: 3,
      top: "106px",
      left: "932px",
      width: "42px",
      height: "62px",
    },
  ],

  1: [
    {
      lineIndex: 4,
      top: "104px",
      left: "-121px",
      width: "107px",
      height: "3px",
    },
    {
      lineIndex: 5,
      top: "109px",
      left: "-290px",
      width: "113px",
      height: "4px",
    },
    {
      lineIndex: 6,
      top: "123px",
      left: "-428px",
      width: "86px",
      height: "25px",
    },
  ],

  // ШАГ 3 (Левая колонка) -> Линии идут вправо
  // 2: [
  //   { lineIndex: 5, top: "60px", right: "-260px" },
  //   { lineIndex: 6, top: "90px", right: "-310px" },
  //   { lineIndex: 7, top: "40px", right: "-220px" },
  // ],

  // // ШАГ 4 (Правая колонка) -> Влево
  // 3: [
  //   { lineIndex: 8, top: "40px", left: "-250px" },
  //   { lineIndex: 9, top: "70px", left: "-300px" },
  // ],

  // // ШАГ 5 (Левая) -> Вправо
  // 4: [
  //   { lineIndex: 10, top: "50px", right: "-270px" },
  //   { lineIndex: 11, top: "80px", right: "-320px" },
  // ],

  // // ШАГ 6 (Правая) -> Влево
  // 5: [
  //   { lineIndex: 12, top: "30px", left: "-240px" },
  //   { lineIndex: 13, top: "60px", left: "-290px" },
  // ],

  // // ШАГ 7 (Левая) -> Вправо
  // 6: [
  //   { lineIndex: 14, top: "40px", right: "-280px" },
  //   { lineIndex: 15, top: "70px", right: "-330px" },
  //   { lineIndex: 16, top: "100px", right: "-200px" },
  // ],

  // // ШАГ 8 (Правая) -> Влево
  // 7: [
  //   { lineIndex: 17, top: "50px", left: "-260px" },
  //   { lineIndex: 18, top: "80px", left: "-310px" },
  // ],

  // // ШАГ 9 (Левая) -> Вправо (К последнему шагу)
  // 8: [
  //   { lineIndex: 19, top: "40px", right: "-250px" },
  //   { lineIndex: 20, top: "-90px", right: "-600px" },
  //   { lineIndex: 21, top: "20px", right: "-180px" },
  //   // Остаток линий, если есть
  //   { lineIndex: 22, top: "90px", right: "-220px" },
  //   { lineIndex: 23, top: "110px", right: "-240px" },
  //   { lineIndex: 24, top: "120px", right: "-260px" },
  // ],

  // // ШАГ 10 - линий нет, там Пин
  // 9: [],
};
