import { Link } from 'react-router-dom';
import './Footer.css';
import Container from '../common/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    'Screen Repair',
    'Battery Replacement',
    'Water Damage Repair',
    'Camera Repair',
    'Back Glass Repair',
    'Software Troubleshooting'
  ];

  const areaLinks = [
    'Paterson, NJ',
    'Clifton, NJ',
    'Wayne, NJ',
    'Hackensack, NJ',
    'Newark, NJ',
    'Montclair, NJ'
  ];

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
          <div className="footer-info">
            <div className="footer-logo">
              <Link to="/">
                <div className="logo-text">Phone Repair</div>
                <div className="logo-tagline">We Drive To You</div>
              </Link>
            </div>
            <p className="footer-description">
              Professional mobile phone repair service in North Jersey. 
              We come to your home, office, or any convenient location.
            </p>
            <div className="footer-contact">
              <a href="tel:8622824335" className="footer-phone">(862) 282-4335</a>
              <p className="footer-hours">Open Daily: 9:00 AM – 11:00 PM</p>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Services</h4>
              <ul>
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <Link to="/services">{link}</Link>
                  </li>
                ))}
                <li className="view-all-footer-link">
                  <Link to="/services" className="view-all-button">View All Services →</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Service Areas</h4>
              <ul>
                {areaLinks.map((area) => (
                  <li key={area}>
                    <Link to="/service-areas">{area}</Link>
                  </li>
                ))}
                <li className="view-all-footer-link">
                  <Link to="/service-areas" className="view-all-button">View All Areas →</Link>
                </li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Phone Repair — We Drive To You. All rights reserved.</p>
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