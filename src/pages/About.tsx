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
      name: 'R. K. Patel',
      role: 'Managing Partner & Founder',
      desc: 'Over 30 years of industrial steel production and project execution experience. Governs corporate strategy, compliance, and material sourcing pipelines.'
    },
    {
      name: 'Amit Patel',
      role: 'Partner & Head of Engineering',
      desc: 'M.Tech in Structural Engineering. Drives the design department, focusing on PEB optimization, Tekla 3D modeling, and Government structural vetting.'
    }
  ];

  const milestones = [
    { year: '2011', title: 'Founding & Fabrication Plant', desc: 'Established a 20,000 sq ft structural fabrication unit in Ahmedabad GIDC, Gujarat.' },
    { year: '2016', title: 'ISO Certification & Scaling', desc: 'Achieved ISO 9001:2015 accreditation and scaled plant capacity to 15,000 MT annually.' },
    { year: '2021', title: 'PEB & Access Systems Launch', desc: 'Introduced pre-engineered buildings division and expanded rental stockyard with 500+ tons of cuplock scaffolding.' },
    { year: '2025', title: 'Dismantling & Redevelopment expansion', desc: 'Acquired heavy demolition machinery. Successfully executed multi-crore factory redevelopment clearing projects.' }
  ];

  const strengths = [
    {
      title: 'End-to-End Industrial Execution',
      desc: 'We are uniquely positioned in India to dismantle old factory assets, salvage scrap value, supply structural materials, and build next-generation pre-engineered steel facilities under a single contract.'
    },
    {
      title: 'Certified Material Traceability',
      desc: 'Every ton of structural steel, beam, plate, or pipe we process is backed by Mill Test Certificates (MTC). We source raw materials exclusively from primary suppliers like SAIL, JSW, and TATA.'
    },
    {
      title: 'Rigorous Quality Check (QAP)',
      desc: 'Our quality controllers execute Non-Destructive Testing (NDT), ultrasonic testing of structural welds, dry film thickness checking on paint coatings, and strict dimensional tolerance audits.'
    },
    {
      title: 'Advanced Engineering Technology',
      desc: 'Our design office uses licensed Tekla Structures and STAAD.Pro to verify anchor-bolt orientations and load ratings, ensuring zero-clash assemblies during site erection.'
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
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Who We Are</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">About IRONEX Steel & Infra</h1>
          <p className="text-sm text-gray-300 max-w-2xl leading-relaxed">
            Delivering stable structural frameworks, reliable materials, and safe demolition transformations for industrial projects across India.
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
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Decades of Heavy Engineering Competence</h2>
              
              <div className="text-sm text-gray-500 space-y-5 font-body leading-relaxed">
                <p>
                  Founded in 2011 in Ahmedabad, Gujarat, IRONEX Steel & Infra LLP has grown from a specialized fabrication shop into a comprehensive, multi-disciplinary industrial contractor. Today, we cater to state-of-the-art process plants, warehousing hubs, power infrastructures, and chemical refineries with custom structural steel fabrications and turnkey civil execution.
                </p>
                <p>
                  Our unique business model integrates three key phases of industrial development: Site Dismantling & Resource Management, Project Material Supply, and Steel Engineering. By handling both demolition of obsolete structures and the erection of modern Pre-Engineered Buildings (PEBs), we save corporate developers months in coordination schedules.
                </p>
                <p>
                  Operating out of our primary fabrication plant and dedicated access material yards spanning over 1.5 Lakh square feet, our facility is equipped with automated CNC profile cutting tables, radial drilling machines, and automatic submerged arc welding (SAW) gantries. This high-capacity setup allows us to process up to 45,000 metric tons of steel annually.
                </p>
                <p>
                  As an ISO 9001:2015 certified company, material safety and structural reliability are core to our identity. Every column, rafter, pylon, and platform is designed, fabricated, and tested strictly as per Bureau of Indian Standards (BIS) and American Welding Society (AWS) specifications, backed by a CRISIL SE 2B rating.
                </p>
                <p>
                  Through long-term supply credentials with major industry leaders like Reliance, Tata, L&T, BPCL, and JSW, we have proven our capacity to execute multi-crore infrastructure works safely under challenging terrains. We remain committed to structural safety, safety compliance, and timely project delivery.
                </p>
              </div>
            </div>

            {/* Accompanying image */}
            <div className="lg:col-span-5 space-y-6 mt-4 lg:mt-0">
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-150 relative">
                <img src={projectImg} alt="Finished industrial complex layout" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0 bg-primary opacity-10" />
              </div>
              
              <div className="p-6 bg-[#F7F8FA] rounded-xl border border-gray-200/65 space-y-3">
                <h4 className="text-xs font-bold text-primary uppercase tracking-widest">Quality Accreditations</h4>
                <ul className="space-y-2 text-xs font-semibold text-gray-500 font-body">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>ISO 9001:2015 Quality Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>CRISIL SE 2B Rating for Trust</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" />
                    <span>Standard QAP approved by IIT/NIT</span>
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
                To deliver robust, structural steel framing, reliable material supply, and site transformation services that ensure structural integrity, schedules optimization, and maximum ROI for our industrial clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-3">
              <span className="text-3xl font-extrabold text-secondary">02</span>
              <h3 className="text-base font-bold text-primary uppercase tracking-wider">Our Vision</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-body">
                To stand as India's premier, go-to heavy fabrication and redevelopment partner, capable of transforming complex, high-risk industrial sites into modern, operating infrastructure assets.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-xl border border-gray-200/60 shadow-xs space-y-3">
              <span className="text-3xl font-extrabold text-secondary">03</span>
              <h3 className="text-base font-bold text-primary uppercase tracking-wider">Core Values</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-body">
                Governed by strict site safety protocols, absolute material transparency (MTC reports), engineering precision, and a zero-harm policy for site workers, operators, and environments.
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
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Equipped with Advanced Fabrication & Safety Technology</h2>
              
              <div className="text-sm text-gray-500 space-y-4 font-body leading-relaxed">
                <p>
                  Our primary manufacturing complex in GIDC Ahmedabad features overhead EOT cranes, radial drills, and automated submerged arc welding (SAW) columns. By employing automatic profile plasma cutting machinery, we maintain dimensional tolerance deviations strictly below 1.5mm.
                </p>
                <p>
                  In terms of site safety, we follow global OHSAS guidelines. Every site erection project is managed by certified safety officers. We require full protective equipment (PPE), daily toolbox talk (TBT) briefings, safety mesh nets, fall arresters, and crane load verification audits before any lifting work.
                </p>
              </div>

              {/* Specs parameters */}
              <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-gray-500 pt-4 font-body">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>Max element weight: 25 MT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>Cranes lift capacity: Up to 250 MT</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>Non-Destructive Testing (NDT) standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0" />
                  <span>ISO 12944 Paint specifications</span>
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
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Our Growth Journey</h2>
            <p className="text-sm text-gray-500 font-body">Tracing our progression from a local Ahmedabad GIDC fabrication shop to a nationwide heavy industrial contractor.</p>
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
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Management & Founders</h2>
            <p className="text-sm text-gray-500 font-body font-normal">Our operations are directed by senior industry professionals with decades of cumulative fabrication and infrastructure experience.</p>
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
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Our Engineering Team at Work</h2>
            <p className="text-sm text-gray-500 font-body">Engineers, site riggers, and operations managers coordinate safe executions on process sites.</p>
          </div>

          {/* Grids showing industrial actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={pebImg} alt="Engineering structural erection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/25" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={demolitionImg} alt="Dismantling machinery work" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/25" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary relative group">
              <img src={heroImg} alt="Welding shop fabrication progress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/25" />
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
            Partner with India's Certified Heavy Engineering Specialists
          </h2>
          <p className="text-base text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            From industrial site transformation and material supply to heavy steel fabrication and turnkey execution, IRONEX delivers safety and Schedules compliance.
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
