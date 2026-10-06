import HeroBackground from '../../components/HeroBackground';
import scrap1 from '../../assets/scrap_01.jpg';
import scrap2 from '../../assets/scrap_02.jpg';
import scrap3 from '../../assets/scrap_03.jpg';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const heroImages = [
  { src: scrap1, alt: 'Scrap yard with claw excavator' },
  { src: scrap2, alt: 'Scrap metal pile in front of a factory' },
  { src: scrap3, alt: 'Industrial scrap yard with crane' },
];

export default function ScrapImports() {
  const { setIsQuoteOpen } = useModal();
  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — INTERNATIONAL SOURCING */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={heroImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">RECOVER &mdash; Scrap Procurement &amp; Processing</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">International<br />Scrap Imports.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX evaluates international sourcing of ferrous and non-ferrous scrap within RECOVER.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">Each opportunity is assessed against recoverable value, material suitability and the complete cost of bringing it into India.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Submit Overseas Scrap Offer</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">Discuss Import Opportunities</button>
          </div>
        </div>
      </section>

      {/* 02 — TARGET MATERIALS */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Target Materials</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Ferrous And<br />Non-Ferrous Categories.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Acceptance depends on grade, contamination, inspection and import eligibility.</p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D0C7]">
              <div className="bg-[#F3F0E9] p-8">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-4">Ferrous</h3>
                <div className="space-y-2">
                  {['M.S. scrap', 'Heavy melting scrap', 'Structural and fabrication scrap', 'Plate and pipe cuttings', 'Stainless steel scrap'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                  ))}
                </div>
              </div>
              <div className="bg-[#F3F0E9] p-8">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-4">Non-Ferrous</h3>
                <div className="space-y-2">
                  {['Copper', 'Aluminium', 'Brass', 'Nickel', 'Other industrial alloys'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — SUPPLIERS AND SOURCE MARKETS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Suppliers And Source Markets</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Where We Source From.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>We welcome offers from overseas recyclers, processors, yards and industrial sellers.</p>
                <p>Supplier identity, material ownership, yard capability, export experience and shipment consistency are evaluated before commitment.</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Target supplier markets for evaluation include the UAE and wider Gulf, the UK and Europe, Austrailia, North America and Southeast Asia.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['The UAE and wider Gulf', 'The UK and Europe', 'Austrailia', 'North America', 'Southeast Asia'].map((item, i) => (
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

      {/* 04 / 05 / 06 — SPECIFICATION, DOCUMENTATION, LANDED COST */}
      <section className="py-24 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F1EA]/10">
            {[
              {
                num: '04',
                title: 'Specification And Inspection',
                body: 'Confirm grade, composition, dimensions, recoverable content, contamination limits and quantity before purchase. Photographs, videos, representative samples and independent inspection can support evaluation. Inspection scope, weight basis and acceptance criteria are agreed before shipment.',
              },
              {
                num: '05',
                title: 'Documentation And Shipping',
                body: 'Applicable import eligibility, compliance requirements and inspection certificates are reviewed for each material and origin. Commercial invoices, packing lists, origin and transport documents must align with the shipment. Container suitability, loading, sealing, freight, insurance responsibilities and shipment schedules are coordinated against agreed terms.',
              },
              {
                num: '06',
                title: 'Landed Cost And India Handling',
                body: 'Commercial evaluation includes purchase price, freight, insurance, applicable duties and taxes, port and clearance charges, inland transport, finance and processing costs. Port / container freight station handling, customs-clearance coordination, weighment and yard movement are planned before arrival. India-side segregation, cutting or processing prepares accepted material for suitable mills, recyclers and downstream buyers.',
              },
            ].map((s, i) => (
              <Reveal key={s.num} delay={i * 0.08}>
                <div className="bg-[#07101A] h-full p-8">
                  <span className="editorial-num">{s.num}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mt-4 mb-4">{s.title}</h3>
                  <p className="text-[13px] text-[#F4F1EA]/55 font-body leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — OVERSEAS SUPPLIER CTA */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Overseas Supplier Enquiry</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Offer A Lot Or Discuss<br />A Recurring Import<br />Opportunity.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Share:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Company and yard details', 'Origin / loading port', 'Material grade', 'Photographs', 'Available quantity', 'Inspection access', 'Shipment window', 'Price basis / shipping terms'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Submit Overseas Scrap Offer</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Discuss Import Opportunities</button>
              <Link to="/capabilities/scrap" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] text-center py-2 hover:tracking-[0.2em] transition-all">&larr; Back To Scrap Procurement</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
