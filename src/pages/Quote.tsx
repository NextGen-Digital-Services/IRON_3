import HeroBackground from '../components/HeroBackground';
import quoteHero from '../assets/quote.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

import { WHATSAPP_CONTACTS } from '../config/contact';
import { openWhatsApp } from '../lib/whatsapp';
import { useModal } from '../context/ModalContext';
import Reveal from '../components/Reveal';

const REQUIRED_INFO: Record<string, { title: string; items: string[]; note?: string }> = {
  'Industrial Scrap Procurement & Processing': {
    title: 'Scrap Enquiry Form',
    items: ['Company', 'Contact person', 'Material category', 'Approximate quantity', 'Location', 'Photographs / video', 'Inspection availability', 'Lifting deadline', 'Message'],
    note: 'For overseas offers, also include origin, loading port, supplier / yard details, grade, shipment window and price / shipping terms.',
  },
  'Scaffolding & Formwork Systems': {
    title: 'Scaffolding Enquiry Form',
    items: ['Name', 'Company', 'Phone', 'Email', 'Project location / country', 'Requirement type', 'System', 'Approx. quantity', 'Required date', 'BOQ / drawing (optional)'],
    note: 'For export enquiries, also include destination country / port, buyer type, required standards / certificates, packing requirements and preferred shipping terms. Accepted BOQ formats: PDF, DWG, DOC and XLS (max 20 MB).',
  },
  'Steel & Construction-Material Supply': {
    title: 'Material Supply Form',
    items: ['Company', 'Product', 'Grade', 'Size', 'Quantity', 'Preferred manufacturer', 'Delivery location', 'BOQ', 'Contact details'],
  },
  'Structural Fabrication & Civil Works': {
    title: 'Project Scope Enquiry',
    items: ['Company', 'Contact details', 'Project scope', 'Location', 'Message'],
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

const SCAFFOLDING_REQUIREMENT_TYPES = ['Rental', 'Purchase', 'Manufacturing', 'Erection & Dismantling', 'International Supply'];
const SCAFFOLDING_SYSTEMS = ['Cuplock', 'H-Frame', 'Tube & Coupler', 'Props', 'Jacks', 'Platforms', 'Accessories', 'Other / Not Sure'];
const BOQ_ACCEPTED = '.pdf,.dwg,.doc,.docx,.xls,.xlsx';
const BOQ_MAX_BYTES = 20 * 1024 * 1024;

export default function Quote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceRequired: 'Industrial Scrap Procurement & Processing',
    projectLocation: '',
    projectSize: '',
    message: '',
    requirementType: '',
    system: '',
    requiredDate: '',
  });
  const [boqFile, setBoqFile] = useState<File | null>(null);
  const [boqError, setBoqError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setIsQuoteOpen } = useModal();
  const isScaffolding = formData.serviceRequired === 'Scaffolding & Formwork Systems';

  const resetForm = () => setFormData({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceRequired: 'Industrial Scrap Procurement & Processing',
    projectLocation: '',
    projectSize: '',
    message: '',
    requirementType: '',
    system: '',
    requiredDate: '',
  });

  const handleBoqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setBoqError('');
    if (!file) {
      setBoqFile(null);
      return;
    }
    const name = file.name.toLowerCase();
    const allowed = ['.pdf', '.dwg', '.doc', '.docx', '.xls', '.xlsx'];
    if (!allowed.some((ext) => name.endsWith(ext))) {
      setBoqFile(null);
      e.target.value = '';
      setBoqError('Accepted formats: PDF, DWG, DOC and XLS.');
      return;
    }
    if (file.size > BOQ_MAX_BYTES) {
      setBoqFile(null);
      e.target.value = '';
      setBoqError('Maximum file size is 20 MB.');
      return;
    }
    setBoqFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const fields: Record<string, string> = {
        _subject: `New Enquiry — ${formData.serviceRequired}`,
        Division: formData.serviceRequired,
        Company: formData.companyName,
        Contact: formData.contactPerson,
        Email: formData.email,
        Phone: formData.phone,
        Location: formData.projectLocation,
        Size: formData.projectSize,
        Message: formData.message,
      };
      if (isScaffolding) {
        fields['Requirement Type'] = formData.requirementType || '—';
        fields['System'] = formData.system || '—';
        fields['Required Date'] = formData.requiredDate || '—';
        if (boqFile) fields['BOQ File'] = boqFile.name;
      }

      let res: Response;
      if (isScaffolding && boqFile) {
        const body = new FormData();
        Object.entries(fields).forEach(([k, v]) => body.append(k, v));
        body.append('BOQ', boqFile);
        res = await fetch('https://formsubmit.co/ajax/sobanbusiness80@gmail.com', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body,
        });
      } else {
        res = await fetch('https://formsubmit.co/ajax/sobanbusiness80@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(fields),
        });
      }
      if (!res.ok) throw new Error('submit failed');
      setSubmitted(true);
      setBoqFile(null);
      setBoqError('');
      setTimeout(() => { setSubmitted(false); resetForm(); }, 5000);
    } catch {
      setSubmitError("We couldn't submit your enquiry. Please check the information and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
              <h2 className={`text-xl font-extrabold text-[#101820] ${isScaffolding ? 'mb-2' : 'mb-6'}`}>{isScaffolding ? 'Send Your Enquiry' : 'Business Enquiry Form'}</h2>
              {isScaffolding && (
                <p className="text-xs text-[#6B6560] font-body mb-6">Provide the key details about your project so our team can review your requirements and respond with the appropriate scaffolding solution, availability and commercial information.</p>
              )}
              {submitted ? (
                <div className="bg-white border border-[#C66B45] p-8 text-center space-y-4">
                  <CheckCircle2 size={24} className="text-[#C66B45] mx-auto" />
                  <h3 className="text-base font-bold text-[#101820]">Thank you for contacting IRONEX.</h3>
                  <p className="text-xs text-[#6B6560] font-body">Your requirement has been submitted successfully. Our team will review the information and get back to you.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {submitError && (
                    <div className="bg-red-50 text-red-700 text-xs p-4 border border-red-200">{submitError}</div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Company Name *</label><input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'Company name' : 'Company'} /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">{isScaffolding ? 'Name *' : 'Contact Person *'}</label><input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'Your full name' : 'Full name'} /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'yourname@company.com' : 'name@company.com'} /></div>
                    <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'Enter your phone number with country code' : '+91 XXXXX XXXXX'} /></div>
                  </div>
                  <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Business *</label><select required value={formData.serviceRequired} onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })} className={inputClass}>{Object.keys(REQUIRED_INFO).map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">{isScaffolding ? 'Project Location / Country' : 'Location'}</label>
                      <input type="text" required={isScaffolding} value={formData.projectLocation} onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'Select country or enter project location' : 'City / Site'} />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">{isScaffolding ? 'Approx. Quantity' : 'Quantity / Size'}</label>
                      <input type="text" required={isScaffolding} value={formData.projectSize} onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })} className={inputClass} placeholder={isScaffolding ? 'e.g. 500 MT / 1000 Sqm / Number of Units' : 'e.g. 50 MT'} />
                    </div>
                  </div>
                  {isScaffolding && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div>
                        <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Requirement Type *</label>
                        <select required value={formData.requirementType} onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })} className={inputClass}>
                          <option value="">Select requirement type</option>
                          {SCAFFOLDING_REQUIREMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">System *</label>
                        <select required value={formData.system} onChange={(e) => setFormData({ ...formData, system: e.target.value })} className={inputClass}>
                          <option value="">Select system</option>
                          {SCAFFOLDING_SYSTEMS.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Required Date *</label>
                        <input type="date" required value={formData.requiredDate} onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })} className={inputClass} />
                      </div>
                    </div>
                  )}
                  <div><label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Requirement Details *</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass + " resize-y"} placeholder={isScaffolding ? 'Project type, expected duration, rental or purchase, access requirements, BOQ notes...' : 'Material category / system / product, specification, BOQ, drawings, scope...'} /></div>
                  {isScaffolding && (
                    <div>
                      <label className="text-[11px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">BOQ / Drawing Upload</label>
                      <input type="file" accept={BOQ_ACCEPTED} onChange={handleBoqChange} className="w-full text-xs font-semibold bg-white border border-[#D5D0C7] px-4 py-3 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-[#F3F0E9] file:text-[11px] file:font-bold file:uppercase file:tracking-[0.12em] file:text-[#101820] cursor-pointer" />
                      <p className="text-[11px] text-[#6B6560] font-body mt-1.5">Upload your BOQ, drawings or project files to help us understand your requirements. Accepted formats: PDF, DWG, DOC and XLS. Maximum file size: 20 MB. Optional.</p>
                      {boqFile && <p className="text-[11px] text-[#C66B45] font-semibold mt-1">Attached: {boqFile.name}</p>}
                      {boqError && <p className="text-red-500 text-[11px] mt-1 font-semibold">{boqError}</p>}
                    </div>
                  )}
                  <button type="submit" disabled={isSubmitting} className="w-full bg-[#C66B45] disabled:opacity-50 text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#D47B55] transition-colors">{isSubmitting ? 'Sending...' : isScaffolding ? 'Send Requirement' : 'Submit Enquiry'}</button>
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
                <p><strong className="text-[#101820] font-semibold">Office:</strong> Shop No. 08, Sonu Apartment, Kamatha Road, Uran - 400702</p>
                <p><strong className="text-[#101820] font-semibold">Warehouse:</strong> At Choudhary Market Uttarshiv, Mumbra - Panvel Road, Thane - 400612</p>
                <p>Other locations can be evaluated according to requirement, quantity and commercial viability.</p>
                <p className="text-[#101820] font-semibold">Email: <a href="mailto:sobanbusiness80@gmail.com" className="hover:text-[#C66B45] transition-colors">sobanbusiness80@gmail.com</a><br />Phone: <a href="tel:+919321318080" className="hover:text-[#C66B45] transition-colors">+91 9321318080</a></p>
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
