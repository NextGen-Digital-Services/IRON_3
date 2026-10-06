import HeroBackground from '../components/HeroBackground';
import quoteHero from '../assets/quote.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

import { WHATSAPP_CONTACTS } from '../config/contact';
import { openWhatsApp } from '../lib/whatsapp';
import { useModal } from '../context/ModalContext';
import Reveal from '../components/Reveal';

const DIVISION_CONTACTS: Record<string, string> = {
  'Industrial Scrap Procurement & Processing': WHATSAPP_CONTACTS.SCRAP,
  'Scaffolding & Formwork Systems': WHATSAPP_CONTACTS.SCAFFOLDING,
  'Steel & Construction-Material Supply': WHATSAPP_CONTACTS.MATERIAL_SUPPLY,
  'Structural Fabrication & Civil Works': WHATSAPP_CONTACTS.FABRICATION_CIVIL,
};

const REQUIRED_INFO: Record<string, { title: string; items: string[]; note?: string }> = {
  'Industrial Scrap Procurement & Processing': {
    title: 'Scrap Enquiry Form',
    items: ['Company', 'Contact person', 'Material category', 'Approximate quantity', 'Location', 'Photographs / video', 'Inspection availability', 'Lifting deadline', 'Message'],
    note: 'For overseas offers, also include origin, loading port, supplier / yard details, grade, shipment window and price / shipping terms.',
  },
  'Scaffolding & Formwork Systems': {
    title: 'Scaffolding Enquiry Form',
    items: ['Company', 'Project name', 'Project location', 'System required', 'Approximate quantity', 'Rental / purchase', 'Required date', 'Rental duration', 'BOQ', 'Contact details'],
    note: 'For export enquiries, also include destination country / port, buyer type, required standards / certificates, packing requirements and preferred shipping terms.',
  },
  'Steel & Construction-Material Supply': {
    title: 'Material Supply Form',
    items: ['Company', 'Product', 'Grade', 'Size', 'Quantity', 'Preferred manufacturer', 'Delivery location', 'Required date', 'BOQ', 'Contact details'],
  },
  'Structural Fabrication & Civil Works': {
    title: 'Project Scope Enquiry',
    items: ['Company', 'Contact details', 'Project scope', 'Location', 'Required date', 'Message'],
  },
};

const SELECT_BUSINESS = [
  {
    name: 'RECOVER — Scrap',
    items: ['Industrial scrap', 'Machinery', 'Auction lot', 'Recurring disposal', 'Ferrous / non-ferrous material', 'International Scrap Imports / overseas supplier offers'],
    cta: 'Sell Scrap',
    division: 'Industrial Scrap Procurement & Processing',
  },
  {
    name: 'ACCESS — Scaffolding',
    items: ['Rental', 'Sale', 'Cuplock', 'H-Frame', 'Tube & Coupler', 'Components', 'Scaffolding Exports / international buyers and distributors'],
    cta: 'Request Scaffolding',
    division: 'Scaffolding & Formwork Systems',
  },
  {
    name: 'SUPPLY — Construction Material & Steel',
    items: ['Steel', 'Pipes', 'Structural sections', 'Plates', 'TMT', 'Roofing', 'Construction materials'],
    cta: 'Send BOQ',
    division: 'Steel & Construction-Material Supply',
  },
];

export default function Quote() {
  const [formData, setFormData] = useState({ companyName: '', contactPerson: '', email: '', phone: '', serviceRequired: 'Industrial Scrap Procurement & Processing', projectLocation: '', projectSize: '', timeline: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const { setIsQuoteOpen } = useModal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = ['*NEW ENQUIRY — IRONEX*', '', `*Division:* ${formData.serviceRequired}`, `*Company:* ${formData.companyName}`, `*Contact:* ${formData.contactPerson}`, `*Email:* ${formData.email}`, `*Phone:* ${formData.phone}`, `*Location:* ${formData.projectLocation}`, `*Size:* ${formData.projectSize}`, `*Timeline:* ${formData.timeline}`, '', `*Details:*`, formData.message];
    const phone = DIVISION_CONTACTS[formData.serviceRequired] || WHATSAPP_CONTACTS.GENERAL;
    openWhatsApp(phone, lines.join('\n'));
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ companyName: '', contactPerson: '', email: '', phone: '', serviceRequired: 'Industrial Scrap Procurement & Processing', projectLocation: '', projectSize: '', timeline: '', message: '' }); }, 4000);
  };

  const selectDivision = (division: string) => {
    setFormData({ ...formData, serviceRequired: division });
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const inputClass = "w-full bg-white border border-[#D5D0C7] px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[#C66B45] transition-colors";
  const requiredInfo = REQUIRED_INFO[formData.serviceRequired];

  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — HERO */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={[{ src: quoteHero, alt: 'Team reviewing construction plans on site' }]} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Business Enquiries</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">The Faster We Understand The Requirement,<br />The Faster We Can Tell You What Is Possible.</h1>
          <p className="text-sm text-[#F4F1EA]/45 mt-6 max-w-xl font-body">Choose the relevant business and share the information required for a meaningful technical and commercial evaluation.</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.GENERAL, 'Hello IRONEX, I would like to make a business enquiry.')} className="bg-[#25D366] text-[#07101A] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#1fba58] transition-colors">WhatsApp IRONEX</button>
            <a href="#enquiry" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Submit Enquiry</a>
          </div>
        </div>
      </section>

      {/* 02 — SELECT YOUR BUSINESS */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">Select Your Business</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Three Businesses.<br />One Enquiry Path.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7]">
            {SELECT_BUSINESS.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.08}>
                <div className="bg-[#F3F0E9] h-full p-8 flex flex-col group hover:bg-[#07101A] transition-all duration-500">
                  <span className="editorial-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mt-4 mb-5 transition-colors duration-500">{b.name}</h3>
                  <div className="space-y-2 flex-1">
                    {b.items.map((it) => (
                      <div key={it} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] group-hover:text-[#F4F1EA]/55 font-body">{it}</span></div>
                    ))}
                  </div>
                  <button onClick={() => selectDivision(b.division)} className="mt-7 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] text-left hover:tracking-[0.2em] transition-all">{b.cta} &rarr;</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 / 04 / 05 — ENQUIRY FORM + REQUIRED INFORMATION */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]" id="enquiry">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-[#F3F0E9] border border-[#D5D0C7] p-8">
              <h2 className="text-xl font-extrabold text-[#101820] mb-6">Business Enquiry Form</h2>
              {submitted ? (
                <div className="bg-white border border-[#C66B45] p-8 text-center space-y-4">
                  <CheckCircle2 size={24} className="text-[#C66B45] mx-auto" />
                  <h3 className="text-base font-bold text-[#101820]">Enquiry Submitted Successfully</h3>
                  <p className="text-xs text-[#6B6560] font-body">Thank you. Your requirement has been routed to the relevant IRONEX division.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Company Name *</label><input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className={inputClass} placeholder="Company" /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Contact Person *</label><input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} className={inputClass} placeholder="Full name" /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="name@company.com" /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+91 XXXXX XXXXX" /></div>
                  </div>
                  <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Business *</label><select required value={formData.serviceRequired} onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })} className={inputClass}>{Object.keys(REQUIRED_INFO).map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Location</label><input type="text" value={formData.projectLocation} onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })} className={inputClass} placeholder="City / Site" /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Quantity / Size</label><input type="text" value={formData.projectSize} onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })} className={inputClass} placeholder="e.g. 50 MT" /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Required Date</label><input type="text" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className={inputClass} placeholder="e.g. 2 weeks" /></div>
                  </div>
                  <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Requirement Details *</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass + " resize-y"} placeholder="Material category / system / product, specification, BOQ, drawings, scope..." /></div>
                  <button type="submit" className="w-full bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#D47B55] transition-colors">Submit Enquiry</button>
                </form>
              )}
            </div>

            {/* Required Information (03 / 04 / 05) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-l border-[#C66B45] pl-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Required Information</span>
                <h3 className="text-base font-extrabold text-[#101820] mb-4">{requiredInfo?.title}</h3>
                <div className="space-y-2">
                  {requiredInfo?.items.map((item) => (
                    <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#6B6560] font-body">{item}</span></div>
                  ))}
                </div>
                {requiredInfo?.note && <p className="text-[13px] text-[#6B6560] font-body leading-relaxed mt-4">{requiredInfo.note}</p>}
              </div>

              <div className="flex flex-col gap-3">
                <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-[#D47B55] transition-colors text-center">Request Company Profile</button>
                <Link to="/capabilities/scrap-imports" className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3.5 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Submit Overseas Scrap Offer</Link>
                <Link to="/capabilities/scaffolding-exports" className="border border-[#101820]/20 text-[#101820] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3.5 hover:border-[#C66B45] hover:text-[#C66B45] transition-all text-center">Request Scaffolding Export Quote</Link>
              </div>

              {/* 06 — CORPORATE & PROCUREMENT ENQUIRIES */}
              <div className="bg-[#07101A] p-6 space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block">Corporate &amp; Procurement Enquiries</span>
                <p className="text-[13px] text-[#F4F1EA]/55 font-body leading-relaxed">For organizations looking to discuss broader commercial relationships, our team can assist with:</p>
                <div className="grid grid-cols-1 gap-y-1.5">
                  {['Vendor registration', 'Company credentials', 'Compliance documentation', 'Corporate scrap agreements', 'Annual supply arrangements', 'Large-volume procurement', 'Partnership proposals', 'General business enquiries'].map((item) => (
                    <div key={item} className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" /><span className="text-[13px] text-[#F4F1EA]/50 font-body">{item}</span></div>
                  ))}
                </div>
                <button onClick={() => setIsQuoteOpen(true)} className="w-full bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-3.5 hover:bg-[#D47B55] transition-colors">Request Company Profile</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — LOCATION */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Location</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Based In Navi Mumbai.<br />Serving Industrial<br />Maharashtra.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm font-extrabold text-[#101820] uppercase tracking-[0.1em]">IRONEX Steel &amp; Infra LLP</p>
              <div className="text-sm text-[#6B6560] font-body space-y-3 leading-relaxed">
                <p>Other locations can be evaluated according to requirement, quantity and commercial viability.</p>
                <p className="text-[#101820] font-semibold">Email: <a href="mailto:info@ironex.com" className="hover:text-[#C66B45] transition-colors">info@ironex.com</a><br />Phone: <a href="tel:+919324448080" className="hover:text-[#C66B45] transition-colors">+91 9324448080</a> / <a href="tel:+919321028080" className="hover:text-[#C66B45] transition-colors">+91 9321028080</a></p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-5">Core Service Belt</span>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#D5D0C7]">
                {['Uran', 'Nhava Sheva', 'JNPT', 'Panvel', 'Navi Mumbai', 'Raigad', 'Mumbai', 'Thane', 'Bhiwandi'].map((location) => (
                  <div key={location} className="bg-[#F3F0E9] p-5 text-center hover:bg-[#07101A] transition-all duration-500 group">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500">{location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FINAL CLOSE */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 text-center">
          <h2 className="heading-editorial text-[#F4F1EA] text-4xl lg:text-6xl leading-none tracking-tight">
            RECOVER.<br />ACCESS.<br /><span className="text-[#C66B45]">SUPPLY.</span>
          </h2>
          <div className="mt-8 space-y-1">
            <p className="text-sm text-[#F4F1EA]/60 font-body">Industrial scrap that needs to move out.</p>
            <p className="text-sm text-[#F4F1EA]/60 font-body">Scaffolding that enables work to happen.</p>
            <p className="text-sm text-[#F4F1EA]/60 font-body">Materials that need to move in.</p>
          </div>
          <p className="text-sm text-[#F4F1EA]/45 font-body mt-6 max-w-2xl mx-auto">Three different businesses connected by the same operating discipline:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            {['Understand The Requirement.', 'Control The Movement.', 'Execute The Commitment.'].map((s) => (
              <span key={s} className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#F4F1EA]/85 font-body border border-[#F4F1EA]/10 px-5 py-3">{s}</span>
            ))}
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F4F1EA]/50 mt-10">IRONEX Steel &amp; Infra LLP</p>
          <p className="text-[13px] text-[#F4F1EA]/40 font-body italic mt-1">Delivering Strength Across Every Industry.</p>
          <div className="flex justify-center mt-8">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Discuss Your Requirement</button>
          </div>
        </div>
      </section>
    </div>
  );
}
