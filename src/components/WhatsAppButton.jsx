import { FaWhatsapp } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber = "9225820501", message = "Hello, I am interested in your services." }) => {
  // Encode the message for the URL
  const encodedMessage = encodeURIComponent(message);
  // Construct the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} className="whatsapp-icon" />
      <span className="whatsapp-text">Chat with us on WhatsApp</span>
    </a>
  );
};

// Add prop-type validation
WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string, // Validate phoneNumber as a string
  message: PropTypes.string, // Validate message as a string
};

export default WhatsAppButton;