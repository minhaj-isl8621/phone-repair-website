import './WhyChooseUs.css';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "We drive to you",
      description: "Home, office, or anywhere convenient — we bring the repair shop to your location.",
      icon: "🚗"
    },
    {
      id: 2,
      title: "Same-day service",
      description: "Fast response and flexible scheduling. Most repairs completed in under an hour.",
      icon: "⚡"
    },
    {
      id: 3,
      title: "Upfront pricing",
      description: "Clear, honest quotes before we start. No hidden fees or surprise charges.",
      icon: "💰"
    },
    {
      id: 4,
      title: "Warranty included",
      description: "All repairs come with our warranty for your peace of mind.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="why-choose-us section">
      <Container>
        <SectionHeading 
          title="Why Customers Choose Us"
          subtitle="We make phone repair simple, convenient, and reliable"
        />
        
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <Card key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;