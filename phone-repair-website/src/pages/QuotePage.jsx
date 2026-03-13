import { useState } from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import './QuotePage.css';

const QuotePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    deviceType: '',
    deviceModel: '',
    issue: '',
    contactMethod: 'phone',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <div className="quote-page">
        <section className="quote-hero">
          <Container>
            <h1 className="quote-hero-title">Quote Request Sent!</h1>
          </Container>
        </section>

        <section className="quote-success section">
          <Container>
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Thanks! We'll reach out to you very soon.</h2>
              <p className="success-message">
                One of our repair specialists will contact you within the next hour.
              </p>
              <div className="success-cta">
                <p>Need a faster quote?</p>
                <a href="tel:+18622824335" className="success-phone">Call (862) 282-4335 now</a>
              </div>
              <Button to="/" variant="primary" className="back-home-btn">
                Return to Home
              </Button>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  return (
    <div className="quote-page">
      <section className="quote-hero">
        <Container>
          <h1 className="quote-hero-title">Request a Free Quote</h1>
          <p className="quote-hero-subtitle">
            Tell us about your device and we'll provide an upfront price
          </p>
        </Container>
      </section>

      <section className="quote-form-section section">
        <Container>
          <form onSubmit={handleSubmit} className="quote-form mobile-optimized-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email (optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="deviceType">Device Type *</label>
                <select
                  id="deviceType"
                  name="deviceType"
                  value={formData.deviceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select device type</option>
                  <option value="iPhone">iPhone</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Google Pixel">Google Pixel</option>
                  <option value="Motorola">Motorola</option>
                  <option value="iPad">iPad</option>
                  <option value="Tablet">Other Tablet</option>
                  <option value="MacBook">MacBook</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="deviceModel">Device Model *</label>
                <input
                  type="text"
                  id="deviceModel"
                  name="deviceModel"
                  value={formData.deviceModel}
                  onChange={handleChange}
                  placeholder="e.g., iPhone 13, Galaxy S22"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="issue">Issue / Problem *</label>
              <input
                type="text"
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                placeholder="e.g., Cracked screen, Battery issues, Water damage"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactMethod">Preferred Contact Method *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === 'phone'}
                    onChange={handleChange}
                  />
                  Phone
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === 'email'}
                    onChange={handleChange}
                  />
                  Email
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="text"
                    checked={formData.contactMethod === 'text'}
                    onChange={handleChange}
                  />
                  Text
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Information (optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about the issue or any questions you have..."
              ></textarea>
            </div>

            {submitError && (
              <div className="submit-error">
                {submitError}
              </div>
            )}

            <div className="form-actions">
              <Button 
                type="submit" 
                variant="primary" 
                size="large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>

            <p className="form-note">
              * Required fields. We'll respond within 1 hour during business hours.
            </p>
          </form>
        </Container>
      </section>
    </div>
  );
};

export default QuotePage;