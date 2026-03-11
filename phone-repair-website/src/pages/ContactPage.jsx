import Container from '../components/common/Container';
import Button from '../components/common/Button';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <Container>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Get a free quote or schedule a repair
          </p>
        </Container>
      </section>

      <section className="contact-info section">
        <Container>
          <div className="contact-grid">
            <div className="contact-card">
              <h2>Call Us</h2>
              <p className="contact-phone">(862) 282-4335</p>
              <p>Open Daily: 9:00 AM – 11:00 PM</p>
              <Button href="tel:+18622824335" variant="primary">Call Now</Button>
            </div>

            <div className="contact-card">
              <h2>WhatsApp</h2>
              <p className="contact-phone">(862) 282-4335</p>
              <p>Message us on WhatsApp for quick replies</p>
              <Button 
                href="https://wa.me/18622824335?text=Hi%20I%20need%20help%20with%20my%20phone%20repair" 
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </Button>
            </div>

            <div className="contact-card">
              <h2>Quick Quote</h2>
              <p>Tell us about your phone and issue</p>
              <p>Get an upfront price in minutes</p>
              <Button to="/quote" variant="primary">Request Quote</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;