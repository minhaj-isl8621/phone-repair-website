import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

function App() {
  // For now, we'll manually switch between pages
  // Later we'll add React Router
  return (
    <Layout>
      <ServicesPage /> {/* Change this to HomePage to go back */}
    </Layout>
  );
}

export default App;