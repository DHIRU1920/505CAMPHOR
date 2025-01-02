/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Footer.module.css';

// Import your image - make sure the path is correct
import bgImage from '../assets/footer.jpg';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <ImageOverlay />
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>COMPANY & CONTACT</h3>
          <p className={styles.sectionText}>Manufacturer of 505 Brand Fine Camphor.</p>
          <p className={styles.sectionText}>Email: info@camphor505.com</p>
          <p className={styles.sectionText}>Phone: +91-9876543210</p>
          <p className={styles.sectionText}>Address: 100 FL Road, Sangli, Maharashtra</p>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.sectionTitle}>BUSINESS HOURS</h3>
          <p className={styles.sectionText}>Mon-Fri: 9 AM - 6 PM</p>
          <p className={styles.sectionText}>Sat: 10 AM - 5 PM</p>
          <p className={styles.sectionText}>Sun: Closed</p>
          <form className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email to stay updated"
              className={styles.formInput}
            />
            <button type="button" className={styles.subscribeButton}>
              Subscribe to Updates
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ImageOverlay = () => {
  return (
    <div className={styles.imageWrapper}>
      <img src={bgImage} alt="505 Brand Fine Camphor" className={styles.image} />
      <div className={styles.overlay} />
    </div>
  );
};

export default Footer;