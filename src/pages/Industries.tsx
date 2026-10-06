import HeroBackground from '../components/HeroBackground';
import industriesHero from '../assets/industries.jpg';
import { Building2, Layers, Workflow, Anchor, TrendingUp, Zap, Truck, Cpu, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import factoryImg from '../assets/about_factory.jpg';
import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import demolitionImg from '../assets/demolition.jpg';

export default function Industries() {
  const { setIsQuoteOpen } = useModal();
  const industriesList = [
    { name: 'Ports & Logistics', icon: Anchor, image: heroImg },
    { name: 'Warehousing', icon: Layers, image: projectImg },
    { name: 'Manufacturing', icon: Cpu, image: pebImg },
    { name: 'Construction', icon: Building2, image: factoryImg },
    { name: 'Infrastructure', icon: Workflow, image: projectImg },
    { name: 'Industrial Contractors', icon: Truck, image: demolitionImg },
    { name: 'Developers', icon: TrendingUp, image: factoryImg },
    { name: 'Fabricators', icon: Zap, image: pebImg },
    { name: 'Metal Processing & Recycling', icon: Layers, image: heroImg },
    { name: 'Industrial Maintenance', icon: Workflow, image: projectImg },
  ];

  return (
    <div className="bg-[#F3F0E9]">
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={[{ src: industriesHero, alt: 'Industrial warehouse interior with stacked steel' }]} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Sector-Focused Industrial Support</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">Different Industries.<br />Different Constraints.<br />The Same Need for<br /><span className="text-[#C66B45]">Reliable Execution.</span></h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-xl font-body">IRONEX supports sectors where material availability, site access, safety, project coordination and operational continuity directly affect commercial performance.</p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#D5D0C7]">
            {industriesList.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="bg-[#F3F0E9] group hover:bg-[#07101A] transition-all duration-500 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-[#07101A]/30 group-hover:bg-[#07101A]/60 transition-all duration-500" />
                    <div className="absolute bottom-4 left-4 bg-[#C66B45] text-white p-2.5">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-extrabold text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500">{ind.name}</h3>
                      <div className="w-8 h-px bg-[#C66B45] mt-4" />
                    </div>
                    <button onClick={() => setIsQuoteOpen(true)} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mt-6 group-hover:gap-3 transition-all duration-300">
                      Discuss a Requirement<ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
