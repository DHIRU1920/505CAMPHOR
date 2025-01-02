import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/IMG_11.jpg';
import './Slider.css';

const images = [img1, img2, img3, img4, img5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slider-comp-container">
      {/* Loading overlay */}
      {isLoading && (
        <div className="slider-comp-loading-overlay">
          <div className="slider-comp-loading-spinner" />
        </div>
      )}

      {/* Slides */}
      <div className="slider-comp-slides-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slider-comp-slide ${
              index === currentIndex ? 'slider-comp-active' : 
              index < currentIndex ? 'slider-comp-prev' : 'slider-comp-next'}`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              onLoad={() => setIsLoading(false)}
            />
            <div className="slider-comp-slide-overlay" />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="slider-comp-nav-button slider-comp-prev-button"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="slider-comp-nav-button slider-comp-next-button"
      >
        <ChevronRight size={24} />
      </button>

      {/* Bottom controls */}
      <div className="slider-comp-controls-container">
        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="slider-comp-play-pause-button"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* Progress indicators */}
        <div className="slider-comp-progress-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`slider-comp-indicator ${
                index === currentIndex ? 'slider-comp-active-indicator' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
