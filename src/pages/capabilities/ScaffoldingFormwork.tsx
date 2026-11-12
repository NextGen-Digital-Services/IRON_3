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

const services = [
  { title: 'Manufacturing', desc: 'Quality-controlled production of scaffolding and formwork components according to agreed project specifications.' },
  { title: 'Sale', desc: 'Scaffolding materials and components supplied according to project requirements, specifications and availability.' },
  { title: 'Rental', desc: 'Scaffolding inventory for short-term and long-term construction, infrastructure and industrial projects.' },
  { title: 'Erection & Dismantling', desc: 'On-site scaffolding installation, modification and dismantling support according to the agreed project scope.' },
  { title: 'Logistics', desc: 'Material handling, transportation and coordinated delivery to help keep project requirements on schedule.' },
  { title: 'International Supply', desc: 'Scaffolding and formwork supply enquiries for international projects, subject to product availability and destination requirements.' },
];

const systemCategories = [
  {
    name: 'Cuplock System',
    desc: 'For repetitive construction, access and support applications.',
    img: scaffoldingImg,
    features: ['High strength and stability', 'Fast and simple assembly', 'Secure cuplock connection', 'Ideal for repetitive structures', 'Durable galvanised finish'],
  },
  {
    name: 'H-Frame System',
    desc: 'For straightforward access, façade and maintenance work.',
    img: scaffoldingImg2,
    features: ['Simple and versatile design', 'Quick installation', 'Cost-effective solution', 'Suitable for low to medium-height applications', 'Stable and reliable performance'],
  },
  {
    name: 'Tube & Coupler System',
    desc: 'For irregular structures and flexible industrial access.',
    img: scaffoldingImg3,
    features: ['Flexible geometry and design', 'Suitable for complex structures', 'Wide range of configurations', 'Strong and reliable connections', 'Suitable for industrial and maintenance work'],
  },
  {
    name: 'Props System',
    desc: 'For temporary vertical support and formwork applications.',
    img: scaffoldingImg4,
    features: ['Adjustable height range', 'High load-bearing capacity', 'Precision-engineered components', 'Easy to install and remove', 'Ideal for slab and formwork support'],
  },
];

const additionalCategories = [
  { name: 'Jacks', desc: 'Adjustable base and U-head components used for levelling and supporting compatible scaffolding and formwork arrangements.' },
  { name: 'Platforms', desc: 'Working platforms designed to provide access and a working surface within compatible scaffolding systems.' },
  { name: 'Accessories', desc: 'Supporting components used to connect, secure and complete scaffolding systems.' },
];

const accessoryDescriptions = [
  { name: 'Ledger Blade', desc: 'Connects ledger members to compatible cuplock standards.' },
  { name: 'Top Cup', desc: 'Receives ledger connections at the top of a cuplock standard.' },
  { name: 'Bottom Cup', desc: 'Provides the lower connection point for ledger members on compatible standards.' },
  { name: 'Joint Pin', desc: 'Connects and secures compatible scaffold frame sections.' },
  { name: 'Jacks', desc: 'Adjustable base and U-head components used for levelling and supporting scaffold arrangements.' },
  { name: 'Clamps', desc: 'Right-angle and swivel clamps used to connect scaffold tubes in different configurations.' },
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
  { name: 'Residential & High-Rise', desc: 'Scaffolding and access requirements for residential towers and high-rise developments.', img: constructionImg },
  { name: 'Commercial Construction', desc: 'Scaffolding solutions for offices, commercial buildings, retail spaces and mixed-use developments.', img: commercialImg },
  { name: 'Industrial Projects', desc: 'Scaffolding requirements for plants, process facilities, factories and heavy industrial work.', img: plantImg },
  { name: 'Infrastructure', desc: 'Access and support requirements for bridges, roads, metros and public infrastructure.', img: infraImg },
  { name: 'Warehousing', desc: 'Scaffolding requirements for warehouse construction, expansion and maintenance.', img: warehouseImg },
  { name: 'Maintenance & Shutdown Work', desc: 'Access solutions for maintenance activities, industrial shutdowns and turnaround projects.', img: maintenanceImg },
];

export default function ScaffoldingFormwork() {
  const { setIsQuoteOpen } = useModal();
  const movementRef = useRef<HTMLElement>(null);
  const [movementProgress, setMovementProgress] = useState(0);

  useEffect(() => {
    const title = 'Scaffolding & Formwork Systems | IRONEX';
    const description = 'Explore IRONEX scaffolding and formwork solutions, including Cuplock, H-Frame, Tube & Coupler, props, jacks and project-based supply, rental and site support.';
    const prevTitle = document.title;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta?.getAttribute('content') ?? '';
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
    return () => {
      document.title = prevTitle;
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', prevDesc);
    };
  }, []);

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
          <span className="eyebrow block mb-6">IRONEX Scaffolding &amp; Formwork</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Support That Doesn&rsquo;t<br />Slow the Build.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX Scaffolding &amp; Formwork supports construction, infrastructure and industrial projects through scaffolding systems, supply, rental and project-based site support.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">From selecting the right system to coordinating quantities, delivery and on-site requirements, we help keep scaffolding requirements aligned with your project schedule.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Discuss Your Requirement</button>
            <a href="#systems" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore Systems</a>
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

      {/* 03 — WHAT WE DO */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">What We Do</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">From Product Supply<br />To Project-Site Support.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">From product supply to project-site support, IRONEX helps customers plan and fulfil scaffolding and formwork requirements with attention to system selection, quantity, delivery and project timelines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C7]">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-[#F3F0E9] h-full p-8 group hover:bg-[#07101A] transition-all duration-500">
                  <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mt-4 mb-4 transition-colors duration-500">{s.title}</h3>
                  <p className="text-[13px] text-[#6B6560] group-hover:text-[#F4F1EA]/50 font-body leading-relaxed transition-colors duration-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">Manufacturing and erection support are retained as direct claims only where confirmed for the specific project scope. Contact our team to confirm capability against your requirement.</p>
        </div>
      </section>

      {/* 04 — SCAFFOLDING SYSTEMS */}
      <section id="systems" className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Scaffolding Systems</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Systems Built Around<br />the Application.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">From building construction to industrial projects, our systems support safe, reliable and efficient solutions for a wide range of applications.</p>
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
                    <ul className="mt-4 space-y-1.5">
                      {c.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-1.5 shrink-0" />
                          <span className="text-[12px] text-[#6B6560] group-hover:text-[#F4F1EA]/45 font-body leading-relaxed transition-colors duration-500">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#D5D0C7] mt-px">
            {additionalCategories.map((a, i) => (
              <div key={a.name} className="bg-[#F3F0E9] p-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="editorial-num">{String(systemCategories.length + i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820]">{a.name}</h3>
                </div>
                <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-l border-[#C66B45] pl-5 max-w-3xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Technical Specifications</span>
            <h3 className="text-base font-extrabold text-[#101820] mb-2">Specified for Your Project Requirements</h3>
            <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">Product specifications can be reviewed according to system type, dimensions, material, finish and intended application.</p>
            <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-2">For project-specific requirements, contact our team with your BOQ or technical drawings.</p>
            <button onClick={() => setIsQuoteOpen(true)} className="mt-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] hover:tracking-[0.2em] transition-all">Request Specifications &rarr;</button>
          </div>
        </div>
      </section>

      {/* 05 — COMPONENT RANGE */}
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
              <div className="space-y-3 pt-2">
                {accessoryDescriptions.map((a) => (
                  <div key={a.name} className="border-l border-[#F4F1EA]/15 pl-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA]/70 block mb-1">{a.name}</span>
                    <p className="text-[12px] text-[#F4F1EA]/45 font-body leading-relaxed">{a.desc}</p>
                  </div>
                ))}
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

      {/* 06 — RENTAL & SALE */}
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

      {/* 07 — PROJECT PLANNING / MOVEMENT CONTROL */}
      <section ref={movementRef} className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Planning For A Safer, More Efficient Site</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Planned Around the Site,<br />Not Just the BOQ.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
              <p>Every project has different access requirements, structural conditions, quantities, durations and delivery schedules.</p>
              <p>We review the project scope and available BOQ or drawings to understand the requirement and identify a suitable scaffolding or formwork solution.</p>
            </div>
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
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Discuss Your Project</button>
            <Link to="/quote#enquiry" className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Upload BOQ / Drawings</Link>
          </div>
        </div>
      </section>

      {/* 08 — WHERE IT WORKS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-10 max-w-3xl">
            <span className="eyebrow block mb-6">Built for a Wide Range of Projects</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Project Applications.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">From high-rise buildings to industrial facilities, IRONEX supports scaffolding and formwork requirements across a range of construction and maintenance applications.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C7]">
            {whereWorks.map((item) => (
              <div key={item.name} className="relative bg-[#F3F0E9] overflow-hidden group min-h-[180px] flex flex-col justify-end">
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[#07101A]/0 group-hover:bg-[#07101A]/70 transition-colors duration-500" />
                <div className="relative p-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500">{item.name}</span>
                  <p className="text-[12px] text-[#6B6560] group-hover:text-[#F4F1EA]/55 font-body leading-relaxed mt-2 opacity-100 group-hover:opacity-100 transition-colors duration-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">For recurring or larger requirements, project-specific rental and supply arrangements can be evaluated.</p>
        </div>
      </section>

      {/* 09 — SCAFFOLDING CTA */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Scaffolding Enquiry</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Send Your Enquiry.<br />Share Your BOQ For A More Accurate Scaffolding Quote.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">Provide the key details about your project so our team can review your requirements and respond with the appropriate scaffolding solution, availability and commercial information.</p>
              <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">For an accurate quotation, please include:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Project location', 'System required', 'Quantity / BOQ', 'Required date', 'Expected duration', 'Rental or purchase', 'Project type'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span></div>
                ))}
              </div>
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed pt-2">The better the requirement, the better the mobilisation plan.</p>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Send Requirement</button>
              <Link to="/quote#enquiry" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Upload BOQ / Drawings</Link>
              <Link to="/capabilities/scaffolding-exports" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore Scaffolding Exports</Link>
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed mt-2">Scaffolding Exports is a dedicated ACCESS category for international buyers and distributors.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
