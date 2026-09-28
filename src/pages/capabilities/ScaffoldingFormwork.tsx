import HeroBackground from '../../components/HeroBackground';
import scaffoldingImg from '../../assets/scaffolding_01.jpg';
import scaffoldingImg2 from '../../assets/scaffolding_02.jpg';
import scaffoldingImg3 from '../../assets/scaffolding_03.jpg';
import scaffoldingImg4 from '../../assets/scaffolding_04.jpg';
import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';

const slideshowImages = [
  { src: scaffoldingImg, alt: 'Facade scaffolding on a high-rise structure', tag: 'Facade Access' },
  { src: scaffoldingImg2, alt: 'Scaffolding system around an industrial silo', tag: 'Plant Access' },
  { src: scaffoldingImg3, alt: 'Workers on scaffolding at a construction site', tag: 'Site Platforms' },
  { src: scaffoldingImg4, alt: 'Structural scaffolding viewed from below', tag: 'Structural Erection' },
];

const products = [
  { img: scaffoldingImg, name: 'Cuplock Scaffolding', app: 'Slab Support' },
  { img: scaffoldingImg2, name: 'H-Frame Scaffolding', app: 'Maintenance Access' },
  { img: scaffoldingImg3, name: 'Adjustable Props', app: 'Formwork Shoring' },
  { img: scaffoldingImg4, name: 'Walk Planks & Couplers', app: 'Working Platforms' },
];

export default function ScaffoldingFormwork() {
  const { setIsQuoteOpen } = useModal();
  return (
    <div className="bg-[#F3F0E9]">
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={slideshowImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Division 02</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Scaffolding &<br />Formwork Systems.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">Reliable access systems for workfronts that cannot remain idle. Manufacturing, rental and sales.</p>
        </div>
      </section>
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Scaffolding Supply & Rental</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Reliable Access. Dependable Supply.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>The division supplies new and sound reconditioned scaffolding equipment including cuplock systems, H-frames, pipes, walk planks and accessories. Material is checked before dispatch.</p>
                <p>For projects that need temporary access without purchasing equipment, the division offers rental services backed by 1,000+ MT of scaffolding inventory.</p>
              </div>
              <div className="grid grid-cols-2 gap-px bg-[#D5D0C7] pt-4">
                {products.map((p) => (
                  <div key={p.name} className="bg-[#F3F0E9] overflow-hidden group hover:bg-[#07101A] transition-all duration-500">
                    <div className="h-32 overflow-hidden"><img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" /></div>
                    <div className="p-4"><h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors">{p.name}</h4><span className="text-[9px] font-bold text-[#C66B45] uppercase tracking-[0.1em] block mt-1">{p.app}</span></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={scaffoldingImg} alt="Scaffolding" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
          <div className="mt-12 bg-[#07101A] p-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <p className="text-sm text-[#F4F1EA]/70 font-body italic">Scaffolding may be temporary. Its effect on safety and productivity is not.</p>
            <div className="flex gap-4 shrink-0">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#D47B55] transition-colors">Check Availability</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.SCAFFOLDING, WHATSAPP_MESSAGES.SCAFFOLDING_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
