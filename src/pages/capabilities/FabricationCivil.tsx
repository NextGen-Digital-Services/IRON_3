import { useModal } from '../../context/ModalContext';
import { openWhatsApp } from '../../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../../config/contact';
import factoryImg from '../../assets/about_factory.jpg';
import pebImg from '../../assets/peb_construction.jpg';
import HeroBackground from '../../components/HeroBackground';
import fab1 from '../../assets/fab_01.jpg';
import fab2 from '../../assets/fab_02.jpg';
import fab3 from '../../assets/fab_03.jpg';
import fab4 from '../../assets/fab_04.jpg';

const heroImages = [
  { src: fab1, alt: 'Welder at work in a modern facility' },
  { src: fab2, alt: 'Welder working in a dark workshop' },
  { src: fab3, alt: 'Close-up of a welder during work' },
  { src: fab4, alt: 'Artisan welding metal in a workshop' },
];

export default function FabricationCivil() {
  const { setIsQuoteOpen } = useModal();
  return (
    <div className="bg-[#F3F0E9]">
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={heroImages} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Division 04</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Structural Fabrication<br />& Civil Works.</h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">From drawings and measurements to physical execution — connecting site review, scope definition, material planning, fabrication and erection.</p>
        </div>
      </section>
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <span className="eyebrow block mb-4">Structural Fabrication</span>
              <h2 className="heading-editorial text-[#101820] text-2xl">Fabricated for Purpose. Built for Performance.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-4" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">The division takes up steel processing, cutting, assembly and welding to produce structural components — beams, columns, trusses, platforms and purlins — as per drawings and specifications.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Drawing & Specification Review', 'Steel Cutting & Welding', 'Beams, Columns & Trusses', 'On-Site Fabrication'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] shrink-0" /><span className="text-[11px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
              <img src={factoryImg} alt="Fabrication" className="w-full aspect-video object-cover mt-4" />
            </div>
            <div className="space-y-6">
              <span className="eyebrow block mb-4">Civil Works & Execution</span>
              <h2 className="heading-editorial text-[#101820] text-2xl">From Foundation to Final Finish.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-4" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">The division undertakes civil works and construction execution covering foundations, site works, structural and finishing activities. Scope, material responsibility, site access and timelines are agreed before work begins.</p>
              <div className="grid grid-cols-2 gap-3">
                {['Foundations & Site Works', 'Structural & Finishing Works', 'Industrial Civil Execution', 'Clear Scope Agreement'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] shrink-0" /><span className="text-[11px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
              <img src={pebImg} alt="Civil works" className="w-full aspect-video object-cover mt-4" />
            </div>
          </div>
          <div className="mt-12 bg-[#07101A] p-8 flex flex-col sm:flex-row gap-6 items-center justify-between">
            <p className="text-sm text-[#F4F1EA]/70 font-body italic">A structure is not complete because it looks correct on paper. It is complete when it performs correctly on site.</p>
            <div className="flex gap-4 shrink-0">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#D47B55] transition-colors">Submit Project Scope</button>
              <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.FABRICATION_CIVIL, WHATSAPP_MESSAGES.FABRICATION_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[10px] uppercase tracking-[0.15em] px-6 py-3 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
