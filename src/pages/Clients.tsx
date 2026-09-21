import { useModal } from '../context/ModalContext';
import pebImg from '../assets/peb_construction.jpg';

export default function Clients() {
  const { setIsQuoteOpen } = useModal();
  const clientsList = ['Allcargo Logistics', 'BPCL', 'ONGC', 'JNPA', 'Lodha', 'Runwal', 'Tata', 'Reliance', 'Jaigarh Port (JSW)', 'L&T'];

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
          <span className="eyebrow block mb-6">Our Partners</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Trusted by<br />Industry Leaders.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">We maintain long-term industrial partnerships and supply credentials with India's largest conglomerates, public sector undertakings, and port developers.</p>
        </div>
      </section>

      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Partnership Program</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Standardised Frameworks for Mega Scale Projects</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-5 leading-relaxed">
                <p>At IRONEX, we believe that executing industrial projects requires more than high-capacity machinery. It requires absolute operational alignment. We have structured our corporate workflows to integrate seamlessly with the vendor guidelines of India's leading EPC conglomerates.</p>
                <p>Our partnership program covers direct BOQ bidding clearances, periodic maintenance shutdown execution, and high-volume material supplies. We guarantee complete transparency in mill-test certifications and quality-assurance checks.</p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <img src={pebImg} alt="PEB Construction" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6 bg-[#F3F0E9] border border-[#D5D0C7] space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Cooperation Guidelines</h4>
                <ul className="space-y-3 text-[11px] font-body text-[#6B6560]">
                  {['Transparent, open-book material cost estimation.', '100% compliance with quality standards.', 'On-time project milestones backed by SLAs.'].map((item) => (
                    <li key={item} className="flex items-start gap-2.5"><span className="text-[#C66B45] font-bold mt-0.5">•</span><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 text-center">
          <span className="eyebrow block mb-6">Approved Vendors List</span>
          <h2 className="text-2xl font-extrabold text-[#101820] tracking-tight mb-12">Trusted by Major Indian Conglomerates</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-[#D5D0C7] max-w-5xl mx-auto">
            {clientsList.map((client, idx) => (
              <div key={idx} className="bg-[#F3F0E9] px-6 py-8 flex items-center justify-center hover:bg-[#07101A] transition-all duration-500 group">
                <span className="text-[11px] font-extrabold text-[#101820] group-hover:text-[#F4F1EA] uppercase tracking-[0.1em] transition-colors">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center space-y-6">
          <h2 className="heading-editorial text-[#101820] text-3xl">Establish a Reliable<br />Vendor Channel</h2>
          <p className="text-xs text-[#6B6560] font-body leading-relaxed max-w-2xl mx-auto">Do you require continuous supplies of structural materials, access scaffolding rentals, or scheduled site clearing contracts? Get in touch with our partnerships office.</p>
          <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors mt-4">Partner with IRONEX</button>
        </div>
      </section>
    </div>
  );
}
