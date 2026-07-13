import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  MessageCircle, 
  CheckCircle2 
} from 'lucide-react';

import projectImg from '../assets/industrial_project.jpg';
import factoryImg from '../assets/about_factory.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // FAQ collapsible state
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleFaqToggle = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  const offices = [
    {
      type: 'Registered Corporate Office',
      city: 'Ahmedabad, Gujarat',
      address: '402, Steel Tower, opposite GIDC Office, SG Highway, Ahmedabad - 380054',
      hours: 'Mon - Sat: 09:30 AM - 06:30 PM (Sunday Closed)',
      phone: '+91 79 4893 2810',
      email: 'corp@ironexsteel.com'
    },
    {
      type: 'Primary Fabrication Plant & Material Yard',
      city: 'Dahej SEZ, Gujarat',
      address: 'Plot No. 12/B, GIDC Industrial Area Phase II, Dahej, District Bharuch - 392130',
      hours: 'Mon - Sat: 08:00 AM - 08:00 PM (Operations 24/7 during Shutdowns)',
      phone: '+91 98250 83920',
      email: 'dahej@ironexsteel.com'
    }
  ];

  const faqs = [
    {
      q: 'What quality checks (QAP) do you execute on structural steel?',
      a: 'We implement a standardized Quality Assurance Plan (QAP). This includes Non-Destructive Testing (NDT), ultrasonic testing of critical weld joints, dry film thickness (DFT) paint verification, dimensional tolerance inspections as per IS 7215, and verification of Mill Test Certificates (MTC) for all steel sections.'
    },
    {
      q: 'How do you manage ODC transportation and site clearances?',
      a: 'Our logistics team secures all necessary NHAI clearances and permits for Over-Dimensional Cargo (ODC). We coordinate escort vehicles, route assessments, and site clearances. This includes checking height parameters under overhead electrical cables and bridge capacity limits.'
    },
    {
      q: 'What is the typical bidding turnaround time?',
      a: 'For standard BOQ-based steel material supply and scaffolding requests, we submit quotes within 24-48 business hours. For complex Pre-Engineered Building (PEB) design-build projects or heavy demolition scopes, our engineering team requires 3-5 days to optimize tonnage configurations.'
    },
    {
      q: 'Can you dismantle an old structure while another part of the plant operates?',
      a: 'Yes. We specialize in controlled selective demolition within operating plants. We deploy shielding nets, spark protection curtains, and vibration monitoring devices. We plan high-risk rigging lifts during night shifts or scheduled shutdown windows to ensure zero impact on adjacent operating lines.'
    },
    {
      q: 'What certificates do you supply with scaffolding rentals?',
      a: 'Every scaffolding consignment is dispatched with material health clearances, load testing certificates, and safety guidelines. We ensure all cuplock verticals, adjustable props, walkway planks, and couplers conform to Bureau of Indian Standards (BIS) codes.'
    }
  ];

  return (
    <div className="bg-bg-light">
      
      {/* Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={factoryImg} alt="Contact backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Contact Us</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Get in Touch</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Reach out to our SG Highway corporate office or GIDC Dahej material yard. Our estimating engineers are ready to assist with your project needs.
          </p>
        </div>
      </section>

      {/* Office Locations & Contact form */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Coordinates */}
            <div className="lg:col-span-5 space-y-12">
              
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Offices</span>
                <h2 className="text-2xl font-extrabold text-primary tracking-tight">Corporate Coordinates & Yards</h2>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Connect with our team directly. We support site visits, drawing evaluations, and procurement meetings at our primary yards.
                </p>
              </div>

              {/* Office details */}
              <div className="space-y-8">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-6 bg-[#F7F8FA] rounded-xl border border-gray-250/30 space-y-4 shadow-xs">
                    <div>
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">{office.type}</span>
                      <h3 className="text-sm font-bold text-primary">{office.city}</h3>
                    </div>
                    
                    <div className="space-y-2 text-xs font-body text-gray-500">
                      <p className="flex items-start gap-2.5">
                        <MapPin className="text-secondary shrink-0 mt-0.5" size={14} />
                        <span>{office.address}</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <Phone className="text-secondary shrink-0" size={14} />
                        <span>{office.phone}</span>
                      </p>
                      <p className="flex items-center gap-2.5">
                        <Mail className="text-secondary shrink-0" size={14} />
                        <span>{office.email}</span>
                      </p>
                      <p className="flex items-start gap-2.5">
                        <Clock className="text-secondary shrink-0 mt-0.5" size={14} />
                        <span>{office.hours}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA Link */}
              <div className="bg-[#E8F8F0] p-6 rounded-xl border border-[#D0F0DF] flex items-center gap-4">
                <div className="bg-[#25D366] text-white p-3 rounded-xl shadow-sm">
                  <MessageCircle size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Fast-Track WhatsApp Chat</h4>
                  <p className="text-[10px] text-gray-500 font-body">
                    Need instant stock availability updates?{' '}
                    <a 
                      href="https://wa.me/919825083920" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#128C7E] font-bold underline hover:text-[#075E54]"
                    >
                      Chat with Yard Coordinator
                    </a>
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact form */}
            <div className="lg:col-span-7 bg-[#F7F8FA] p-8 rounded-xl border border-gray-250/50 shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-6">Send an Inquiry</h3>
              
              {submitted ? (
                <div className="bg-white border border-secondary p-8 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-primary">Inquiry Sent Successfully</h4>
                  <p className="text-xs text-gray-500 font-body leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting us. Your message has been routed to our corporate relations office. We will reply within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-heading">Your Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. R. K. Sharma"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-heading">Email Address *</label>
                      <input 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. sharma@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-heading">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. +91 99887 76655"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-heading">Subject *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary" 
                        placeholder="e.g. Scrap Tender Bid"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-2 font-heading">Your Message *</label>
                    <textarea 
                      required 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs font-semibold focus:outline-none focus:border-secondary font-body resize-none" 
                      placeholder="Write your detailed inquiry here..."
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 shadow-sm"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Interactive-looking Google Map Mockup */}
      <section className="py-12 bg-[#F7F8FA] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl border border-gray-250/40 shadow-xs space-y-4 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Interactive Map</span>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">SG Highway Registered Corporate Office Location</h3>
            <div className="rounded-xl overflow-hidden h-72 bg-primary relative">
              <img src={projectImg} alt="Map representation placeholder" className="w-full h-full object-cover opacity-20 filter grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-150 text-center max-w-sm space-y-3">
                  <MapPin className="text-secondary mx-auto" size={24} />
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">IRONEX STEEL & INFRA LLP</h4>
                  <p className="text-[10px] text-gray-500 font-body">SG Highway, Ahmedabad, Gujarat, India</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-secondary text-white font-bold text-[9px] uppercase tracking-widest px-4 py-2 rounded-lg"
                  >
                    Open Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Collapsible section */}
      <section className="py-24 bg-white text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Inquiry Support</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Frequently Asked Questions</h2>
            <p className="text-xs text-gray-500 font-body">Common operational and billing questions addressed by our contracting team.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#F7F8FA] rounded-xl border border-gray-250/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleFaqToggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-wider pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-400 transition-transform duration-250 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {activeFaq === idx && (
                  <div className="px-6 pb-5 pt-1 border-t border-gray-200/50">
                    <p className="text-xs text-gray-500 leading-relaxed font-body">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
