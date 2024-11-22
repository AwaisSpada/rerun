import logo from './assets/logo.svg';
import { useState, useEffect } from 'react';

const Header = (props) => {
  const [showHeader, setShowHeader] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // New state to control hamburger menu

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };
  function scrollToElementById(elementId, smooth = true) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start',
        });
    } else {
        console.error(`Element with ID "${elementId}" not found.`);
    }
}

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle the menu visibility
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{opacity: showHeader ? 1 : 0, transition: 'opacity 0.5s'}}>
      <div className="container">
        {/* Mobile Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Logo */}
        

        {/* Desktop Menu */}
        <ul className="desktop-nav">
          <li><a href="#paralexSection" >About</a></li>
          <li><a href="#paralexSection" >Services</a></li>
        </ul>
        <div>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
        </div>
        {/* Mobile Navigation */}
        <ul className={`mobile-nav ${isMenuOpen ? 'show' : ''}`}>
          {
            isMenuOpen && <>
            <li><a href="#paralexSection" >About</a></li>
            <li><a href="#paralexSection" >Services</a></li></>
          }
          <li><a href="#innoSec">Industries</a></li>
          <li><a href="#contactSec">Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
