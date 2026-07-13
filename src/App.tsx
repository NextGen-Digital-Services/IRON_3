import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Projects from './pages/Projects';
import Industries from './pages/Industries';
import Gallery from './pages/Gallery';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

export default function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-bg-light">
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
              <Route path="/projects" element={<Projects />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}
