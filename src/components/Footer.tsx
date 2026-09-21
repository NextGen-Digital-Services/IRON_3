import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07101A] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 py-16 lg:py-20">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/footer-logo.png" alt="IRONEX" className="h-8 w-auto brightness-125 contrast-125 opacity-80" />
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-extrabold tracking-[-0.02em] text-[#F4F1EA] leading-none">IRONEX</span>
                <span className="text-[8px] font-semibold tracking-[0.15em] text-[#F4F1EA]/30 uppercase">Steel & Infra</span>
              </div>
            </Link>
            <p className="text-[11px] text-[#F4F1EA]/35 leading-relaxed font-body max-w-xs">
              An integrated industrial company operating across scrap procurement, scaffolding systems, steel and material supply, structural fabrication and civil works. Built on 21+ years of family-led industrial experience.
            </p>
          </div>

          {/* Divisions */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-5">Divisions</h4>
            <ul className="space-y-3">
              {[
                { name: 'Scrap Procurement', path: '/capabilities/scrap' },
                { name: 'Scaffolding & Formwork', path: '/capabilities/scaffolding' },
                { name: 'Steel & Material Supply', path: '/capabilities/steel' },
                { name: 'Fabrication & Civil', path: '/capabilities/fabrication' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[11px] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'About', path: '/about' },
                { name: 'Industries', path: '/industries' },
                { name: 'Contact', path: '/quote' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[11px] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C66B45] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#F4F1EA]/35 font-body leading-relaxed">Uran, Maharashtra. Operational base: Uttarshiv, Uran region.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C66B45] shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919324448080" className="text-[11px] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors">+91 9324448080</a>
                  <a href="tel:+919321028080" className="text-[11px] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors">+91 9321028080</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#C66B45] shrink-0" />
                <a href="mailto:info@ironex.com" className="text-[11px] text-[#F4F1EA]/35 hover:text-[#C66B45] transition-colors">info@ironex.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#F4F1EA]/25 uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} IRONEX Steel & Infra LLP. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] text-[#F4F1EA]/25 uppercase tracking-[0.1em]">
            <a href="#" className="hover:text-[#C66B45] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#C66B45] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
