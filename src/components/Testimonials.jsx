/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import pfp from "../assets/pfp.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarti Deshpande",
      date: "Pune",
      quote: "505 Camphor has been a part of my daily worship rituals for years. The purity and long-lasting fragrance make it the best choice for our family. I wouldn’t use any other brand!",
      avatar: pfp
    },
    {
      id: 2,
      name: "Pandit Ramnath Joshi",
      date: "Sangli",
      quote: "As the head priest of a temple, we require camphor of the highest quality. 505 Camphor never disappoints. It burns cleanly, and its divine aroma truly enhances the spiritual experience.",
      avatar: pfp
    },
    {
      id: 3,
      name: "Neha Kulkarni",
      date: "London",
      quote: "I recently moved abroad, and finding pure camphor for our cultural rituals was challenging. Thankfully, I discovered 505 Camphor, and it has been amazing. Feels just like home!",
      avatar: pfp
    },
    {
      id: 4,
      name: "Rakesh Patil",
      date: "Kolhapur",
      quote: "We order camphor in bulk for our wedding and festive events, and 505 Camphor has always delivered on time with exceptional quality. Their service is outstanding!",
      avatar: pfp
    },
    {
      id: 5,
      name: "Sneha Shah",
      date: "Mumbai",
      quote: "I love that 505 Camphor prioritizes both quality and sustainability. Their camphor is pure, and I feel great knowing I’m supporting an environmentally responsible brand.",
      avatar: pfp
    },
    {
      id: 6,
      name: "Vikram Shetty",
      date: "Bangalore",
      quote: "The calming fragrance of 505 Camphor instantly creates a serene atmosphere. It’s my go-to brand for meditation and pujas.",
      avatar: pfp
    },
    {
      id: 7,
      name: "Meera Naik",
      date: "Goa",
      quote: "As a parent, I’m always cautious about the products I use around my kids. With 505 Camphor, I feel confident about its safety and purity.",
      avatar: pfp
    },
    {
      id: 8,
      name: "Ankita Jadhav",
      date: "Nagpur",
      quote: "During festivals like Diwali, camphor is an essential part of our celebrations. 505 Camphor always delivers the best, making every moment more special.",
      avatar: pfp
    },
    {
      id: 9,
      name: "Rajesh Pawar",
      date: "Mumbai",
      quote: "Their customer service team is incredibly helpful. I once had an issue with a bulk order, and they resolved it quickly and professionally. Highly recommend 505 Camphor!",
      avatar: pfp
    },
    {
      id: 10,
      name: "Swati Dixit",
      date: "Hyderabad",
      quote: "505 Camphor stands out because of its long-lasting fragrance and clean burn. It truly adds an authentic touch to every religious ceremony.",
      avatar: pfp
    },
    {
      id: 11,
      name: "Shankar Temple Trust",
      date: "Sangli",
      quote: "Our temple trusts 505 Camphor for its consistent quality and purity. It’s an integral part of our daily rituals and festivals.",
      avatar: pfp
    },
    {
      id: 12,
      name: "Prachi Kulkarni",
      date: "Nashik",
      quote: "I recently switched to 505 Camphor, and I couldn’t be happier. The fragrance is divine, and the quality is unmatched. I’m now a loyal customer!",
      avatar: pfp
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          WHAT OUR CLIENTS SAY !!
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => ( // Removed unused `index` parameter
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.date}</p> {/* Fixed: Changed `location` to `date` */}
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