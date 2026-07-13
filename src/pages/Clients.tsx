import { Handshake } from 'lucide-react';
import { useModal } from '../context/ModalContext';

import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';

export default function Clients() {
  const { setIsQuoteOpen } = useModal();

  const clientsList = [
    'Allcargo Logistics',
    'BPCL',
    'ONGC',
    'JNPA',
    'Lodha',
    'Runwal',
    'Tata',
    'Reliance',
    'Jaigarh Port (JSW)',
    'L&T'
  ];

  return (
    <div className="bg-bg-light">
      
      {/* Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={projectImg} alt="Clients backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Our Partners</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Trusted by Industry Leaders</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            We maintain long-term industrial partnerships and supply credentials with India's largest conglomerates, public sector undertakings, and port developers.
          </p>
        </div>
      </section>

      {/* Corporate Partnership Profile */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Block: Intro copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Partnership Program</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Standardized Frameworks for Mega Scale Projects</h2>
              
              <div className="text-sm text-gray-500 font-body space-y-5 leading-relaxed">
                <p>
                  At IRONEX, we believe that executing industrial projects worth crores requires more than just high-capacity machinery and structural steel. It requires absolute operational alignment. Over the past decade, we have structured our corporate workflows to integrate seamlessly with the strict vendor guidelines of India's leading engineering, procurement, and construction (EPC) conglomerates.
                </p>
                <p>
                  Our partnership program covers direct BOQ bidding clearances, periodic maintenance shutdown execution, and high-volume material supplies. Whether clearing obsolete refinery assets for BPCL or supplying high-grade structural purlins to JNPA or L&T container hubs, we guarantee complete transparency in mill-test certifications (MTC) and quality-assurance checks.
                </p>
                <p>
                  By coordinating with our clients' in-house engineering departments through STAAD.Pro and Tekla Structure modeling, we align anchor bolt placements and steel grades to minimize field corrections. Our commitment to strict safety standards makes us a trusted tier-1 vendor for complex process zones.
                </p>
              </div>
            </div>

            {/* Right Block: Values cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xs border border-gray-150 relative">
                <img src={pebImg} alt="PEB Construction site" className="w-full aspect-[4/3] object-cover" />
              </div>
              
              <div className="p-6 bg-[#F7F8FA] rounded-xl border border-gray-200 space-y-4">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                  <Handshake className="text-secondary" size={16} />
                  Cooperation Guidelines
                </h4>
                
                <ul className="space-y-3 text-xs font-body text-gray-500">
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>Transparent, open-book material cost estimation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>100% compliance with ISO 9001:2015 quality standards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>On-time project milestones backed by liquidated damages SLAs.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Grayscale Client Logos Section */}
      <section className="py-24 bg-[#F7F8FA] border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Approved Vendors List</span>
            <h2 className="text-2xl font-extrabold text-primary tracking-tight">Trusted by Major Indian Conglomerates</h2>
            <p className="text-xs text-gray-500 font-body">We are registered and cleared as official vendor partners for these key public and private entities.</p>
          </div>

          {/* Grayscale Brand Logotype Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {clientsList.map((client, idx) => (
              <div 
                key={idx} 
                className="bg-white px-6 py-8 rounded-xl border border-gray-200 shadow-xs flex items-center justify-center text-center transition-all duration-300 hover:border-secondary hover:shadow-sm"
              >
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest font-heading select-none filter opacity-75 group-hover:opacity-100">
                  {client}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Long-term partnerships CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl font-extrabold text-primary">Establish a Reliable Vendor Channel</h2>
          <p className="text-xs text-gray-500 font-body leading-relaxed max-w-2xl mx-auto">
            Do you require continuous supplies of structural materials, access scaffolding rentals, or scheduled site clearing contracts for your upcoming infrastructure works? Get in touch with our partnerships office.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-sm"
            >
              Partner with IRONEX
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
