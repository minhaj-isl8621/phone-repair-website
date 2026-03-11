import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'services',
        element: <ServicesPage />
      },
      {
        path: 'service-areas',
        element: <ServiceAreasPage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'faq',
        element: <FAQPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'quote',
        element: <QuotePage />
      }
    ]
  }
]);

export default router;