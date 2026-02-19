import React from "react";
import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import ServicesGrid from "../components/Home/ServicesGrid/ServicesGrid";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import Partners from "../components/Home/Partners/Partners";
import portfolio1 from '../assets/portfolio1.jpg';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';

// Локальный компонент для Портфолио
const PortfolioPreview = () => (
  <section style={{ padding: "80px 0 120px" }}>
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <span
          className="uppercase text-gold"
          style={{ fontSize: 12, fontWeight: "bold" }}
        >
          ПОРТФОЛИО
        </span>
        <span style={{ fontSize: 12, color: "#777" }}>СМОТРЕТЬ ВСЕ</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        <img
          style={{ height: 300 }}
          src={portfolio1}
          alt="1"
        />
        <img
          style={{ height: 300 }}
          src={portfolio2}
          alt="2"
        />
        <img
          style={{ height: 300 }}
          src={portfolio3}
          alt="3"
        />
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ServicesGrid />
      <Partners />
      <PortfolioPreview />
      <CallToAction />
    </>
  );
};

export default Home;
