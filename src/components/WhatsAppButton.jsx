import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hello, I am interested in your services.");
  const whatsappLink = `https://wa.me/9225820501?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} style={{ marginRight: '10px' }} />
      Chat with us on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
