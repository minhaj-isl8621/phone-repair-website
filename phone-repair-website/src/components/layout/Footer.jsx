import { Link } from 'react-router-dom';
import './Footer.css';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: 'About', path: '/about' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
    { label: 'Get a Quote', path: '/quote' }
  ];

  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          {/* Business Info Column - Unchanged */}
          <div className="footer-info">
            <div className="footer-logo">
              <Link to="/">
                <div className="logo-text">HomeService Phone Repair NJ</div>
                <div className="logo-tagline">We Drive To You</div>
              </Link>
            </div>
            <p className="footer-description">
              Professional mobile phone repair service in North Jersey. 
              We come to your home, office, or any convenient location.
            </p>
            <div className="footer-contact">
              <a href="tel:+18622824335" className="footer-phone">(862) 282-4335</a>
              <p className="footer-hours">Open Daily: 9:00 AM – 11:00 PM</p>
            </div>
          </div>

          {/* Quick Links Column - Simplified */}
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Unchanged */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} HomeService Phone Repair NJ. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;