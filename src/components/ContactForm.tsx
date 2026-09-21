import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
}

export default function ContactForm({ isModal = false, onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const servicesList = [
    'Industrial Scrap Procurement & Processing',
    'Scaffolding & Formwork Systems',
    'Steel & Construction-Material Supply',
    'Structural Fabrication & Civil Works',
    'General Inquiry'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.service) newErrors.service = 'Please select a service category';
    if (!formData.message.trim()) newErrors.message = 'Please specify project requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', company: '', service: '', message: '' });
      if (onSuccess) setTimeout(() => onSuccess(), 2000);
    } catch {
      setSubmitError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full text-xs font-semibold bg-white border px-4 py-3 focus:outline-none focus:border-[#C66B45] transition-colors";

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in">
        <CheckCircle2 size={32} className="text-[#C66B45] mb-4" />
        <h4 className="text-base font-extrabold text-[#101820] mb-2">Inquiry Submitted Successfully</h4>
        <p className="text-xs text-[#6B6560] max-w-md font-body">
          Thank you for reaching out to IRONEX. The relevant division will review the information and respond with clarity on scope and availability.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitError && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 text-xs">
          <AlertCircle size={16} className="shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className={`grid grid-cols-1 ${isModal ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-5`}>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Full Name <span className="text-[#C66B45]">*</span></label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="John Doe"
            className={`${inputClass} ${errors.fullName ? 'border-red-500' : 'border-[#D5D0C7]'}`} />
          {errors.fullName && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Email <span className="text-[#C66B45]">*</span></label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com"
            className={`${inputClass} ${errors.email ? 'border-red-500' : 'border-[#D5D0C7]'}`} />
          {errors.email && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Phone <span className="text-[#C66B45]">*</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
            className={`${inputClass} ${errors.phone ? 'border-red-500' : 'border-[#D5D0C7]'}`} />
          {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Acme Infra Ltd"
            className={`${inputClass} border-[#D5D0C7]`} />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Requirement Category <span className="text-[#C66B45]">*</span></label>
        <select name="service" value={formData.service} onChange={handleChange}
          className={`${inputClass} appearance-none ${errors.service ? 'border-red-500' : 'border-[#D5D0C7]'}`}>
          <option value="">Select a division...</option>
          {servicesList.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.service}</p>}
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-[#101820] mb-1.5">Project Details <span className="text-[#C66B45]">*</span></label>
        <textarea name="message" rows={isModal ? 3 : 5} value={formData.message} onChange={handleChange}
          placeholder="BOQ, quantities, scaffolding scope, material specifications..."
          className={`${inputClass} resize-y ${errors.message ? 'border-red-500' : 'border-[#D5D0C7]'}`} />
        {errors.message && <p className="text-red-500 text-[10px] mt-1 font-semibold">{errors.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-[#C66B45] disabled:opacity-50 text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-4 hover:bg-[#D47B55] transition-colors cursor-pointer">
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <Send size={14} />
            <span>Submit Requirements</span>
          </>
        )}
      </button>
    </form>
  );
}
