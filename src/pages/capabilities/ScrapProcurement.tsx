import HeroBackground from '../../components/HeroBackground';
import scrap1 from '../../assets/scrap_01.jpg';
import scrap2 from '../../assets/scrap_02.jpg';
import scrap3 from '../../assets/scrap_03.jpg';
import scrap4 from '../../assets/scrap_04.jpg';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';

const heroImages = [
  { src: scrap1, alt: 'Scrap yard with claw excavator' },
  { src: scrap2, alt: 'Scrap metal pile in front of a factory' },
  { src: scrap3, alt: 'Industrial scrap yard with crane' },
  { src: scrap4, alt: 'Train car in a scrap metal yard' },
];
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const materialCategories = [
  { cat: 'Ferrous Scrap', items: ['M.S. scrap', 'Stainless Steel Scrap', 'Structural scrap', 'Plates', 'Pipes', 'Angles', 'Channels', 'Beams', 'Machinery components', 'Fabrication scrap', 'Heavy ferrous material'] },
  { cat: 'Non-Ferrous Scrap', items: ['Copper', 'Aluminium', 'Brass', 'Nickel', 'Other industrial alloys'] },
  { cat: 'Machinery & Equipment', items: ['Motors', 'Plant equipment', 'Mechanical assemblies', 'Production machinery', 'Selected obsolete assets'] },
  { cat: 'Other Selected Material', items: ['IBC tanks', 'Plastic scrap', 'Wooden scrap', 'Paper scrap', 'Industrial packaging and surplus'] },
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
          <span className="eyebrow block mb-6">Industrial Recovery</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Scrap Is Sold By Weight.<br />Profit Is Hidden In Recovery.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX procures and handles industrial scrap across ferrous, non-ferrous, machinery and other surplus categories.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">But scrap value is rarely determined by gross weight alone. The real economics sit inside:</p>
            <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#F4F1EA]/85 font-body leading-relaxed">Grade &bull; Composition &bull; Recovery &bull; Contamination &bull; Dismantling &bull; Logistics &bull; Downstream Realization</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Offer Scrap To IRONEX</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">Discuss Your Scrap Lot</button>
          </div>
        </div>
      </section>

      {/* 02 — THE SCRAP PROBLEM */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">The Scrap Problem</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Two Lots Can Weigh<br />The Same.<br />Their Real Value Can Be<br />Completely Different.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>A 50 MT lot is not automatically a 50 MT opportunity.</p>
                <p>Inside that weight may be valuable non-ferrous metal, low-value ferrous material, oil, rubber, insulation, plastic, moisture, concrete, contaminants or material requiring expensive dismantling.</p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="border-l border-[#D5D0C7] pl-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6B6560] block mb-2">The real question is not:</span>
                <p className="text-lg text-[#101820] font-body italic">&ldquo;What does the lot weigh?&rdquo;</p>
              </div>
              <div className="border-l border-[#C66B45] pl-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">It is:</span>
                <p className="text-lg text-[#101820] font-body italic">&ldquo;What value can actually be recovered after every cost?&rdquo;</p>
              </div>
              <p className="text-sm text-[#6B6560] font-body leading-relaxed pt-2">That is where scrap transactions make or lose money.</p>
              <div className="border-l border-[#C66B45] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Core Business Problem</span>
                <p className="text-base font-extrabold text-[#101820] uppercase tracking-[0.1em]">Value Leakage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — MATERIAL CATEGORIES */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Material Categories</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">What We Procure.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
            {materialCategories.map((m, i) => (
              <Reveal key={m.cat} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-8">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820]">{m.cat}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                    {m.items.map((it) => (
                      <div key={it} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{it}</span></div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-8 max-w-3xl">Material acceptance depends on inspection, quantity, contamination, location, regulatory applicability and commercial viability.</p>
        </div>
      </section>

      {/* 04 — OUR BUSINESS MODEL */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Our Business Model</span>
            <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Buy Value.<br /><span className="text-[#C66B45]">Not Just Weight.</span></h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX operates primarily as a principal buyer. We purchase material for our own commercial account and take responsibility for evaluating, lifting and monetising it.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F4F1EA]/10">
            {businessModel.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="bg-[#07101A] h-full p-6">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#C66B45] block mb-3">{String(i + 1).padStart(2, '0')} &rarr;</span>
                  <h3 className="text-base font-extrabold uppercase tracking-[0.1em] text-[#F4F1EA] mb-3">{s.step}</h3>
                  <p className="text-[13px] text-[#F4F1EA]/50 font-body leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — WHY RECOVERY CONTROL MATTERS */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Why Recovery Control Matters</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Accurate Recovery Assessment Supports A Clear Commercial Offer.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Recovery, contamination, dismantling requirements and material handling affect the commercial evaluation of every lot.</p>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">The Principle</span>
                <p className="text-base font-extrabold text-[#101820] leading-snug">Buy On Recoverable Value.<br />Not Optimistic Value.</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-5">Commercial Evaluation Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Purchase price', 'Actual recovery', 'Processing cost', 'Labour', 'Loading', 'Transport', 'Lifting time', 'Finance cost', 'Market movement', 'Downstream selling rate'].map((item, i) => (
                  <div key={item} className="bg-[#F3F0E9] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — AUCTIONS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Auctions</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Every Auction Lot Needs<br />A Clear Commercial<br />And Execution Plan.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>Auction lots require careful evaluation of material, commercial terms and lifting obligations.</p>
                <p>Our participation is guided by inspection findings and a clear valuation basis.</p>
              </div>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Our Rule</span>
                <p className="text-sm text-[#101820] font-body font-semibold leading-relaxed">The buying limit and execution requirements are established before bidding begins.</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mb-5">Before Participating, IRONEX Evaluates</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Material composition', 'Inspection observations', 'Recoverable quantity', 'Security deposit', 'Auction conditions', 'Lifting period', 'Loading responsibility', 'Penalties', 'Transport', 'Processing requirements', 'Expected downstream value'].map((item) => (
                  <div key={item} className="bg-[#F3F0E9] p-4 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" />
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — WHY INDUSTRIAL SELLERS NEED EXECUTION */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Why Industrial Sellers Need Execution</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">The Highest Bid Is Not<br />Always The Best Buyer.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#F4F1EA]/55 font-body space-y-4 leading-relaxed">
                <p>For an industrial seller, the transaction is not complete when the rate is agreed. The material still has to leave.</p>
                <p>A capable buyer should be able to:</p>
              </div>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <p className="text-sm text-[#F4F1EA]/70 font-body leading-relaxed">Scrap occupying your yard after the sale is still your operational problem</p>
                <p className="text-base font-extrabold text-[#C66B45] uppercase tracking-[0.1em] mt-1">Until it moves.</p>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#F4F1EA]/10">
                {['Mobilise', 'Pay', 'Arrange machinery', 'Place vehicles', 'Coordinate weighment', 'Handle multiple categories', 'Meet lifting timelines', 'Close documentation'].map((item, i) => (
                  <div key={item} className="bg-[#07101A] p-4 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#F4F1EA]/60 font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — SCRAP CTA */}
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
