import { useState } from 'react';

// Asset Imports
import projectImg from '../assets/industrial_project.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import pebImg from '../assets/peb_construction.jpg';
import factoryImg from '../assets/about_factory.jpg';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import scrapImg from '../assets/scrap_processing.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Demolition & Scrap', 'Materials Supply', 'Steel Fabrication', 'Turnkey Construction'];

  const projectsData = [
    {
      name: 'Heavy Industrial Process Plant',
      location: 'Dahej Industrial SEZ, Gujarat',
      category: 'Steel Fabrication',
      year: '2025',
      image: heroImg,
      client: 'Gujarat Chemical Enterprises Ltd.',
      scope: 'Fabrication of heavy process columns and supporting trusses (1,200 MT).',
      path: '/projects#process-plant',
      desc: 'Engineered and fabricated high-tensile structural steel frames, process piping bridges, and overhead EOT crane runways. Completed ultrasonic NDT welding checks.'
    },
    {
      name: 'Mega PEB Logistics Warehouse',
      location: 'Bhiwandi Logistics Hub, Maharashtra',
      category: 'Turnkey Construction',
      year: '2024',
      image: projectImg,
      client: 'North Star Warehousing Parks',
      scope: 'Turnkey PEB engineering, foundation civil works, and cladding installation.',
      path: '/projects#peb-warehouse',
      desc: 'Executed end-to-end design, foundation casting, and structural assembly of a 1,20,000 sq ft logistics warehouse. Utilized leak-proof standing seam roofing.'
    },
    {
      name: 'Power Plant Redevelopment & Demolition',
      location: 'Trombay Power Complex, Mumbai',
      category: 'Demolition & Scrap',
      year: '2025',
      image: demolitionImg,
      client: 'Sterling Power Grid Corp',
      scope: 'Controlled dismantling of obsolete coal handling sheds and scrap clearing.',
      path: '/projects#power-redevelopment',
      desc: 'Safely dismantled structural steel framing, conveyors, and utility platforms under tight operating grid clearances. Salvaged 4,500 MT of ferrous scrap.'
    },
    {
      name: 'Industrial Material Supply Contract',
      location: 'Ahmedabad GIDC, Gujarat',
      category: 'Materials Supply',
      year: '2024',
      image: scaffoldingImg,
      client: 'Apex Civil Infra Projects',
      scope: 'Supply of structural steel sections and cuplock scaffolding systems.',
      path: '/projects#material-supply',
      desc: 'Supplied 1,500 tons of Mild Steel channels, beams, and TMT bars, alongside rental of cuplock scaffolding and shuttering plates for slab casting.'
    },
    {
      name: 'Petrochemical Pipe Gantry Erection',
      location: 'Jamnagar Petro Complex, Gujarat',
      category: 'Steel Fabrication',
      year: '2025',
      image: pebImg,
      client: 'Reliance Systems EPC Ltd.',
      scope: 'Fabrication and high-altitude rigging of utility pipe racks (800 MT).',
      path: '/projects#refinery-piping',
      desc: 'Fabricated high-durability epoxy-coated steel racks, site-bolted using Grade 8.8 HSFG bolts, conforming strictly to oil and gas pipe vibration codes.'
    },
    {
      name: 'Warehouse Extension & Civil Foundation',
      location: 'Sanand GIDC, Ahmedabad',
      category: 'Turnkey Construction',
      year: '2024',
      image: factoryImg,
      client: 'Auto Components India LLP',
      scope: 'Factory extension, RCC column foundation casting, and steel frame joinery.',
      path: '/projects#warehouse-redevelopment',
      desc: 'Constructed foundation footings, PCC bases, and executed steel column connections to support manufacturing expansions. Completed yard drainage pavings.'
    },
    {
      name: 'Metal Scrap Salvage & Plant Clearance',
      location: 'Hazira Heavy Industrial Area, Surat',
      category: 'Demolition & Scrap',
      year: '2023',
      image: scrapImg,
      client: 'Gujarat Heavy Alloys Ltd.',
      scope: 'Obsolete machinery decommissioning and structural steel salvage.',
      path: '/projects#hazira-salvage',
      desc: 'Segregated and downsized old furnace structures, steel frames, and sheet scrap on-site using heavy scrap handlers and mobile oxygen cutters.'
    },
    {
      name: 'GIDC Catwalks & Platforms Construction',
      location: 'Vadodara Industrial Estate, Gujarat',
      category: 'Steel Fabrication',
      year: '2024',
      image: factoryImg,
      client: 'Matrix Pharmaceuticals Ltd.',
      scope: 'Design, supply, and installation of modular catwalks and cat ladders.',
      path: '/projects#matrix-catwalks',
      desc: 'Supplied dust-free structural steel catwalks and platforms. Applied hot-dip galvanized coatings to resist high-humidity pharma environments.'
    },
    {
      name: 'Infrastructure Bridge Girder Supply',
      location: 'Kochi Port SEZ, Kerala',
      category: 'Materials Supply',
      year: '2024',
      image: scaffoldingImg,
      client: 'Kochi Marine Infrastructure Trust',
      scope: 'BOQ supply of high-grade steel plates and shoring access systems.',
      path: '/projects#kochi-bridge',
      desc: 'Direct supply of IS 2062 Grade E350 steel plates for bridge girders, along with rental of heavy adjustable scaffolding props and spans for shoring.'
    },
    {
      name: 'Textile Factory Shed Dismantling',
      location: 'Indore GIDC, Madhya Pradesh',
      category: 'Demolition & Scrap',
      year: '2023',
      image: demolitionImg,
      client: 'Indore Weaving Mills Ltd.',
      scope: 'Systems demolition of old factory sheds and material sorting.',
      path: '/projects#textile-dismantling',
      desc: 'Cleared 65,000 sq ft of asbestos cladding, structural steel trusses, and columns. Managed scrap recovery and site preparation for PEB structures.'
    },
    {
      name: 'Refinery Boiler House Framing',
      location: 'Bellary Industrial Area, Karnataka',
      category: 'Steel Fabrication',
      year: '2025',
      image: pebImg,
      client: 'Bellary Alloys & Power Corp',
      scope: 'Fabrication and fit-up of furnace supporting steel frames (1,100 MT).',
      path: '/projects#boiler-framing',
      desc: 'Heavy structural columns and trusses fabricated to tolerate high temperatures. AWS certified welders completed on-site splice welding checks.'
    },
    {
      name: 'Civil Paving & Industrial Yard Development',
      location: 'Hazira SEZ, Gujarat',
      category: 'Turnkey Construction',
      year: '2024',
      image: projectImg,
      client: 'Hazira Marine Logistics Ltd.',
      scope: 'Heavy yard paving, concrete slab casting, and drainage installations.',
      path: '/projects#yard-paving',
      desc: 'Completed land grading, heavy-load RCC slab paving, and utility duct installations for container storage yards capable of carrying 40 MT axle loads.'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <div className="bg-bg-light">
      {/* Header Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={projectImg} alt="Projects backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Our Legacy</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Project Portfolio</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            A comprehensive visual record of our demolition, steel material supply, heavy structural fabrication, and turnkey industrial construction projects across India.
          </p>
        </div>
      </section>

      {/* Filter Menu */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                filter === cat
                  ? 'bg-secondary border-secondary text-white shadow-sm'
                  : 'bg-white border-gray-200 text-primary hover:border-primary hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group">
                {/* Project Image */}
                <div className="h-60 overflow-hidden relative shrink-0 bg-primary">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" />
                  <div className="absolute inset-0 bg-primary bg-opacity-25" />
                  <div className="absolute top-4 left-4 bg-white text-secondary font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xs border border-gray-50">
                    {proj.category}
                  </div>
                </div>
                
                {/* Project details */}
                <div className="p-6 text-left flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">{proj.location} | {proj.year}</span>
                    <h3 className="text-lg font-bold text-primary leading-tight group-hover:text-secondary transition-colors duration-300">{proj.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-body">{proj.desc}</p>
                  </div>
                  
                  {/* Detailed Specs list */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-100 text-[11px] font-body text-gray-500 font-semibold">
                    <div>
                      <span className="text-secondary font-bold uppercase tracking-wider block text-[9px]">Client:</span>
                      <span className="text-primary">{proj.client}</span>
                    </div>
                    <div className="pt-1.5">
                      <span className="text-secondary font-bold uppercase tracking-wider block text-[9px]">Scope & Materials:</span>
                      <span>{proj.scope}</span>
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
