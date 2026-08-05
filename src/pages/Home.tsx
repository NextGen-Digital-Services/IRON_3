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
  Mail
} from 'lucide-react';

// Component Imports
import TrustStats from '../components/TrustStats';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import { useModal } from '../context/ModalContext';

// Asset Imports (resolves via Vite bundle)
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import pebImg from '../assets/peb_construction.jpg';
import projectImg from '../assets/industrial_project.jpg';
import demolitionImg from '../assets/demolition.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import scrapImg from '../assets/scrap_processing.jpg';
import scrapYardImg from '../assets/pexels_scrap_yard.jpg';
import weldingImg from '../assets/pexels_welding.jpg';
import siteScaffoldImg from '../assets/pexels_scaffolding.jpg';
import steelCoilsImg from '../assets/pexels_steel_coils.jpg';
import warehouseImg from '../assets/pexels_warehouse.jpg';
import excavatorImg from '../assets/pexels_excavator.jpg';
import steelFrameImg from '../assets/pexels_steel_structure.jpg';
import welderImg from '../assets/pexels_welder.jpg';

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

  const projects = [
    {
      name: 'Heavy Industrial Process Plant',
      location: 'Dahej Industrial SEZ, Gujarat',
      category: 'Industrial Plants & Heavy Structures',
      year: '2025',
      image: heroImg,
      path: '/projects#process-plant'
    },
    {
      name: 'Mega PEB Logistics Warehouse',
      location: 'Bhiwandi Logistics Hub, Maharashtra',
      category: 'PEB Warehouses & Material Supply',
      year: '2024',
      image: projectImg,
      path: '/projects#peb-warehouse'
    },
    {
      name: 'Power Plant Redevelopment & Demolition',
      location: 'Trombay Power Complex, Mumbai',
      category: 'Redevelopment & Scrap Management',
      year: '2025',
      image: demolitionImg,
      path: '/projects#power-redevelopment'
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
      description: 'IRONEX is built on more than 22 years of family-led industrial experience across scrap, scaffolding, material supply, fabrication and civil works.'
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

  const steps = [
    { step: '01', title: 'Share the Requirement', desc: 'Send the BOQ, drawings, material schedule, scaffolding quantity or scrap-lot information.' },
    { step: '02', title: 'Requirement Review', desc: 'The relevant IRONEX division checks the available information.' },
    { step: '03', title: 'Technical Clarification', desc: 'Specifications, quantity, site access, timeline and commercial conditions are clarified.' },
    { step: '04', title: 'Proposal or Inspection', desc: 'IRONEX provides a quotation, confirms availability, requests additional information or schedules a site visit.' },
    { step: '05', title: 'Commercial Confirmation', desc: 'Scope, rate, responsibilities, payment terms, transport and timelines are agreed.' },
    { step: '06', title: 'Execution Coordination', desc: 'Dispatch, mobilisation, lifting, fabrication, rental or civil execution begins.' }
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

  const galleryImages = [
    { image: heroImg, title: 'CNC Profile Cutting Shop Floor' },
    { image: demolitionImg, title: 'Heavy Excavator Demolition Works' },
    { image: projectImg, title: 'Completed Warehousing Complex' },
    { image: scaffoldingImg, title: 'Cuplock Scaffolding Systems' },
    { image: scrapImg, title: 'Ferrous Metal Scrap Segregation' },
    { image: pebImg, title: 'Structural Steel Column Erection' },
    { image: factoryImg, title: 'Dahej Plant Structural Workshop' },
    { image: scrapYardImg, title: 'Industrial Scrap Yard Operation' },
    { image: weldingImg, title: 'Precision Welding Operations' },
    { image: siteScaffoldImg, title: 'Scaffolding Access Systems in Operation' },
    { image: steelCoilsImg, title: 'Steel Coil & Pipe Material Stockyard' },
    { image: warehouseImg, title: 'Warehouse Storage & Logistics Yard' },
    { image: excavatorImg, title: 'Controlled Structural Dismantling' },
    { image: steelFrameImg, title: 'Steel Framing & PEB Structure' },
    { image: welderImg, title: 'Fabrication Workshop in Progress' }
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
            className="w-full h-full object-cover opacity-35" 
          />
          {/* Rich Corporate Navy Overlay */}
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-8">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#B86A3A]/10 border border-[#B86A3A]/30 text-secondary text-xs font-bold uppercase tracking-widest rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                Four Specialised Divisions. One Accountable Industrial Partner.
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Industrial Requirements Are Complex. <br />
                <span className="text-secondary font-extrabold">Working With the Right Partner Should Not Be.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 font-body leading-relaxed max-w-2xl">
                IRONEX Steel & Infra LLP brings together industrial scrap procurement, scaffolding manufacturing and rental, steel and construction-material supply, structural fabrication and civil execution under one operating platform. We help industries, ports, warehouses, infrastructure contractors and construction companies reduce coordination gaps, improve accountability and move requirements from enquiry to execution with greater control.
              </p>
              <p className="text-sm text-secondary font-semibold font-body -mt-6">
                From recovering industrial material to supplying and building what comes next.
                <span className="block text-gray-400 italic font-normal mt-1">Because delays need solutions, not stories.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="bg-secondary hover:bg-opacity-95 text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-lg text-center"
                >
                  Request a Quote
                </button>
                <Link
                  to="/projects"
                  className="bg-transparent border border-gray-400 hover:border-white text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 text-center"
                >
                  Our Projects
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

      {/* 2A. THE GAP WE EXIST TO CLOSE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">The Gap We Exist to Close</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Industry Does Not Have a Vendor Shortage. It Has an Accountability Shortage.
            </h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">
              Industrial requirements rarely involve only one supplier or one contractor. A project may require steel, temporary access systems, structural fabrication, civil execution, transport coordination and removal of obsolete material - all within connected timelines. These responsibilities are commonly divided between unrelated companies. One supplier delivers steel. Another provides scaffolding. A third handles fabrication. Someone else lifts the scrap. When work slows, responsibility moves between vendors while the project remains where it was.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: 'Fragmented Responsibility',
                desc: 'Each party takes responsibility for one narrow scope. Nobody owns the gaps between scopes.'
              },
              {
                title: 'Commitments Without Verification',
                desc: 'Stock is promised before inventory is checked. Delivery is confirmed before transportation is arranged. Execution dates are offered before site conditions are understood.'
              },
              {
                title: 'Incomplete Commercial Offers',
                desc: 'Low quotations may exclude transport, machinery, loading, shortages, replacement material, waiting time, wastage or difficult site conditions.'
              },
              {
                title: 'Poor Coordination',
                desc: 'Material, manpower, machinery and site readiness are planned separately even though one delay affects the complete workfront.'
              },
              {
                title: 'Reactive Communication',
                desc: 'The client receives an explanation after the delay has already affected operations.'
              }
            ].map((gap, idx) => (
              <div key={idx} className="bg-[#F7F8FA] border border-gray-200/60 p-8 rounded-xl text-left">
                <span className="text-3xl font-extrabold text-secondary block mb-3">0{idx + 1}</span>
                <h3 className="text-base font-bold text-primary mb-2">{gap.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-body">{gap.desc}</p>
              </div>
            ))}
            <div className="bg-primary text-white p-8 rounded-xl text-left flex flex-col justify-center">
              <h3 className="text-base font-bold mb-2">The Commercial Impact</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed font-body mb-4">
                Poor coordination creates higher indirect costs, delayed workfronts, emergency purchases, material mismatch, transport rescheduling, repeated follow-ups, rework, responsibility disputes and delayed completion.
              </p>
              <p className="text-sm font-bold text-secondary leading-relaxed">
                The quotation is the visible cost. Poor coordination is the expensive part nobody includes in it.
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 italic font-body mt-10">
            The cheapest quotation remains cheap only until someone tries to execute it.
          </p>

        </div>
      </section>

      {/* 2B. OUR TOP CLIENTS */}
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

        <div className="relative w-full overflow-hidden py-6 bg-[#F7F8FA] border-y border-gray-200/50 flex items-center">
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
      <section className="py-24 bg-[#F7F8FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left: Factory Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img 
                  src={factoryImg} 
                  alt="IRONEX Steel & Infra Manufacturing Facility Ahmedabad" 
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
                IRONEX Steel & Infra LLP is an integrated industrial company operating across industrial scrap procurement, scaffolding systems, steel and construction-material supply, structural fabrication and civil works. Built on more than 22 years of family-led industrial experience, IRONEX combines established operational knowledge with a modern, structured and execution-focused approach - based out of Uran, Maharashtra.
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
                  <span className="text-2xl font-bold text-primary block">1,000+ MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Scaffolding Inventory</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">350+ MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Monthly Steel Supply</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">170+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Project Engagements</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">22+ Years</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Operating Legacy</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Four Divisions</span>
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

      {/* 5. FEATURED PROJECTS */}
      <section className="py-24 bg-[#F7F8FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Project Portfolio</span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Executed Heavy Structural Developments</h2>
              <p className="text-sm text-gray-500 font-body">A selection of recent logistics hubs, process factories, and infrastructure works completed for top corporate clients across India.</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300 shrink-0"
            >
              <span>View All Projects</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                location={project.location}
                category={project.category}
                year={project.year}
                image={project.image}
                path={project.path}
              />
            ))}
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
                className="bg-[#F7F8FA] border border-gray-200/60 p-6 rounded-xl hover:border-secondary hover:shadow-xs transition-all duration-300 text-left group"
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

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 bg-[#F7F8FA] border-b border-gray-100">
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
                    <div className="absolute -left-[31px] top-1 bg-[#F7F8FA] border-2 border-secondary w-[10px] h-[10px] rounded-full" />
                    
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

      {/* 8. WORKING PROCESS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">A Clearer Start</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Good Execution Begins Before the Quotation.</h2>
            <p className="text-sm text-gray-500 font-body">From design checks to physical handover on site, we run a highly coordinated flow with client review stages.</p>
          </div>

          {/* Timeline Grid (Horizontal for desktop, vertical for mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="absolute top-[38px] left-[5%] right-[5%] h-0.5 bg-gray-200 hidden lg:block z-0" />
            
            {steps.map((st, index) => (
              <div 
                key={index} 
                className="bg-[#F7F8FA] border border-gray-200/50 p-6 rounded-xl relative z-10 text-left hover:border-secondary hover:shadow-xs transition-all duration-300"
              >
                {/* Step circle */}
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
              Clear scope. Verified commitment. Planned execution. Accountability until completion.
            </span>
          </div>

        </div>
      </section>

      {/* 9. GALLERY SECTION */}
      <section className="py-24 bg-[#F7F8FA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Media Center</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Factory & Project Gallery</h2>
            <p className="text-sm text-gray-500 font-body">Visual proof of our state-of-the-art machinery, production floors, fabrication standards, and completed project locations.</p>
          </div>

          {/* Gallery Masonry-like Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((gal, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden group shadow-sm bg-primary ${
                  index % 3 === 0 ? 'h-[360px]' : 'h-[280px]'
                }`}
              >
                <img 
                  src={gal.image} 
                  alt={gal.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay only - images stay fully visible */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-primary/70 transition-all duration-300 flex flex-col justify-end p-6" />
                <div className="absolute bottom-6 left-6 text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-1 block">IRONEX Facilities</span>
                  <h4 className="text-lg font-bold font-heading">{gal.title}</h4>
                </div>
              </div>
            ))}
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
                className="bg-[#F7F8FA] border border-gray-200/50 p-8 rounded-xl text-left flex flex-col justify-between hover:shadow-xs transition-shadow duration-300"
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
              className="bg-secondary hover:bg-opacity-95 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 shadow-md cursor-pointer"
            >
              Request a Quote
            </button>
            <a
              href="#contact-section-anchor"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact-section-anchor');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border border-gray-400 hover:border-white text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer text-center"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>

      {/* 11. CONTACT SECTION */}
      <section className="py-24 bg-[#F7F8FA]" id="contact-section-anchor">
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
                <div className="absolute inset-0 bg-[#F7F8FA] flex flex-col items-center justify-center p-6 text-center border-b border-gray-100">
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
