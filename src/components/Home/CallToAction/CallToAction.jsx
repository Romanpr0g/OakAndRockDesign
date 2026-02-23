import React from "react";
import s from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <section className={s.cta}>
      <div className={s.content}>
        <h2 className="serif">
          Готов создать проект,
          <br />
          который конкуренты{" "}
          <span className="text-gold">
            не осилят?
          </span>
        </h2>
        <button className={s.btn} onClick={() => alert("Переход к форме")}>
          Создать
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
