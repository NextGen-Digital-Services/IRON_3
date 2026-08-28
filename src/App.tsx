import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LogoIntro from './components/intro/LogoIntro';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import Clients from './pages/Clients';
import Quote from './pages/Quote';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
  }, []);

  return (
    <ModalProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-bg-light">
          {/* Logo Intro - plays on every refresh */}
          {!introComplete && (
            <LogoIntro onComplete={handleIntroComplete} />
          )}

          {/* ScrollToTop handles window positioning on route changes */}
          <ScrollToTop />
          
          {/* Header/Navbar */}
          <Navbar />
          
          {/* Main Page Content */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/quote" element={<Quote />} />
              
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Button */}
          <FloatingWhatsApp />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}
