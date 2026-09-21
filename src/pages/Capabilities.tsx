import { Link } from 'react-router-dom';
import { Wrench, Layers, Building, TrendingUp, ArrowRight } from 'lucide-react';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';

const divisions = [
  { num: '01', title: 'Industrial Scrap Procurement & Processing', desc: 'IRONEX participates as a direct buyer in government, PSU, corporate, industrial and private scrap auctions and tenders.', icon: Wrench, path: '/capabilities/scrap', img: demolitionImg, tagline: 'Material Value, Managed Professionally.' },
  { num: '02', title: 'Scaffolding & Formwork Systems', desc: 'IRONEX manufactures, rents and sells scaffolding and related systems for industrial, infrastructure, commercial and construction projects.', icon: Layers, path: '/capabilities/scaffolding', img: scaffoldingImg, tagline: 'Reliable Access. Dependable Supply.' },
  { num: '03', title: 'Steel & Construction-Material Supply', desc: 'IRONEX supplies structural steel, pipes, sheets, TMT bars, construction materials and all roofing solutions with specification-based supply.', icon: Building, path: '/capabilities/steel', img: heroImg, tagline: 'The Right Material. For the Right Job.' },
  { num: '04', title: 'Structural Fabrication & Civil Works', desc: 'From drawings and measurements to physical execution — connecting site review, scope definition, material planning, fabrication and erection.', icon: TrendingUp, path: '/capabilities/fabrication', img: factoryImg, tagline: 'From Foundation to Final Finish.' }
];

export default function Capabilities() {
  return (
    <div className="bg-[#F3F0E9]">
      {/* Hero */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Our Capabilities</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Select a Division<br />to Explore.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">Each division operates with its own specialised process, commercial model and leadership.</p>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <Link key={div.num} to={div.path} className="group block bg-[#F3F0E9] overflow-hidden hover:bg-[#07101A] transition-all duration-500 relative">
                  {/* Image */}
                  <div className="h-56 overflow-hidden relative">
                    <img src={div.img} alt={div.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#07101A]/30 group-hover:bg-[#07101A]/60 transition-all duration-500" />
                    <span className="absolute top-4 left-4 text-5xl font-extrabold text-white/20">{div.num}</span>
                  </div>
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-[#C66B45] text-white p-2">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Division {div.num}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#101820] group-hover:text-[#F4F1EA] mb-2 transition-colors duration-500 leading-tight">{div.title}</h3>
                    <span className="text-[10px] text-[#6B6560] group-hover:text-[#F4F1EA]/40 uppercase tracking-[0.1em] font-bold block mb-4 transition-colors duration-500">{div.tagline}</span>
                    <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/40 leading-relaxed font-body flex-1 transition-colors duration-500">{div.desc}</p>
                    <div className="flex items-center gap-2 mt-6 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C66B45] group-hover:gap-3 transition-all duration-300">
                      Explore Division<ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 Capability Pillars */}
      <section className="py-24 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <span className="eyebrow block mb-6">Capability Framework</span>
            <h2 className="heading-editorial text-[#F4F1EA] max-w-4xl text-3xl lg:text-4xl">IRONEX Capability Pillars</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06]">
            {['Material Knowledge', 'Procurement', 'Inventory', 'Logistics', 'Commercial Judgement', 'Execution', 'Quality', 'Documentation', 'Safety', 'Compliance'].map((p, idx) => (
              <div key={idx} className="bg-[#07101A] p-6 text-center hover:bg-[#0B1520] transition-colors duration-300 group">
                <span className="text-xl font-extrabold text-[#C66B45] block mb-2">{String(idx + 1).padStart(2, '0')}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA]/50 group-hover:text-[#F4F1EA] transition-colors">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
