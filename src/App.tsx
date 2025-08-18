import './css/App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HandoverProvider } from './components/context/ClothDonation';

// Components
import Home from './pages/HomeScreen';
import Impressum from './pages/ImpressumScreen';
import Privacy from './pages/PrivacyScreen';
import Layout from './components/ui/Layout';
import RegistrationScreen from './pages/RegistrationScreen';
import FormScreen from './pages/FormScreen';
import ClothDonationScreen from './pages/ClothDonationScreen';
import AGB from './pages/AgbScreen';

function App() {
  return (
    <HandoverProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<FormScreen />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="registration" element={<RegistrationScreen />} />
            <Route path="clothDonations" element={<ClothDonationScreen />} />
            <Route path="agb" element={<AGB />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HandoverProvider>
  );
}

export default App
