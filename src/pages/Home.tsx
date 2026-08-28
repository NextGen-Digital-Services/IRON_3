import { Link } from 'react-router-dom';
import {
  Factory,
  Zap,
  Boxes,
  Milestone,
  Anchor,
  ShieldCheck,
  Building2,
  ArrowRight,
  Star,
  Building,
  Wrench,
  Layers,
  MapPin,
  Phone,
  Mail,
  CheckCircle2
} from 'lucide-react';

// Component Imports
import TrustStats from '../components/TrustStats';
import ServiceCard from '../components/ServiceCard';
import ContactForm from '../components/ContactForm';
import { useModal } from '../context/ModalContext';
import { openWhatsApp } from '../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../config/contact';

// Asset Imports (resolves via Vite bundle)
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import pebImg from '../assets/peb_construction.jpg';
import projectImg from '../assets/industrial_project.jpg';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';

export default function Home() {
  const { setIsQuoteOpen } = useModal();

  // Subtle Framer Motion Variants for Clean B2B animations

  const services = [
    {
      title: 'Industrial Scrap Procurement & Processing',
      description: 'Direct purchase, lifting, segregation, processing and resale of industrial scrap to melting mills and factories - from auction participation to complete site clearance.',
      image: demolitionImg,
      path: '/capabilities#site-transformation',
      icon: <Wrench size={20} />,
      categories: [
        {
          name: 'Scrap Procurement',
          tagline: 'Direct Buyer. Evaluated Commercially.',
          services: [
            'Government & PSU scrap auctions',
            'Corporate & industrial scrap lots',
            'Auction and tender participation',
            'Lot inspection & material assessment',
            'Commercial evaluation',
            'Private industrial disposals'
          ]
        },
        {
          name: 'Scrap Processing & Lifting',
          tagline: 'Lifted. Processed. Responsibly Resold.',
          services: [
            'Labour deployment',
            'Dismantling & cutting',
            'Machinery coordination',
            'Loading & transportation',
            'Segregation & processing',
            'Onward resale'
          ]
        }
      ]
    },
    {
      title: 'Scaffolding & Formwork Systems',
      description: 'Manufacturing, rental and sales of scaffolding and formwork components with verified inventory, dispatch and replacement coordination.',
      image: scaffoldingImg,
      path: '/capabilities#project-materials',
      icon: <Layers size={20} />,
      categories: [
        {
          name: 'Scaffolding & Formwork Products',
          tagline: 'Reliable Access. Continuous Progress.',
          services: [
            'Cuplock verticals & ledgers',
            'H-Frames',
            'Cross braces',
            'Walkway platforms',
            'Adjustable props',
            'Base jacks & U-head jacks',
            'Joint pins',
            'Staircase components',
            'Fabricated accessories'
          ]
        },
        {
          name: 'Rental & Supply Models',
          tagline: 'Flexible Deployment for Active Workfronts.',
          services: [
            'Long-term rental',
            'Direct sale',
            'Project-based supply',
            'Additional quantity support',
            'Custom manufacturing',
            'Replacement coordination'
          ]
        }
      ]
    },
    {
      title: 'Steel & Construction-Material Supply',
      description: 'Specified correctly. Sourced responsibly. Delivered for execution. Supply of structural steel, pipes, sheets, TMT bars, construction materials and all roofing solutions to industrial buyers, builders, warehouses, fabricators and contractors.',
      image: heroImg,
      path: '/capabilities#steel-engineering',
      icon: <Building size={20} />,
      categories: [
        {
          name: 'Steel & Construction Materials',
          tagline: 'Specified Correctly. Sourced Responsibly.',
          services: [
            'TMT bars',
            'MS pipes, GI pipes & GP pipes',
            'Angles, Channels & Beams',
            'MS plates',
            'GI sheets & colour-coated roofing sheets',
            'UPVC sheets & cement sheets',
            'Cement bags',
            'Structural steel products',
            'BOQ-based procurement',
            'Scheduled deliveries'
          ]
        },
        {
          name: 'Supply Models',
          tagline: 'Flexible Sourcing for Project and Recurring Needs.',
          services: [
            'Spot purchase',
            'Project-based supply',
            'Recurring monthly supply',
            'BOQ-based procurement',
            'Brand-specific sourcing',
            'Scheduled deliveries'
          ]
        }
      ]
    },
    {
      title: 'Structural Fabrication & Civil Works',
      description: 'From measurement and material to fabrication and site execution. Structural fabrication, industrial modifications, site erection and selected civil works connected through one execution process.',
      image: projectImg,
      path: '/capabilities#fabrication-civil',
      icon: <Wrench size={20} />,
      categories: [
        {
          name: 'Structural Fabrication',
          tagline: 'Fabricated for Purpose. Built for Performance.',
          services: [
            'Structural steel fabrication',
            'Industrial sheds',
            'Platforms, walkways & staircases',
            'Handrails & equipment supports',
            'Pipe-support structures',
            'Repairs & modifications',
            'Structural strengthening'
          ]
        },
        {
          name: 'Civil Works & Execution',
          tagline: 'From Foundation to Final Finish.',
          services: [
            'Site erection',
            'Foundations & pedestals',
            'Industrial civil works',
            'Selected commercial civil works'
          ]
        }
      ]
    }
  ];

  const industries = [
    { name: 'Ports & Logistics', icon: <Anchor size={28} /> },
    { name: 'Industrial Manufacturing', icon: <Factory size={28} /> },
    { name: 'Warehousing & Distribution', icon: <Boxes size={28} /> },
    { name: 'Builders & Developers', icon: <Building2 size={28} /> },
    { name: 'Infrastructure Contractors', icon: <Milestone size={28} /> },
    { name: 'EPC Companies', icon: <Zap size={28} /> },
    { name: 'Government & PSUs', icon: <ShieldCheck size={28} /> },
    { name: 'Fabricators & Contractors', icon: <Wrench size={28} /> },
  ];

  const whyChooseUsPoints = [
    {
      title: 'Integrated Industrial Platform',
      description: 'Four divisions reduce the need to coordinate several disconnected vendors across material recovery, access systems, steel supply and execution.'
    },
    {
      title: '22+ Years of Operating Experience',
      description: 'IRONEX is built on more than 21 years of family-led industrial experience across scrap, scaffolding, material supply, fabrication and civil works.'
    },
    {
      title: 'Physical Operating Resources',
      description: 'The business is supported by inventory, workforce, vehicles and warehouse infrastructure around the Uran and Nhava Sheva industrial region.'
    },
    {
      title: 'Commercial & Operational Understanding',
      description: 'We consider transport, labour, machinery, specifications, site access and execution conditions - not only the quoted rate.'
    },
    {
      title: 'Strategic Industrial Location',
      description: 'Our operational presence around Uran, Raigad, Thane and the Nhava Sheva region provides access to ports, warehouses and major industrial corridors.'
    },
    {
      title: 'Defined Responsibility',
      description: 'Each enquiry is routed to the relevant business division with clear commercial and operational ownership.'
    },
    {
      title: 'Honest Capability',
      description: 'When a requirement is outside our current capability, timeline or scope, we communicate it before making commitments.'
    }
  ];


  const testimonials = [
    {
      review: "IRONEX delivered the entire structural steel framework for our Ahmedabad plant. Their adherence to Quality Assurance plans and dimensional accuracy was absolute. Extremely trustworthy vendor.",
      name: "R. K. Shah",
      designation: "General Manager (Projects)",
      company: "Gujarat Chemical Enterprises Ltd.",
      rating: 5
    },
    {
      review: "Building a 1,20,000 sq ft logistics warehouse under tight rains was a massive challenge. IRONEX's PEB design team optimized the steel tonnage without compromising structural load-bearing limits. Saved us lakhs.",
      name: "H. S. Oberoi",
      designation: "Director of Logistics Infrastructure",
      company: "North Star Warehousing Parks",
      rating: 5
    },
    {
      review: "Their safety standards during structural erection on our power project site were exemplary. Certified welders, regular safety checks, and zero incidents. Highly recommend them for heavy fabrication.",
      name: "V. Prasanna",
      designation: "Project Head (EPC Contracting)",
      company: "Sterling Power Grid Corp",
      rating: 5
    }
  ];

  return (
    <div className="bg-bg-light">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-primary overflow-hidden">
        {/* Full-width industrial background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Structural Steel Fabrication Shop Floor" 
            className="w-full h-full object-cover" 
          />
          {/* Light Translucent Navy Overlay */}
          <div className="absolute inset-0 bg-primary/55" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B86A3A]/10 border border-[#B86A3A]/30 text-secondary text-xs font-bold uppercase tracking-widest rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Recover Value | Enable Work | Supply Progress
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Industry Runs On What Moves. <br />
                <span className="text-secondary font-extrabold">And Pays For What Doesn't.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed max-w-2xl">
                IRONEX STEEL & INFRA LLP is an industrial company based in Navi-Mumbai, Maharashtra, operating across Scrap Procurement &amp; Processing, Scaffolding &amp; Formwork, and Construction Material &amp; Steel Supply.
              </p>
              <p className="text-sm text-white/80 font-body leading-relaxed max-w-2xl -mt-4">
                We work at three critical points where material availability, movement and execution directly affect productivity, working capital and project continuity.
              </p>
              <p className="text-sm text-secondary font-semibold font-body -mt-4">
                Industry Runs On Flow.
                <span className="block text-white/60 italic font-normal mt-1">When Flow Breaks, Cost Begins.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="btn-primary bg-secondary text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg text-center"
                >
                  Discuss Your Requirement
                </button>
                <Link
                  to="/capabilities"
                  className="btn-outline bg-transparent border border-gray-400 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl text-center"
                >
                  Explore Our Businesses
                </Link>
              </div>
            </div>

            {/* Right clean industrial image (Desktop Only) */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="border-[6px] border-primary-light bg-primary-light rounded-xl overflow-hidden shadow-2xl relative aspect-[4/3] group">
                <img 
                  src={pebImg} 
                  alt="PEB Structure Framing" 
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <TrustStats />

      {/* 2A. THE PROBLEM WE EXIST TO REDUCE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">The Problem We Exist to Reduce</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Waiting Is Not Neutral.
            </h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">
              Industrial delays rarely arrive with a separate invoice. Their cost appears elsewhere - in idle labour, blocked space, extended rentals, additional transport, delayed billing, rehandling and lost productivity. A seemingly small operational miss can quietly become a much larger commercial loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              { title: 'Labour continues costing money.' },
              { title: 'Equipment remains committed.' },
              { title: 'Rental continues.' },
              { title: 'Project sequences shift.' },
              { title: 'Billing gets pushed.' },
              { title: 'Working capital remains blocked.' },
              { title: 'Industrial space stays occupied.' },
              { title: 'Management time gets consumed in follow-up.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F5F0EB] border border-gray-200/60 p-6 rounded-xl text-left">
                <span className="text-secondary font-bold text-sm mb-2">→</span>
                <p className="text-xs text-gray-600 leading-relaxed font-body font-semibold">{item.title}</p>
              </div>
            ))}
            <div className="bg-primary text-white p-8 rounded-xl text-left flex flex-col justify-center">
              <h3 className="text-base font-bold mb-2">That Is the Problem IRONEX Is Built Around.</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed font-body mb-4">
                We operate at three points where timing and material directly affect operational performance:
              </p>
              <ul className="space-y-2 text-xs text-secondary font-semibold">
                <li>Material that needs to move out.</li>
                <li>Access that needs to be available.</li>
                <li>Material that needs to move in.</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/25 px-4 py-2.5 rounded-lg">
              Objective is Simple: To Keep industrial requirements commercially controlled and operationally moving.
            </span>
          </div>

        </div>
      </section>

      {/* 3. OUR THREE BUSINESSES */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Our Three Businesses</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Three Different Requirements. One Industrial Discipline.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'RECOVER',
                subtitle: 'Scrap Procurement & Processing',
                desc: 'IRONEX procures, lifts, segregates and commercially recovers ferrous, non-ferrous, machinery and other industrial surplus material through direct procurement, corporate disposals, auctions and other commercially viable channels.',
                tagline: 'Industrial value does not disappear when equipment becomes scrap. It changes form.',
                cta: 'Explore Scrap',
                path: '/capabilities#site-transformation'
              },
              {
                step: '02',
                title: 'ACCESS',
                subtitle: 'Scaffolding & Formwork',
                desc: 'IRONEX provides scaffolding systems, components and accessories on rental and sale for construction, industrial, infrastructure, warehouse and maintenance requirements.',
                tagline: 'A working site needs more than tonnes of scaffolding. It needs a complete working system.',
                cta: 'Explore Scaffolding',
                path: '/capabilities#project-materials'
              },
              {
                step: '03',
                title: 'SUPPLY',
                subtitle: 'Construction Material & Steel Supply',
                desc: 'IRONEX supplies steel, structural sections, pipes, plates, TMT, roofing systems and Other construction materials for industrial, contractor and project requirements.',
                tagline: 'Procurement is not complete when the order is placed. It is complete when the requirement is fulfilled.',
                cta: 'Explore Material Supply',
                path: '/capabilities#steel-engineering'
              }
            ].map((biz, idx) => (
              <div key={idx} className="bg-white border border-gray-200/60 p-8 rounded-xl text-left hover:shadow-xs transition-all duration-300 flex flex-col">
                <span className="text-3xl font-extrabold text-secondary block mb-2">{biz.step}</span>
                <h3 className="text-xl font-bold text-primary mb-1">{biz.title}</h3>
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-4">{biz.subtitle}</span>
                <p className="text-xs text-gray-500 leading-relaxed font-body mb-4 flex-1">{biz.desc}</p>
                <p className="text-[11px] text-gray-400 italic font-body mb-6">"{biz.tagline}"</p>
                <div className="flex flex-col gap-3">
                  <Link
                    to={biz.path}
                    className="inline-flex items-center gap-2 bg-secondary text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl text-center w-fit"
                  >
                    {biz.cta}
                    <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => {
                      const division = idx === 0 ? 'SCRAP' : idx === 1 ? 'SCAFFOLDING' : 'MATERIAL_SUPPLY';
                      const msg = idx === 0 ? WHATSAPP_MESSAGES.SCRAP_DEFAULT : idx === 1 ? WHATSAPP_MESSAGES.SCAFFOLDING_DEFAULT : WHATSAPP_MESSAGES.SUPPLY_DEFAULT;
                      openWhatsApp(WHATSAPP_CONTACTS[division], msg);
                    }}
                    className="inline-flex items-center gap-2 border border-[#25D366] text-[#25D366] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-xl text-center w-fit hover:bg-[#25D366] hover:text-white transition-all"
                  >
                    WhatsApp {biz.title}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2B. PROOF BEFORE PROMISE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Proof Before Promise</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Industrial Trust Should Be Visible.</h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">
              Anyone can describe themselves as reliable, experienced or customer-focused. We would rather make those claims easier to verify.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: '21+ Years', label: 'Underlying family industrial operating experience' },
              { stat: '~1000+ MT', label: 'Owned scaffolding inventory' },
              { stat: '~650+ MT', label: 'Scaffolding currently deployed on rent' },
              { stat: '~400+ MT', label: 'Monthly Construction Material Supply Capacity' }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F5F0EB] border border-gray-200/60 p-8 rounded-xl text-center">
                <span className="text-3xl font-extrabold text-secondary block mb-2">{item.stat}</span>
                <p className="text-xs text-gray-500 font-body leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Industrial Premises & Yard Infrastructure',
              'Operational Vehicles & Material Movement Capability',
              'Domestic Procurement Network',
              'Developing International Sourcing Capability'
            ].map((capability, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#F5F0EB] border border-gray-200/60 p-4 rounded-xl">
                <CheckCircle2 size={14} className="text-secondary shrink-0" />
                <span className="text-xs font-semibold text-primary">{capability}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/25 px-4 py-2.5 rounded-lg">
              What The Website Should Show: Real material. Real inventory. Real vehicles. Real yards. Real dispatches. Real people. Real work.
            </span>
          </div>

        </div>
      </section>

      {/* 2C. OUR TOP CLIENTS */}
      <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Trusted By Industry Leaders</span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-primary tracking-tight">
            Trusted by India's Leading Industrial & Infrastructure Companies
          </h2>
          <p className="text-sm text-gray-500 font-body max-w-3xl mx-auto">
            Delivering engineering, fabrication, demolition and industrial support solutions to some of India's most respected organizations.
          </p>
        </div>

        <div className="relative w-full overflow-hidden py-6 bg-[#F5F0EB] border-y border-gray-200/50 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden sm:block" />
          
          <div className="animate-marquee flex gap-16 items-center">
            {['Allcargo Logistics', 'BPCL', 'ONGC', 'JNPA', 'Lodha', 'Runwal', 'Tata', 'Reliance', 'Jaigarh Port (JSW)', 'L&T'].map((client, idx) => (
              <div 
                key={`client-1-${idx}`} 
                className="text-gray-400 hover:text-secondary transition-colors font-heading text-sm lg:text-base font-bold uppercase tracking-widest px-4 select-none whitespace-nowrap cursor-default"
              >
                {client}
              </div>
            ))}
            {['Allcargo Logistics', 'BPCL', 'ONGC', 'JNPA', 'Lodha', 'Runwal', 'Tata', 'Reliance', 'Jaigarh Port (JSW)', 'L&T'].map((client, idx) => (
              <div 
                key={`client-2-${idx}`} 
                className="text-gray-400 hover:text-secondary transition-colors font-heading text-sm lg:text-base font-bold uppercase tracking-widest px-4 select-none whitespace-nowrap cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Factory Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img 
                  src={factoryImg} 
                  alt="IRONEX Steel & Infra Manufacturing Facility Navi Mumbai" 
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Right: Company Introduction */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block">
                Who We Are
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
                Established Partners in Industrial Infrastructure
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-body">
                IRONEX Steel & Infra LLP is an integrated industrial company operating across industrial scrap procurement, scaffolding systems, steel and construction-material supply, structural fabrication and civil works. Built on more than 21 years of family-led industrial experience, IRONEX combines established operational knowledge with a modern, structured and execution-focused approach - based out of Uran, Maharashtra.
              </p>

              {/* Mission, Vision, Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Our Mission</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To reduce operational fragmentation for industrial and construction clients through specialised capabilities, transparent communication, measurable capacity and responsible execution.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Our Vision</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To build a trusted industrial platform that connects material recovery, access systems, steel supply and physical execution under one accountable organisation.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Core Values</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Responsibility before excuses, capability before commitment, clarity before quotation, systems before scale, relationships beyond transactions, and long-term reputation.
                  </p>
                </div>
              </div>

              {/* Aligned Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/80">
                <div>
                  <span className="text-2xl font-bold text-primary block">21+ Years</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Underlying Family Industrial Experience</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">~1000+ MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Owned Scaffolding Inventory</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">~650+ MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Scaffolding Deployed on Rent</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">~400+ MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Monthly Supply Capacity</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Three Businesses</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Choose the Capability Your Requirement Needs.</h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">Each IRONEX division is designed around a specific industrial problem. Select a division to review its services, capabilities, operating process and enquiry format.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                path={service.path}
                icon={service.icon}
                categories={service.categories}
                buttonText="Explore Services"
              />
            ))}
          </div>

        </div>
      </section>

      {/* 4A. CONNECTED CAPABILITIES */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Why Three Businesses Matter</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">One Business Solves a Requirement. Three Businesses Solve the Gaps Around It.</h2>
          </div>

          {/* Project Lifecycle */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Remove What Is No Longer Required',
                desc: 'Industrial scrap and obsolete material are evaluated, purchased, lifted and processed.',
                icon: <Wrench size={24} />
              },
              {
                step: '02',
                title: 'Supply What Comes Next',
                desc: 'Steel, pipes, structural sections, sheets, roofing and construction materials are sourced and delivered.',
                icon: <Building size={24} />
              },
              {
                step: '03',
                title: 'Provide Access and Support',
                desc: 'Scaffolding and formwork systems support construction, maintenance and industrial operations.',
                icon: <Layers size={24} />
              },
              {
                step: '04',
                title: 'Execute the Physical Work',
                desc: 'Structures, modifications, fabrication and civil requirements are completed on site.',
                icon: <Factory size={24} />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200/60 p-8 rounded-xl text-left hover:shadow-xs transition-all duration-300">
                <div className="bg-primary text-secondary p-3 rounded-xl w-fit mb-4">
                  {item.icon}
                </div>
                <span className="text-2xl font-extrabold text-secondary block mb-2">{item.step}</span>
                <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 space-y-2">
            <p className="text-sm font-bold text-primary">
              From removing what is no longer required to supplying and building what comes next.
            </p>
            <p className="text-xs text-gray-400 italic font-body">
              Three businesses also mean three fewer conversations beginning with, "You will need to contact someone else for that."
            </p>
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Sectors We Support</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Built for Environments Where Delays Have Measurable Consequences.</h2>
            <p className="text-sm text-gray-500 font-body">Supporting sectors where material availability, site access, safety, project coordination and operational continuity directly affect commercial performance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((ind, index) => (
              <div 
                key={index} 
                className="bg-[#F5F0EB] border border-gray-200/60 p-6 rounded-xl hover:border-secondary hover:shadow-xs transition-all duration-300 text-left group"
              >
                <div className="text-primary group-hover:text-secondary transition-colors mb-4 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="text-sm font-bold text-primary uppercase tracking-wider group-hover:text-secondary transition-colors leading-tight">
                  {ind.name}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6A. CAPABILITY PREVIEW */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Operating Capability</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Capability Is More Than a List of Services.</h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">IRONEX combines operating assets, industrial experience, manpower, inventory, supplier relationships and project understanding.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Warehouse and yard infrastructure',
              'Scaffolding manufacturing and inventory',
              'Material sourcing and supply network',
              'Scrap lifting and segregation capability',
              'Fabrication and welding resources',
              'Vehicles and transport coordination',
              'Industrial workforce',
              'Project and site-execution experience',
              'Local industrial access',
              'Multi-division coordination'
            ].map((capability, idx) => (
              <div key={idx} className="bg-[#F5F0EB] border border-gray-200/60 p-4 rounded-xl text-center hover:border-secondary hover:shadow-xs transition-all duration-300">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider leading-tight block">{capability}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/capabilities"
              className="btn-primary inline-flex items-center gap-2 bg-primary text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl"
            >
              <span>Explore Our Capabilities</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Industrial Image */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white relative">
                <img 
                  src={pebImg} 
                  alt="Industrial construction framing steel structural check" 
                  className="w-full object-cover aspect-[3/4]"
                />
              </div>
            </div>

            {/* Right: Timeline Points */}
            <div className="lg:col-span-7 space-y-12 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Why IRONEX</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Capability Creates Interest. Accountability Creates Trust.</h2>
                <p className="text-sm text-gray-500 font-body">IRONEX combines physical operating resources, commercial and operational understanding, and defined responsibility to keep requirements moving from enquiry to execution.</p>
              </div>

              {/* Timeline Items */}
              <div className="relative border-l border-gray-200 pl-6 space-y-8">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index} className="relative">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] top-1 bg-[#F5F0EB] border-2 border-secondary w-[10px] h-[10px] rounded-full" />
                    
                    <h3 className="text-base font-bold text-primary mb-1">
                      {point.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-body max-w-2xl">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. HOW IRONEX THINKS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">How IRONEX Thinks About Business</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">The Rate Is Only One Part Of The Transaction.</h2>
            <p className="text-sm text-gray-500 font-body">Industrial transactions are judged by the commercial outcome, not the quotation alone. Before committing, we consider the factors that determine whether a requirement can actually be executed properly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Availability', desc: 'Is the required material genuinely accessible?' },
              { title: 'Specification', desc: 'Are the correct product, grade, dimensions and quantity understood?' },
              { title: 'Logistics', desc: 'How will the material move from source to destination?' },
              { title: 'Timing', desc: 'When is it actually required?' },
              { title: 'Commercial Viability', desc: 'Does the transaction make economic sense after the real operating costs are considered?' },
              { title: 'Closure', desc: 'How will quantities, weights, returns, acknowledgements and documentation be reconciled?' }
            ].map((factor, idx) => (
              <div key={idx} className="bg-[#F5F0EB] border border-gray-200/60 p-6 rounded-xl text-left">
                <span className="text-2xl font-extrabold text-secondary block mb-2">0{idx + 1}</span>
                <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{factor.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-body">{factor.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/25 px-4 py-2.5 rounded-lg">
              That discipline applies differently across each IRONEX business.
            </span>
          </div>

        </div>
      </section>

      {/* 8B. FROM REQUIREMENT TO EXECUTION */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">From Requirement to Execution</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Fewer Assumptions Before Work Begins.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            <div className="absolute top-[38px] left-[5%] right-[5%] h-0.5 bg-gray-200 hidden lg:block z-0" />
            
            {[
              { step: '01', title: 'Understand', desc: 'Requirement, quantity, specification, location and timeline.' },
              { step: '02', title: 'Evaluate', desc: 'Availability, operating requirements, logistics and commercial feasibility.' },
              { step: '03', title: 'Commit', desc: 'Clarify scope, quantity and commercial terms.' },
              { step: '04', title: 'Prepare', desc: 'Arrange material, vehicles, manpower and documentation.' },
              { step: '05', title: 'Execute', desc: 'Supply, mobilisation or lifting takes place.' },
              { step: '06', title: 'Close', desc: 'Complete delivery, weighment, acknowledgement or reconciliation as applicable.' }
            ].map((st, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200/50 p-6 rounded-xl relative z-10 text-left hover:border-secondary hover:shadow-xs transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center font-bold text-xs shadow-sm mb-4">
                  {st.step}
                </div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{st.title}</h3>
                <p className="text-[11px] text-gray-500 font-body leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/25 px-4 py-2.5 rounded-lg">
              Execution becomes easier when ambiguity is removed early.
            </span>
          </div>

        </div>
      </section>

      {/* 10. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Client Reviews</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Feedback From Corporate Leaders</h2>
            <p className="text-sm text-gray-500 font-body">What project heads, plant managers, and construction developers say about partnering with IRONEX.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div 
                key={index} 
                className="bg-[#F5F0EB] border border-gray-200/50 p-8 rounded-xl text-left flex flex-col justify-between hover:shadow-xs transition-shadow duration-300"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-secondary fill-secondary animate-pulse" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600 font-body leading-relaxed italic">
                    "{test.review}"
                  </p>
                </div>
                
                <div className="border-t border-gray-200/60 pt-5 mt-6 flex items-center gap-4">
                  {/* Client Initials Circle */}
                  <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-xs shrink-0 shadow-sm border border-gray-100">
                    {test.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary">{test.name}</h4>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{test.designation}</p>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-wider">{test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9B. WHERE WE OPERATE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Where We Operate</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Positioned Close To Industrial Movement.</h2>
            <p className="text-sm text-gray-500 font-body">IRONEX operates from Navi-Mumbai, with practical access to the wider industrial, port and logistics ecosystem.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Nhava Sheva', 'JNPT', 'Navi Mumbai', 'Panvel', 'Raigad', 'Mumbai', 'Thane', 'Bhiwandi'].map((location) => (
              <div key={location} className="bg-[#F5F0EB] border border-gray-200/60 p-4 rounded-xl text-center hover:border-secondary hover:shadow-xs transition-all duration-300">
                <MapPin size={16} className="text-secondary mx-auto mb-2" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{location}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 italic font-body mt-8">
            Our location keeps us close to ports, warehouses, logistics facilities, industrial yards, manufacturing units, construction corridors and infrastructure activity.
          </p>

        </div>
      </section>

      {/* 10. HOME CTA */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Start With The Details</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">If The Requirement Is Real, Start With The Details.</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              'Have industrial scrap to dispose?',
              'Need scaffolding for a project?',
              'Sourcing steel or construction materials?'
            ].map((question, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-[#F5F0EB] border border-gray-200/60 p-4 rounded-xl">
                <span className="text-secondary font-bold text-sm">→</span>
                <span className="text-xs font-semibold text-primary">{question}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-2">
            <p className="text-base font-bold text-primary">
              Send us the requirement. We will begin with the technical, commercial and operational details that determine whether we can execute it properly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="btn-primary bg-secondary text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md cursor-pointer"
            >
              Send Your Requirement
            </button>
            <button
              onClick={() => openWhatsApp(WHATSAPP_CONTACTS.GENERAL, WHATSAPP_MESSAGES.GENERAL_HERO)}
              className="btn-outline bg-transparent border border-[#25D366] text-[#25D366] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl cursor-pointer hover:bg-[#25D366] hover:text-white transition-all"
            >
              WhatsApp IRONEX
            </button>
          </div>

        </div>
      </section>

      {/* 10B. CALL TO ACTION SECTION */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={projectImg} alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let Us Understand What the Requirement Actually Needs.
          </h2>
          <p className="text-base text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            Send your BOQ, material schedule, scaffolding quantity, project drawings or scrap-lot information. We will direct the enquiry to the relevant IRONEX division.
          </p>
          <p className="text-xs text-gray-400 italic font-body">
            Not sure which division applies? Send the complete requirement. Internal coordination is our responsibility, not yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="btn-primary bg-secondary text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-md cursor-pointer"
            >
              Start Your Enquiry
            </button>
            <Link
              to="/capabilities"
              className="btn-outline bg-transparent border border-gray-400 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl cursor-pointer text-center"
            >
              Choose a Division
            </Link>
            <a
              href="#contact-section-anchor"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact-section-anchor');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline bg-transparent border border-gray-400 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl cursor-pointer text-center"
            >
              Speak With Our Team
            </a>
          </div>
        </div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section className="py-24 bg-[#F5F0EB]" id="contact-section-anchor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            
            {/* Left: Info + Map Placeholder */}
            <div className="lg:col-span-6 flex flex-col justify-between text-left">
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Get In Touch</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Discuss a Requirement With the Right Division</h2>
                <p className="text-sm text-gray-500 font-body">Send your BOQ, drawings, material schedule, scaffolding quantity or scrap-lot information. The relevant IRONEX division will review the information before responding.</p>
                
                {/* Office Info details */}
                <div className="space-y-4 pt-4 text-sm font-semibold text-primary font-body">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 border border-gray-200/60 rounded-xl text-secondary shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Registered Office</h4>
                      <p className="text-xs text-gray-500 mt-1 font-body">Uran, Maharashtra. Operational base: Uttarshiv, Uran region, Maharashtra.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 border border-gray-200/60 rounded-xl text-secondary shadow-sm">
                      <Phone size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Phone Contact</h4>
                      <p className="text-xs text-gray-500 mt-1 hover:text-secondary transition-colors font-body">+91 98765 43210 / +91 79 2345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 border border-gray-200/60 rounded-xl text-secondary shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Email Correspondence</h4>
                      <p className="text-xs text-gray-500 mt-1 hover:text-secondary transition-colors font-body">info@ironexsteel.com / sales@ironexsteel.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Structured Premium Map Mock Card */}
              <div className="bg-white rounded-xl border border-gray-200/60 shadow-sm overflow-hidden h-60 mt-8 relative flex items-center justify-center">
                {/* Clean Blueprint/Grid styled Map Mock */}
                <div className="absolute inset-0 bg-[#F5F0EB] flex flex-col items-center justify-center p-6 text-center border-b border-gray-100">
                  {/* Grid background simulation */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-25" />
                  
                  <div className="relative z-10 space-y-2">
                    <div className="w-12 h-12 rounded-full bg-primary text-secondary border-2 border-white flex items-center justify-center font-bold text-xs shadow-md mx-auto">
                      <MapPin size={22} />
                    </div>
                    <h4 className="text-sm font-bold text-primary font-heading">Uran Operating Region, Maharashtra</h4>
                    <p className="text-xs text-gray-400 max-w-sm font-body">Operational presence around Uran, Raigad, Thane and the Nhava Sheva industrial region.</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors pt-2 focus:outline-none"
                    >
                      <span>Open Google Maps Directions</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-6 bg-white border border-gray-200/60 rounded-xl shadow-sm p-8">
              <h3 className="text-lg font-bold text-primary uppercase tracking-wider border-b border-gray-100 pb-3 mb-6">
                Technical RFP / Inquiry Request
              </h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
