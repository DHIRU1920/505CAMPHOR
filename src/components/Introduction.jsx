import { useState, useEffect } from 'react';
import img1 from '../assets/img1.png';
import Slider  from "./Slider";
import Testimonials from "./Testimonials";
import CamphorSlider from "./CamphorSlider";
import CamphorBenefits from "./CamphorBenefits";


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
    <Slider></Slider>
    <div className={`min-h-screen flex items-center justify-center p-8 bg-orange-50 transition-opacity duration-1000 ease-in-out ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="max-w-7xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className={`lg:w-1/2 p-12 transition-all duration-1000 ease-in-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <h1 className="text-5xl font-bold text-orange-800 opacity-70 mb-8">505 Camphor</h1>
            <div className="bg-orange-100 p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <img src={img1} alt="Camphor Tablets" className="w-96 h-96 mx-auto mb-6 object-cover shadow-lg" /> {/* Removed rounded-full */}
              <div className="text-2xl font-semibold text-orange-800">Premium Camphor Tablets</div>
              <p className="mt-4 text-orange-600">100% Pure and Natural</p>
            </div>
          </div>
          <div className={`lg:w-1/2 p-12 bg-orange-800 bg-opacity-70 text-white transition-all duration-1000 ease-in-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}>
            <div className="mt-12">
              <p className="text-xl text-orange-100 mb-8">
                505 Camphor is a well-known brand in India, primarily recognized for producing high-quality camphor tablets. Our camphor is traditionally used in religious ceremonies, particularly in Hindu rituals, where it is burned as an offering to deities. Its flame is considered pure, and the smoke is believed to purify the surroundings.
              </p>
              <p className="text-xl text-orange-100 mb-8">
                Beyond religious use, our camphor tablets have various applications in aromatherapy, Ayurveda, and as a natural insect repellent. 505 Camphor has built a reputation for offering premium camphor tablets, widely used in households and temples across India.
              </p>
            </div>
            <h2 className="text-4xl font-bold mb-8">Camphor Benefits</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Aromatherapy for respiratory relief
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Traditional medicinal properties
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Natural insect repellent
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Used in religious ceremonies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <CamphorSlider></CamphorSlider>
    <Testimonials></Testimonials>
    <CamphorBenefits></CamphorBenefits>
    </>
  );
};

export default Introduction;
