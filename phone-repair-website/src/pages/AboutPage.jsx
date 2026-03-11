import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <Container>
          <h1 className="about-hero-title">About Phone Repair</h1>
          <p className="about-hero-subtitle">
            We drive to you — professional phone repair at your doorstep
          </p>
        </Container>
      </section>

      <section className="about-story section">
        <Container>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded in North Jersey, Phone Repair was built on a simple idea: 
              getting your phone fixed shouldn't be inconvenient. We bring the 
              repair shop to your home, office, or any location that works for you.
            </p>
            <p>
              With years of experience in phone repair, our technicians are 
              skilled in fixing all major brands and models. We use high-quality 
              parts and stand behind our work with a warranty on every repair.
            </p>
          </div>
        </Container>
      </section>

      <section className="about-values section">
        <Container>
          <SectionHeading 
            title="Our Values"
            subtitle="What drives us every day"
          />
          <div className="values-grid">
            <div className="value-card">
              <h3>Convenience</h3>
              <p>We come to you — saving you time and hassle.</p>
            </div>
            <div className="value-card">
              <h3>Quality</h3>
              <p>Premium parts and expert repairs you can trust.</p>
            </div>
            <div className="value-card">
              <h3>Transparency</h3>
              <p>Upfront pricing with no hidden fees.</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;