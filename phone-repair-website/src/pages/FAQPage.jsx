import Container from '../components/common/Container';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { faqData } from '../data/faqData';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <section className="faq-hero">
        <Container>
          <h1 className="faq-hero-title">Frequently Asked Questions</h1>
          <p className="faq-hero-subtitle">
            Got questions? We've got answers.
          </p>
        </Container>
      </section>

      <section className="faq-grid-section section">
        <Container>
          <div className="faq-full-grid">
            {faqData.map((item) => (
              <Card key={item.id} className="faq-full-card">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQPage;