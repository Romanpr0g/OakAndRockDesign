// src/pages/Interiors.jsx
import React from "react";
import ServicesGrid from "../components/Home/ServicesGrid/ServicesGrid";
import Intro from "../components/Interiors/Intro/Intro";
import Slider from "../components/Interiors/Slider/Slider";
import RoadMap from "../components/Interiors/RoadMap/RoadMap";

import s from "./Interiors.module.css";

const Interiors = () => {
  return (
    <div className={s.page}>
      <Intro />
      <Slider />
      <RoadMap />
      <ServicesGrid />
    </div>
  );
};

export default Interiors;
