import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Timeline.css'; // Ensure this imports your CSS file

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    gsap.fromTo(
      timeline.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.2 }
    );
  }, []);

  return (
    <div className="timeline-container">
      <div className="timeline-wrapper">
        <div ref={timelineRef} className="timeline-line">
          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="timeline-date">MAY, 2020</span>
              <h3 className="timeline-title">The origin</h3>
              <p className="timeline-description">Acme was founded in Milan, Italy. Premium camphor products ensuring divine connection and positivity.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="timeline-date">MAY, 2021</span>
              <h3 className="timeline-title">The milestone</h3>
              <p className="timeline-description">Reached 5K customers. Serving customers with quality camphor to promote well-being and dispel negativity.</p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content">
              <span className="timeline-date">MAY, 2022</span>
              <h3 className="timeline-title">The acquisitions</h3>
              <p className="timeline-description">Acquired various companies, expanding camphor production and distribution channels worldwide.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <span className="timeline-date">MAY, 2023</span>
              <h3 className="timeline-title">The IPO</h3>
              <p className="timeline-description">Went public at NYSE, bringing spiritual camphor products to a global audience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
