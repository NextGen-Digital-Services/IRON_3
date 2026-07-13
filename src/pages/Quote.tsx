import { useState } from 'react';
import { FileText, ShieldCheck, CheckCircle2 } from 'lucide-react';

import heroImg from '../assets/industrial_hero.jpg';

export default function Quote() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    serviceRequired: 'Steel Engineering & Construction',
    projectLocation: '',
    projectSize: '',
    timeline: '',
    message: '',
    drawing: null as File | null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API Submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        serviceRequired: 'Steel Engineering & Construction',
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
      title: 'Drawing Analysis & Tekla Check',
      desc: 'Our design office reviews your PDF/DWG drawings, checking structural connections, loading capacities, and specifications against Indian standard design codes.',
      time: 'Day 1 - Day 2'
    },
    {
      title: 'Tonnage Optimization & Costing',
      desc: 'We calculate precise steel tonnage and concrete volumes. By applying steel weight optimization algorithms, we identify cost savings for your project.',
      time: 'Day 2 - Day 3'
    },
    {
      title: 'Commercial Proposal Submission',
      desc: 'You receive a itemized commercial bid, scheduling milestones, material test certificate guarantees (MTC), and quality assurance checks (QAP).',
      time: 'Day 3 - Day 4'
    }
  ];

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
            Submit your project drawings, BOQs, or specifications. Our estimating department will prepare a detailed commercial bid.
          </p>
        </div>
      </section>

      {/* Quote Form & Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
            
            {/* Left: Request Form */}
            <div className="lg:col-span-7 bg-[#F7F8FA] p-8 rounded-xl border border-gray-250/50 shadow-xs">
              <h2 className="text-xl font-bold text-primary mb-6">Industrial Project Inquiry Form</h2>
              
              {submitted ? (
                <div className="bg-white border border-secondary p-8 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-base font-bold text-primary">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-gray-500 font-body leading-relaxed max-w-md mx-auto">
                    Thank you. Your request has been logged by our estimation department. A structural engineer will contact your team within 24-48 business hours.
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
                        <option>Steel Engineering & Construction</option>
                        <option>Site Transformation & Dismantling</option>
                        <option>Project Materials & Access Supply</option>
                        <option>Industrial Scrap Management</option>
                        <option>Heavy Structural Fabrication</option>
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
                        placeholder="e.g. Dahej GIDC, Gujarat"
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
                      placeholder="Detail any structural steel requirements, scaffold height setups, or dismantling targets..."
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
                      className="w-full bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-sm"
                    >
                      Submit Bidding Inquiry
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Quotation Timeline & Illustrations */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Estimation Process</span>
                <h2 className="text-2xl font-extrabold text-primary tracking-tight">How We Prepare Your Bid Proposal</h2>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  We process project pricing systematically to ensure we submit optimized, zero-deviation bids to corporate procurement committees.
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
              <div className="p-6 bg-[#F7F8FA] rounded-xl border border-gray-200/50 flex gap-4 items-start text-left">
                <div className="bg-primary text-secondary p-3 rounded-xl shadow-xs shrink-0 mt-1">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">MTC & Safety Clearance Assured</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-body">
                    Every commercial estimation is structured upon trace steel certifications and follows strict BIS code requirements, ensuring zero safety compromises.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
