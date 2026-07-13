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
    'Pre-Engineered Buildings (PEB)',
    'Heavy Structural Fabrication',
    'Structural Steel Works',
    'Industrial Infrastructure & EPC',
    'Custom Engineering & Design',
    'Site Installation & Erection',
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
    // Clear error for field
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

    // Simulate API request to server
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setSubmitError('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 animate-fade-in bg-white rounded-xl">
        <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full mb-4">
          <CheckCircle2 size={48} />
        </div>
        <h4 className="text-xl font-bold text-primary mb-2">Inquiry Submitted Successfully</h4>
        <p className="text-sm text-gray-500 max-w-md">
          Thank you for reaching out to IRONEX Steel & Infra LLP. Our estimation team will review your requirements and respond with a formal proposal within 24-48 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {submitError && (
        <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 text-sm rounded-xl">
          <AlertCircle size={18} className="shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className={`grid grid-cols-1 ${isModal ? 'sm:grid-cols-2' : 'md:grid-cols-2'} gap-5`}>
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
            Full Name <span className="text-secondary">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full text-sm font-semibold bg-[#F7F8FA] border px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors ${
              errors.fullName ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
            Email Address <span className="text-secondary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@company.com"
            className={`w-full text-sm font-semibold bg-[#F7F8FA] border px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
            Phone Number <span className="text-secondary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className={`w-full text-sm font-semibold bg-[#F7F8FA] border px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors ${
              errors.phone ? 'border-red-500' : 'border-gray-200'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Infra Ltd"
            className="w-full text-sm font-semibold bg-[#F7F8FA] border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
      </div>

      {/* Service Dropdown */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
          Requirement Category <span className="text-secondary">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full text-sm font-semibold bg-[#F7F8FA] border px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors appearance-none ${
            errors.service ? 'border-red-500' : 'border-gray-200'
          }`}
        >
          <option value="">Select an engineering service...</option>
          {servicesList.map((service) => (
            <option key={service} value={service} className="text-primary font-semibold">
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.service}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1.5">
          Project Details & Scope <span className="text-secondary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={isModal ? 3 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe project scale, tonnages, dimensions, and erection requirements (if any)..."
          className={`w-full text-sm font-semibold bg-[#F7F8FA] border px-4 py-3 rounded-xl focus:outline-none focus:border-secondary transition-colors resize-y ${
            errors.message ? 'border-red-500' : 'border-gray-200'
          }`}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-opacity-90 disabled:bg-opacity-50 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer select-none focus:outline-none"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Processing Inquiry...</span>
            </>
          ) : (
            <>
              <Send size={16} />
              <span>Submit Project Requirements</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
