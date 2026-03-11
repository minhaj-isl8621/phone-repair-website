import { Link } from 'react-router-dom';
import './ServiceAreas.css';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { serviceAreasData } from '../../data/serviceAreasData';

const ServiceAreas = () => {
  // Show only first 6 areas on homepage
  const homepageAreas = serviceAreasData.slice(0, 6);

  return (
    <section className="service-areas section">
      <Container>
        <SectionHeading 
          title="Service Areas"
          subtitle="We cover these North Jersey locations — and more"
        />
        
        <p className="areas-seo-text">
          We provide mobile phone repair services throughout North Jersey, including 
          <strong> Paterson, Clifton, Wayne, Hackensack, Newark, Montclair, Hoboken, Fort Lee, Parsippany, and Montville</strong>. 
          No matter where you are in these areas, we'll drive to your home, office, or any convenient location.
        </p>
        
        <div className="areas-grid">
          {homepageAreas.map((area) => (
            <div key={area.id} className="area-card">
              <div className="area-city">
                <span className="city-name">{area.city}</span>
                <span className="city-state">{area.state}</span>
              </div>
              <p className="area-description">{area.description}</p>
              <Link to={`/service-areas#${area.city.toLowerCase()}`} className="area-link">
                Get service in {area.city} →
              </Link>
            </div>
          ))}
        </div>
        
        <div className="areas-view-all">
          <Link to="/service-areas" className="view-all-link">
            View All Service Areas →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceAreas;