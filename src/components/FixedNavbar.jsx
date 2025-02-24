import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './FixedNavbar.module.css';
import logo from '../assets/505-logo.png';

function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="505 Company Logo" />
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
            <Link to="/Faq" onClick={closeMenu}>FAQ</Link>
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