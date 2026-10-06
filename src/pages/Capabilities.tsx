import { Link } from 'react-router-dom';
import { Wrench, Layers, Building, TrendingUp, ArrowRight } from 'lucide-react';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import HeroBackground from '../components/HeroBackground';
import Reveal from '../components/Reveal';
import scrap1 from '../assets/scrap_01.jpg';
import scrap2 from '../assets/scrap_02.jpg';
import scrap3 from '../assets/scrap_03.jpg';
import scrap4 from '../assets/scrap_04.jpg';
import scaf1 from '../assets/scaffolding_01.jpg';
import scaf2 from '../assets/scaffolding_02.jpg';
import scaf3 from '../assets/scaffolding_03.jpg';
import scaf4 from '../assets/scaffolding_04.jpg';
import steel1 from '../assets/steel_01.jpg';
import steel2 from '../assets/steel_02.jpg';
import steel3 from '../assets/steel_03.jpg';
import steel4 from '../assets/steel_04.jpg';
import fab1 from '../assets/fab_01.jpg';
import fab2 from '../assets/fab_02.jpg';
import fab3 from '../assets/fab_03.jpg';
import fab4 from '../assets/fab_04.jpg';

const heroImages = [
  { src: scrap1, alt: 'Scrap yard with claw excavator' },
  { src: scrap2, alt: 'Scrap metal pile in front of a factory' },
  { src: scrap3, alt: 'Industrial scrap yard with crane' },
  { src: scrap4, alt: 'Train car in a scrap metal yard' },
  { src: scaf1, alt: 'Facade scaffolding on a high-rise' },
  { src: scaf2, alt: 'Scaffolding around an industrial silo' },
  { src: scaf3, alt: 'Workers on site scaffolding' },
  { src: scaf4, alt: 'Structural scaffolding from below' },
  { src: steel1, alt: 'Metal bars, pipes and tubing in storage' },
  { src: steel2, alt: 'Pipes and reservoirs of a factory' },
  { src: steel3, alt: 'Large industrial pipes and tanks' },
  { src: steel4, alt: 'Steel pipes under a factory ceiling' },
  { src: fab1, alt: 'Welder at work in a modern facility' },
  { src: fab2, alt: 'Welder working in a dark workshop' },
  { src: fab3, alt: 'Close-up of a welder during work' },
  { src: fab4, alt: 'Artisan welding metal in a workshop' },
];

const divisions = [
  { num: '01', title: 'Industrial Scrap Procurement & Processing', desc: 'IRONEX participates as a direct buyer in government, PSU, corporate, industrial and private scrap auctions and tenders.', icon: Wrench, path: '/capabilities/scrap', img: demolitionImg, tagline: 'Material Value, Managed Professionally.' },
  { num: '02', title: 'Scaffolding & Formwork Systems', desc: 'IRONEX manufactures, rents and sells scaffolding and related systems for industrial, infrastructure, commercial and construction projects.', icon: Layers, path: '/capabilities/scaffolding', img: scaffoldingImg, tagline: 'Reliable Access. Dependable Supply.' },
  { num: '03', title: 'Steel & Construction-Material Supply', desc: 'IRONEX supplies structural steel, pipes, sheets, TMT bars, construction materials and all roofing solutions with specification-based supply.', icon: Building, path: '/capabilities/steel', img: heroImg, tagline: 'The Right Material. For the Right Job.' },
  { num: '04', title: 'Structural Fabrication & Civil Works', desc: 'From drawings and measurements to physical execution - connecting site review, scope definition, material planning, fabrication and erection.', icon: TrendingUp, path: '/capabilities/fabrication', img: factoryImg, tagline: 'From Foundation to Final Finish.' }
];

const proofImages = [
  { src: scrap3, alt: 'Scrap procurement' },
  { src: scrap1, alt: 'Scrap loading' },
  { src: scrap2, alt: 'Material segregation' },
  { src: scaf2, alt: 'Scaffolding inventory' },
  { src: scaf1, alt: 'Scaffolding dispatch' },
  { src: steel1, alt: 'Steel supply' },
  { src: steel4, alt: 'Vehicles' },
  { src: fab2, alt: 'Warehouse / yard' },
];

export default function Capabilities() {
  return (
    <div className="bg-[#F3F0E9]">
      {/* HERO */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={heroImages} interval={3500} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Behind IRONEX</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Capability Begins<br />Where Marketing Ends.</h1>
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
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Division {div.num}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#101820] group-hover:text-[#F4F1EA] mb-2 transition-colors duration-500 leading-tight">{div.title}</h3>
                    <span className="text-[11px] text-[#6B6560] group-hover:text-[#F4F1EA]/40 uppercase tracking-[0.1em] font-bold block mb-4 transition-colors duration-500">{div.tagline}</span>
                    <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/40 leading-relaxed font-body flex-1 transition-colors duration-500">{div.desc}</p>
                    <div className="flex items-center gap-2 mt-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] group-hover:gap-3 transition-all duration-300">
                      Explore Division<ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 01 — PHYSICAL OPERATING CAPABILITY */}
      <section className="py-24 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Physical Operating Capability</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Supported By Operating Infrastructure.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX is supported by operating infrastructure in the Navi Mumbai industrial region.</p>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-4">Operational Use Includes</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {['Scaffolding storage', 'Scrap handling', 'Material segregation', 'Steel and construction material handling', 'Vehicle access', 'Loading / unloading coordination', 'Dispatch preparation', 'Commercial administration'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-px bg-[#F4F1EA]/10">
              {[heroImg, factoryImg, scaf3, steel3].map((src, i) => (
                <img key={i} src={src} alt="" className="w-full h-56 sm:h-72 object-cover" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INVENTORY & MATERIAL CONTROL */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Inventory &amp; Material Control</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Physical Businesses Need Physical Control.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>Across our divisions, inventory directly affects execution capability.</p>
                <p>Our operating systems continue to develop around:</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Stock visibility', 'Material identification', 'Issue records', 'Return records', 'Segregation', 'Quantity control', 'Movement tracking'].map((item, i) => (
                  <div key={item} className="bg-[#F3F0E9] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#6B6560] font-body space-y-3 leading-relaxed">
                <p>For scaffolding, component-level control matters as much as total tonnage.</p>
                <p>For scrap, grade-level segregation directly affects value.</p>
                <p>For material supply, requirement-level availability affects fulfilment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — LOGISTICS & MATERIAL MOVEMENT */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Logistics &amp; Material Movement</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">A Material Transaction Is Incomplete Until The Material Moves.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">IRONEX operations involve coordination across:</p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#D5D0C7]">
                {['Vehicle placement', 'Loading', 'Unloading', 'Dispatch', 'Scrap lifting', 'Weighbridge coordination', 'Scaffolding mobilisation', 'Steel delivery', 'Site movement'].map((item, i) => (
                  <div key={item} className="bg-[#F3F0E9] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-8">Our proximity to the Uran&ndash;Nhava Sheva&ndash;Navi Mumbai industrial corridor provides access to an established logistics ecosystem supporting material movement across our businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — PROCUREMENT NETWORK */}
      <section className="py-24 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Procurement Network</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Capability Is Not Limited To What Is Sitting In One Yard.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX develops sourcing relationships across:</p>
              <div className="border-l border-[#C66B45] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-3">Procurement Direction</span>
                <p className="text-[13px] uppercase tracking-[0.1em] font-bold text-[#F4F1EA]/80 font-body leading-relaxed">Local Sourcing &bull; Domestic Sourcing &bull; Auctions &bull; Corporate Procurement &bull; Selected International Sourcing</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#F4F1EA]/10">
                {['Manufacturers', 'Stockists', 'Industrial sellers', 'Auction platforms', 'Processors', 'Recyclers', 'Logistics providers', 'Contractors', 'International suppliers'].map((item, i) => (
                  <div key={item} className="bg-[#07101A] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#F4F1EA]/55 font-body space-y-4 leading-relaxed">
                <p>This network expands our ability to evaluate larger, specialised and varied requirements.</p>
                <p className="text-[#F4F1EA]/40">International enquiries follow the dedicated RECOVER import and ACCESS export pages, with material specifications, documentation and logistics assessed for each opportunity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — EXECUTION SUPPORT */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-2">Supporting Capability</span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560] block mb-6">Not Presented As A Core Business Division</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Where Supply Extends<br />Into Execution.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">The Infra side of IRONEX also includes project-support capability where the requirement aligns with our resources and experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            <div className="bg-[#F3F0E9] p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] mb-3">Structural Fabrication</h3>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-4">Requirements May Include</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['M.S. fabrication', 'Frames', 'Platforms', 'Supports', 'Roofing structures', 'Structural modifications', 'Repair fabrication', 'Shed-related works'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
              <Link to="/capabilities/fabrication" className="inline-flex items-center gap-2 mt-6 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] hover:gap-3 transition-all">Explore Fabrication &amp; Civil<ArrowRight size={14} /></Link>
            </div>
            <div className="bg-[#F3F0E9] p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] mb-3">Civil &amp; Industrial Works</h3>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-4">Selected Requirements May Include</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Industrial repairs', 'Foundations', 'PCC / RCC works', 'Flooring', 'Drainage', 'Maintenance-related civil requirements'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-l border-[#C66B45] pl-5 mt-8 max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Our Position</span>
            <div className="text-sm text-[#6B6560] font-body space-y-2 leading-relaxed">
              <p>We do not present these activities as a fourth core business division.</p>
              <p>Requirements are evaluated selectively, with capability demonstrated through completed work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — INDUSTRIES & PROOF */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Industries &amp; Proof</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Industries Supported</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#D5D0C7] mb-16">
            {['Ports & Logistics', 'Warehousing', 'Manufacturing', 'Construction', 'Infrastructure', 'Industrial Contractors', 'Developers', 'Fabricators', 'Metal Processing & Recycling', 'Industrial Maintenance'].map((item) => (
              <div key={item} className="bg-[#F3F0E9] p-5 text-center hover:bg-[#07101A] transition-all duration-500 group">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-8 max-w-3xl">
            <h3 className="heading-editorial text-[#101820] text-2xl mb-4">Proof Gallery</h3>
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">Show real operating evidence: scrap procurement, scrap loading, material segregation, scaffolding inventory, scaffolding dispatch, steel supply, vehicles, warehouse / yard, selected fabrication and selected civil work.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D5D0C7]">
            {proofImages.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative overflow-hidden bg-[#07101A] group">
                  <img src={p.src} alt={p.alt} className="w-full h-44 sm:h-52 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] bg-[#07101A]/70 px-2 py-1">{p.alt}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="heading-editorial text-[#101820] text-2xl mt-12">Show Capability Before Claiming Capability.</p>
        </div>
      </section>
    </div>
  );
}
