import React from "react";
import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import ServicesGrid from "../components/Home/ServicesGrid/ServicesGrid";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import Partners from "../components/Home/Partners/Partners";
import PortfolioPreview from "../components/Home/PortfolioPreview/PortfolioPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <div id="about">
        <ServicesGrid id="about"/>
      </div>
      <Partners />
      <PortfolioPreview />
      <CallToAction />
    </>
  );
};

export default Home;
