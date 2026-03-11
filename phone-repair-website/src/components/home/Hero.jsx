import './Hero.css';
import Button from '../common/Button';
import Container from '../common/Container';

const Hero = () => {
  return (
    <section className="hero hero-with-image">
      <div className="hero-overlay"></div>
      <Container>
        <div className="hero-content">
          <h1 className="hero-title">Mobile Phone Repair in North Jersey</h1>
          <p className="hero-subtitle">
            <span className="highlight">We come to your home, office, or convenient location</span> — fast, same-day service.
          </p>
          <div className="hero-buttons">
            <Button href="tel:8622824335" variant="primary" className="hero-btn">
              Call Now
            </Button>
            <Button to="/quote" variant="dark" className="hero-btn">
              Get a Quote
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;