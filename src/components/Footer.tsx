import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Shield, Star, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'PEB Buildings', path: '/services#peb' },
    { name: 'Heavy Fabrication', path: '/services#heavy' },
    { name: 'Structural Steel Works', path: '/services#structural' },
    { name: 'Industrial Infrastructures', path: '/services#infra' },
    { name: 'Custom Engineering', path: '/services#engineering' },
  ];

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-secondary text-white p-2.5 rounded-xl">
                <Building2 size={24} className="text-white" />
              </div>
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
              An ISO 9001:2015 Certified heavy structural steel fabrication and infrastructure EPC partner, delivering state-of-the-art PEB buildings, factories, and warehouses across India.
            </p>
            
            <div className="flex items-center gap-4 text-xs font-semibold text-gray-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg">
                <Shield size={12} className="text-secondary" />
                <span>ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded-lg">
                <Star size={12} className="text-secondary fill-secondary" />
                <span>CRISIL Rated</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
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

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="flex items-center group text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="mr-1 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 border-b border-gray-800 pb-3">
              Corporate Office
            </h4>
            
            <ul className="space-y-4 text-sm font-body text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>Plot 42-B, Industrial Area Phase II, Sector 5, Ahmedabad, Gujarat - 382480, India.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:info@ironexsteel.com" className="hover:text-white transition-colors">
                  info@ironexsteel.com
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white hover:text-secondary transition-colors"
              >
                <span>Find Us On Map</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-semibold uppercase tracking-wider">
          <p>© {new Date().getFullYear()} IRONEX Steel & Infra LLP. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
