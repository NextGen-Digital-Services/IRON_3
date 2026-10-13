import { useEffect, useRef, useState } from 'react';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';
import HeroBackground from '../../components/HeroBackground';
import steel1 from '../../assets/steel_01.jpg';
import steel2 from '../../assets/steel_02.jpg';
import steel3 from '../../assets/steel_03.jpg';
import steel4 from '../../assets/steel_04.jpg';
import Reveal from '../../components/Reveal';

const heroImages = [
  { src: steel1, alt: 'Metal bars, pipes and tubing in storage' },
  { src: steel2, alt: 'Pipes and reservoirs of a factory' },
  { src: steel3, alt: 'Large industrial pipes and tanks' },
  { src: steel4, alt: 'Steel pipes under a factory ceiling' },
];

const productRange = [
  { cat: 'Pipes', items: ['M.S. Pipes', 'G.I. Pipes', 'G.P. Pipes'] },
  { cat: 'Reinforcement', items: ['TMT Steel'] },
  { cat: 'Structural Steel', items: ['Angles', 'Channels', 'Beams', 'Flats', 'Other structural sections'] },
  { cat: 'Plates', items: ['M.S. Plates', 'Chequered Plates'] },
];

const roofingRange = [
  { cat: 'Roofing Solutions', items: ['Profile Sheets', 'G.I. Sheets', 'UPVC Roofing Sheets', 'Polycarbonate Sheets', 'Cement Sheets'] },
  { cat: 'Roofing Accessories', items: ['Hooks', 'Fasteners', 'Bolts', 'Nuts', 'Ridge accessories', 'Related roofing components'] },
];

const fulfilmentSteps = [
  { title: 'Understand The BOQ', desc: 'Product, grade, size, quantity, make and required delivery window.' },
  { title: 'Clarify', desc: 'Resolve missing specifications or commercially important details before ordering.' },
  { title: 'Check Fulfilment', desc: 'Evaluate availability across stock and sourcing network—not simply whether one item can be quoted.' },
  { title: 'Offer', desc: 'Clarify material rates, taxes, freight, availability and commercial terms.' },
  { title: 'Confirm', desc: 'Lock the accepted requirement and delivery expectations.' },
  { title: 'Coordinate', desc: 'Arrange procurement, consolidation and transport.' },
  { title: 'Deliver', desc: 'Move material with applicable commercial documentation.' },
  { title: 'Close The Requirement', desc: 'Confirm that supplied material corresponds with the agreed commercial requirement.' },
];

const whoWeSupply = [
  { t: 'Contractors', d: 'Project-based and recurring construction material requirements.' },
  { t: 'Fabricators', d: 'Structural sections, plates, pipes and related steel requirements.' },
  { t: 'Industrial Facilities', d: 'Maintenance, repair and project procurement.' },
  { t: 'Warehouses & Logistics Companies', d: 'Roofing, structural and maintenance materials.' },
  { t: 'Builders & Developers', d: 'Steel and selected construction products.' },
  { t: 'Infrastructure Companies', d: 'Requirement-based material supply.' },
  { t: 'Procurement Teams', d: 'Repeat supply, BOQ-based procurement and consolidated requirements.' },
];

export default function SteelSupply() {
  const { setIsQuoteOpen } = useModal();
  const supplyRef = useRef<HTMLElement>(null);
  const [supplyProgress, setSupplyProgress] = useState(0);

  useEffect(() => {
    const el = supplyRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.35;
      const raw = (start - rect.top) / (start - end);
      setSupplyProgress(Math.min(1, Math.max(0, raw)));
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
        <HeroBackground images={heroImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Industrial Supply</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">A Purchase Order Is Not Supply,<br />Fulfilment Is.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX supplies steel, structural sections, pipes, plates, TMT, roofing systems and other construction materials for industrial, warehouse, infrastructure, contractor and project requirements.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">Our role is not simply to quote a BOQ. It is to help convert that BOQ into the correct material, in the required quantity, specification and delivery sequence.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Send Your BOQ</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.MATERIAL_SUPPLY, WHATSAPP_MESSAGES.SUPPLY_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
          </div>
        </div>
      </section>

      {/* 02 — THE REAL SUPPLY PROBLEM */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">The Real Supply Problem</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">A Requirement Can Be<br />Fulfilled And Still Hold<br />Up The Next Activity.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>Industrial procurement often appears complete on paper before it is complete operationally.</p>
                <p>The quotation may cover every line item. The purchase order may already be released. Most of the material may even have reached site.</p>
                <p>But if one critical section, plate, pipe size, roofing component or specification is missing, the next activity may still be unable to begin.</p>
              </div>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">That is the fulfilment gap.</span>
                <p className="text-sm text-[#101820] font-body leading-relaxed">It appears when the requirement and the delivered reality do not fully match.</p>
              </div>
              <div className="border-l border-[#D5D0C7] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560] block mb-2">Core Business Problem</span>
                <p className="text-base font-extrabold text-[#101820] uppercase tracking-[0.1em]">The Fulfilment Gap</p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-4">Common Causes Include</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                  {['Wrong specification', 'Short quantity', 'Partial availability', 'Mixed delivery timelines', 'Missing accessories', 'Incorrect dimensions', 'Unplanned substitutions', 'Poor dispatch sequencing'].map((item, i) => (
                    <div key={item} className="bg-[#F3F0E9] p-4 flex items-start gap-3">
                      <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-[#F3F0E9] p-4 flex items-center justify-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 shrink-0" />
                  <span className="text-[13px] text-[#6B6560] font-body">Multiple repeat deliveries</span>
                </div>
              </div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-3">The Result Can Be</h3>
                <p className="text-sm text-[#6B6560] font-body leading-relaxed">rework, additional freight, idle fabrication capacity, site waiting, delayed installation and avoidable procurement follow-up.</p>
              </div>
              <div className="border-l border-[#C66B45] pl-5">
                <p className="text-sm text-[#6B6560] font-body leading-relaxed">Procurement is not successful because the PO was issued.</p>
                <p className="text-base font-extrabold text-[#101820] leading-snug mt-1">It is successful when the requirement becomes usable.</p>
                <p className="text-[13px] text-[#6B6560] font-body mt-2">That is the problem IRONEX works to reduce.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — STEEL PRODUCT RANGE */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Steel Product Range</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">What We Supply.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0C7]">
            {productRange.map((p, i) => (
              <Reveal key={p.cat} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-8">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820]">{p.cat}</h3>
                  </div>
                  <div className="space-y-2">
                    {p.items.map((it) => (
                      <div key={it} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{it}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">Supply depends on required specification, grade, size, manufacturer, quantity and current availability.</p>
        </div>
      </section>

      {/* 04 — ROOFING & CONSTRUCTION PRODUCTS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Roofing &amp; Construction Products</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Roofing Solutions<br />&amp; Accessories.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            {roofingRange.map((p, i) => (
              <Reveal key={p.cat} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-8">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820]">{p.cat}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {p.items.map((it) => (
                      <div key={it} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{it}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">These products can support requirements across warehouses, industrial sheds, factories, workshops, commercial structures and replacement roofing projects.</p>
        </div>
      </section>

      {/* 05 — WHO WE SUPPLY */}
      <section ref={supplyRef} className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Who We Supply</span>
            <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Built For B2B And<br />Project Requirements.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="overflow-x-auto pb-4 -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="relative min-w-[640px] pt-10 pb-2">
              <div className="absolute left-0 right-0 top-[44px] h-px bg-[#F4F1EA]/10" />
              <div className="absolute left-0 top-[44px] h-px bg-[#C66B45] transition-[width] duration-200" style={{ width: `${supplyProgress * 100}%` }} />
              <div className="relative flex justify-between">
                {whoWeSupply.map((p, i) => {
                  const stepAt = i / (whoWeSupply.length - 1);
                  const passed = supplyProgress >= stepAt;
                  return (
                    <div key={p.t} className="flex flex-col items-center gap-4 w-[calc(100%/7)]">
                      <span className={`w-2.5 h-2.5 rotate-45 transition-colors duration-300 ${passed ? 'bg-[#C66B45]' : 'bg-[#F4F1EA]/20'}`} />
                      <span className={`text-[11px] font-extrabold transition-colors duration-300 ${passed ? 'text-[#C66B45]' : 'text-[#F4F1EA]/30'}`}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-[0.12em] text-center leading-tight transition-colors duration-300 ${passed ? 'text-[#F4F1EA]' : 'text-[#F4F1EA]/30'}`}>{p.t}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-8 border-l border-[#C66B45] pl-5 max-w-xl">
            <p className="text-[13px] text-[#F4F1EA]/50 font-body leading-relaxed">{whoWeSupply[Math.min(whoWeSupply.length - 1, Math.floor(supplyProgress * (whoWeSupply.length - 1) + 0.001))]?.d}</p>
          </div>
        </div>
      </section>

      {/* 06 — FROM BOQ TO FULFILMENT */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">From BOQ To Fulfilment</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">The Requirement Matters<br />More Than The Rate Sheet.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0C7]">
            {fulfilmentSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="bg-[#F3F0E9] h-full p-6 group hover:bg-[#07101A] transition-all duration-500">
                  <span className="text-2xl font-extrabold text-[#C66B45] block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mb-3 transition-colors duration-500">{s.title}</h3>
                  <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/50 leading-relaxed font-body transition-colors duration-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — CONSOLIDATED PROJECT SUPPLY */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Consolidated Project Supply</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">The Objective Is Not<br />More Products.<br />It Is A More Complete<br />Requirement.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>A project BOQ rarely contains only one steel item. Where commercially feasible, IRONEX can evaluate consolidated supply across:</p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-col gap-3 py-2">
                {['Structural steel', 'Pipes', 'Plates', 'TMT', 'Roofing systems', 'Roofing accessories'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 shrink-0" />
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3 py-2">
                <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 shrink-0" />
                <span className="text-[13px] text-[#6B6560] font-body">Related construction materials</span>
              </div>
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed pt-2">
                <p>The value is not merely in reducing the number of vendors. The real benefit is improving requirement-level coordination&mdash;ensuring related materials are considered as part of the same commercial need rather than as disconnected individual orders.</p>
                <p className="text-[#101820] font-semibold">One missing line item can hold up an entire work package.</p>
                <p>That is why we focus on fulfilment rather than quotation count.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — SUPPLY CTA */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Supply Enquiry</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Send The BOQ.<br /><span className="text-[#C66B45]">Let Us Understand The Full Requirement.</span></h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">For a useful commercial offer, share:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Product', 'Grade', 'Size', 'Quantity', 'Preferred manufacturer', 'Delivery location', 'Required date', 'BOQ / drawing where applicable'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Request Commercial Offer</button>
              <button onClick={() => setIsQuoteOpen(true)} className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Upload Your BOQ</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
