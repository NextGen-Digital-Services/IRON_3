import demolitionImg from '../../assets/demolition.jpg';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

export default function ScrapProcurement() {
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
          <span className="eyebrow block mb-6">Division 01</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Industrial Scrap<br />Procurement & Processing.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">IRONEX participates as a direct buyer in government, PSU, corporate, industrial and private scrap auctions and tenders.</p>
        </div>
      </section>
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Scrap Procurement & Processing</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Material Value, Managed Professionally.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>IRONEX procures ferrous and non-ferrous industrial scrap from projects, dismantling works, manufacturing units and surplus stock. The division focuses on genuine capability, clear assessment and practical processing.</p>
                <p>The division takes up structure dismantling and demolition to recover industrial material, and buys back obsolete machinery, girders and steel sheeting.</p>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                {['Ferrous & Non-Ferrous Scrap', 'Scrap Segregation & Sorting', 'Cutting & Packing', 'Weighing & Valuation', 'Structure Dismantling', 'Machinery Buyback', 'Scrap Collection & Transport', 'Surplus Material Clearance'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] shrink-0" /><span className="text-[11px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={demolitionImg} alt="Scrap works" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
          <div className="mt-12 bg-[#07101A] p-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <div><span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">Important Clarification</span><p className="text-sm text-[#F4F1EA]/70 font-body">IRONEX does not operate auctions or provide scrap-disposal consultancy. It participates as a buyer.</p></div>
            <div className="flex gap-4 shrink-0">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#D47B55] transition-colors">Submit Scrap Details</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCRAP, WHATSAPP_MESSAGES.SCRAP_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
