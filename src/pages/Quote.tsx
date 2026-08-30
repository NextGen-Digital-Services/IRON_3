import { useState } from 'react';
import { FileText, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

import heroImg from '../assets/industrial_hero.jpg';
import { WHATSAPP_CONTACTS } from '../config/contact';
import { openWhatsApp } from '../lib/whatsapp';

const DIVISION_CONTACTS: Record<string, string> = {
  'Industrial Scrap Procurement & Processing': WHATSAPP_CONTACTS.SCRAP,
  'Scaffolding & Formwork Systems': WHATSAPP_CONTACTS.SCAFFOLDING,
  'Steel & Construction-Material Supply': WHATSAPP_CONTACTS.MATERIAL_SUPPLY,
  'Structural Fabrication & Civil Works': WHATSAPP_CONTACTS.FABRICATION_CIVIL,
};

export default function Quote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
        serviceRequired: 'Industrial Scrap Procurement & Processing',
    projectLocation: '',
    projectSize: '',
    timeline: '',
    message: '',
    drawing: null as File | null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(formData);
    const phone = DIVISION_CONTACTS[formData.serviceRequired] || WHATSAPP_CONTACTS.GENERAL;
    openWhatsApp(phone, message);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        serviceRequired: 'Industrial Scrap Procurement & Processing',
        projectLocation: '',
        projectSize: '',
        timeline: '',
        message: '',
        drawing: null
      });
    }, 4000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, drawing: e.target.files[0] });
    }
  };

  const steps = [
    {
      title: 'Requirement Review',
      desc: 'The relevant IRONEX division checks the available information - BOQ, drawings, material schedule, scaffolding quantity or scrap-lot details.',
      time: 'Step 01'
    },
    {
      title: 'Technical Clarification',
      desc: 'Specifications, quantity, site access, timeline and commercial conditions are clarified before any proposal is prepared.',
      time: 'Step 02'
    },
    {
      title: 'Proposal or Inspection',
      desc: 'IRONEX provides a quotation, confirms availability, requests additional information or schedules a site visit as needed.',
      time: 'Step 03'
    }
  ];

  function buildWhatsAppMessage(data: typeof formData): string {
    const lines = [
      '*NEW QUOTE REQUEST \\u2014 IRONEX*',
      '',
      `*Division:* ${data.serviceRequired}`,
      `*Company:* ${data.companyName}`,
      `*Contact Person:* ${data.contactPerson}`,
      `*Email:* ${data.email}`,
      `*Phone:* ${data.phone}`,
      `*Project Location:* ${data.projectLocation}`,
      `*Project Size / Tonnage:* ${data.projectSize}`,
      `*Timeline:* ${data.timeline}`,
      '',
      `*Requirement Details:*`,
      data.message,
    ];
    if (data.drawing) {
      lines.push('', `*Attachment:* ${data.drawing.name}`);
    }
    return lines.join('\n');
  }

  return (
    <div className="bg-bg-light">
      
      {/* Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="Quotation backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Procurement Portal</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Request a Quote</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Submit your BOQ, drawings, material schedule, scaffolding quantity or scrap-lot information. The relevant division will review it before responding.
          </p>
        </div>
      </section>

      {/* Quote Form & Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
            
            {/* Left: Request Form */}
            <div className="lg:col-span-7 bg-bg-light p-8 rounded-xl border border-gray-250/50 shadow-xs">
              <h2 className="text-xl font-bold text-primary mb-6">Industrial Project Inquiry Form</h2>
              
              {submitted ? (
                <div className="bg-white border border-secondary p-8 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-bold text-primary">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-gray-500 font-body leading-relaxed max-w-md mx-auto">
                    Thank you. Your requirement has been routed to the relevant IRONEX division. We will review the information and respond with clarity on scope and availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Company Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. Sterling Power Corp"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Contact Person *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. Amit Sen"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Corporate Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. purchasing@sterling.com"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Service Required *</label>
                      <select 
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary"
                      >
                        <option>Industrial Scrap Procurement & Processing</option>
                        <option>Scaffolding & Formwork Systems</option>
                        <option>Steel & Construction-Material Supply</option>
                        <option>Structural Fabrication & Civil Works</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Project Location *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. Uran, Maharashtra"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Project Size / Tonnage *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.projectSize}
                        onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. 45,000 sq ft / 500 MT"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Timeline Requirements *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. 6 Months / Immediate"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Project Message / Specifications *</label>
                    <textarea 
                      required 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary font-body resize-none" 
                      placeholder="Detail the requirement - material specifications, scaffolding quantity, scrap-lot information or scope of execution..."
                    />
                  </div>

                  {/* File Upload Block */}
                  <div>
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2">Upload Drawings / BOQ (PDF/DWG/ZIP) *</label>
                    <div className="bg-white border border-dashed border-gray-300 rounded-xl p-6 text-center space-y-2 hover:border-secondary transition-colors duration-300 relative">
                      <input 
                        type="file" 
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" 
                        accept=".pdf,.dwg,.zip,.rar"
                      />
                      <FileText className="text-gray-400 mx-auto" size={24} />
                      <div className="text-[11px] text-gray-500 font-body font-semibold">
                        {formData.drawing ? (
                          <span className="text-secondary">{formData.drawing.name}</span>
                        ) : (
                          <span>Click to browse or drag your drawing file here</span>
                        )}
                      </div>
                      <span className="text-[9px] text-gray-400 block font-body">Max file size: 25MB</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="btn-primary w-full bg-secondary text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-sm"
                    >
                      Submit Requirement
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Quotation Timeline & Illustrations */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Review Process</span>
                <h2 className="text-2xl font-extrabold text-primary tracking-tight">How Your Requirement Is Reviewed</h2>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Each enquiry is routed to the relevant business division and reviewed for genuine feasibility before any commitment is made.
                </p>
              </div>

              {/* Vertical timeline illustration */}
              <div className="space-y-8 relative pl-6 border-l border-gray-150 text-left">
                {steps.map((st, idx) => (
                  <div key={idx} className="relative space-y-2">
                    {/* Circle marker */}
                    <div className="absolute -left-[31px] top-0 w-3 h-3 rounded-full bg-secondary border border-white" />
                    
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider">{st.title}</h4>
                      <span className="text-[9px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2 py-0.5 rounded-lg border border-secondary/15">
                        {st.time}
                      </span>
                    </div>
                    
                    <p className="text-[11px] text-gray-500 leading-relaxed font-body">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quality & safety commitment badge */}
              <div className="p-6 bg-bg-light rounded-xl border border-gray-200/50 flex gap-4 items-start text-left">
                <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs shrink-0 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Defined Responsibility for Every Enquiry</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body">
                    When a requirement is outside our current capability, timeline or scope, we communicate it before making commitments. Honest capability comes before acceptance.
                  </p>
                </div>
              </div>

              {/* Office Location Map */}
              <div className="overflow-hidden rounded-xl border border-gray-200/60 bg-white shadow-xs">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Office Location</h4>
                    <p className="text-[10px] text-gray-500 font-body mt-0.5">Uran, Maharashtra - Operational Base</p>
                  </div>
                  <MapPin size={18} className="text-secondary shrink-0" />
                </div>
                <iframe
                  title="IRONEX Office Location - Uran, Maharashtra"
                  src="https://www.google.com/maps?q=Uran%2C%20Maharashtra%2C%20India&z=11&output=embed"
                  className="w-full h-72 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
