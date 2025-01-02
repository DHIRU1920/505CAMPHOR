// Testimonials.jsx
import { useMemo, useEffect, useState } from 'react';
import './Testimonials.css'; // Ensure this imports your CSS file

const Testimonials = () => {
  const testimonials = useMemo(() => [
    {
      name: 'John Doe',
      testimonial: 'Camphor has been a lifesaver for my sinus issues. It provides instant relief and clears congestion effectively.',
    },
    {
      name: 'Jane Smith',
      testimonial: 'I love using camphor in my diffuser. The aroma is so calming and helps me relax after a long day.',
    },
    {
      name: 'David Wilson',
      testimonial: 'Using camphor in my steam inhaler has drastically improved my breathing during allergy season.',
    },
  ], []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="heading">Testimonials</h2>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${index === currentTestimonial ? 'active' : ''}`}
            >
              <div className="testimonial-content">
                <p>{testimonial.testimonial}</p>
                <span>- {testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination or manual controls */}
        <div className="pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            ></button>
          ))}
        </div>
      </div>

      {/* Render the Timeline component */}
      
    </div>
  );
};

export default Testimonials;
