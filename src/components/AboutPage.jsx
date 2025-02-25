/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Helmet } from "react-helmet"; // Import React Helmet
import "./AboutPage.css";
import pfp from "../assets/pfp.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Page-Specific SEO with React Helmet */}
      <Helmet>
        <title>About Us - 505 Camphor</title>
        <meta
          name="description"
          content="Learn about 505 Camphor's journey, mission, vision, and the people behind our success. Trusted since 1960 for pure, natural camphor."
        />
        <meta
          name="keywords"
          content="505 Camphor, about us, camphor history, camphor mission, camphor vision, camphor team"
        />
        <meta property="og:title" content="About Us - 505 Camphor" />
        <meta
          property="og:description"
          content="Discover the story behind 505 Camphor, our mission, vision, and the people who make it all possible."
        />
        <meta property="og:image" content="https://www.505camphor.com/images/about-us.jpg" />
        <link rel="canonical" href="https://www.505camphor.com/about" />
      </Helmet>

      <div className="about-content">
        {/* Our Journey Section */}
        <div className="about-section experience">
          <h2>Our Journey</h2>
          <p>
            Since 1960, 505 Camphor has been a trusted name in delivering 100%
            pure camphor for worship, meditation, and wellness. Our journey
            began with a simple mission: to provide the purest camphor to
            households and temples across India.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="about-section why-choose-us">
          <h2>Why Choose Us?</h2>
          <p>
            At 505 Camphor, we bring over 60 years of trust and expertise. Our
            commitment to quality, sustainability, and customer satisfaction
            sets us apart. Choose us for camphor that honors tradition and
            enhances your spiritual practices.
          </p>
        </div>
      </div>

      {/* Our People Section */}
      <div className="about-our-people">
        <h2>Our People</h2>
        <img src={pfp} alt="Profile Picture of Founder & CEO" />
        <p>
          <strong>A B C</strong>
          <br />
          Founder & CEO
        </p>
        <p>
          ABC has been the guiding force behind our company's success. With a
          passion for tradition and innovation, ABC has led 505 Camphor to
          become a household name across India.
        </p>
      </div>

      {/* Mission, Vision, and Strength Section */}
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