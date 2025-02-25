/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import Bhimesemi_100gm from "../assets/1 Bhimesemi 100gm.png";
import bhimeseni_50_gm from "../assets/bhimeseni_50_gm.png";
import Regular_100_gm_pouch from "../assets/Regular_100_gm_pouch.png";
import Regular_10_gm from "../assets/Regular_10_gm.png";
import regular_130_tablets from "../assets/regular_130_tablets.png";
import Regular_200_gm_and_250_gm_pouch from "../assets/Regular_200_gm_and_250_gm_pouch.png";
import Regular_20_gm_ from "../assets/Regular_20_gm_.png";
import Regular_20_tablets from "../assets/Regular_20_tablets.png";
import Regular_40gm_and_50_gm from "../assets/Regular_40gm_and_50_gm.png";
import Regular_5_gm from "../assets/Regular_5_gm.png";
import Regular_60_tablets from "../assets/Regular_60_tablets.png";
import Regular_60_tablets_1 from "../assets/Regular_60_tablets_1.png";
import regular_dabbi_15_gm from "../assets/regular_dabbi_15_gm.png";
import regular_dabbi_5_gm from "../assets/regular_dabbi_5_gm.png";
import './CamphorSlider.css';

const CamphorSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slides = [
    { image: Bhimesemi_100gm, title: "Bhimesemi 100gm" },
    { image: bhimeseni_50_gm, title: "Bhimeseni 50gm" },
    { image: Regular_100_gm_pouch, title: "Regular 100gm Pouch" },
    { image: Regular_10_gm, title: "Regular 10gm" },
    { image: regular_130_tablets, title: "Regular 130 Tablets" },
    { image: Regular_200_gm_and_250_gm_pouch, title: "Regular 200/250gm Pouch" },
    { image: Regular_20_gm_, title: "Regular 20gm" },
    { image: Regular_20_tablets, title: "Regular 20 Tablets" },
    { image: Regular_40gm_and_50_gm, title: "Regular 40gm & 50gm" },
    { image: Regular_5_gm, title: "Regular 5gm" },
    { image: Regular_60_tablets, title: "Regular 60 Tablets" },
    { image: Regular_60_tablets_1, title: "Regular 60 Tablets - Type 1" },
    { image: regular_dabbi_15_gm, title: "Regular Dabbi 15gm" },
    { image: regular_dabbi_5_gm, title: "Regular Dabbi 5gm" }
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides];

  return (
    <div className="slider-outer-container bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Products</h2>
        </div>

        <div className="slider-container overflow-hidden relative bg-white shadow-lg rounded-lg">
          <div
            className="slider-track flex"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: isMobile ? '60s' : '70s'
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <div
                key={index}
                className="slide"
                onClick={() => setSelectedImage(slide.image)}
              >
                <div className="slide-inner group">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="slide-content">
                    <h3 className="slide-title">{slide.title}</h3>
                    {/* Removed description */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CamphorSlider;