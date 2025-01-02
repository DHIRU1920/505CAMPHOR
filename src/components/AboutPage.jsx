/* eslint-disable react/no-unescaped-entities */
import "./AboutPage.css";
import pfp from "../assets/pfp.jpg";

const AboutPage = () => {
  return (
    <>
      <div className="about-content">
        <div className="about-section experience">
          <h2>Our Journey</h2>
          <p>
            Since 1960, 505 Camphor has been a trusted name in delivering 100%
            pure camphor...
          </p>
        </div>

        <div className="about-section why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>
            At 505 Camphor, we bring over 60 years of trust and expertise...
          </p>
        </div>
      </div>

      <div className="about-our-people">
        <h2>Our People</h2>
        <img src={pfp} alt="Profile Picture" />
        <p>
          <strong> A B C</strong>
          <br />
          Founder & CEO
        </p>
        <p>ABC has been the guiding force behind our company's success...</p>
      </div>
      <div className="about-mission-vision">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Delivering premium-quality camphor products with a commitment to
            customer satisfaction and sustainable manufacturing practices.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be India's leading camphor manufacturer by fostering innovation,
            ensuring excellence, and creating lasting value for our customers
            and stakeholders.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Strength</h2>
          <p>
            Our dedicated team, advanced production facility, and unwavering
            commitment to superior quality define our strength and drive our
            success.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
