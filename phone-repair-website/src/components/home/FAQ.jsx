import { Link } from 'react-router-dom';
import './FAQ.css';
import Container from '../common/Container';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';
import { faqData } from '../../data/faqData';

const FAQ = () => {
  // Show only first 4 FAQs on homepage
  const homepageFaqs = faqData.slice(0, 4);

  return (
    <section className="faq section">
      <Container>
        <SectionHeading 
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about our mobile repair service"
        />
        
        <div className="faq-grid">
          {homepageFaqs.map((item) => (
            <Card key={item.id} className="faq-card">
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </Card>
          ))}
        </div>
        
        <div className="faq-view-all">
          <Link to="/faq" className="view-all-link">
            View All FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;