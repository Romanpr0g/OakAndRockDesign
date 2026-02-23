import React from "react";
import { STEPS } from "../../../utils/constants";
import s from "./RoadMap.module.css";

const RoadMap = () => {
  return (
    <section className={s.processSection}>
      <div className="container">
        <span className={s.sectionLabel}>НАШ ПРОЦЕСС</span>

        <div className={s.stepsContainer}>
          {/* Фоновая линия (SVG) - вставьте сюда реальный SVG из фигмы */}
          <svg
            className={s.snakeSvg}
            viewBox="0 0 1000 2000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Пример кривой линии, в реале нужно экспортировать из дизайна */}
            <path
              d="M100 0 V100 C100 200 900 200 900 300 V500 C900 600 100 600 100 700 V900"
              stroke="#333"
              strokeWidth="1"
              strokeDasharray="5 5"
            />
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
  );
};

export default RoadMap;
