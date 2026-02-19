import React from "react";
import s from "./Partners.module.css";

const Partners = () => (
  <section
    style={{ padding: "100px 0", textAlign: "center", background: "#0f0f0f" }}
  >
    <div className="container">
      <span
        className="uppercase text-gold"
        style={{ fontSize: 12, display: "block", marginBottom: 20 }}
      >
        ДЛЯ АРХИТЕКТОРОВ И ДИЗАЙНЕРОВ
      </span>
      <h2 className="serif" style={{ fontSize: 32, marginBottom: 20 }}>
        Партнёрство, которое усиливает ваш проект
      </h2>
      <p style={{ color: "#b0b0b0", maxWidth: 700, margin: "0 auto" }}>
        Мы открыты к сотрудничеству с профессионалами.
      </p>
    </div>
  </section>
);

export default Partners;
