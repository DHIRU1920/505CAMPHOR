/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import pfp from "../assets/pfp.jpg";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aaron Boby",
      date: "2 November 2021",
      quote: "Easy to book online. I usually see the doctor as he always gives good tips on how to improve your dental health",
      avatar: pfp
    },
    {
      id: 2,
      name: "Daren Axell",
      date: "29 August 2021",
      quote: "Managing clinical programs and Expert Medical Opinion a person qualified to practice medicine, especially one who specializes.",
      avatar: pfp
    },
    {
      id: 3,
      name: "Dion Channing",
      date: "22 August 2021",
      quote: "I always make my appointment at the same times as bringing my children. We are always seen on time and the dentist friendly",
      avatar: pfp
    },
    {
      id: 4,
      name: "Sarah Miller",
      date: "15 August 2021",
      quote: "Excellent service and very professional staff. Would highly recommend to anyone looking for quality healthcare.",
      avatar: pfp
    },
    {
      id: 5,
      name: "James Wilson",
      date: "10 August 2021",
      quote: "The entire process was smooth and efficient. The staff is very knowledgeable and caring.",
      avatar: pfp
    },
    {
      id: 6,
      name: "dhiraj Wilson",
      date: "10 August 2021",
      quote: "The entire process was smooth and efficient. The staff is very knowledgeable and caring.",
      avatar: pfp
    },
    {
      id: 7,
      name: "sarvesh Wilson",
      date: "10 August 2021",
      quote: "The entire process was smooth and efficient. The staff is very knowledgeable and caring.",
      avatar: pfp
    },
    {
      id: 8,
      name: "paras Wilson",
      date: "10 August 2021",
      quote: "The entire process was smooth and efficient. The staff is very knowledgeable and caring.",
      avatar: pfp
    },
    {
      id: 9,
      name: "om Wilson",
      date: "10 August 2021",
      quote: "The entire process was smooth and efficient. The staff is very knowledgeable and caring.",
      avatar: pfp
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 py-16 relative overflow-hidden">
      {/* Decorative plus signs */}
      <div className="absolute inset-0">
        <div className="absolute top-8 left-1/4 text-yellow-300 text-2xl">+</div>
        <div className="absolute top-4 right-1/4 text-orange-300 text-2xl">+</div>
        <div className="absolute bottom-8 left-1/3 text-yellow-200 text-2xl">+</div>
        <div className="absolute top-1/2 right-1/4 text-orange-200 text-2xl">+</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-12 text-center">
          WHAT OUR CLIENTS SAY !!
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="text-4xl font-serif absolute top-4 left-6 opacity-50">"</div>
                  <div className={`rounded-2xl p-8 h-full ${index === currentIndex ? 'bg-gradient-to-r from-orange-300 to-yellow-200 text-white' : 'bg-white/70 text-gray-600 shadow-sm'}`}>
                    <p className="text-lg mb-8 pt-4 relative">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm opacity-70">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
            aria-label="Previous testimonials"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-orange-100 hover:text-orange-500 transition-colors"
            aria-label="Next testimonials"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;