import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Button from '../common/Button';
import Container from '../common/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
    { label: 'Get a Quote', path: '/quote' }
  ];

  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <span className="logo-text">Phone Repair</span>
              <span className="logo-tagline">We Drive To You</span>
            </Link>
          </div>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className="nav-link" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav-cta">
              <Button 
                href="tel:+18622824335" 
                variant="primary"
                aria-label="Call Phone Repair at 862 282 4335"
              >
                (862) 282-4335
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;