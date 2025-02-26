/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import React Helmet
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactForm = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) return;

      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 16.847280739069337, lng: 74.57063111468786 },
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: { lat: 16.847280739069337, lng: 74.57063111468786 },
        map: map,
        title: 'Our Location',
      });
    };

    if (window.google) {
      loadGoogleMaps();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onload = () => loadGoogleMaps();
      document.body.appendChild(script);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_vxmiclc',
      'template_hd2axx8',
      e.target,
      'wfzuteBQ1ALlpu7Qu'
    ).then(
      (result) => {
        alert('Message sent successfully!');
      },
      (error) => {
        alert('Failed to send message. Please try again.');
      }
    );
    e.target.reset();
  };

  return (
    <>
      {/* Page-Specific SEO with React Helmet */}
      <Helmet>
        <title>Contact Us - 505 Camphor</title>
        <meta
          name="description"
          content="Get in touch with 505 Camphor for inquiries, support, or bulk orders. Visit our location in Sangli, Maharashtra, or send us a message."
        />
        <meta
          name="keywords"
          content="505 Camphor, contact us, camphor inquiries, Sangli location, bulk orders"
        />
        <meta property="og:title" content="Contact Us - 505 Camphor" />
        <meta
          property="og:description"
          content="Get in touch with 505 Camphor for inquiries, support, or bulk orders. Visit our location in Sangli, Maharashtra, or send us a message."
        />
        <link rel="canonical" href="https://www.505camphor.com/contact" />
      </Helmet>

      {/* Contact Form Content */}
      <div className={styles.contactContainer}>
        <h2 className={styles.title}>CONTACT US</h2>
        <div className={styles.gridContainer}>
          {/* Left Side - Contact Form */}
          <div className={styles.formSection}>
            <form className={styles.contactForm} onSubmit={sendEmail}>
              <input type="text" name="sender_name" placeholder="Name" required />
              <div className={styles.inputRow}>
                <input type="email" name="sender_email" placeholder="Email" required />
                <input type="text" name="sender_mobile" placeholder="Mobile" required />
              </div>
              <textarea name="sender_message" placeholder="Message" required></textarea>
              <button type="submit" className={styles.sendButton}>Send</button>
              <br />
            </form>
          </div>

          {/* Right Side - Address Section */}
          <div className={styles.addressSection}>
            <h3 className={styles.addressTitle}>Address</h3>
            <div className={styles.addressItem}>
              <FaMapMarkerAlt /> Shop No 1 100 Futi Sangli, Sangli Miraj Kupwad, Maharashtra 416416
            </div>
            <div className={styles.addressItem}>
              <FaEnvelope /> 505camphor@gmail.com
            </div>
            <div className={styles.addressItem}>
              <FaPhoneAlt /> 9225820501
            </div>
            <div className={styles.addressItem}>
              <FaPhoneAlt /> 9975643505
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className={styles.mapContainer}>
          <div id="map" className={styles.map}></div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;