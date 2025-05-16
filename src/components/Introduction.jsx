import { useState, useEffect } from "react";
import Bhimesemi_100gm from "../assets/1 Bhimesemi 100gm.png";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import CamphorBenefits from "./CamphorBenefits";
import backgroundArt from "../assets/bg_Introduction.svg";
import StatsCounter from "./StatsCounter";
import PSlider from "./ProductSlider";


import "./Introduction.css";

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Slider />
      <div
        className="introduction-wrapper"
        style={{
          backgroundImage: `url(${backgroundArt})`,
        }}
      >
        <div
          className={`introduction-container ${
            isVisible ? "fade-in" : "fade-out"
          }`}
        >
          <div className="introduction-grid">
            {/* Left Section */}
            <div
              className={`about-content ${
                isVisible ? "slide-in-left" : "hidden-left"
              }`}
            >
              <h1 className="about-heading">About 505 Camphor</h1>
              <div className="about-paragraphs">
                <p>
                  Established as India&apos;s premier camphor manufacturer, 505
                  Camphor has been dedicated to delivering pure, natural camphor
                  products since its inception. Our commitment to quality has
                  made us a trusted name across the nation.
                </p>
                <p>
                  We take pride in our advanced manufacturing processes that
                  preserve the natural essence of camphor while ensuring the
                  highest standards of purity. Our products are crafted with
                  precision, combining traditional knowledge with modern
                  technology.
                </p>
                <p>
                  At 505 Camphor, sustainability and quality are at the heart of
                  everything we do. From sourcing to production, we maintain
                  strict quality controls to deliver products that consistently
                  exceed expectations and respect environmental values.
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div
              className={`image-container ${
                isVisible ? "slide-in-right" : "hidden-right"
              }`}
            >
              <div className="product-image-wrapper">
                <img
                  src={Bhimesemi_100gm}
                  alt="505 Camphor Products"
                  className="product-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PSlider></PSlider>
      <Testimonials />
      <StatsCounter />
      <CamphorBenefits />
    </>
  );
};

export default Introduction;