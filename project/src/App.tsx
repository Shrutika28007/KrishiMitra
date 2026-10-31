import { AppProvider, useApp } from '@/context/AppContext';
import Layout from '@/components/Layout';
import WelcomePage from '@/pages/WelcomePage';
import FarmerProfilePage from '@/pages/FarmerProfilePage';
import DashboardPage from '@/pages/DashboardPage';
import CropRecommendationsPage from '@/pages/CropRecommendationsPage';
import FinancialSimulatorPage from '@/pages/FinancialSimulatorPage';
import MarketPricesPage from '@/pages/MarketPricesPage';
import GovtSchemesPage from '@/pages/GovtSchemesPage';

function Router() {
  const { page } = useApp();

  if (page === 'welcome') return <WelcomePage />;

  return (
    <Layout>
      {page === 'profile' && <FarmerProfilePage />}
      {page === 'dashboard' && <DashboardPage />}
      {page === 'crops' && <CropRecommendationsPage />}
      {page === 'finance' && <FinancialSimulatorPage />}
      {page === 'market' && <MarketPricesPage />}
      {page === 'schemes' && <GovtSchemesPage />}
    </Layout>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
