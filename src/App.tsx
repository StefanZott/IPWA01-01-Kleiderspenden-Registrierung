import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HandoverProvider } from './context/FormContext';

// Components
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Privacy from './pages/Privacy';
import Layout from './components/Layout';
import RegistrationScreen from './pages/RegistrationScreen';

function App() {
  return (
    <HandoverProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="registration" element={<RegistrationScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HandoverProvider>
  );
}

export default App
