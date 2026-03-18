import React from "react";
import heroArrow from "../../../assets/svg/heroArrow.svg";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.content}>
        <h1>
          Oak & Rock <span className="text-gold">Design</span>
        </h1>
        <p>— мы творим чудеса.</p>
      </div>
      {/* <img src={heroArrow} className={s.scroll} alt="arrow" /> */}
    </section>
  );
};

export default Hero;
