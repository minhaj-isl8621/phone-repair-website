import Hero from '../components/home/Hero';
import RepairServices from '../components/home/RepairServices';
import ServiceAreas from '../components/home/ServiceAreas';
import WhyChooseUs from '../components/home/WhyChooseUs';
import RequestQuote from '../components/home/RequestQuote';
import FAQ from '../components/home/FAQ';

const HomePage = () => {
  return (
    <>
      <Hero />
      <RepairServices />
      <ServiceAreas />
      <WhyChooseUs />
      <RequestQuote />
      <FAQ />
    </>
  );
};

export default HomePage;