import React from "react";
import { STEPS } from "../../../utils/constants";
import s from "./RoadMap.module.css";
import PinIcon from "../../../assets/svg/pin.svg?react";

const RoadMap = () => {
  return (
    <section className={s.processSection}>
      <div className="container">
        <span className={s.sectionLabel}>НАШ ПРОЦЕСС</span>

        <div className={s.stepsContainer}>
          {STEPS.map((step, index) => {
            const isLeftColumn = index % 2 === 0;
            const isLastStep = index === STEPS.length - 1;

            return (
              <div
                key={step.id}
                className={`${s.stepCard} ${
                  isLeftColumn ? s.leftCard : s.rightCard
                }`}
              >
                <div className={s.stepContent}>
                  <div className={s.stepHeader}>
                    <span className={s.stepNum}>{step.id}.</span>
                    <h3 className={s.stepTitle}>{step.title}</h3>
                  </div>
                  <p className={s.stepDesc}>{step.desc}</p>
                </div>

                {!isLastStep && (
                  <div className={s.connectorLine}>
                    {isLeftColumn ? (
                      // Линия ВПРАВО (Левая колонка -> Правая)
                      <svg viewBox="0 0 350 200" className={s.svgLine}>
                        <path
                          // Начало (0, 40) -> Дуга -> Конец (350, 180)
                          d="M 0 40 C 150 40, 200 150, 350 180"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    ) : (
                      // Линия ВЛЕВО (Правая колонка -> Левая)
                      <svg viewBox="0 0 350 200" className={s.svgLine}>
                        <path
                          // Начало (350, 40) -> Дуга -> Конец (0, 180)
                          d="M 350 40 C 200 40, 150 150, 0 180"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}
                  </div>
                )}

                {isLastStep && (
                  <div className={s.pinWrapper}>
                    <PinIcon className={s.pinIcon} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadMap;