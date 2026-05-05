import React from "react";
import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import ServicesGrid from "../components/Home/ServicesGrid/ServicesGrid";
import CallToAction from "../components/Home/CallToAction/CallToAction";
import Partners from "../components/Home/Partners/Partners";
import PortfolioPreview from "../components/Home/PortfolioPreview/PortfolioPreview";

const Home = () => {
  return (
    <div className="main-background">
      <Hero />
      <About />
      <ServicesGrid />
      <div id="designers" style={{ scrollMarginTop: "100px" }}>
        <Partners />
      </div>
      <PortfolioPreview />
      <CallToAction />
    </div>
  );
};

export default Home;
