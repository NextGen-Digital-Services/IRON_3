import HeroBackground from '../components/HeroBackground';
import aboutHero from '../assets/about.jpg';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import projectImg from '../assets/industrial_project.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import Reveal from '../components/Reveal';

export default function About() {
  const { setIsQuoteOpen } = useModal();

  return (
    <div className="bg-[#F3F0E9]">
      {/* 01 — HERO */}
      <section className="bg-[#07101A] py-24 lg:py-32 relative overflow-hidden">
        <HeroBackground images={[{ src: aboutHero, alt: 'Industrial plant under clear sky' }]} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <span className="eyebrow block mb-6">Who We Are</span>
          <h1 className="heading-editorial text-[#F4F1EA] max-w-4xl">
            Industrial Experience.<br />Built Into A More<br />Structured Business.
          </h1>
          <div className="mt-8 max-w-2xl space-y-4">
            <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">
              IRONEX STEEL &amp; INFRA LLP was established to bring long-standing family industrial activities into a professionally structured organization designed for greater accountability, scalability and long-term growth.
            </p>
            <p className="text-sm text-[#F4F1EA]/40 font-body leading-relaxed">
              Our focus is deliberately concentrated around businesses where we understand the material, commercial and operational realities.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — OUR STORY */}
      <section className="py-24 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Our Story</span>
              <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">IRONEX Began<br />Before The Name Did.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-5 leading-relaxed">
                <p>The company&rsquo;s corporate identity is new. The industrial exposure behind it is not.</p>
                <p>Our family background includes years of activity across scrap, scaffolding, steel and construction material supply, fabrication and industrial project environments.</p>
                <p>That experience created a practical understanding of something no brochure teaches particularly well:</p>
                <p className="text-[#101820] font-semibold">How industrial business behaves after the quotation is accepted.</p>
                <p>Materials change. Sites change. Quantities change. Schedules change. And margins disappear quickly when operating control is weak.</p>
                <p>IRONEX represents the next stage of that experience.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img src={projectImg} alt="Industrial complex" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 03 — WHY IRONEX WAS CREATED */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow block mb-4">Why IRONEX Was Created</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Experience Is Valuable.<br />Systems Make It Scalable.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <div className="text-sm text-[#6B6560] font-body space-y-4 leading-relaxed">
                <p>Traditional family businesses often grow around personal relationships, owner involvement, memory, informal follow-up and individual decision-making.</p>
                <p>That can build a business. It cannot build an institution indefinitely.</p>
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45]">IRONEX Is Being Structured Around</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Clear responsibilities', 'Better documentation', 'Commercial controls', 'Procurement systems', 'Inventory visibility', 'Compliance', 'Professional communication', 'Repeatable operating processes'].map((item, i) => (
                  <div key={i} className="bg-[#F3F0E9] p-5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" />
                    <span className="text-[13px] font-semibold text-[#101820] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border-l border-[#C66B45] pl-5 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-2">The Objective</span>
                <p className="text-sm text-[#6B6560] font-body leading-relaxed">Preserve the practical experience. Remove the dependency on informality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — OUR BUSINESS ARCHITECTURE */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
          <Reveal>
            <div className="mb-14 max-w-3xl">
              <span className="eyebrow block mb-6">Our Business Architecture</span>
              <h2 className="heading-editorial text-[#F4F1EA] text-4xl lg:text-5xl">
                RECOVER.<br />ACCESS.<br /><span className="text-[#C66B45]">SUPPLY.</span>
              </h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">
                These are not three random product categories. They represent three recurring requirements across industrial environments.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F1EA]/10">
            {[
              { name: 'RECOVER', desc: 'Remove surplus, obsolete and scrap material while recovering its commercial value.', ext: 'International Scrap Imports extends RECOVER into selected overseas sourcing opportunities, evaluated against specification, compliance and landed cost.' },
              { name: 'ACCESS', desc: 'Provide temporary systems required for people to execute work safely and productively.', ext: 'Scaffolding Exports extends ACCESS to international buyers through BOQ-led specification, sourcing and shipment evaluation.' },
              { name: 'SUPPLY', desc: 'Provide steel and construction materials required to build, repair and maintain projects.', ext: '' },
            ].map((b, i) => (
              <Reveal key={b.name} delay={i * 0.08}>
                <div className="bg-[#07101A] h-full p-8">
                  <h3 className="text-xl font-extrabold text-[#C66B45] tracking-tight">{b.name}</h3>
                  <p className="text-[13px] text-[#F4F1EA]/60 font-body leading-relaxed mt-4">{b.desc}</p>
                  {b.ext && <p className="text-[13px] text-[#F4F1EA]/40 font-body leading-relaxed mt-4">{b.ext}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-10 max-w-3xl">
              <p className="text-sm text-[#F4F1EA]/55 font-body leading-relaxed">They are different businesses, but they depend on common operating foundations:</p>
              <p className="text-[13px] uppercase tracking-[0.12em] font-bold text-[#F4F1EA]/85 font-body mt-4 leading-relaxed">
                Material knowledge. Procurement. Inventory. Logistics. Commercial judgement. Execution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — THE WAY WE OPERATE */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="eyebrow block mb-6">The Way We Operate</span>
            <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">Professional Without<br />Becoming Bureaucratic.</h2>
            <div className="w-10 h-px bg-[#C66B45] my-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C7]">
            {[
              { num: '01', title: 'Commercial Clarity', desc: 'Know what is being bought or sold before execution.' },
              { num: '02', title: 'Responsiveness', desc: 'Industrial customers should not need five follow-ups for one answer.' },
              { num: '03', title: 'Discipline', desc: 'Weight, quantity, documentation and commercial terms matter.' },
              { num: '04', title: 'Accountability', desc: 'The person responsible for a requirement should understand its status.' },
              { num: '05', title: 'Practical Decision-Making', desc: 'Not every opportunity deserves a \u201Cyes\u201D.' },
              { num: '06', title: 'Repeat Business', desc: 'A customer\u2019s second order matters more than an impressive first meeting.' },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-8 group hover:bg-[#07101A] transition-all duration-500">
                  <span className="editorial-num">{item.num}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mt-3 mb-3 transition-colors duration-500">{item.title}</h3>
                  <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/50 leading-relaxed font-body transition-colors duration-500">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — OUR GEOGRAPHICAL ADVANTAGE */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <img src={heroImg} alt="Heavy engineering" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow block mb-4">Our Geographical Advantage</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Built Around An<br />Industrial Ecosystem.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Our Uran&ndash;Raigad base places IRONEX close to:</p>
              <div className="grid grid-cols-2 gap-3">
                {['JNPT / Nhava Sheva', 'Ports', 'Container freight stations', 'Warehousing clusters', 'Logistics parks', 'Industrial facilities', 'Infrastructure development', 'Major construction corridors'].map((item) => (
                  <div key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#C66B45] shrink-0" /><span className="text-[13px] text-[#6B6560] font-semibold">{item}</span></div>
                ))}
              </div>
              <div className="text-sm text-[#6B6560] font-body space-y-3 leading-relaxed pt-2">
                <p>For our businesses, geography is more than an address.</p>
                <p>It directly influences procurement, transport, inventory movement, scrap availability, project access and delivery economics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — WHERE IRONEX IS HEADED */}
      <section className="py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow block mb-4">Where IRONEX Is Headed</span>
              <h2 className="heading-editorial text-[#101820] text-3xl">Build Depth Before<br />Adding Width.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] font-body leading-relaxed">Our long-term direction includes:</p>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D5D0C7]">
                {['Larger industrial procurement', 'Structured scrap recovery', 'International Scrap Imports within RECOVER', 'Stronger warehousing and yard systems', 'Greater scaffolding utilisation', 'Project-based steel supply', 'Digital inventory and commercial systems', 'Professional management', 'Deeper corporate relationships'].map((item) => (
                  <div key={item} className="bg-[#F3F0E9] p-5 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" />
                    <span className="text-[13px] font-semibold text-[#101820] font-body">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#6B6560] font-body space-y-3 leading-relaxed pt-2">
                <p>We are not interested in adding services simply to make the company profile longer.</p>
                <p className="text-[#101820] font-semibold">Capability should grow before the claim does.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — ABOUT CTA */}
      <section className="py-24 bg-[#07101A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><img src={projectImg} alt="" className="w-full h-full object-cover" /></div>
        <div className="absolute inset-0 bg-[#07101A]/70" />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10 text-center space-y-8">
          <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">
            Understand What We Do.<br /><span className="text-[#C66B45]">Then Decide Where We Fit.</span>
          </h2>
          <p className="text-sm text-[#F4F1EA]/45 font-body max-w-2xl mx-auto leading-relaxed">
            Explore our businesses, operating capabilities and commercial approach&mdash;or speak with our team about a specific requirement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/capabilities" className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors text-center">Explore Our Businesses</Link>
            <button onClick={() => setIsQuoteOpen(true)} className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all">Start A Business Discussion</button>
          </div>
        </div>
      </section>
    </div>
  );
}
