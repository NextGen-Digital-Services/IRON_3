import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Shield, Star } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: 'About IRONEX', path: '/about' },
    { name: 'Leadership', path: '/about#leadership' },
    { name: 'Vision', path: '/about#vision' },
    { name: 'Capabilities', path: '/capabilities' },
  ];

  const divisions = [
    { name: 'Industrial Scrap Procurement', path: '/capabilities#site-transformation' },
    { name: 'Scaffolding & Formwork Systems', path: '/capabilities#project-materials' },
    { name: 'Steel & Material Supply', path: '/capabilities#steel-engineering' },
    { name: 'Fabrication & Civil Works', path: '/capabilities#fabrication-civil' },
  ];

  const exploreLinks = [
    { name: 'Industries', path: '/industries' },
  ];

  const complianceLinks = [
    { name: 'Privacy Policy', path: '#' },
    { name: 'Terms of Use', path: '#' },
    { name: 'Disclaimer', path: '#' },
  ];

  return (
    <footer className="bg-[#080C12] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/footer-logo.png" 
                alt="IRONEX Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  IRON<span className="text-secondary">EX</span>
                </span>
                <span className="text-[9px] font-semibold tracking-[0.25em] text-gray-400 uppercase leading-none mt-1">
                  Steel & Infra LLP
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-gray-400 leading-relaxed font-body">
              An integrated industrial company operating across scrap procurement, scaffolding systems, steel and material supply - built on more than 21 years of family-led industrial experience.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg">
                <Shield size={12} className="text-secondary" />
                <span>3 Businesses</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg">
                <Star size={12} className="text-secondary fill-secondary" />
                <span>21+ Years Legacy</span>
              </div>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center group text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Divisions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
              Divisions
            </h4>
            <ul className="space-y-3 text-sm">
              {divisions.map((division) => (
                <li key={division.name}>
                  <Link
                    to={division.path}
                    className="flex items-center group text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explore + Contact */}
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
                Explore
              </h4>
              <ul className="space-y-3 text-sm">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="flex items-center group text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="mr-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
                Registered Office
              </h4>
              <ul className="space-y-3 text-sm font-body text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
                  <span>Uran, Maharashtra. Operational base: Uttarshiv, Uran region.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-secondary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+919324448080" className="hover:text-white transition-colors">
                      +91 9324448080 (Scrap)
                    </a>
                    <a href="tel:+919321028080" className="hover:text-white transition-colors">
                      +91 9321028080 (Scaffolding)
                    </a>
                    <a href="tel:+919231318080" className="hover:text-white transition-colors">
                      +91 9231318080 (Supply)
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-secondary shrink-0" />
                  <a href="mailto:info@ironex.com" className="hover:text-white transition-colors">
                    info@ironex.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Compliance Row */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold uppercase tracking-wider">
              {complianceLinks.map((link) => (
                <a key={link.name} href={link.path} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500 font-semibold">
              <span>GST: 27AABFI1234N1Z5</span>
              <span className="text-gray-700">|</span>
              <span>LLP: AAB-1234</span>
            </div>
          </div>
        </div>

        {/* Footer Closing Line */}
        <p className="text-center text-xs text-gray-400 italic font-body mb-8">
          IRONEX Steel &amp; Infra LLP - Where Strength Becomes Legacy.
        </p>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} IRONEX Steel & Infra LLP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
