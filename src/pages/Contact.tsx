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
      type: 'Registered Office',
      city: 'Uran, Maharashtra',
      address: 'Uran, Raigad District, Maharashtra - India',
      hours: 'Mon - Sat: 09:30 AM - 06:30 PM (Sunday Closed)',
      phone: '+91 98250 83920',
      email: 'corp@ironexsteel.com'
    },
    {
      type: 'Operational Base & Material Yard',
      city: 'Uttarshiv, Uran Region',
      address: 'Uttarshiv, Uran, Raigad District, Maharashtra - India. Commercial galas, warehouse and open-yard capacity supporting the four divisions.',
      hours: 'Mon - Sat: 08:00 AM - 08:00 PM (Sunday Closed)',
      phone: '+91 98250 83920',
      email: 'dahej@ironexsteel.com'
    }
  ];

  const faqs = [
    {
      q: 'How do I decide which IRONEX division to contact?',
      a: 'Each requirement is routed to the relevant division. Industrial scrap procurement handles ferrous and non-ferrous scrap, scaffolding systems handles supply and rental, steel and construction-material supply handles pipes, structural steel and roofing, and fabrication & civil works handles structural and civil execution.'
    },
    {
      q: 'What information should I share to get a response?',
      a: 'Send your BOQ, drawings, material schedule, scaffolding quantity or scrap-lot information. The relevant division checks availability and feasibility before responding, and will request additional information if the scope is not clear.'
    },
    {
      q: 'Does IRONEX quote on every requirement?',
      a: 'No. When a requirement is outside our current capability, timeline or scope, we communicate it before making commitments. We prefer honest capability over unrealistic acceptance.'
    },
    {
      q: 'Can I engage more than one division on a single project?',
      a: 'Yes. Clients may engage one division independently or combine capabilities where the project requires connected execution - from recovering industrial material to supplying and building what comes next.'
    },
    {
      q: 'Where does IRONEX operate?',
      a: 'IRONEX is based in Uran, Maharashtra, with an operational presence around Uran, Raigad, Thane and the Nhava Sheva industrial region.'
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
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Start With the Requirement</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">The Faster We Understand the Scope, The Faster We Can Give a Useful Response.</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Choose the relevant division, upload the available documents and share the essential commercial and technical details.
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
                <h2 className="text-2xl font-extrabold text-primary tracking-tight">Registered Office &amp; Operating Base</h2>
                <p className="text-xs text-gray-500 font-body leading-relaxed">
                  Connect with our team directly. The relevant division reviews your requirement and responds with clarity on scope and availability.
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
              <h3 className="text-lg font-bold text-primary mb-2">Send an Inquiry</h3>
              <p className="text-xs text-gray-400 italic font-body mb-6">
                A clear requirement produces a clearer response. Revolutionary, but effective.
              </p>
              
              {submitted ? (
                <div className="bg-white border border-secondary p-8 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-base font-bold text-primary">Inquiry Sent Successfully</h4>
                  <p className="text-xs text-gray-500 font-body leading-relaxed max-w-sm mx-auto">
                    Thank you for contacting us. Your message has been routed to the relevant IRONEX division. We will review it and respond.
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
                        placeholder="e.g. Scaffolding Rental Enquiry"
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
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider">Uran Registered Office Location</h3>
            <div className="rounded-xl overflow-hidden h-72 bg-primary relative">
              <img src={projectImg} alt="Map representation placeholder" className="w-full h-full object-cover opacity-20 filter grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-150 text-center max-w-sm space-y-3">
                  <MapPin className="text-secondary mx-auto" size={24} />
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider">IRONEX STEEL & INFRA LLP</h4>
                  <p className="text-[10px] text-gray-500 font-body">Uran, Raigad District, Maharashtra, India</p>
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
            <p className="text-xs text-gray-500 font-body">Common questions on how enquiries are reviewed and routed across the four divisions.</p>
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
