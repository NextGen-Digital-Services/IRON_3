import { 
  Building2, 
  Layers, 
  Workflow, 
  Anchor, 
  TrendingUp, 
  Lightbulb, 
  Compass, 
  Zap, 
  Activity, 
  Truck, 
  Cpu, 
  Building 
} from 'lucide-react';

import factoryImg from '../assets/about_factory.jpg';
import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import demolitionImg from '../assets/demolition.jpg';

export default function Industries() {
  const industriesList = [
    {
      name: 'Manufacturing & Process Plants',
      icon: <Cpu size={24} />,
      image: heroImg,
      overview: 'Heavy production facilities requiring large clear spans, overhead crane supporting structures, and custom machinery pedestals.',
      challenge: 'Integrating heavy mechanical load profiles (EOT cranes up to 50 MT) while keeping structural deflection tolerances within strict L/600 limits.',
      solution: 'IRONEX engineers high-rigidity structural frameworks with automatic SAW welded compound girders, verified via licensed Tekla 3D model stress simulations.'
    },
    {
      name: 'Oil & Gas Refineries',
      icon: <Compass size={24} />,
      image: pebImg,
      overview: 'Petrochemical clusters that demand heavy pipe rack gantries, equipment supporting frames, and high-altitude walkways.',
      challenge: 'Vibration stress and extreme corrosive atmospheres require heavy galvanized coatings and high-grade structural joints.',
      solution: 'We fabricate heavy utility gantries with certified hot-dip galvanizing (IS 4759 standards) and site-assemble using checked high-strength friction grip (HSFG) bolts.'
    },
    {
      name: 'Ports & Marine SEZs',
      icon: <Anchor size={24} />,
      image: projectImg,
      overview: 'Logistics gateways demanding massive storage warehouses, ship loading platform frames, and transit utility bridge pylons.',
      challenge: 'Extreme coastal winds (up to 180 km/h) and moisture-induced concrete spalling/steel rust.',
      solution: 'We construct wind-resistant PEB frames with anti-corrosive multi-coat epoxy systems (ISO 12944 compliant C5-M environment marine paints).'
    },
    {
      name: 'Infrastructure & EPC',
      icon: <Building size={24} />,
      image: factoryImg,
      overview: 'National roads, railway crossings, over-bridges, and major civil connectivity structures.',
      challenge: 'Rigid timeline parameters, high-altitude heavy girder rigging, and strict quality assurance checks (QAPs).',
      solution: 'Direct structural material supply (plates, beams) coupled with heavy ODC rigging cranes mobilization and qualified SMAW welders.'
    },
    {
      name: 'Warehousing & Distribution',
      icon: <Layers size={24} />,
      image: projectImg,
      overview: 'E-commerce logistics parks and multi-tier distribution centers requiring high floor space utilization.',
      challenge: 'Achieving clear spans of 60+ meters to permit free crane and stacker movements without columns blocking tracks.',
      solution: 'We design Pre-Engineered Building (PEB) frames using high-tensile steel, optimizing weight while maintaining large clearances.'
    },
    {
      name: 'Power Grid Infrastructure',
      icon: <Zap size={24} />,
      image: demolitionImg,
      overview: 'Thermal, solar, and hydro power grid zones requiring boiler frames, wind tower pylons, and substation structures.',
      challenge: 'Safe, controlled dismantling of obsolete plant structures near active high-voltage power transmission grids.',
      solution: 'Our dismantling crews execute systematic diamond-wire cutting and selective crane rigging to drop columns safely without utility blackouts.'
    },
    {
      name: 'Chemical & Acids Plants',
      icon: <Workflow size={24} />,
      image: heroImg,
      overview: 'Process tanks, chemical pipelines, storage silos, and reactor scaffolding enclosures.',
      challenge: 'Aggressive chemical vapors erode steel columns and foundation concrete quickly.',
      solution: 'We apply protective coal tar epoxy paints and construct reinforced civil pedestals with chemical-resistant concrete coatings.'
    },
    {
      name: 'Pharmaceutical Formulations',
      icon: <Activity size={24} />,
      image: factoryImg,
      overview: 'Sterile labs, clean-room platform structures, HVAC supports, and utility lines.',
      challenge: 'Preventing dust accumulation and chemical reactions with cleanroom air.',
      solution: 'We fabricate dust-free platforms, cleanroom catwalks, and stainless steel support accessories with smooth-finished joints.'
    },
    {
      name: 'Automobile Assembly Lines',
      icon: <Building2 size={24} />,
      image: pebImg,
      overview: 'Stamping workshops, conveyor support frames, paint shops, and assembly lines.',
      challenge: 'Hanging heavy mechanical conveyor assemblies directly from building roof trusses.',
      solution: 'We design heavy steel roof trusses verified with dynamic load-carrying simulations to tolerate continuous vibrating conveyor loads.'
    },
    {
      name: 'Commercial Tech Hubs',
      icon: <TrendingUp size={24} />,
      image: projectImg,
      overview: 'Multi-storey office spaces, shopping malls, parking structures, and complex glass facade steel structures.',
      challenge: 'Strict architectural alignments and rapid construction schedules in dense urban areas.',
      solution: 'We engineer composite steel structures with concrete decks, speeding up multi-tier frame erections.'
    },
    {
      name: 'Logistics Yards & Terminals',
      icon: <Truck size={24} />,
      image: demolitionImg,
      overview: 'Container terminals, scrap segregation centers, and sorting depots.',
      challenge: 'Constructing yards that support continuous movements of heavy axle container handlers.',
      solution: 'We cast thick, high-durability concrete pavement slabs (RCC) integrated with sub-surface drainage networks.'
    },
    {
      name: 'Industrial Construction Sites',
      icon: <Lightbulb size={24} />,
      image: pebImg,
      overview: 'Active industrial construction zones requiring access scaffolding systems and formwork support.',
      challenge: 'Coordinating large quantities of cuplock scaffolding rentals and props with strict site logistics schedules.',
      solution: 'Our large inventory yard manages scheduled material deliveries directly to GIDC locations, backed by load certification documents.'
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
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Sectors We Serve</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Industries We Serve</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            From ports and chemical plants to warehousing hubs and oil refineries, we deliver heavy structural engineering, material supply, and site decommissioning.
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
                  <div className="absolute inset-0 bg-primary opacity-20" />
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
