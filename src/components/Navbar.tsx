import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from './ContactForm';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isQuoteOpen, setIsQuoteOpen } = useModal();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Track scroll position for header shadow/height transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Capabilities',
      path: '/capabilities',
      dropdown: [
        { name: 'Site Transformation', path: '/capabilities#site-transformation' },
        { name: 'Project Materials', path: '/capabilities#project-materials' },
        { name: 'Steel Engineering', path: '/capabilities#steel-engineering' },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Industries', path: '/industries' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-primary text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-gray-800 hidden sm:flex">
        <div className="flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone size={12} className="text-secondary" />
            <span>+91 98765 43210</span>
          </a>
          <a href="mailto:info@ironexsteel.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail size={12} className="text-secondary" />
            <span>info@ironexsteel.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={12} className="text-secondary" />
          <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-40 bg-white transition-all duration-300 border-b border-gray-100 ${
          isScrolled ? 'py-3 shadow-md' : 'py-5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="bg-primary text-white p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-105">
                <Building2 size={24} className="text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-primary leading-none">
                  IRON<span className="text-secondary">EX</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase leading-none mt-1">
                  Steel & Infra LLP
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group py-2"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors focus:outline-none py-1"
                    >
                      {link.name}
                      <ChevronDown size={14} className="transition-transform duration-250 group-hover:rotate-180 text-gray-400" />
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-sm font-semibold transition-colors py-1 ${
                          isActive
                            ? 'text-secondary border-b-2 border-secondary'
                            : 'text-primary hover:text-secondary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-gray-100 py-3 z-50 animate-fade-in">
                      {link.dropdown.map((subItem) => (
                        <HashLink
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-xs font-semibold text-primary hover:bg-[#F7F8FA] hover:text-secondary transition-colors"
                        >
                          {subItem.name}
                        </HashLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/quote"
                className="bg-secondary hover:bg-opacity-90 text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-sm text-center focus:outline-none"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary hover:text-secondary focus:outline-none p-2 rounded-lg"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          
          {/* Drawer Body */}
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl flex flex-col z-40 p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold tracking-tight text-primary">
                IRON<span className="text-secondary">EX</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary hover:text-secondary focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-2">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="flex justify-between items-center w-full text-base font-semibold text-primary py-2 hover:text-secondary"
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-300 ${
                          activeDropdown === link.name ? 'max-h-60 opacity-100 py-1' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {link.dropdown.map((subItem) => (
                          <HashLink
                            key={subItem.name}
                            to={subItem.path}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm text-gray-600 hover:text-secondary py-1"
                          >
                            {subItem.name}
                          </HashLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block text-base font-semibold py-2 transition-colors ${
                          isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-secondary hover:bg-opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 text-center shadow-sm"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Reusable Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div className="fixed inset-0 bg-primary bg-opacity-70 backdrop-blur-xs transition-opacity" onClick={() => setIsQuoteOpen(false)} />
          
          {/* Modal Container */}
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full z-10 overflow-hidden relative border border-gray-100 flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="bg-primary px-6 py-4 flex justify-between items-center border-b border-gray-800">
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Request A Business Quote</h3>
                <p className="text-xs text-gray-400 mt-1">Submit your engineering and infrastructure requirements.</p>
              </div>
              <button
                onClick={() => setIsQuoteOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Form Content */}
            <div className="p-6 overflow-y-auto">
              <ContactForm isModal={true} onSuccess={() => setIsQuoteOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Simple internal helper component to handle hash linking for dropdowns without extra libraries if needed
function HashLink({ to, className, children, onClick }: { to: string; className: string; children: React.ReactNode; onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      if (window.location.pathname === path) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
