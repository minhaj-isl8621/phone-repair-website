import { useState } from 'react';
import './ServicesPage.css';
import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'phone', label: 'Phone Repairs' },
    { id: 'brand', label: 'Brand Specific' },
    { id: 'tablet', label: 'Tablet & iPad' },
    { id: 'laptop', label: 'Laptop & MacBook' },
    { id: 'console', label: 'Gaming Console' },
    { id: 'software', label: 'Software & Diagnostics' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(service => service.category === activeCategory);

  // Group services by category for the "all" view
  const phoneServices = servicesData.filter(s => s.category === 'phone');
  const brandServices = servicesData.filter(s => s.category === 'brand');
  const tabletServices = servicesData.filter(s => s.category === 'tablet');
  const laptopServices = servicesData.filter(s => s.category === 'laptop');
  const consoleServices = servicesData.filter(s => s.category === 'console');
  const softwareServices = servicesData.filter(s => s.category === 'software');
  const accessoryServices = servicesData.filter(s => s.category === 'accessories');

  const renderServiceCard = (service) => (
    <Card key={service.id} className="service-detail-card">
      <div className="service-detail-icon">{service.icon}</div>
      <h2 className="service-detail-title">{service.title}</h2>
      <p className="service-detail-description">{service.detailedDescription}</p>
      
      <div className="service-meta">
        <div className="meta-item">
          <span className="meta-label">Est. Time:</span>
          <span className="meta-value">{service.time}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Quote:</span>
          <span className="meta-value quote-message">Tell us your model for a quick quote</span>
        </div>
      </div>

      <div className="service-brands">
        <span className="brands-label">Compatible with:</span>
        <div className="brand-tags">
          {service.brands.map((brand, index) => (
            <span key={index} className="brand-tag">{brand}</span>
          ))}
        </div>
      </div>

      <div className="service-actions">
        <Button to="/quote" variant="primary">Request Quote</Button>
        <Button href="tel:8622824335" variant="secondary">Call Now</Button>
      </div>
    </Card>
  );

  return (
    <div className="services-page">
      <section className="services-hero">
        <Container>
          <h1 className="services-hero-title">Our Repair Services</h1>
          <p className="services-hero-subtitle">
            Professional phone, tablet, laptop, and console repair services — we come to you
          </p>
        </Container>
      </section>

      <section className="services-filter section">
        <Container>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="services-grid-section section">
        <Container>
          {activeCategory === 'all' ? (
            // Grouped view for "All Services"
            <>
              {phoneServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Phone Repairs</h2>
                  <div className="services-grid">
                    {phoneServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {brandServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Brand-Specific Repairs</h2>
                  <div className="services-grid">
                    {brandServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {tabletServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Tablet & iPad Repairs</h2>
                  <div className="services-grid">
                    {tabletServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {laptopServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Laptop & MacBook Repairs</h2>
                  <div className="services-grid">
                    {laptopServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {consoleServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Gaming Console Repairs</h2>
                  <div className="services-grid">
                    {consoleServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {softwareServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Software & Diagnostics</h2>
                  <div className="services-grid">
                    {softwareServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {accessoryServices.length > 0 && (
                <div className="service-group">
                  <h2 className="service-group-title">Accessories & Protection</h2>
                  <div className="services-grid">
                    {accessoryServices.map(renderServiceCard)}
                  </div>
                </div>
              )}

              {/* Other Repairs Card - Now matches standard styling */}
              <div className="service-group">
                <h2 className="service-group-title">More Repairs Available</h2>
                <div className="services-grid">
                  <Card className="service-detail-card">
                    <div className="service-detail-icon">🔧</div>
                    <h2 className="service-detail-title">Other Repairs & More Devices</h2>
                    <p className="service-detail-description">
                      Don't see your issue listed? Contact us for a quick quote. 
                      We repair many other device problems and major brands.
                    </p>
                    <div className="service-meta">
                      <div className="meta-item">
                        <span className="meta-label">Have a question?</span>
                        <span className="meta-value">We're here to help</span>
                      </div>
                    </div>
                    <div className="service-brands">
                      <span className="brands-label">We repair:</span>
                      <div className="brand-tags">
                        <span className="brand-tag">All iPhone models</span>
                        <span className="brand-tag">All Samsung models</span>
                        <span className="brand-tag">All Google Pixel</span>
                        <span className="brand-tag">Motorola</span>
                        <span className="brand-tag">OnePlus</span>
                        <span className="brand-tag">And more</span>
                      </div>
                    </div>
                    <div className="service-actions">
                      <Button to="/quote" variant="primary">Request Quote</Button>
                      <Button href="tel:8622824335" variant="secondary">Call Now</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            // Filtered view
            <div className="services-grid">
              {filteredServices.map(renderServiceCard)}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;