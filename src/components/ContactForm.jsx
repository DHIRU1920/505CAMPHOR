import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  // Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vxmiclc',  // Replace with your EmailJS Service ID
        'template_hd2axx8', // Replace with your EmailJS Template ID
        e.target,           // The form element
        'wfzuteBQ1ALlpu7Qu'   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  // Google Maps initialization
  useEffect(() => {
    const initialize = () => {
      const mapOptions = {
        center: new window.google.maps.LatLng(16.847280739069337, 74.57063111468786),
        zoom: 18,
        mapTypeId: window.google.maps.MapTypeId.HYBRID,
        scrollwheel: false,
        draggable: false,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
      };
      const map = new window.google.maps.Map(document.getElementById('map-canvas'), mapOptions);

      new window.google.maps.Marker({
        position: { lat: 16.847280739069337, lng: 74.57063111468786 },
        map: map,
        title: 'Our Location',
      });
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?AIzaSyCu1np9drC6gd2p8JfqUHDmrHiKFesI6wU`; // Replace with your Google Maps API key
      script.async = true;
      script.defer = true;
      script.onload = initialize;
      document.head.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div className={styles.contact} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>

      <div className={styles.contactContainer}>
        <div className={styles.mergedSections}>
          <div className={styles.location}>
            <h3>📍 Our Location</h3>
            <p>Shop No 1, 100 Futi</p>
            <p>Sangli, Sangli Miraj Kupwad, Maharashtra 416416</p>
            <p>Phone: +91 9225820501</p>
          </div>

          <div className={styles.contactInfo}>
            <h3>📞 Contact Information</h3>
            <p><strong>Mobile:</strong> +1 (555) 123-4567</p>
            <p><strong>Email:</strong> contact@example.com</p>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={sendEmail}>
          <h4>📧 Send us a Message</h4>
          <input type="text" name="sender_name" placeholder="Your Name" required />
          <input type="email" name="sender_email" placeholder="Your Email" required />
          <textarea name="sender_message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="map-canvas" className={styles.map}></div>
    </div>
  );
};

export default ContactForm; // Ensure this is here
