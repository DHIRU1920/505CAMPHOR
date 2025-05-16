/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import "./AboutPage.css";
import aboutUsImage from "../assets/505_Aboutus_2.jpg.png";
import missionIcon from "../assets/mission.png";
import visionIcon from "../assets/vision.png";
import strengthIcon from "../assets/strength.png";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - 505 Camphor</title>
        <meta
          name="description"
          content="505 Camphor: Our mission, vision and strengths as India's trusted pure camphor manufacturer since 1960."
        />
      </Helmet>

      <div className="about-page-container">
        {/* Hero Banner */}
        <div className="about-hero">
          <img
            src={aboutUsImage}
            alt="505 Pure Camphor"
            className="about-hero-image"
          />
          <h1 className="hero-title"></h1>
        </div>

        {/* Enhanced Company Introduction */}
        <div className="about-section">
          <h2>About Our Company</h2>
          <p>
            Established in <strong>1960</strong>, 505 Camphor has been a beacon
            of purity in the camphor industry for over six decades. What began
            as a small family enterprise has grown into India's most trusted
            manufacturer of 100% pure camphor tablets for religious and
            spiritual use.
          </p>

          <p>
            Our journey began with a simple vision: to provide temples and
            households across India with camphor of uncompromising purity.
            Today, we supply over <strong>10,000 temples</strong> nationwide,
            from neighborhood shrines to major pilgrimage centers, earning the
            trust of priests and devotees alike.
          </p>

          <p>
            At 505 Camphor, we combine <strong>traditional wisdom</strong> with{" "}
            <strong>modern technology</strong>. Our manufacturing process
            preserves the ancient methods of camphor purification while
            incorporating state-of-the-art German machinery for precision and
            consistency. This unique blend ensures every tablet meets our
            exacting standards of purity and performance.
          </p>

          <p>
            We take pride in our <strong>eco-conscious approach</strong> to
            manufacturing. From sustainable sourcing of raw materials to
            energy-efficient production methods, we minimize our environmental
            impact while maximizing product quality. Our facility is{" "}
            <strong>ISO-certified</strong> and follows strict hygienic protocols
            to maintain the sacred nature of our products.
          </p>

          <p>
            Beyond manufacturing, we're committed to preserving India's
            spiritual heritage. We actively support temple renovations, Vedic
            education initiatives, and cultural preservation projects across the
            country.
          </p>
        </div>

        {/* Mission, Vision, Strength - Highlighted Section */}
        <div className="core-values-section">
          <div className="value-card">
            <div className="value-icon-container">
              <img src={missionIcon} alt="Mission" className="value-icon" />
              <span className="value-number">01</span>
            </div>
            <h3>OUR MISSION</h3>
            <p>
              To deliver the purest camphor products through ethical
              manufacturing practices, enhancing spiritual experiences while
              maintaining uncompromising quality standards. We are committed to
              preserving the sanctity of religious rituals by providing products
              that meet the highest standards of purity and performance.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon-container">
              <img src={visionIcon} alt="Vision" className="value-icon" />
              <span className="value-number">02</span>
            </div>
            <h3>OUR VISION</h3>
            <p>
              To become the most trusted name in spiritual products by
              preserving traditional values while innovating our production
              processes for future generations. We aim to expand our presence
              globally while maintaining our core values of purity, quality, and
              devotion to spiritual traditions.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon-container">
              <img src={strengthIcon} alt="Strength" className="value-icon" />
              <span className="value-number">03</span>
            </div>
            <h3>OUR STRENGTH</h3>
            <p>
              <strong>60+ years</strong> of heritage | <strong>100%</strong>{" "}
              pure camphor |<strong> ISO-certified</strong> facility |{" "}
              <strong>10,000+</strong> temples trust us
              <br />
              <strong>German technology</strong> | <strong>Eco-friendly</strong>{" "}
              processes |<strong> Nationwide</strong> distribution |{" "}
              <strong>Cultural preservation</strong> initiatives
            </p>
          </div>
        </div>

        {/* Camphor Significance & Uses */}
        <div className="about-section highlight-box">
          <h2>The Sacred Essence of Camphor</h2>
          <p>
            <strong>505 Camphor</strong> is India's most trusted name for pure
            camphor, deeply rooted in spiritual traditions and holistic
            wellness. Our camphor is revered in temples and households across
            the nation, known for its divine purity and therapeutic properties.
          </p>

          <h3 className="uses-title">Sacred Applications</h3>
          <ul className="uses-list">
            <li>
              <strong>Religious Ceremonies:</strong> Our camphor is an essential
              part of Hindu rituals (aarti), where its pure flame represents the
              light of consciousness and its fragrant smoke purifies the
              atmosphere.
            </li>
            <li>
              <strong>Temple Offerings:</strong> Used daily in thousands of
              temples across India, 505 Camphor maintains the sanctity of
              worship with its clean burn and minimal residue.
            </li>
          </ul>

          <h3 className="uses-title">Holistic Benefits</h3>
          <ul className="uses-list">
            <li>
              <strong>Aromatherapy:</strong> The refreshing fragrance of our
              pure camphor helps clear nasal congestion and promotes respiratory
              wellness.
            </li>
            <li>
              <strong>Ayurvedic Tradition:</strong> Used for centuries in
              Ayurveda for its anti-inflammatory, antimicrobial, and
              pain-relieving properties.
            </li>
            <li>
              <strong>Home Purification:</strong> Natural insect repellent that
              protects clothes and sacred spaces while leaving a divine
              fragrance.
            </li>
            <li>
              <strong>Medicinal Uses:</strong> An ingredient in traditional
              remedies for cough, muscle pain, and joint inflammation when used
              properly.
            </li>
          </ul>

          <p>
            What sets <strong>505 Camphor</strong> apart is our commitment to
            preserving these traditional uses while ensuring the highest
            standards of purity. Each tablet is crafted to burn cleanly, leaving
            minimal ash - a testament to its purity that has been trusted since
            1960.
          </p>
        </div>

        {/* Legacy Section */}
        <div className="about-section">
          <h2>Our Legacy</h2>
          <p>
            From supplying small neighborhood temples in the 1960s to becoming a
            pan-India brand today, 505 Camphor has illuminated spiritual
            journeys across generations. Our story is woven into the fabric of
            India's spiritual landscape, with our camphor being used in daily
            rituals, grand festivals, and sacred ceremonies.
          </p>
          <p>
            The distinctive 505 logo has become synonymous with purity and
            trust. For over six decades, families have passed down the tradition
            of using 505 Camphor, creating an unbroken chain of devotion
            spanning generations.
          </p>
          <p>
            We remain committed to our founding principles while embracing
            innovation, ensuring that 505 Camphor continues to be the preferred
            choice for temples and households across India for generations to
            come.
          </p>
          <p className="signature">
            "Purity You Can Trust Since 1960"
            <br />- The 505 Camphor Family
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
