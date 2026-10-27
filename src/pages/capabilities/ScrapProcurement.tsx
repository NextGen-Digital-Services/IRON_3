import HeroBackground from '../../components/HeroBackground';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const heroImages = [
  { src: '/WhatsApp%20Image%202026-10-28%20at%2012.36.55%20AM.jpeg', alt: 'Scrap metal lot ready for industrial recovery' },
  { src: '/WhatsApp%20Image%202026-10-28%20at%2012.36.55%20AM%20(1).jpeg', alt: 'Ferrous scrap pile at a processing site' },
  { src: '/WhatsApp%20Image%202026-10-28%20at%2012.36.56%20AM%20(1).jpeg', alt: 'Machinery scrap and industrial recoverables' },
  { src: '/WhatsApp%20Image%202026-10-28%20at%2012.36.56%20AM%20(2).jpeg', alt: 'Scrap handling and lifting equipment' },
  { src: '/WhatsApp%20Image%202026-10-28%20at%2012.36.56%20AM%20(3).jpeg', alt: 'Segregated scrap material at a yard' },
];

const heroSteps = [
  { num: '01', title: 'Material assessment', desc: 'What is in the lot, what can be recovered and what affects its value.' },
  { num: '02', title: 'Commercial agreement', desc: 'Price, quantity basis, responsibilities and the agreed purchase terms.' },
  { num: '03', title: 'Movement & closure', desc: 'Lifting or shipment, receipt records and final quantity reconciliation.' },
];

const domesticSteps = [
  { num: '01', step: 'Share the Lot', desc: 'Material type, approximate quantity, location, photographs, available lot list and clearance deadline.' },
  { num: '02', step: 'Inspect & Assess', desc: 'Grade, composition, condition, contamination and recoverable quantity, with inspection where required.' },
  { num: '03', step: 'Agree the Purchase', desc: 'Rate or lot value, quantity basis, taxes, payment terms, loading responsibility and lifting period.' },
  { num: '04', step: 'Arrange the Movement', desc: 'Manpower, vehicles, machinery, cutting resources, loading and weighment arrangements within the agreed scope.' },
  { num: '05', step: 'Complete & Reconcile', desc: 'Material movement, weight records, quantity reconciliation and transaction documentation.' },
];

const responsibilityCards = [
  { title: 'Commercial basis', desc: 'Rate / lot value, quantity basis, taxes and payment terms.' },
  { title: 'Loading scope', desc: 'Access, manpower, machinery, cutting and loading responsibility.' },
  { title: 'Closure records', desc: 'Weight records, quantity reconciliation and transaction documents.' },
];

const internationalChecks = [
  { title: 'Supplier & Origin', desc: 'Company identity, material ownership, source, yard capability and export experience.' },
  { title: 'Material & Quality', desc: 'Exact grade, composition, recoverable content, contamination, quantity and consistency.' },
  { title: 'Packing & Shipment', desc: 'Packing method, loading port, container or bulk basis, inspection access and shipment window.' },
  { title: 'Commercial Terms', desc: 'Price, Incoterm, payment terms, freight and total landed cost.' },
  { title: 'Eligibility & Documents', desc: 'Applicable import requirements and supporting commercial, inspection, origin and transport documents.' },
];

const landedCost = [
  { title: 'Purchase', desc: 'Material price at agreed terms' },
  { title: 'Shipment', desc: 'Freight and insurance responsibilities' },
  { title: 'India entry', desc: 'Applicable duties, taxes, port and clearance costs' },
  { title: 'India handling', desc: 'Inland transport, finance and processing costs' },
];

const offerFlow = [
  { num: '01', label: 'Supplier Verification' },
  { num: '02', label: 'Material Review & Inspection Where Required' },
  { num: '03', label: 'Landed Cost Assessment' },
  { num: '04', label: 'Commercial Agreement' },
  { num: '05', label: 'Document Verification' },
  { num: '06', label: 'Shipment' },
  { num: '07', label: 'Receipt & Reconciliation' },
];

const offerChecklist = [
  'Company and country', 'Material and grade', 'Origin', 'Quantity', 'Repeat availability', 'Actual material photographs', 'Loading port', 'Shipment window', 'Price and Incoterm', 'Payment expectation', 'Available documents',
];

const buyCategories = [
  { num: '01', cat: 'Ferrous Scrap', items: 'Mild steel, stainless steel, structural scrap, plates, pipes, angles, channels, beams, fabrication scrap and heavy ferrous material.' },
  { num: '02', cat: 'Non-Ferrous Scrap', items: 'Copper, aluminium, brass, nickel and other industrial alloys.' },
  { num: '03', cat: 'Machinery & Equipment Scrap', items: 'Electric motors, pumps, gearboxes, mechanical assemblies, production machinery and obsolete plant assets.' },
  { num: '04', cat: 'Other Recoverables', items: 'Wooden waste, plastic waste, corrugated boxes and packaging waste.' },
];

const buyingFactors = ['Grade', 'Composition', 'Condition', 'Contamination', 'Quantity', 'Location', 'Handling Cost', 'Recoverable Value'];

const decisionCards = [
  { title: 'Material value', desc: 'Grade, composition and recoverable content.' },
  { title: 'Lot condition', desc: 'Contamination and preparation requirements.' },
  { title: 'Movement cost', desc: 'Location, access, handling and transport.' },
];

const businessModel = [
  { step: 'SOURCE', desc: 'Direct industry • Corporate disposal • Auctions • Tenders • International Scrap Imports' },
  { step: 'ASSESS', desc: 'Material • Grade • Quantity • Condition • Lifting requirements' },
  { step: 'PROCURE', desc: 'Purchase at a commercially viable value.' },
  { step: 'LIFT', desc: 'Plan manpower, machinery, loading and transport.' },
  { step: 'SEGREGATE', desc: 'Separate material according to grade and commercial value.' },
  { step: 'PROCESS', desc: 'Cut, dismantle or prepare material where economically justified.' },
  { step: 'SELL', desc: 'Supply appropriate mills, processors, recyclers or specialised downstream buyers.' },
];

export default function ScrapProcurement() {
  const { setIsQuoteOpen } = useModal();
  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — HERO */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={heroImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">01 / Industrial Scrap Procurement</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Scrap at Your Site.<br /><span className="text-[#C66B45]">A Buyer at Your Side.</span></h1>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/40 mt-5">Domestic &amp; International Scrap Procurement</p>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX Recovery purchases ferrous metals, non-ferrous metals, machinery scrap and other industrial recoverables. We buy directly from industrial sellers in India and evaluate overseas supply for import into India.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Sell Scrap In India</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">Supply Scrap From Overseas</button>
          </div>

          <div className="mt-16 lg:mt-20 border-t border-[#F4F1EA]/10 pt-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block mb-2">The Commercial Decision + The Movement Plan</span>
            <h2 className="text-2xl lg:text-3xl text-[#F4F1EA] font-bold tracking-tight leading-snug">One purchase.<br /><span className="text-[#C66B45]">A defined route to completion.</span></h2>
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed mt-4 max-w-2xl">We take the purchase from material assessment to agreed terms, lifting or shipment, and final reconciliation.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed mt-2 max-w-3xl">Our approach brings the commercial decision and the movement plan together—so every purchase is assessed for its material value and its execution requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F1EA]/10 mt-10">
            {heroSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="bg-[#07101A]/85 h-full p-7">
                  <span className="editorial-num block mb-3">{s.num}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] mb-3">{s.title}</h3>
                  <p className="text-[13px] text-[#F4F1EA]/50 font-body leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a href="#domestic" className="border border-[#F4F1EA]/25 text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore Domestic</a>
            <a href="#international" className="border border-[#F4F1EA]/25 text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore International</a>
          </div>
        </div>
      </section>

      {/* 02 — DOMESTIC */}
      <section id="domestic" className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">02 / Domestic Market</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Sell the Lot.<br /><span className="text-[#C66B45]">Clear the Site.</span></h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>IRONEX purchases industrial scrap through direct procurement and corporate disposals. From accumulated production scrap to mixed machinery and obsolete assets, we assess what is available and what it will take to remove it.</p>
                <p>For the seller, a completed transaction means agreed payment, coordinated lifting and material cleared within the agreed scope and timeline. We consider these requirements together when evaluating your lot.</p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="border-l border-[#C66B45] pl-5 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">A Purchase Plan Built Around Your Site.</span>
                <p className="text-sm text-[#6B6560] font-body leading-relaxed">Material condition, loading access, equipment requirements and working hours can affect both the offer and the lifting schedule. Establishing these details early gives both parties a clear basis for the transaction.</p>
              </div>
              <div className="border-t border-[#D5D0C7]">
                <div className="grid grid-cols-[80px_1fr_2fr] gap-4 py-3 border-b border-[#D5D0C7]">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560]">Step</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560]">What We Establish</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560] hidden md:block" aria-hidden="true"></span>
                </div>
                {domesticSteps.map((s, i) => (
                  <Reveal key={s.num} delay={i * 0.05}>
                    <div className="grid grid-cols-[80px_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 py-4 border-b border-[#D5D0C7] items-start">
                      <span className="editorial-num">{s.num}</span>
                      <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#101820] pt-1">{s.step}</h3>
                      <p className="col-span-2 md:col-span-1 text-[13px] text-[#6B6560] font-body leading-relaxed">{s.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="border-l border-[#C66B45] pl-5 mb-8 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Clear Responsibilities Before Lifting Begins.</span>
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">We connect the purchase terms with the practical work on site. This helps the seller understand what will happen, who is responsible and how the lot will move.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7]">
              {responsibilityCards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="bg-[#F3F0E9] h-full p-7">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] mb-3">{c.title}</h3>
                    <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">Tell us what you have, where it is and when it needs to be cleared.</p>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_LOT)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center sm:shrink-0">Request A Scrap Evaluation</button>
          </div>
        </div>
      </section>

      {/* 03 — INTERNATIONAL */}
      <section id="international" className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="mb-12 max-w-3xl">
            <span className="eyebrow block mb-6">03 / International Market</span>
            <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Export Scrap to India.<br /><span className="text-[#C66B45]">Deal Directly with IRONEX.</span></h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <div className="text-sm text-[#F4F1EA]/55 font-body space-y-4 leading-relaxed">
              <p>IRONEX evaluates ferrous, non-ferrous and machinery scrap from overseas suppliers for import into India.</p>
              <p>We welcome offers from recycling yards, processors, industrial sellers and exporters with verifiable material and supply capability. Offers may cover an individual shipment or recurring supply.</p>
            </div>
          </div>

          <div className="border-t border-[#F4F1EA]/10 pt-10 mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block mb-3">The Material Comes First. The Complete Cost Follows.</span>
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed max-w-3xl">An overseas offer must clearly establish the material, its condition, the shipment terms and the documents supporting it. We evaluate these details alongside the cost of receiving, handling and processing the material in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4F1EA]/10 mb-14">
            {internationalChecks.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="bg-[#07101A] h-full p-7">
                  <span className="editorial-num block mb-3">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] mb-3">{c.title}</h3>
                  <p className="text-[13px] text-[#F4F1EA]/50 font-body leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
            <div className="bg-[#07101A] hidden lg:block" aria-hidden="true" />
          </div>

          <div className="border-t border-[#F4F1EA]/10 pt-10 mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block mb-6">Understanding the Landed-Cost Assessment</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[#F4F1EA]/10">
              {landedCost.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="bg-[#07101A] h-full p-6 relative">
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] mb-3">{c.title}</h3>
                    <p className="text-[13px] text-[#F4F1EA]/50 font-body leading-relaxed">{c.desc}</p>
                    {i < landedCost.length - 1 && (
                      <span className="hidden md:flex absolute top-1/2 -right-px -translate-y-1/2 translate-x-1/2 z-10 w-7 h-7 items-center justify-center bg-[#07101A] border border-[#F4F1EA]/20 text-[#C66B45] font-bold text-sm">+</span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed mt-4">Assess each cost once against the agreed Incoterm and responsibilities.</p>
          </div>

          <div className="border-t border-[#F4F1EA]/10 pt-10 mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block mb-6">From Offer to Receipt in India</span>
            <div className="overflow-x-auto px-1 pt-1 pb-2">
              <div className="relative flex gap-5 lg:gap-4 min-w-[1100px] lg:min-w-0">
                <div className="rtw-line absolute left-0 right-0 top-[6px] h-px bg-[#F4F1EA]/20" />
                {offerFlow.map((s) => (
                  <div key={s.num} className="rtw-step flex-1 relative pt-8 min-w-0">
                    <span className="absolute top-0 left-0 w-3 h-3 rotate-45 bg-[#C66B45]" />
                    <span className="block text-[11px] font-bold tracking-[0.18em] text-[#DDAE97]">{s.num}</span>
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#F4F1EA] mt-2 leading-snug">{s.label}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 mt-6">
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed">Specifications, contamination limits, weight basis and acceptance conditions are agreed before commitment.</p>
              <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed">India-side handling and transport are planned against the purchase.</p>
            </div>
          </div>

          <div className="border-t border-[#F4F1EA]/10 pt-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block mb-4">Submit a Complete Offer</span>
            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-5">
              {offerChecklist.map((item, i) => (
                <span key={item} className="text-[11.5px] text-[#F4F1EA]/70 font-body border border-[#F4F1EA]/15 px-3 py-1.5">{item}{i < offerChecklist.length - 1 && <span className="text-[#C66B45] ml-3">&rarr;</span>}</span>
              ))}
            </div>
            <p className="text-[13px] text-[#F4F1EA]/45 font-body leading-relaxed mb-8">Machinery and other recoverable materials are reviewed individually for suitability and import eligibility.</p>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Submit International Scrap Offer</button>
          </div>
        </div>
      </section>

      {/* 04 — WHAT WE BUY */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">04 / What We Buy</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Production Scrap. Metal Lots.<br /><span className="text-[#C66B45]">Obsolete Machinery.</span></h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
              <p>We evaluate segregated materials, mixed industrial lots, machinery scrap and other recoverables.</p>
              <p>Some lots are ready to load. Others require cutting, dismantling or separation. Our assessment considers the material in its existing condition and the work needed to prepare it for downstream buyers.</p>
            </div>
          </div>

          <div className="border-l border-[#C66B45] pl-5 mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Material Condition + Recovery + Handling Requirements</span>
          </div>

          <div className="border-t border-[#D5D0C7] mb-14">
            <div className="grid grid-cols-[80px_1fr_2fr] gap-4 py-3 border-b border-[#D5D0C7]">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560]">Category</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560]">Materials We Evaluate</span>
              <span className="hidden md:block" aria-hidden="true"></span>
            </div>
            {buyCategories.map((c, i) => (
              <Reveal key={c.cat} delay={i * 0.05}>
                <div className="grid grid-cols-[80px_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 py-4 border-b border-[#D5D0C7] items-start">
                  <span className="editorial-num">{c.num}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[#101820] pt-1">{c.cat}</h3>
                  <p className="col-span-2 md:col-span-1 text-[13px] text-[#6B6560] font-body leading-relaxed">{c.items}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-4">What Shapes Our Buying Decision?</span>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {buyingFactors.map((f, i) => (
                <span key={f} className="text-[11.5px] text-[#6B6560] font-body border border-[#D5D0C7] px-3 py-1.5">{f}{i < buyingFactors.length - 1 && <span className="text-[#C66B45] ml-2">&rarr;</span>}</span>
              ))}
            </div>
            <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-4 max-w-3xl">These factors help establish the commercial value of the lot and its handling requirements. For overseas offers, material acceptance also depends on import eligibility and shipment documentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7] mb-10">
            {decisionCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-7">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] mb-3">{c.title}</h3>
                  <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Share Your Material Details</button>
        </div>
      </section>

      {/* 05 — OUR BUSINESS MODEL */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Our Business Model</span>
            <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Buy Value.<br /><span className="text-[#C66B45]">Not Just Weight.</span></h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX operates primarily as a principal buyer. We purchase material for our own commercial account and take responsibility for evaluating, lifting and monetising it.</p>
          </div>
          <Reveal delay={0.1}>
            <div className="overflow-x-auto px-1 pt-1 pb-2">
              <div className="relative flex gap-5 lg:gap-7 min-w-[1215px] lg:min-w-0">
                <div className="rtw-line absolute left-0 right-0 top-[6px] h-px bg-[#F4F1EA]/20" />
                {businessModel.map((s, i) => (
                  <div key={s.step} className="rtw-step flex-1 relative pt-8 min-w-0">
                    <span className="absolute top-0 left-0 w-3 h-3 rotate-45 bg-[#C66B45]" />
                    <span className="block text-[11px] font-bold tracking-[0.18em] text-[#DDAE97]">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] mt-2">{s.step}</h3>
                    <p className="text-[11.5px] text-[#F4F1EA]/50 leading-relaxed font-body mt-2 pr-3">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 06 — SCRAP CTA */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Scrap Enquiry</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Know What You Have?<br /><span className="text-[#C66B45]">Send It.</span></h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">For an initial commercial evaluation, share:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Material type', 'Approximate quantity', 'Location', 'Photographs / video', 'Inspection availability', 'Lifting condition', 'Auction document where applicable'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Submit Scrap Details</button>
              <Link to="/capabilities/scrap-imports" className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Explore International Scrap Imports</Link>
              <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-2">International Scrap Imports is a dedicated RECOVER category for overseas sourcing opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
