import React, { useRef, useEffect, useState } from "react";
import { STEPS, LINES } from "../../../utils/constants";
import s from "./RoadMap.module.css";
import PinIcon from "../../../assets/svg/pin.svg?react";

const RoadMap = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const drumRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    // Включаем слежку за скроллом только на мобильных устройствах
    if (window.innerWidth > 900) return;

    // Настраиваем Observer (сработает, когда элемент попадет ровно в центр барабана)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: drumRef.current,
        // Оставляем узкую "рамку" срабатывания ровно по центру высоты контейнера
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className={s.processSection}>
      <div className={s.roadMapContainer}>
        <span className={`header ${s.sectionLabel}`}>НАШ ПРОЦЕСС</span>
        <div className={s.drumContainer} ref={drumRef}>
          <div className={s.stepsContainer}>
            {STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === STEPS.length - 1;

              // Получаем конфиг для текущего шага
              const currentConfig = linesConfig[index] || [];

              let mobilePositionClass = "";
              if (index === activeIndex) mobilePositionClass = s.activeStep;
              else if (index < activeIndex) mobilePositionClass = s.prevStep;
              else if (index > activeIndex) mobilePositionClass = s.nextStep;

              return (
                <div
                  key={step.id}
                  data-index={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className={`${s.stepItem} ${
                    isLeft ? s.leftCol : s.rightCol
                  } ${s[`step_${step.id}`]} ${mobilePositionClass}`}
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

  2: [
    {
      lineIndex: 7,
      top: "141px",
      right: "-60px",
      width: "105px",
      height: "20px",
    },
  ],

  3: [
    {
      lineIndex: 8,
      top: "144px",
      left: "-76px",
      width: "66px",
      height: "2px",
    },
    {
      lineIndex: 9,
      top: "152px",
      left: "-227px",
      width: "109px",
      height: "11px",
    },
  ],

  4: [
    {
      lineIndex: 10,
      top: "185px",
      left: "62px",
      width: "103px",
      height: "41px",
    },
    {
      lineIndex: 11,
      top: "218px",
      left: "238px",
      width: "169px",
      height: "11px",
    },
    {
      lineIndex: 12,
      top: "203px",
      left: "503px",
      width: "108px",
      height: "11px",
    },
  ],

  5: [
    {
      lineIndex: 13,
      top: "36px",
      right: "-88px",
      width: "64px",
      height: "36px",
    },
    {
      lineIndex: 14,
      top: "89px",
      right: "-92px",
      width: "68px",
      height: "38px",
    },
    {
      lineIndex: 15,
      top: "146px",
      left: "-142px",
      width: "114px",
      height: "22px",
    },
  ],

  6: [
    {
      lineIndex: 16,
      top: "55px",
      left: "-100px",
      width: "50px",
      height: "47px",
    },
    {
      lineIndex: 17,
      top: "137px",
      left: "-104px",
      width: "104px",
      height: "75px",
    },
    {
      lineIndex: 18,
      top: "206px",
      left: "86px",
      width: "175px",
      height: "7px",
    },
    {
      lineIndex: 19,
      top: "161px",
      left: "344px",
      width: "181px",
      height: "46px",
    },
  ],

  7: [
    {
      lineIndex: 20,
      top: "40px",
      right: "-61px",
      width: "225px",
      height: "160px",
    },
    {
      lineIndex: 21,
      top: "187px",
      left: "133px",
      width: "172px",
      height: "12px",
    },
    {
      lineIndex: 22,
      top: "194px",
      left: "-93px",
      width: "151px",
      height: "11px",
    },
  ],

  8: [
    {
      lineIndex: 23,
      top: "163px",
      left: "176px",
      width: "94px",
      height: "29px",
    },
    {
      lineIndex: 24,
      top: "184px",
      left: "357px",
      width: "134px",
      height: "26px",
    },
  ],
};
