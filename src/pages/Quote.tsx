import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import { WHATSAPP_CONTACTS } from '../config/contact';
import { openWhatsApp } from '../lib/whatsapp';

const DIVISION_CONTACTS: Record<string, string> = {
  'Industrial Scrap Procurement & Processing': WHATSAPP_CONTACTS.SCRAP,
  'Scaffolding & Formwork Systems': WHATSAPP_CONTACTS.SCAFFOLDING,
  'Steel & Construction-Material Supply': WHATSAPP_CONTACTS.MATERIAL_SUPPLY,
  'Structural Fabrication & Civil Works': WHATSAPP_CONTACTS.FABRICATION_CIVIL,
};

export default function Quote() {
  const [formData, setFormData] = useState({ companyName: '', contactPerson: '', email: '', phone: '', serviceRequired: 'Industrial Scrap Procurement & Processing', projectLocation: '', projectSize: '', timeline: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = ['*NEW QUOTE REQUEST — IRONEX*', '', `*Division:* ${formData.serviceRequired}`, `*Company:* ${formData.companyName}`, `*Contact:* ${formData.contactPerson}`, `*Email:* ${formData.email}`, `*Phone:* ${formData.phone}`, `*Location:* ${formData.projectLocation}`, `*Size:* ${formData.projectSize}`, `*Timeline:* ${formData.timeline}`, '', `*Details:*`, formData.message];
    const phone = DIVISION_CONTACTS[formData.serviceRequired] || WHATSAPP_CONTACTS.GENERAL;
    openWhatsApp(phone, lines.join('\n'));
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ companyName: '', contactPerson: '', email: '', phone: '', serviceRequired: 'Industrial Scrap Procurement & Processing', projectLocation: '', projectSize: '', timeline: '', message: '' }); }, 4000);
  };

  const inputClass = "w-full bg-white border border-[#D5D0C7] px-4 py-3 text-xs font-semibold focus:outline-none focus:border-[#C66B45] transition-colors";

  return (
    <div className="bg-[#F3F0E9]">
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Procurement Portal</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Request a Quote.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">Submit your BOQ, drawings, material schedule or project scope. The relevant division will review it before responding.</p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 bg-[#F3F0E9] border border-[#D5D0C7] p-8">
              <h2 className="text-xl font-extrabold text-[#101820] mb-6">Industrial Project Inquiry Form</h2>
              {submitted ? (
                <div className="bg-white border border-[#C66B45] p-8 text-center space-y-4">
                  <CheckCircle2 size={24} className="text-[#C66B45] mx-auto" />
                  <h3 className="text-base font-bold text-[#101820]">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-[#6B6560] font-body">Thank you. Your requirement has been routed to the relevant IRONEX division.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Company Name *</label><input type="text" required value={formData.companyName} onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} className={inputClass} placeholder="e.g. Sterling Power Corp" /></div>
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Contact Person *</label><input type="text" required value={formData.contactPerson} onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })} className={inputClass} placeholder="Full name" /></div>
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="name@company.com" /></div>
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Phone *</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+91 XXXXX XXXXX" /></div>
                  </div>
                  <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Division *</label><select required value={formData.serviceRequired} onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })} className={inputClass}>{['Industrial Scrap Procurement & Processing', 'Scaffolding & Formwork Systems', 'Steel & Construction-Material Supply', 'Structural Fabrication & Civil Works'].map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Location</label><input type="text" value={formData.projectLocation} onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })} className={inputClass} placeholder="City / Site" /></div>
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Project Size</label><input type="text" value={formData.projectSize} onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })} className={inputClass} placeholder="e.g. 50 MT" /></div>
                    <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Timeline</label><input type="text" value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className={inputClass} placeholder="e.g. 2 weeks" /></div>
                  </div>
                  <div><label className="text-[10px] font-bold text-[#101820] uppercase tracking-[0.12em] block mb-2">Requirement Details *</label><textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={inputClass + " resize-y"} placeholder="BOQ, specifications, drawings, scope..." /></div>
                  <button type="submit" className="w-full bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#D47B55] transition-colors">Submit Project Requirements</button>
                </form>
              )}
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820]">How We Respond</h3>
                {[{ step: '01', title: 'Requirement Review', desc: 'The relevant division checks the available information — BOQ, drawings, material schedule, scaffolding quantity or scrap-lot details.' }, { step: '02', title: 'Technical Clarification', desc: 'Specifications, quantity, site access, timeline and commercial conditions are clarified before any proposal is prepared.' }, { step: '03', title: 'Proposal or Inspection', desc: 'IRONEX provides a quotation, confirms availability, requests additional information or schedules a site visit as needed.' }].map((st) => (
                  <div key={st.step} className="flex gap-4">
                    <span className="text-2xl font-extrabold text-[#C66B45] shrink-0">{st.step}</span>
                    <div><h4 className="text-sm font-bold text-[#101820] mb-1">{st.title}</h4><p className="text-[11px] text-[#6B6560] font-body leading-relaxed">{st.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="bg-[#07101A] p-6 space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Need Immediate Assistance?</h4>
                <p className="text-[11px] text-[#F4F1EA]/40 font-body leading-relaxed">For urgent requirements, reach us directly by phone or WhatsApp.</p>
                <div className="space-y-2">
                  <a href="tel:+919324448080" className="block text-[11px] text-[#F4F1EA]/50 hover:text-[#C66B45] transition-colors">+91 9324448080 (Scrap)</a>
                  <a href="tel:+919321028080" className="block text-[11px] text-[#F4F1EA]/50 hover:text-[#C66B45] transition-colors">+91 9321028080 (Scaffolding)</a>
                  <a href="tel:+919231318080" className="block text-[11px] text-[#F4F1EA]/50 hover:text-[#C66B45] transition-colors">+91 9231318080 (Supply)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
