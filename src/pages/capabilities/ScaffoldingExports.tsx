import HeroBackground from '../../components/HeroBackground';
import scaffoldingImg from '../../assets/scaffolding_01.jpg';
import scaffoldingImg2 from '../../assets/scaffolding_02.jpg';
import scaffoldingImg3 from '../../assets/scaffolding_03.jpg';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const heroImages = [
  { src: scaffoldingImg, alt: 'Facade scaffolding on a high-rise structure' },
  { src: scaffoldingImg2, alt: 'Scaffolding system around an industrial silo' },
  { src: scaffoldingImg3, alt: 'Workers on scaffolding at a construction site' },
];

export default function ScaffoldingExports() {
  const { setIsQuoteOpen } = useModal();
  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — INTERNATIONAL SCAFFOLDING SUPPLY */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={heroImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">ACCESS &mdash; Scaffolding &amp; Formwork</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Scaffolding<br />Exports.</h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">IRONEX evaluates scaffolding export requirements within ACCESS &mdash; Scaffolding &amp; Formwork.</p>
            <p className="text-sm text-[#F4F1EA]/45 font-body leading-relaxed">We work from the complete component requirement so international buyers can assess specification, availability and delivery economics before committing.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Request Scaffolding Export Quote</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCAFFOLDING, WHATSAPP_MESSAGES.SCAFFOLDING_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">Become An International Distributor</button>
          </div>
        </div>
      </section>

      {/* 02 — EXPORT PRODUCT RANGE */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Export Product Range</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Systems And Components.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
            <p className="text-sm text-[#6B6560] font-body leading-relaxed">Cuplock, H-Frame and Tube &amp; Coupler systems; standards / verticals, ledgers / horizontals, M.S. tubes, adjustable props, base jacks and U-jacks.</p>
            <p className="text-sm text-[#6B6560] font-body leading-relaxed mt-4">We are also Merchant Exporter of fixed and swivel couplers, tie rods, anchor nuts, jack nuts, top cups, bottom cups, ledger blades and related scaffolding components.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#D5D0C7]">
            {['Cuplock systems', 'H-Frame systems', 'Tube & Coupler systems', 'Standards / Verticals', 'Ledgers / Horizontals', 'M.S. Tubes', 'Adjustable Props', 'Base Jacks', 'U-Jacks', 'Fixed & Swivel Couplers', 'Tie Rods & Anchor Nuts', 'Jack Nuts, Cups & Ledger Blades'].map((item, i) => (
              <div key={item} className="bg-[#F3F0E9] p-5 flex items-start gap-3">
                <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — INTERNATIONAL BUYERS AND MARKETS */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">International Buyers And Markets</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Who We Work With.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>Enquiries are welcome from foreign contractors, distributors, scaffolding rental companies and project procurement teams.</p>
                <p>Supply is assessed against the destination, project requirements and commercial viability.</p>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['The Gulf', 'Africa', 'South Asia', 'Southeast Asia', 'Other destinations evaluated on request'].map((item, i) => (
                  <div key={item} className="bg-[#F3F0E9] p-5 flex items-start gap-3">
                    <span className="text-[11px] font-extrabold text-[#C66B45]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[13px] text-[#6B6560] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#6B6560] font-body leading-relaxed">Destination-market opportunities may include the Gulf, Africa, South Asia and Southeast Asia, with other destinations evaluated on request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 / 05 / 06 — BOQ, MANUFACTURING, PACKING */}
      <section className="py-24 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F1EA]/10">
            {[
              {
                num: '04',
                title: 'BOQ And Specification Confirmation',
                body: 'Share the system, item-wise BOQ, drawings, dimensions, tube thickness, steel grade, finish and required quantities. Confirm component compatibility, applicable project standards, testing / certification requirements and delivery dates before quotation. Substitutions require agreement; system suitability must be established for the intended application.',
              },
              {
                num: '05',
                title: 'Manufacturing Sourcing And QC',
                body: 'Manufacturing or sourcing arrangements are evaluated against the confirmed specification, capacity and delivery window. Quality-control scope can include dimensional checks, weld quality, finish, component fit and quantity verification, with agreed inspection and test records reviewed before dispatch. Certification is confirmed for the specific order.',
              },
              {
                num: '06',
                title: 'Export Packing And Shipment',
                body: 'Packing, protective treatment, bundling, item identification and containerisation are planned around handling and shipment needs. Agree the applicable Incoterms rule and named place / port, freight and insurance responsibilities, payment terms and dispatch schedule. Commercial invoices, packing lists, transport documents and required origin or inspection records are coordinated with destination requirements.',
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

      {/* 07 — INTERNATIONAL BUYER CTA */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">International Buyer Enquiry</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Send Your Project<br />Requirement.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">We will evaluate sourcing, packing and shipping terms for your project or distribution requirement. Share:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {['Destination country / port', 'Company profile', 'Buyer type', 'BOQ', 'Technical specifications', 'Required certificates', 'Quantities', 'Delivery window'].map((item) => (
                  <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Request Scaffolding Export Quote</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCAFFOLDING, WHATSAPP_MESSAGES.SCAFFOLDING_DEFAULT)} className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Become An International Distributor</button>
              <Link to="/capabilities/scaffolding" className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] text-center py-2 hover:tracking-[0.2em] transition-all">&larr; Back To Scaffolding &amp; Formwork</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
