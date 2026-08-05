import { CheckCircle2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

import factoryImg from '../assets/about_factory.jpg';
import projectImg from '../assets/industrial_project.jpg';
import pebImg from '../assets/peb_construction.jpg';
import heroImg from '../assets/industrial_hero.jpg';
import demolitionImg from '../assets/demolition.jpg';

export default function About() {
  const { setIsQuoteOpen } = useModal();

  const leadership = [
    {
      name: 'Soban Khan',
      role: 'Business Focus: Industrial Scrap, Fabrication & Civil Works',
      desc: 'Soban leads the development of IRONEX\u2019s industrial scrap and project-execution divisions, with responsibility for commercial growth, operational systems, partnerships and long-term strategy.'
    },
    {
      name: 'Adnan Khan',
      role: 'Business Focus: Scaffolding Manufacturing, Rental & Sales',
      desc: 'Adnan leads scaffolding operations, including inventory deployment, customer coordination, manufacturing requirements, rental controls and division-level systems.'
    },
    {
      name: 'Hasnan Khan',
      role: 'Business Focus: Pipes, Steel, Roofing & Material Supply',
      desc: 'Hasnan supports the development of IRONEX\u2019s material-supply division, including product sourcing, customer requirements, market development and commercial coordination.'
    }
  ];

  const milestones = [
    { year: '2004', title: 'Foundation of Family-Led Experience', desc: 'Years of practical operating experience began across industrial scrap, scaffolding, building-material supply, structural fabrication and civil execution.' },
    { year: '2026', title: 'IRONEX Steel & Infra LLP Incorporated', desc: 'Incorporated in May 2026 to organise established capabilities under one defined identity and operating structure.' },
    { year: '2026', title: 'Four Divisions Structured', desc: 'Industrial scrap procurement, scaffolding systems, material supply and fabrication & civil divisions established under one operating standard.' },
    { year: '2026', title: 'System-Driven Execution', desc: 'Moving from person-dependent execution toward documented systems, specialised leadership and stronger compliance.' }
  ];

  const strengths = [
    {
      title: 'Integrated Industrial Platform',
      desc: 'Four specialised divisions reduce the need to coordinate several disconnected vendors across scrap, scaffolding, material supply and execution.'
    },
    {
      title: 'Physical Operating Resources',
      desc: 'The business is supported by inventory, workforce, vehicles and warehouse infrastructure around the Uran and Nhava Sheva industrial region.'
    },
    {
      title: 'Commercial & Operational Understanding',
      desc: 'We consider transport, labour, machinery, specifications, site access and execution conditions - not only the quoted rate.'
    },
    {
      title: 'Defined Responsibility',
      desc: 'Each enquiry is routed to the relevant business division, with clear ownership from review to completion.'
    }
  ];

  return (
    <div className="bg-bg-light">
      
      {/* Hero Banner */}
      <section className="bg-primary py-24 text-left relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={factoryImg} alt="Factory backdrop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Our Origin. Our Structure. Our Direction.</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Built From Experience. Structured for What Comes Next.</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            IRONEX Steel & Infra LLP was formed to bring established industrial experience into a more structured, scalable and professionally managed organisation. The company operates through four specialised divisions serving the steel, construction and industrial value chain.
          </p>
        </div>
      </section>

      {/* Company Overview (4-6 Professional Paragraphs) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
            
            {/* Overview Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Overview</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Where Industrial Work Comes Together</h2>
              
              <div className="text-sm text-gray-500 space-y-5 font-body leading-relaxed">
                  <p>
                    IRONEX Steel & Infra LLP is an integrated industrial company operating across industrial scrap procurement and processing, scaffolding systems, steel and construction-material supply, structural fabrication and civil works. Built on more than 22 years of family-led industrial experience, IRONEX combines established operating knowledge with a modern, structured and execution-focused approach.
                  </p>
                  <p>
                    IRONEX was formed to bring established industrial experience into a more structured, scalable and professionally managed organisation. The company operates through four specialised divisions serving the steel, construction and industrial value chain, based out of Uran, Maharashtra.
                  </p>
                  <p>
                    That operating experience developed through real industrial environments - where commercial decisions, labour management, material movement, payment cycles and site conditions determine whether work succeeds. Much of this learning is practical, built on operating inside the market rather than observing it from outside.
                  </p>
                  <p>
                    IRONEX was incorporated in May 2026 to organise these capabilities under one defined identity and operating structure. The objective is not to erase the past. It is to convert experience into a company that can grow through documented systems, specialised leadership, stronger compliance and disciplined execution.
                  </p>
                  <p>
                    Clients may engage one division independently or combine multiple capabilities where the project requires connected execution - from recovering industrial material to supplying and building what comes next.
                  </p>
              </div>
            </div>

            {/* Accompanying image */}
            <div className="lg:col-span-5 space-y-6 mt-4 lg:mt-0">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-150 relative">
                <img src={projectImg} alt="Finished industrial complex layout" className="w-full aspect-[4/3] object-cover" />
              </div>
              
              <div className="p-6 bg-[#F7F8FA] rounded-xl border border-gray-200/65 space-y-3">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Operating Credentials</h4>
                <ul className="space-y-2 text-xs font-semibold text-gray-500 font-body">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Four Specialised Business Divisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>22+ Years of Family-Led Operating Legacy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Uran &amp; Nhava Sheva Industrial Presence</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values */}
      <section className="py-20 bg-[#F7F8FA] border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-3">
              <span className="text-3xl font-extrabold text-secondary">01</span>
              <h3 className="text-base font-bold text-primary uppercase tracking-wider">Our Mission</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-body">
                To reduce operational fragmentation for industrial and construction clients through specialised capabilities, transparent communication, measurable capacity and responsible execution.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-3">
              <span className="text-3xl font-extrabold text-secondary">02</span>
              <h3 className="text-base font-bold text-primary uppercase tracking-wider">Our Vision</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-body">
                To build a trusted industrial platform that connects material recovery, access systems, steel supply and physical execution under one accountable organisation.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-3">
              <span className="text-3xl font-extrabold text-secondary">03</span>
              <h3 className="text-base font-bold text-primary uppercase tracking-wider">Core Values</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-body">
                Responsibility before excuses, capability before commitment, clarity before quotation, systems before scale, relationships beyond transactions and long-term reputation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Company Strengths / Why Choose IRONEX */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Strengths</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Why Corporate Partners Choose IRONEX</h2>
            <p className="text-sm text-gray-500 font-body">We maintain rigorous production frameworks and quality checkpoints that assure structural safety on every ton of steel processed.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {strengths.map((st, idx) => (
              <div key={idx} className="bg-[#F7F8FA] p-8 rounded-xl border border-gray-200/60 hover:border-secondary transition-all duration-300">
                <h3 className="text-base font-bold text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary shrink-0" size={18} />
                  {st.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed font-body">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modern Infrastructure & Safety Standards */}
      <section className="py-24 bg-[#F7F8FA] border-y border-gray-200/50 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img src={heroImg} alt="Heavy engineering machinery" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>

            {/* Right Column Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Modern Infrastructure</span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Operating Around Uran &amp; the Nhava Sheva Industrial Region</h2>
              
              <div className="text-sm text-gray-500 space-y-4 font-body leading-relaxed">
                <p>
                  IRONEX operates through warehouse, commercial and open-yard infrastructure around Uran and the Nhava Sheva industrial region - supporting material storage, scaffolding inventory, scrap handling and fabrication activity.
                </p>
                <p>
                  The operating setup includes commercial galas, warehouse areas and open-yard capacity. Division-level systems are being developed across inventory tracking, rental records, enquiry management, quotation controls and project costing to convert experience into repeatable execution.
                </p>
              </div>

              {/* Specs parameters */}
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-500 pt-4 font-body">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>1,000+ MT scaffolding inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>350+ MT monthly steel-supply capability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>300-500 MT monthly scrap-lot handling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>100+ fabrication and civil assignments</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Timeline of Milestones */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Milestones</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Building on 22+ Years of Operating Experience</h2>
            <p className="text-sm text-gray-500 font-body">From family-led industrial operations to a structured, four-division company around Uran, Maharashtra.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((mil, idx) => (
              <div key={idx} className="bg-[#F7F8FA] p-6 rounded-xl border border-gray-200/50 text-left">
                <span className="text-3xl font-extrabold text-secondary block mb-2">{mil.year}</span>
                <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{mil.title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed font-body">{mil.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-[#F7F8FA] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Leadership</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Leadership &amp; Business Focus</h2>
            <p className="text-sm text-gray-500 font-body font-normal">Three family-led leaders carrying forward more than 22 years of operating experience across the four business divisions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-2">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">{leader.role}</span>
                <h3 className="text-base font-bold text-primary">{leader.name}</h3>
                <p className="text-xs text-gray-500 font-body leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team at Work (Industrial Images Showcase) */}
      <section className="py-24 bg-white border-t border-gray-250/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Execution Team</span>
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Our Execution Capability in Action</h2>
            <p className="text-sm text-gray-500 font-body">Fabrication, material handling, site work and civil execution supported by operating resources around Uran.</p>
          </div>

          {/* Grids showing industrial actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={pebImg} alt="Engineering structural erection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={demolitionImg} alt="Dismantling machinery work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={heroImg} alt="Welding shop fabrication progress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={projectImg} alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            You Bring the Requirement. We Bring the Right Division.
          </h2>
          <p className="text-base text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            From material recovery and access systems to steel supply and physical execution, IRONEX delivers with defined responsibility across four specialised divisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-md"
            >
              Request a Quote
            </button>
            <a
              href="/contact"
              className="bg-transparent border border-gray-400 hover:border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 text-center"
            >
              Contact Our Engineers
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
