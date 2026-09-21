import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';
import heroImg from '../../assets/industrial_hero.jpg';

export default function SteelSupply() {
  const { setIsQuoteOpen } = useModal();
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
          <span className="eyebrow block mb-6">Division 03</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Steel &<br />Material Supply.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">Material supply starts with the correct specification. Specification-based supply for industrial, contractor and project requirements.</p>
        </div>
      </section>
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Steel & Pipe Supply</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">The Right Material. For the Right Job.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>The division supplies structural steel, MS and GI pipes and related material against defined specifications and quantities. Enquiries are reviewed for genuine feasibility before quoting.</p>
                <p>Beyond structural steel and pipes, the division supplies roofing sheets and building materials used in industrial, commercial and residential construction.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {['Structural Steel Sections', 'MS & GI Pipes', 'Roofing Sheets & Accessories', 'Building Materials', 'Specification-Based Supply', 'Delivery Coordination'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] shrink-0" /><span className="text-[11px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5"><img src={heroImg} alt="Steel supply" className="w-full aspect-[4/3] object-cover" /></div>
          </div>
          <div className="mt-12 bg-[#07101A] p-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <p className="text-sm text-[#F4F1EA]/70 font-body italic">A material supplier should solve the requirement — not become another requirement to manage.</p>
            <div className="flex gap-4 shrink-0">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#D47B55] transition-colors">Upload Your BOQ</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.MATERIAL_SUPPLY, WHATSAPP_MESSAGES.SUPPLY_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
