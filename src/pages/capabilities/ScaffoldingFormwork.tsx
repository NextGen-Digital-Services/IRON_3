import { useEffect, useRef, useState } from 'react';
import HeroBackground from '../../components/HeroBackground';
import scaffoldingImg from '../../assets/scaffolding_01.jpg';
import scaffoldingImg2 from '../../assets/scaffolding_02.jpg';
import scaffoldingImg3 from '../../assets/scaffolding_03.jpg';
import scaffoldingImg4 from '../../assets/scaffolding_04.jpg';
import plantImg from '../../assets/industrial_project.jpg';
import warehouseImg from '../../assets/pexels_warehouse.jpg';
import constructionImg from '../../assets/peb_construction.jpg';
import infraImg from '../../assets/pexels_steel_structure.jpg';
import commercialImg from '../../assets/home_02.jpg';
import maintenanceImg from '../../assets/pexels_welding.jpg';
import shutdownImg from '../../assets/fab_02.jpg';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const slideshowImages = [
  { src: scaffoldingImg, alt: 'Facade scaffolding on a high-rise structure', tag: 'Facade Access' },
  { src: scaffoldingImg2, alt: 'Scaffolding system around an industrial silo', tag: 'Plant Access' },
  { src: scaffoldingImg3, alt: 'Workers on scaffolding at a construction site', tag: 'Site Platforms' },
  { src: scaffoldingImg4, alt: 'Structural scaffolding viewed from below', tag: 'Structural Erection' },
];

const systemCategories = [
  { name: 'Cuplock Scaffolding', desc: 'Modular system suitable for repetitive and larger-scale access requirements.', img: scaffoldingImg },
  { name: 'H-Frame Scaffolding', desc: 'Practical access system for building, elevation and repetitive construction work.', img: scaffoldingImg2 },
  { name: 'Tube & Coupler', desc: 'Flexible system suitable for irregular structures and customised configurations.', img: scaffoldingImg3 },
  { name: 'Adjustable Props', desc: 'Temporary support for shuttering and structural applications.', img: scaffoldingImg4 },
];

const components = ['Standards / Verticals', 'Ledgers / Horizontals', 'H-Frames', 'M.S. Tubes', 'Adjustable Props', 'Fixed Couplers', 'Swivel Couplers', 'Base Jacks', 'U-Jacks', 'Tie Rods', 'Anchor Nuts', 'Jack Nuts', 'Top Cups', 'Bottom Cups', 'Ledger Blades', 'Related accessories'];

const movementSteps = [
  { name: 'Plan', desc: 'Understand the system, quantity, duration and site requirement.' },
  { name: 'Allocate', desc: 'Check required components against available inventory.' },
  { name: 'Dispatch', desc: 'Coordinate material quantity and movement.' },
  { name: 'Record', desc: 'Document material issued.' },
  { name: 'Support', desc: 'Evaluate additional requirements where needed.' },
  { name: 'Return', desc: 'Receive and count returned material.' },
  { name: 'Reconcile', desc: 'Close quantities, damages and applicable rental terms.' },
];

const whereWorks = [
  { name: 'Industrial plants', img: plantImg },
  { name: 'Warehouses', img: warehouseImg },
  { name: 'Construction projects', img: constructionImg },
  { name: 'Infrastructure', img: infraImg },
  { name: 'Commercial developments', img: commercialImg },
  { name: 'Maintenance works', img: maintenanceImg },
  { name: 'Shutdown requirements', img: shutdownImg },
  { name: 'Structural repair environments', img: scaffoldingImg3 },
];

export default function ScaffoldingFormwork() {
  const { setIsQuoteOpen } = useModal();
  const movementRef = useRef<HTMLElement>(null);
  const [movementProgress, setMovementProgress] = useState(0);

  useEffect(() => {
    const el = movementRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      setMovementProgress(Math.min(1, Math.max(0, raw)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — HERO */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={slideshowImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Industrial Access</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">A Nearly Complete Scaffolding System<br />Can Still Hold Up The Work.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">Scaffolding is not valuable because it weighs several tonnes. It is valuable because it creates usable access.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">IRONEX provides scaffolding systems on rental and sale for industrial, construction, infrastructure, warehouse and maintenance requirements.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Request Scaffolding</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCAFFOLDING, WHATSAPP_MESSAGES.SCAFFOLDING_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
          </div>
        </div>
      </section>

      {/* 02 — THE SCAFFOLDING PROBLEM */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">The Scaffolding Problem</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Sites Do Not Work<br />In Tonnes.<br />They Work In<br />Complete Systems.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>A project may receive most of its scaffolding requirement and still be unable to erect properly because of missing ledgers, short verticals, insufficient jacks, incorrect couplers, missing accessories or poor component planning.</p>
                <p>The result is operational rather than theoretical:</p>
              </div>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <p className="text-sm text-[#101820] font-body font-semibold leading-relaxed">One missing component can hold up the entire working system.</p>
                <p className="text-[13px] text-[#6B6560] font-body mt-2">That is the operational problem we focus on.</p>
              </div>
              <div className="border-l border-[#D5D0C7] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560] block mb-2">Core Business Problem</span>
                <p className="text-base font-extrabold text-[#101820] uppercase tracking-[0.1em]">Lost Site Productivity</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Labour waits', 'Working fronts remain inaccessible', 'Erection slows', 'Project sequencing slips', 'Rental continues', 'Productivity falls'].map((item, i) => (
                  <div key={item} className="bg-[#F3F0E9] p-5 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SCAFFOLDING SYSTEM CATEGORIES */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Scaffolding System Categories</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">The Systems We Supply.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            {systemCategories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full group hover:bg-[#07101A] transition-all duration-500">
                  <div className="h-44 overflow-hidden">
                    <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500">{c.name}</h3>
                    </div>
                    <p className="text-[13px] text-[#6B6560] group-hover:text-[#F4F1EA]/50 font-body leading-relaxed transition-colors duration-500">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-8">Components &amp; Accessories are supplied across all systems &mdash; a system is only as useful as its weakest component.</p>
        </div>
      </section>

      {/* 04 — COMPONENT RANGE */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Component Range</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">A Scaffolding System Is Only As Useful As Its Missing Component.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX deals in:</p>
              <div className="border-l border-[#C66B45] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-3">Operating Scale</span>
                <p className="text-sm text-[#F4F1EA]/70 font-body leading-relaxed">~1,000 MT owned inventory*<br />~400+ MT deployed / on rent*</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#F4F1EA]/10">
                {components.slice(0, 15).map((item, i) => (
                  <div key={item} className="bg-[#07101A] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span>
                  </div>
                ))}
                <div className="bg-[#07101A] hidden sm:block" aria-hidden />
                <div className="bg-[#07101A] p-4 flex items-start gap-3">
                  <span className="text-[11px] font-extrabold text-[#C66B45]">{String(components.length).padStart(2, '0')}</span>
                  <span className="text-[13px] text-[#F4F1EA]/60 font-body">{components[components.length - 1]}</span>
                </div>
                <div className="bg-[#07101A] hidden sm:block" aria-hidden />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — RENTAL & SALE */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Rental &amp; Sale</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Ownership Is Not Always<br />The Cheapest Option.<br />Rental Is Not Always<br />The Cheapest Either.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            <div className="bg-[#F3F0E9] p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-5">Rental Makes Sense When</h3>
              <div className="space-y-3">
                {['Usage is temporary', 'Project quantities vary', 'Capital is better deployed elsewhere', 'Storage after completion becomes a burden'].map((item) => (
                  <div key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="bg-[#F3F0E9] p-8">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-5">Purchase Makes Sense When</h3>
              <div className="space-y-3">
                {['Usage is continuous', 'Projects repeat frequently', 'Storage exists', 'Long-term utilisation supports ownership'].map((item) => (
                  <div key={item} className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">IRONEX provides both models. The commercially sensible choice depends on utilisation, duration and site requirement.</p>
        </div>
      </section>

      {/* 06 — HOW WE CONTROL THE MOVEMENT */}
      <section ref={movementRef} className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">How We Control The Movement</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Scaffolding Is An Inventory<br />Business Before It Is<br />A Steel Business.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="relative min-w-[640px] pt-10 pb-2">
              <div className="absolute left-0 right-0 top-[27px] h-px bg-[#D5D0C7]" />
              <div className="absolute left-0 top-[27px] h-px bg-[#C66B45] transition-[width] duration-200" style={{ width: `${movementProgress * 100}%` }} />
              <div className="relative flex justify-between">
                {movementSteps.map((s, i) => {
                  const stepAt = i / (movementSteps.length - 1);
                  const passed = movementProgress >= stepAt;
                  return (
                    <div key={s.name} className="flex flex-col items-center gap-4 w-[calc(100%/7)]">
                      <span className={`w-2.5 h-2.5 rotate-45 transition-colors duration-300 ${passed ? 'bg-[#C66B45]' : 'bg-[#D5D0C7]'}`} />
                      <span className={`text-[11px] font-extrabold transition-colors duration-300 ${passed ? 'text-[#C66B45]' : 'text-[#6B6560]/50'}`}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.12em] text-center leading-tight transition-colors duration-300 ${passed ? 'text-[#101820]' : 'text-[#6B6560]/50'}`}>{s.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 border-l border-[#C66B45] pl-5 max-w-xl">
            <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">{movementSteps[Math.min(movementSteps.length - 1, Math.floor(movementProgress * (movementSteps.length - 1) + 0.001))]?.desc}</p>
          </div>
          <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">Proper reconciliation protects both customer and supplier.</p>
        </div>
      </section>

      {/* 07 — WHERE IT WORKS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow block mb-6">Where It Works</span>
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">IRONEX scaffolding can support requirements across:</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D5D0C7]">
            {whereWorks.map((item) => (
              <div key={item.name} className="relative bg-[#F3F0E9] p-5 text-center overflow-hidden group h-28 flex items-center justify-center">
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#07101A]/0 group-hover:bg-[#07101A]/65 transition-colors duration-500" />
                <span className="relative text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500 px-2">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">For recurring or larger requirements, project-specific rental and supply arrangements can be evaluated.</p>
        </div>
      </section>

      {/* 08 — SCAFFOLDING CTA */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Scaffolding Enquiry</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Share Your BOQ For A More Accurate Scaffolding Quote.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">For an accurate quotation, please include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Project location', 'System required', 'Quantity / BOQ', 'Required date', 'Expected duration', 'Rental or purchase', 'Project type'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span></div>
                ))}
              </div>
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed pt-2">The better the requirement, the better the mobilisation plan.</p>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Request Availability &amp; Quote</button>
              <Link to="/capabilities/scaffolding-exports" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore Scaffolding Exports</Link>
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed mt-2">Scaffolding Exports is a dedicated ACCESS category for international buyers and distributors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
