import { Link } from 'react-router-dom';
import './RepairServices.css';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/servicesData';

const RepairServices = () => {
  // Show only first 6 services on homepage
  const homepageServices = servicesData.slice(0, 6);

  return (
    <section className="repair-services section">
      <Container>
        <SectionHeading 
          title="Our Repair Services"
          subtitle="Professional phone repair services we bring to your location"
        />
        
        <div className="services-grid">
          {homepageServices.map((service) => (
            <Card key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-quote-hint">Fast quote available</div>
              <Link to="/services" className="service-link">
                Learn more →
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="services-view-all">
          <Link to="/services" className="view-all-link">
            View All Services →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default RepairServices;