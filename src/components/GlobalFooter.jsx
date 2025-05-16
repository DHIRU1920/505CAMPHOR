import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import './GlobalFooter.css'; // Updated CSS
import { useEffect } from 'react';

const GlobalFooter = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCu1np9drC6gd2p8JfqUHDmrHiKFesI6wU&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 16.847280739069337, lng: 74.57063111468786 },
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 16.847280739069337, lng: 74.57063111468786 },
          map: map,
          title: "Our Location",
        });
      };
    };

    loadGoogleMaps();
  }, []);

  return (
    <footer className="global-footer py-10 bg-gray-800 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Location Section */}
        <div className="lg:pr-16">
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div id="map" style={{ width: "100%", height: "200px", borderRadius: "10px" }}></div>
        </div>

        {/* Featured Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Featured Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> Home</Link></li>
            <li><Link to="/about" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> About Us</Link></li>
            <li><Link to="/product-gallery" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> Our Products</Link></li>
            <li><Link to="/faq" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> FAQ</Link></li>
            <li><Link to="/contact" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> Contact</Link></li>
            <li><Link to="/blog" className="hover:underline text-gray-300"><span className="text-orange-500">›</span> Blog</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Address</h3>
          <p className="text-white">Shop No 1, 100 Feet Road,</p>
          <p className="text-white">Sangli Miraj Kupwad,</p>
          <p className="text-white">Maharashtra 416416</p>
        </div>

        {/* Get Connect */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Get Connect</h3>
          <p className="mb-3 text-white"><FaPhoneAlt className="text-orange-500 inline-block mr-2" /> 9225820501</p>
          <p className="mb-3 text-white"><FaPhoneAlt className="text-orange-500 inline-block mr-2" /> 9975643505</p>
          <p>
            <FaEnvelope className="text-gray-300 inline-block mr-2" />
            <a href="505camphor.com" className="text-gray-300 hover:underline">505camphor@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm bg-gray-700 py-4"> 
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://www.facebook.com/profile.php?id=61557605817734"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 text-2xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/505.finecamphor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-white">505 Fine Camphor © 2025 All Rights Reserved. Website Design & Developed by TrioXperts.</p>
      </div>
    </footer>
  );
};

export default GlobalFooter;