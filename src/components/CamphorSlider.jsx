import { useState, useEffect, useRef } from 'react';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import './CamphorSlider.css';

const CamphorSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // eslint-disable-next-line no-unused-vars
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
    { 
      image: img1,
      title: "Pure Camphor Blocks", 
      description: "99.9% pure pharmaceutical grade camphor"
    },
    { 
      image: img2,
      title: "Modern Production Unit", 
      description: "State-of-the-art manufacturing facility"
    },
    { 
      image: img3,
      title: "Quality Testing Lab", 
      description: "Advanced quality control measures"
    },
    { 
      image: img4,
      title: "Premium Packaging", 
      description: "Airtight and moisture-resistant packaging"
    },
    { 
      image: img5,
      title: "Raw Materials", 
      description: "Sourced from premium suppliers"
    }
  ];

  const duplicatedSlides = [...slides, ...slides, ...slides];

  return (
    <div className="slider-outer-container bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
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
              animationDuration: isMobile ? '20s' : '30s'
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
                    <p className="slide-description">{slide.description}</p>
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
