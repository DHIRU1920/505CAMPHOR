import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Helmet } from 'react-helmet'; // Import Helmet
import styles from './FixedNavbar.module.css';
import logo from '../assets/505-logo.png'; // Import the logo

function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on window resize if it's no longer mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  // Dynamically set the title and meta tags based on the current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home - 505 Camphor';
      case '/about':
        return 'About Us - 505 Camphor';
      case '/product-gallery':
        return 'Product Gallery - 505 Camphor';
      case '/faq':
        return 'FAQ - 505 Camphor';
      case '/contact':
        return 'Contact Us - 505 Camphor';
      case '/blog':
        return 'Blog - 505 Camphor';
      default:
        return '505 Camphor';
    }
  };

  return (
    <>
      {/* Add Helmet to manage the document head */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta
          name="description"
          content="505 Camphor - Premium quality camphor for spiritual, cultural, and daily use. Explore our products, benefits, and more."
        />
        <meta
          name="keywords"
          content="505 Camphor, camphor for worship, spiritual camphor, buy camphor, camphor benefits"
        />
      </Helmet>

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="505 Company Logo" /> {/* Use the imported logo */}
        </div>
        <ul className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
          <li>
            <Link to="/product-gallery" onClick={closeMenu}>Product Gallery</Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </li>
          <li>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
          </li>
        </ul>
        <button
          className={styles.menuIcon}
          onClick={handleMenuClick}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
      <div className={styles.navbarSpacing}></div>
    </>
  );
}

export default FixedNavbar;