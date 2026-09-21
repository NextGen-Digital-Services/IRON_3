import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ContactForm from './ContactForm';
import { useModal } from '../context/ModalContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isQuoteOpen, setIsQuoteOpen } = useModal();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Access',
      path: '/capabilities/scaffolding',
    },
    {
      name: 'Supply',
      path: '/capabilities/steel',
    },
    {
      name: 'Capabilities',
      path: '/capabilities',
      dropdown: [
        { name: 'Scrap Procurement', path: '/capabilities/scrap' },
        { name: 'Scaffolding & Formwork', path: '/capabilities/scaffolding' },
        { name: 'Steel & Material Supply', path: '/capabilities/steel' },
        { name: 'Fabrication & Civil', path: '/capabilities/fabrication' },
      ]
    },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/quote' },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#07101A]/95 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-[#07101A]'
        }`}
        style={{ height: isScrolled ? '52px' : '56px' }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            
            {/* Left: Logo */}
            <Link to="/" className="flex items-center gap-2.5 group focus:outline-none shrink-0">
              <img 
                src="/logo.png" 
                alt="IRONEX" 
                className="h-8 w-auto brightness-125 contrast-125 opacity-95 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-extrabold tracking-[-0.02em] text-[#F4F1EA] leading-none">
                  IRONEX
                </span>
                <span className="text-[8px] font-semibold tracking-[0.15em] text-[#F4F1EA]/40 uppercase leading-none hidden sm:inline">
                  Steel & Infra
                </span>
              </div>
            </Link>

            {/* Center: Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  {link.dropdown ? (
                    <button className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#F4F1EA]/60 hover:text-[#C66B45] transition-colors duration-300 focus:outline-none">
                      {link.name}
                      <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                          isActive
                            ? 'text-[#C66B45]'
                            : 'text-[#F4F1EA]/60 hover:text-[#C66B45]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute left-0 top-full pt-2 w-56 z-50">
                      <div className="bg-[#09131E] border border-white/[0.06] py-2 shadow-2xl">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#F4F1EA]/50 hover:text-[#C66B45] hover:bg-white/[0.03] transition-all duration-200"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right: CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/quote"
                className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] bg-[#C66B45] text-[#F4F1EA] hover:bg-[#D47B55] transition-colors duration-300"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile: Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#F4F1EA]/70 hover:text-[#C66B45] focus:outline-none p-1"
              aria-label="Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Bottom border line */}
        <div className={`absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />
      </header>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#07101A]/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Drawer */}
        <div className={`absolute right-0 top-0 bottom-0 w-72 bg-[#09131E] border-l border-white/[0.06] flex flex-col transition-transform duration-400 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex justify-between items-center px-5 h-14 border-b border-white/[0.06]">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#F4F1EA]/50">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-[#F4F1EA]/50 hover:text-[#C66B45]">
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="flex justify-between items-center w-full px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-[#F4F1EA]/60 hover:text-[#C66B45] transition-colors"
                    >
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name ? 'max-h-60' : 'max-h-0'}`}>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block pl-8 pr-5 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] transition-colors border-b border-white/[0.04] ${
                        isActive ? 'text-[#C66B45]' : 'text-[#F4F1EA]/60 hover:text-[#C66B45]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          <div className="px-5 py-5 border-t border-white/[0.06]">
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center text-[10px] font-bold uppercase tracking-[0.15em] bg-[#C66B45] text-[#F4F1EA] hover:bg-[#D47B55] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-14" />

      {/* Quote Modal */}
      {isQuoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-[#07101A]/80 backdrop-blur-sm transition-opacity" onClick={() => setIsQuoteOpen(false)} />
          <div className="bg-[#F3F0E9] shadow-2xl max-w-2xl w-full z-10 overflow-hidden relative border border-[#D5D0C7] flex flex-col max-h-[90vh]">
            <div className="bg-[#07101A] px-6 py-4 flex justify-between items-center border-b border-white/[0.06]">
              <div>
                <h3 className="text-sm font-extrabold text-[#F4F1EA] uppercase tracking-[0.12em]">Get a Quote</h3>
                <p className="text-[10px] text-[#F4F1EA]/40 mt-1 tracking-wide">Share your project details and we will connect you with the right division.</p>
              </div>
              <button onClick={() => setIsQuoteOpen(false)} className="text-[#F4F1EA]/40 hover:text-[#C66B45] transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <ContactForm isModal={true} onSuccess={() => setIsQuoteOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
