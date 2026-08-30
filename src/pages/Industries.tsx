import { 
  Building2, 
  Layers, 
  Workflow, 
  Anchor, 
  TrendingUp, 
  Zap, 
  Truck, 
  Cpu,
  ArrowRight
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

import factoryImg from '../assets/about_factory.jpg';
import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import demolitionImg from '../assets/demolition.jpg';

export default function Industries() {
  const { setIsQuoteOpen } = useModal();

  const industriesList = [
    {
      name: 'Ports & Logistics',
      icon: <Anchor size={24} />,
      image: heroImg,
      overview: 'Ports, warehouses and logistics operators around the Nhava Sheva and Uran industrial region needing access systems, material supply and civil support.',
      challenges: [
        'Restricted site access',
        'Continuous operations',
        'Heavy-material movement',
        'Strict safety requirements',
        'Limited shutdown windows',
        'Corrosive environments',
        'Space constraints'
      ],
      support: [
        'Scrap lifting',
        'Structural fabrication',
        'Scaffolding',
        'Steel supply',
        'Repairs and modifications',
        'Civil support'
      ],
      cta: 'Discuss a Port or Terminal Requirement'
    },
    {
      name: 'Industrial Manufacturing',
      icon: <Cpu size={24} />,
      image: pebImg,
      overview: 'Production facilities needing structural fabrication, steel and pipe supply, scrap clearing and civil works.',
      challenges: [
        'Production continuity',
        'Machinery access',
        'Recurring scrap generation',
        'Maintenance shutdowns',
        'Structural modifications',
        'Urgent material requirements'
      ],
      support: [
        'Industrial scrap procurement',
        'Maintenance scaffolding',
        'Steel and pipe supply',
        'Platforms and supports',
        'Fabrication and repairs',
        'Industrial civil works'
      ],
      cta: 'Discuss an Industrial Requirement'
    },
    {
      name: 'Warehousing & Distribution',
      icon: <Layers size={24} />,
      image: projectImg,
      overview: 'Distribution centres and storage facilities requiring steel supply, scaffolding and civil execution.',
      challenges: [
        'Roofing repairs',
        'Structural extensions',
        'Loading-area modifications',
        'Material supply',
        'Access requirements',
        'Operational work around active facilities'
      ],
      support: [
        'Roofing material',
        'Structural steel',
        'Scaffolding',
        'Fabrication',
        'Repairs',
        'Civil modifications'
      ],
      cta: 'Discuss a Warehouse Project'
    },
    {
      name: 'Builders & Developers',
      icon: <TrendingUp size={24} />,
      image: factoryImg,
      overview: 'Developers needing reliable supply of steel, pipes, roofing and scaffolding for residential and commercial projects.',
      challenges: [
        'Scaffolding availability',
        'Material scheduling',
        'Multiple contractors',
        'Payment and rental reconciliation',
        'Project-stage changes',
        'Quantity variations'
      ],
      support: [
        'Scaffolding rental and sales',
        'TMT and structural steel',
        'Pipes and sheets',
        'Fabricated components',
        'Selected civil works'
      ],
      cta: 'Submit a Construction Requirement'
    },
    {
      name: 'Infrastructure Contractors',
      icon: <Workflow size={24} />,
      image: projectImg,
      overview: 'Contractors executing bridges, over-bridges, foundations and structural works.',
      challenges: [
        'Large quantities',
        'Tight timelines',
        'Documentation',
        'Project-location constraints',
        'Vendor coordination',
        'Compliance requirements'
      ],
      support: [
        'Steel supply',
        'Scaffolding systems',
        'Fabrication',
        'Project logistics',
        'Site execution',
        'Tender-related requirements'
      ],
      cta: 'Discuss an Infrastructure Requirement'
    },
    {
      name: 'EPC & Heavy Engineering',
      icon: <Building2 size={24} />,
      image: demolitionImg,
      overview: 'EPC and heavy engineering players needing fabrication, civil works and material procurement support.',
      challenges: [
        'Technical specifications',
        'Vendor eligibility',
        'Documentation',
        'Delivery sequencing',
        'Subcontractor coordination',
        'Project reporting'
      ],
      support: [
        'BOQ-based supply',
        'Project scaffolding',
        'Structural fabrication',
        'Industrial modifications',
        'Documentation support',
        'Site mobilisation'
      ],
      cta: 'Start an EPC Vendor Discussion'
    },
    {
      name: 'Government & PSUs',
      icon: <Zap size={24} />,
      image: heroImg,
      overview: 'Public-sector organisations floating tenders for steel, scrap, scaffolding and civil works.',
      challenges: [
        'Tender eligibility',
        'Documentation',
        'Statutory compliance',
        'Completion timelines',
        'Inspection procedures',
        'Payment cycles'
      ],
      support: [
        'Scrap-auction participation as buyer',
        'Material supply',
        'Scaffolding',
        'Fabrication',
        'Civil work subject to licensing and eligibility'
      ],
      cta: 'Share a Tender or Vendor Requirement'
    },
    {
      name: 'Fabricators & Contractors',
      icon: <Truck size={24} />,
      image: factoryImg,
      overview: 'Smaller fabricators and contractors sourcing raw material, pipes, roofing and scaffolding for their own jobs.',
      challenges: [
        'Material availability',
        'Rate volatility',
        'Small urgent requirements',
        'Transport',
        'Specification matching'
      ],
      support: [
        'Pipes',
        'Plates',
        'Angles',
        'Channels',
        'Beams',
        'Sheets',
        'Scaffolding',
        'Project material supply'
      ],
      cta: 'Request Contractor Pricing'
    }
  ];

  return (
    <div className="bg-bg-light">
      
      {/* Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={factoryImg} alt="Industries backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Sector-Focused Industrial Support</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Different Industries. Different Constraints. The Same Need for Reliable Execution.</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            IRONEX supports sectors where material availability, site access, lifting schedules, safety, project coordination and operational continuity directly affect commercial performance.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesList.map((ind, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group">
                
                {/* Sector Cover Image */}
                <div className="h-48 overflow-hidden relative bg-primary shrink-0">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 bg-white text-secondary p-2.5 rounded-xl shadow-md border border-gray-50 flex items-center justify-center">
                    {ind.icon}
                  </div>
                </div>

                {/* Info body */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors duration-300">{ind.name}</h3>
                    <p className="text-xs text-gray-500 font-body leading-relaxed">{ind.overview}</p>
                  </div>

                  {/* Challenges */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-[9px] font-bold text-secondary uppercase tracking-widest block mb-2">Common Challenges</span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.challenges.slice(0, 4).map((challenge, cidx) => (
                        <span key={cidx} className="text-[9px] font-semibold text-gray-500 bg-bg-light border border-gray-200/60 rounded px-2 py-1">
                          {challenge}
                        </span>
                      ))}
                      {ind.challenges.length > 4 && (
                        <span className="text-[9px] font-semibold text-secondary">+{ind.challenges.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* IRONEX Support */}
                  <div className="pt-3 border-t border-gray-100">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest block mb-2">IRONEX Support</span>
                    <div className="flex flex-wrap gap-1.5">
                      {ind.support.slice(0, 4).map((item, sidx) => (
                        <span key={sidx} className="text-[9px] font-semibold text-primary bg-secondary/10 border border-secondary/20 rounded px-2 py-1">
                          {item}
                        </span>
                      ))}
                      {ind.support.length > 4 && (
                        <span className="text-[9px] font-semibold text-secondary">+{ind.support.length - 4} more</span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors pt-2 group"
                  >
                    <span>{ind.cta}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
