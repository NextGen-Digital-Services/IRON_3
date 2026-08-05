import { 
  Building2, 
  Layers, 
  Workflow, 
  Anchor, 
  TrendingUp, 
  Zap, 
  Truck, 
  Cpu 
} from 'lucide-react';

import factoryImg from '../assets/about_factory.jpg';
import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import demolitionImg from '../assets/demolition.jpg';

export default function Industries() {
  const industriesList = [
    {
      name: 'Ports & Logistics',
      icon: <Anchor size={24} />,
      image: heroImg,
      overview: 'Ports, warehouses and logistics operators around the Nhava Sheva and Uran industrial region needing access systems, material supply and civil support.',
      challenge: 'Coordinating scaffolding quantities, material deliveries and site execution across fast-moving port and warehousing environments.',
      solution: 'IRONEX supports these operations through scaffolding supply and rental, structural material supply and fabrication & civil works around the region.'
    },
    {
      name: 'Industrial Manufacturing',
      icon: <Cpu size={24} />,
      image: pebImg,
      overview: 'Production facilities needing structural fabrication, steel and pipe supply, scrap clearing and civil works.',
      challenge: 'Managing material availability, access requirements and execution timelines across working plants.',
      solution: 'The relevant IRONEX division reviews each requirement for feasibility and delivers with defined responsibility.'
    },
    {
      name: 'Warehousing & Distribution',
      icon: <Layers size={24} />,
      image: projectImg,
      overview: 'Distribution centres and storage facilities requiring steel supply, scaffolding and civil execution.',
      challenge: 'Achieving clear spans and continuous floor utilisation without disrupting ongoing operations.',
      solution: 'IRONEX supplies structural steel, roofing material and scaffolding while supporting civil works with clear scope agreements.'
    },
    {
      name: 'Builders & Developers',
      icon: <TrendingUp size={24} />,
      image: factoryImg,
      overview: 'Developers needing reliable supply of steel, pipes, roofing and scaffolding for residential and commercial projects.',
      challenge: 'Keeping material availability and pricing transparent across changing project schedules.',
      solution: 'Honest capability and clear rate and quantity terms are communicated before any order is confirmed.'
    },
    {
      name: 'Infrastructure Contractors',
      icon: <Workflow size={24} />,
      image: projectImg,
      overview: 'Contractors executing bridges, over-bridges, foundations and structural works.',
      challenge: 'Tight timelines, site access constraints and material quality requirements.',
      solution: 'IRONEX coordinates material supply, access systems and fabrication to keep execution moving on schedule.'
    },
    {
      name: 'EPC & Heavy Engineering',
      icon: <Building2 size={24} />,
      image: demolitionImg,
      overview: 'EPC and heavy engineering players needing fabrication, civil works and material procurement support.',
      challenge: 'Integrating multiple capability streams under defined commercial and operational ownership.',
      solution: 'Four specialised divisions allow clients to engage one capability or combine several under one accountable partner.'
    },
    {
      name: 'Government & PSUs',
      icon: <Zap size={24} />,
      image: heroImg,
      overview: 'Public-sector organisations floating tenders for steel, scrap, scaffolding and civil works.',
      challenge: 'Meeting specification, compliance and documentation requirements through a defined process.',
      solution: 'IRONEX responds through its documented enquiry and quotation process with clear scope and honest capability.'
    },
    {
      name: 'Fabricators & Contractors',
      icon: <Truck size={24} />,
      image: factoryImg,
      overview: 'Smaller fabricators and contractors sourcing raw material, pipes, roofing and scaffolding for their own jobs.',
      challenge: 'Sourcing material in right quantities and timelines at fair commercial terms.',
      solution: 'IRONEX supplies structural steel, pipes, roofing material and scaffolding with availability confirmed before dispatch.'
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

                  {/* Challenges and Solutions lists */}
                  <div className="space-y-3 pt-3 border-t border-gray-100 font-body text-xs text-gray-500">
                    <div>
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-widest block">The Challenge:</span>
                      <p className="italic">{ind.challenge}</p>
                    </div>
                    <div className="pt-1">
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest block">IRONEX Solution:</span>
                      <p className="font-semibold text-primary">{ind.solution}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
