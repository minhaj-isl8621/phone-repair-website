import { Link } from 'react-router-dom';
import './RequestQuote.css';
import Container from '../common/Container';
import Button from '../common/Button';

const RequestQuote = () => {
  return (
    <section className="request-quote section cta-navy">
      <Container>
        <div className="quote-content">
          <h2 className="quote-title">Need a phone repair?</h2>
          <p className="quote-text">
            Get a free quote in minutes. Tell us about your phone and issue, 
            and we'll provide an upfront price with no obligation.
          </p>
          <div className="quote-buttons">
            <Link to="/quote">
              <Button variant="primary" size="large" className="quote-btn">
                Request a Quote
              </Button>
            </Link>
            <a href="tel:8622824335">
              <Button variant="secondary" size="large" className="quote-btn">
                Call Us Now
              </Button>
            </a>
          </div>
          <p className="quote-note">
            Same-day service available in most areas • Warranty included on all repairs
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuote;