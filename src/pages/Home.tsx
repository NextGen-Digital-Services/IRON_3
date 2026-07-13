import { Link } from 'react-router-dom';
import {
  Factory,
  FlaskConical,
  Zap,
  Boxes,
  UtensilsCrossed,
  Pill,
  Milestone,
  Car,
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

export default function Home() {
  const { setIsQuoteOpen } = useModal();

  // Subtle Framer Motion Variants for Clean B2B animations

  const services = [
    {
      title: 'Site Transformation & Resource Management',
      description: 'Everything required to safely transform an existing industrial site through demolition, dismantling and professional material recovery.',
      image: demolitionImg,
      path: '/services#site-transformation',
      icon: <Wrench size={20} />,
      categories: [
        {
          name: 'Demolition & Dismantling',
          tagline: 'Clear the Existing. Prepare for What\'s Next.',
          services: [
            'Industrial Structure Dismantling',
            'Steel Shed Dismantling',
            'Warehouse Dismantling',
            'Selective Demolition',
            'Machinery & Equipment Dismantling',
            'Structural Modification & Removal'
          ]
        },
        {
          name: 'Industrial Scrap Management',
          tagline: 'Material Value, Managed Professionally.',
          services: [
            'Ferrous Scrap Purchase',
            'Non-Ferrous Scrap Purchase',
            'Structural Steel Scrap',
            'Machinery Scrap',
            'Construction Scrap',
            'Surplus & Obsolete Material',
            'Scrap Segregation',
            'Cutting & Downsizing',
            'Periodic Scrap Management Contracts',
            'Tender & Auction Procurement'
          ]
        }
      ]
    },
    {
      title: 'Project Materials & Access Systems',
      description: 'Reliable supply of structural materials and temporary access systems to keep industrial and infrastructure projects moving efficiently.',
      image: scaffoldingImg,
      path: '/services#project-materials',
      icon: <Layers size={20} />,
      categories: [
        {
          name: 'Iron, Steel & Building Material Supply',
          tagline: 'Project-Ready Materials. Dependable Supply.',
          services: [
            'Structural Steel',
            'TMT Bars',
            'Angles',
            'Channels',
            'Beams',
            'Plates',
            'Sheets',
            'MS Pipes',
            'GI Pipes',
            'Hollow Sections',
            'Roofing Sheets',
            'Cement',
            'Blocks',
            'Welding Electrodes',
            'Fasteners & Hardware',
            'BOQ-Based Procurement',
            'Bulk & Scheduled Supply'
          ]
        },
        {
          name: 'Scaffolding, Formwork & Access Solutions',
          tagline: 'Reliable Access. Continuous Progress.',
          services: [
            'Scaffolding Rental',
            'Scaffolding Material Supply',
            'Cuplock Scaffolding',
            'H-Frame Scaffolding',
            'Adjustable Props',
            'Spans',
            'Base Jacks',
            'U-Head Jacks',
            'Walkway Planks',
            'Shuttering Plates',
            'Couplers & Clamps'
          ]
        }
      ]
    },
    {
      title: 'Steel Engineering & Construction Execution',
      description: 'End-to-end engineering solutions covering fabrication, construction, structural execution and industrial project support.',
      image: heroImg,
      path: '/services#steel-engineering',
      icon: <Building size={20} />,
      categories: [
        {
          name: 'Structural Steel & Fabrication',
          tagline: 'Fabricated for Purpose. Built for Performance.',
          services: [
            'Structural Steel Fabrication',
            'Industrial Sheds',
            'Warehouses',
            'Mezzanine Floors',
            'Platforms & Walkways',
            'Machine Frames',
            'Equipment Supports',
            'Storage Racks',
            'Gates & Custom Steel Work',
            'On-Site Welding',
            'Structural Repair & Modification',
            'Fabrication According to Drawings & Measurements'
          ]
        },
        {
          name: 'Construction & Redevelopment',
          tagline: 'From Cleared Ground to Working Asset.',
          services: [
            'Industrial Construction',
            'Warehouse Construction',
            'Factory Extensions',
            'Civil Foundations',
            'PCC Work',
            'RCC Work',
            'Flooring',
            'Masonry',
            'Plastering',
            'Compound Walls',
            'Drainage',
            'Yard Development',
            'Structural Modifications',
            'Renovation & Redevelopment',
            'Civil Works Connected with Steel Structures'
          ]
        },
        {
          name: 'Industrial Project Support',
          tagline: 'Connected Support for Complex Sites.',
          services: [
            'Project-Based Procurement',
            'Site Material Coordination',
            'Maintenance Fabrication',
            'Structural Repairs',
            'Contractor Support',
            'Custom Industrial Requirements',
            'Combined Supply & Execution'
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
    { name: 'Manufacturing', icon: <Factory size={28} /> },
    { name: 'Chemical & Pharma', icon: <FlaskConical size={28} /> },
    { name: 'Power & Energy', icon: <Zap size={28} /> },
    { name: 'Warehousing & Logistics', icon: <Boxes size={28} /> },
    { name: 'Food Processing', icon: <UtensilsCrossed size={28} /> },
    { name: 'Pharma & Biotech', icon: <Pill size={28} /> },
    { name: 'Infrastructure & EPC', icon: <Milestone size={28} /> },
    { name: 'Automobile & Heavy Eng.', icon: <Car size={28} /> },
  ];

  const whyChooseUsPoints = [
    {
      title: 'End-to-End Industrial Solutions',
      description: 'We handle everything from site dismantling and demolition to raw material supply, structural engineering, and final turnkey construction.'
    },
    {
      title: 'Experienced Engineering Team',
      description: 'Over 15 years of industrial experience executing heavy fabrication, high-load steel assemblies, and complex plant layouts.'
    },
    {
      title: 'Trusted by India\'s Leading Industries',
      description: 'Preferred contractor for major corporate developers, state power grids, chemical giants, and infrastructure conglomerates.'
    },
    {
      title: 'Modern Equipment & Skilled Workforce',
      description: 'Equipped with automated CNC cutting lines, automatic SAW welding gantries, and certified site rigging specialists.'
    },
    {
      title: 'On-Time Project Delivery',
      description: 'Strict critical-path tracking and project management ensures site transformation and construction finish on schedule.'
    },
    {
      title: 'Safety & Quality Compliance',
      description: 'Strict zero-harm policies under OSHA guidelines. ISO 9001:2015 certified plants with full raw material test certification.'
    },
    {
      title: 'Nationwide Industrial Operations',
      description: 'Operating high-load steel fabrication yards and site rigging teams equipped to support infrastructure projects across India.'
    }
  ];

  const steps = [
    { step: '01', title: 'Consultation', desc: 'Understanding project scale, load requirements, timelines, and raw material preferences.' },
    { step: '02', title: 'Design & Engineering', desc: 'Creation of detailed 3D Tekla structures, drawing reviews, and structural stability certifications.' },
    { step: '03', title: 'Fabrication', desc: 'High-precision steel processing, shot blasting, priming, and quality welding at our plant.' },
    { step: '04', title: 'Quality Check', desc: 'Non-Destructive Testing (NDT), ultrasonic tests on welds, and strict tolerance verification.' },
    { step: '05', title: 'Installation & Erection', desc: 'On-site rigging, crane management, heavy steel assembly, and structural framing alignment.' },
    { step: '06', title: 'Completion & Handover', desc: 'Final load-bearing checks, safety clearances, and handover of quality dossiers.' }
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
    { image: heroImg, title: 'Steel Fabrication Shop' },
    { image: demolitionImg, title: 'Industrial Demolition Progress' },
    { image: projectImg, title: 'PEB Warehouse Structures' },
    { image: scaffoldingImg, title: 'Scaffolding & Access Systems' },
    { image: scrapImg, title: 'Industrial Scrap Processing' },
    { image: pebImg, title: 'Structural Erection Progress' }
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
                Heavy Structural steel engineering & fabrication
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
                Engineering Steel <br />
                <span className="text-secondary font-extrabold">That Builds Industries.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 font-body leading-relaxed max-w-2xl">
                Delivering premium structural steel fabrication, industrial infrastructure, PEB buildings, heavy fabrication, and engineering solutions across India.
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
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <TrustStats />

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
                <div className="absolute inset-0 bg-primary bg-opacity-10" />
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
                IRONEX Steel & Infra LLP is a leading engineering enterprise specializing in structural steel design, heavy fabrication, pre-engineered buildings (PEB), and civil infrastructure EPC contracting. Based out of Ahmedabad, Gujarat, we support manufacturing units, EPC developers, and infrastructure groups across India with premium steel solutions built for high load capacities and durability.
              </p>

              {/* Mission, Vision, Values Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Our Mission</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To deliver reliable, high-integrity structural steel and PEB frameworks using modern, certified engineering processes.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Our Vision</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    To serve as India's premier, go-to heavy fabrication and infrastructure partner for critical industrial complexes.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs">
                  <h4 className="text-sm font-bold uppercase text-secondary mb-2">Core Values</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Precision engineering, strict safety protocols, absolute material transparency, and long-term client trust.
                  </p>
                </div>
              </div>

              {/* Aligned Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200/80">
                <div>
                  <span className="text-2xl font-bold text-primary block">45,000 MT</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Annual Capacity</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">1,50,000 SF</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Fabrication Plant</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">35+ Experts</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Engineering Team</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-primary block">100% Passed</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mt-1">Quality Audits</span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block font-heading">Our Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Our Capabilities</h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed">Delivering complete industrial solutions from demolition and material recovery to structural fabrication, construction and project execution.</p>
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
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Industries We Serve</h2>
            <p className="text-sm text-gray-500 font-body">Our steel structures form the backbone of critical industries requiring high loading limits, security, and customized framing.</p>
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
                <div className="absolute inset-0 bg-primary bg-opacity-20" />
              </div>
            </div>

            {/* Right: Timeline Points */}
            <div className="lg:col-span-7 space-y-12 text-left">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Our Edge</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Why Corporate Partners Choose IRONEX</h2>
                <p className="text-sm text-gray-500 font-body">We maintain rigorous production frameworks and quality control checkpoints that assure safety, reliability, and precision on every ton of steel processed.</p>
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
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Execution Workflow</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Our Structured Project Process</h2>
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
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary bg-opacity-30 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-6" />
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
            Ready to Build, Redevelop or Transform Your Industrial Project?
          </h2>
          <p className="text-base text-gray-300 font-body max-w-3xl mx-auto leading-relaxed">
            From demolition and scrap management to structural fabrication, material supply and complete industrial construction — IRONEX delivers reliable engineering solutions from start to finish.
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
                <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Let's Discuss Your Industrial Project</h2>
                <p className="text-sm text-gray-500 font-body">Submit structural drawings or tell us your requirements. Our estimation engineers will draw up detailed feasibility and pricing quotes.</p>
                
                {/* Office Info details */}
                <div className="space-y-4 pt-4 text-sm font-semibold text-primary font-body">
                  <div className="flex items-start gap-4">
                    <div className="bg-white p-3 border border-gray-200/60 rounded-xl text-secondary shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-secondary">Registered Corporate Office</h4>
                      <p className="text-xs text-gray-500 mt-1 font-body">Plot 42-B, Industrial Area Phase II, Sector 5, Ahmedabad, Gujarat - 382480, India.</p>
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
                    <h4 className="text-sm font-bold text-primary font-heading">Ahmedabad GIDC Fabrication Yard</h4>
                    <p className="text-xs text-gray-400 max-w-sm font-body">15km from central Ahmedabad. Dedicated transport routes for heavy ODC (Over Dimension Cargo) transit trailers.</p>
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
