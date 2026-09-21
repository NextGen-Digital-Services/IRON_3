import { CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { openWhatsApp } from '../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../config/contact';
import projectImg from '../assets/industrial_project.jpg';
import heroImg from '../assets/industrial_hero.jpg';

export default function About() {
  const { setIsQuoteOpen } = useModal();

  const leadership = [
    { name: 'Soban Khan', role: 'Business Focus: Industrial Scrap, Fabrication & Civil Works', desc: 'Soban leads the development of IRONEX\'s industrial scrap and project-execution divisions, with responsibility for commercial growth, operational systems, partnerships and long-term strategy.' },
    { name: 'Adnan Khan', role: 'Business Focus: Scaffolding Manufacturing, Rental & Sales', desc: 'Adnan leads scaffolding operations, including inventory deployment, customer coordination, manufacturing requirements, rental controls and division-level systems.' },
    { name: 'Hasnan Khan', role: 'Business Focus: Pipes, Steel, Roofing & Material Supply', desc: 'Hasnan supports the development of IRONEX\'s material-supply division, including product sourcing, customer requirements, market development and commercial coordination.' }
  ];

  const milestones = [
    { year: '2004', title: 'Foundation', desc: 'Years of practical operating experience began across industrial scrap, scaffolding, building-material supply, structural fabrication and civil execution.' },
    { year: '2026', title: 'IRONEX Incorporated', desc: 'Incorporated in May 2026 to organise established capabilities under one defined identity and operating structure.' },
    { year: '2026', title: 'Four Divisions', desc: 'Industrial scrap procurement, scaffolding systems, material supply and fabrication & civil divisions established under one operating standard.' },
    { year: '2026', title: 'System-Driven', desc: 'Moving from person-dependent execution toward documented systems, specialised leadership and stronger compliance.' }
  ];

  return (
    <div className="bg-[#F3F0E9]">
      {/* Hero */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Our Origin. Our Structure. Our Direction.</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">
            IRONEX Began<br />Before The Name Did.
          </h1>
          <p className="text-sm text-[#F4F1EA]/40 mt-6 max-w-2xl font-body leading-relaxed">
            Built from more than 21 years of family-led industrial experience, IRONEX Steel & Infra LLP was incorporated to bring established capabilities into a structured, scalable and professionally managed organisation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Overview</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Where Industrial Work Comes Together</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] space-y-5 font-body leading-relaxed">
                <p>IRONEX Steel & Infra LLP is an integrated industrial company operating across industrial scrap procurement and processing, scaffolding systems, steel and construction-material supply, structural fabrication and civil works.</p>
                <p>That operating experience developed through real industrial environments — where commercial decisions, labour management, material movement, payment cycles and site conditions determine whether work succeeds.</p>
                <p>IRONEX was incorporated in May 2026 to organise these capabilities under one defined identity and operating structure. The objective is to convert experience into a company that can grow through documented systems, specialised leadership, stronger compliance and disciplined execution.</p>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <img src={projectImg} alt="Industrial complex" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6 bg-[#F3F0E9] border border-[#D5D0C7] space-y-3">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">Operating Credentials</h4>
                <ul className="space-y-2 text-[11px] font-semibold text-[#6B6560]">
                  {['Four Specialised Business Divisions', '22+ Years of Family-Led Operating Legacy', 'Uran & Nhava Sheva Industrial Presence'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#C66B45]" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IRONEX Was Created */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Why IRONEX Was Created</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">The Business Had Experience. It Needed an Institution.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Family-run industrial businesses often become dependent on individual knowledge, verbal instructions and informal systems. That model creates limits:</p>
              <div className="space-y-3">
                {['Information remains with individuals', 'Responsibilities overlap', 'Client communication becomes inconsistent', 'Financial control becomes difficult', 'Growth depends on personal supervision', 'Operational knowledge is not documented'].map((p, i) => (
                  <div key={i} className="flex items-start gap-3"><span className="text-[#C66B45] font-bold text-sm mt-0.5">→</span><span className="text-xs text-[#6B6560] font-body">{p}</span></div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820]">Strategic Objectives</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Define separate business divisions', 'Assign clear leadership responsibility', 'Document operating processes', 'Improve financial and inventory controls', 'Strengthen statutory compliance', 'Build a recognisable industrial brand', 'Prepare for larger corporate and PSU opportunities', 'Create a platform for regional expansion'].map((obj, i) => (
                  <div key={i} className="bg-[#F3F0E9] p-5">
                    <span className="text-xl font-extrabold text-[#C66B45] block mb-1">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-[11px] font-semibold text-[#101820]">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7]">
            {[
              { num: '01', title: 'Mission', desc: 'To reduce operational fragmentation for industrial and construction clients through specialised capabilities, transparent communication and responsible execution.' },
              { num: '02', title: 'Vision', desc: 'To build a trusted industrial platform that connects material recovery, access systems, steel supply and physical execution under one accountable organisation.' },
              { num: '03', title: 'Core Values', desc: 'Responsibility before excuses, capability before commitment, clarity before quotation, systems before scale, relationships beyond transactions.' }
            ].map((item) => (
              <div key={item.num} className="bg-[#F3F0E9] p-8">
                <span className="editorial-num">{item.num}</span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] mt-4 mb-3">{item.title}</h3>
                <p className="text-xs text-[#6B6560] leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <img src={heroImg} alt="Heavy engineering" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Modern Infrastructure</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Operating Around Uran & the Nhava Sheva Industrial Region</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">IRONEX operates through warehouse, commercial and open-yard infrastructure around Uran and the Nhava Sheva industrial region — supporting material storage, scaffolding inventory, scrap handling and fabrication activity.</p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {['1,000+ MT scaffolding inventory', '350+ MT monthly steel-supply', '300-500 MT monthly scrap handling', '100+ fabrication assignments'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-2 h-2 bg-[#C66B45] shrink-0" /><span className="text-[11px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <span className="eyebrow block mb-6">Milestones</span>
            <h2 className="heading-editorial text-[#101820] max-w-4xl">Building on 22+ Years<br />of Operating Experience</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0C7]">
            {milestones.map((mil, idx) => (
              <div key={idx} className="bg-[#F3F0E9] p-6">
                <span className="text-3xl font-extrabold text-[#C66B45] block mb-2">{mil.year}</span>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#101820] mb-2">{mil.title}</h4>
                <p className="text-[11px] text-[#6B6560] leading-relaxed font-body">{mil.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <span className="eyebrow block mb-6">Leadership</span>
            <h2 className="heading-editorial text-[#101820] max-w-4xl">Leadership &<br />Business Focus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7] max-w-5xl">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-[#F3F0E9] p-8">
                <span className="text-[10px] font-bold text-[#C66B45] uppercase tracking-[0.15em] block mb-2">{leader.role}</span>
                <h3 className="text-base font-extrabold text-[#101820] mb-3">{leader.name}</h3>
                <p className="text-[11px] text-[#6B6560] font-body leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={projectImg} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-[#07101A]/70" />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10 text-center space-y-8">
          <h2 className="heading-editorial text-[#F4F1EA] text-3xl">You Bring the Requirement.<br />We Bring the Right Division.</h2>
          <p className="text-sm text-[#F4F1EA]/40 font-body max-w-2xl mx-auto">From material recovery and access systems to steel supply and physical execution, IRONEX delivers with defined responsibility across four specialised divisions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors">Request a Quote</button>
            <button onClick={() => openWhatsApp(WHATSAPP_CONTACTS.GENERAL, WHATSAPP_MESSAGES.GENERAL_DEFAULT)} className="border border-[#25D366] text-[#25D366] font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#25D366] hover:text-white transition-all">WhatsApp IRONEX</button>
          </div>
        </div>
      </section>
    </div>
  );
}
