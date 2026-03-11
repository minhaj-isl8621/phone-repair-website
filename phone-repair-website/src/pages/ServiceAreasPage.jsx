import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { serviceAreasData } from '../data/serviceAreasData';
import './ServiceAreasPage.css';

const ServiceAreasPage = () => {
  return (
    <div className="service-areas-page">
      <section className="areas-hero">
        <Container>
          <h1 className="areas-hero-title">Service Areas</h1>
          <p className="areas-hero-subtitle">
            We come to you anywhere in these North Jersey locations
          </p>
        </Container>
      </section>

      <section className="areas-grid-section section">
        <Container>
          <div className="areas-full-grid">
            {serviceAreasData.map((area) => (
              <Card key={area.id} className="area-full-card">
                <h2 className="area-city">{area.city}, {area.state}</h2>
                <p className="area-description">{area.description}</p>
                <a href={`tel:8622824335`} className="area-phone">
                  Call for service in {area.city}
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServiceAreasPage;