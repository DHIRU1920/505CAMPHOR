import { useState, useEffect } from 'react';
import Bhimesemi_100gm from "../assets/1 Bhimesemi 100gm.png";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import CamphorSlider from "./CamphorSlider";
import CamphorBenefits from "./CamphorBenefits";
import backgroundArt from '../assets/bg_Introduction.svg';
import StatsCounter from "./StatsCounter";


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
        className="min-h-[85vh] flex items-center justify-center p-6 mt-8" 
        style={{
          backgroundImage: `url(${backgroundArt})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={`max-w-7xl w-full bg-white/90 rounded-xl shadow-lg overflow-hidden transition-opacity duration-1000 ease-in-out backdrop-blur-sm ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            {/* Left Section - About Content */}
            <div className={`p-8 lg:p-12 flex flex-col justify-center transition-all duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 mb-6">
                About 505 Camphor
              </h1>
              
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Established as India&lsquo;s premier camphor manufacturer, 505 Camphor has been dedicated to delivering pure, natural camphor products since its inception. Our commitment to quality has made us a trusted name across the nation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  We take pride in our advanced manufacturing processes that preserve the natural essence of camphor while ensuring the highest standards of purity. Our products are crafted with precision, combining traditional knowledge with modern technology.
                </p>

                <p className="text-lg leading-relaxed">
                  At 505 Camphor, sustainability and quality are at the heart of everything we do. From sourcing to production, we maintain strict quality controls to deliver products that consistently exceed expectations and respect environmental values.
                </p>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className={`relative bg-gradient-to-br from-yellow-50/80 to-orange-50/80 p-8 lg:p-12 flex items-center justify-center transition-all duration-1000 ease-in-out backdrop-blur-sm ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative group w-full max-w-md">
                <img 
                  src={Bhimesemi_100gm} 
                  alt="505 Camphor Products" 
                  className="w-full h-auto rounded-lg shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-102" 
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CamphorSlider />
      <Testimonials />
      <StatsCounter></StatsCounter>
      <CamphorBenefits />
    </>
  );
};

export default Introduction;
