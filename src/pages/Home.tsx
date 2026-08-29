import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Factory,
  Zap,
  Boxes,
  Milestone,
  Anchor,
  ShieldCheck,
  Building2,
  ArrowRight,
  Wrench,
  MapPin,
  CheckCircle2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { useModal } from '../context/ModalContext';
import Reveal from '../components/Reveal';
import { openWhatsApp } from '../lib/whatsapp';
import { WHATSAPP_CONTACTS, WHATSAPP_MESSAGES } from '../config/contact';

// Asset Imports (resolves via Vite bundle)
import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import pebImg from '../assets/peb_construction.jpg';
import projectImg from '../assets/industrial_project.jpg';

// Client Logo Imports
import allcargoLogo from '/logos/allcargo.png';
import bpclLogo from '/logos/bpcl.png';
import ongcLogo from '/logos/ongc.png';
import jpnaLogo from '/logos/jpna.png';
import lodhaLogo from '/logos/lodha.png';
import runwalLogo from '/logos/runwal.png';
import tacImgLogo from '/logos/tata.svg';
import relianceLogo from '/logos/reliance.svg';
import jswLogo from '/logos/jsw.png';
import lntLogo from '/logos/lnt.png';

export default function Home() {
  const { setIsQuoteOpen } = useModal();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Problem section cascade
      gsap.set('.gs-problem-label, .gs-problem-copy, .gs-problem-card, .gs-problem-solution, .gs-problem-objective', { opacity: 0 });
      gsap.set('.gs-problem-headline span', { yPercent: 110 });

      const problemTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#problem-section',
          start: 'top 70%',
          once: true,
        },
      });

      problemTl
        .to('.gs-problem-label', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
        .to('.gs-problem-headline span', { yPercent: 0, duration: 0.7, ease: 'power4.out' }, '-=0.3')
        .to('.gs-problem-copy', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.45')
        .fromTo(
          '.gs-problem-card',
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
          },
          '-=0.2'
        )
        .to('.gs-problem-solution', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2')
        .to('.gs-problem-objective', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');

      // Requirement to Execution timeline
      const rtwCards = gsap.utils.toArray<HTMLElement>('.rtw-step');
      gsap.set('.rtw-line', { scaleX: 0, transformOrigin: 'left center' });
      if (rtwCards.length) {
        gsap.set(rtwCards, { opacity: 0, y: 40 });
      }

      const rtwTl = gsap.timeline({
        scrollTrigger: {
          trigger: '#rtw-steps',
          start: 'top 75%',
          once: true,
        },
      });

      rtwTl
        .to('.rtw-line', { scaleX: 1, duration: 0.9, ease: 'power2.inOut' })
        .to(rtwCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.1,
        }, '-=0.5');
    });

    return () => mm.revert();
  }, []);

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

        <Reveal className="w-full">
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
        </Reveal>
      </section>

      {/* 2A. THE PROBLEM WE EXIST TO REDUCE */}
      <section className="py-24 bg-white border-b border-gray-100" id="problem-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block gs-problem-label">The Problem We Exist to Reduce</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight gs-problem-headline overflow-hidden">
              <span className="inline-block">Waiting Is Not Neutral.</span>
            </h2>
            <p className="text-sm text-gray-500 font-body leading-relaxed gs-problem-copy">
              Industrial delays rarely arrive with a separate invoice. Their cost appears elsewhere - in idle labour, blocked space, extended rentals, additional transport, delayed billing, rehandling and lost productivity. A seemingly small operational miss can quietly become a much larger commercial loss.
            </p>
          </div>

          {/* Problem cards - highlighted */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch" id="problem-grid">
            {[
              { title: 'Labour keeps costing money even when the work stands still.' },
              { title: 'Equipment and machinery remain committed to a site that cannot proceed.' },
              { title: 'Rental charges keep running on scaffolding and access systems.' },
              { title: 'Project sequences shift, pushing every milestone that follows.' },
              { title: 'Billing gets pushed out, so cash keeps waiting too.' },
              { title: 'Working capital stays locked inside material and equipment.' },
              { title: 'Industrial space stays occupied by material that has stopped moving.' },
              { title: 'Management time gets consumed chasing follow-ups instead of execution.' }
            ].map((item, idx) => (
              <div key={idx} className="gs-problem-card relative bg-[#FDF3F0] border-l-4 border-[#D8583C] border border-gray-100 rounded-lg p-5 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="text-[#D8583C] font-extrabold text-2xl block mb-2 leading-none">0{idx + 1}</span>
                <p className="text-sm text-gray-700 leading-relaxed font-body font-semibold">{item.title}</p>
              </div>
            ))}
          </div>

          {/* IRONEX solution highlight */}  
          <div className="gs-problem-solution mt-8 bg-primary text-white rounded-xl p-8 md:p-10 text-left flex flex-col md:flex-row md:items-center gap-6 shadow-lg">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-2">That Is the Problem IRONEX Is Built Around</span>
              <p className="text-sm text-gray-300 leading-relaxed font-body">
                We operate at three points where timing and material directly affect operational performance:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-center min-w-[140px]">
                <p className="text-secondary font-extrabold text-2xl leading-none">01</p>
                <p className="text-xs text-white mt-2 font-semibold">Material that needs to move out.</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-center min-w-[140px]">
                <p className="text-secondary font-extrabold text-2xl leading-none">02</p>
                <p className="text-xs text-white mt-2 font-semibold">Access that needs to be available.</p>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-lg p-4 text-center min-w-[140px]">
                <p className="text-secondary font-extrabold text-2xl leading-none">03</p>
                <p className="text-xs text-white mt-2 font-semibold">Material that needs to move in.</p>
              </div>
            </div>
          </div>

          <div className="gs-problem-objective text-center mt-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 border border-secondary/25 px-4 py-2.5 rounded-lg">
              Objective is Simple: To Keep industrial requirements commercially controlled and operationally moving.
            </span>
          </div>

        </div>
      </section>

      {/* 3. OUR THREE BUSINESSES */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 2B. PROOF BEFORE PROMISE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 2C. OUR TOP CLIENTS */}
      <section className="py-16 bg-white border-b border-gray-100 overflow-hidden">
        <Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Trusted By Industry Leaders</span>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-primary tracking-tight">
            Trusted by India's Leading Industrial & Infrastructure Companies
          </h2>
          <p className="text-sm text-gray-500 font-body max-w-3xl mx-auto">
            Delivering engineering, fabrication, demolition and industrial support solutions to some of India's most respected organizations.
          </p>
        </div>
        </Reveal>

        <div className="relative w-full overflow-hidden py-8 bg-white border-y border-gray-200/50 flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden sm:block" />
          
          <div className="animate-marquee flex gap-14 items-center">
            {[
              { img: allcargoLogo, name: 'Allcargo Logistics' },
              { img: bpclLogo, name: 'BPCL' },
              { img: ongcLogo, name: 'ONGC' },
              { img: jpnaLogo, name: 'JNPA' },
              { img: lodhaLogo, name: 'Lodha' },
              { img: runwalLogo, name: 'Runwal' },
              { img: tacImgLogo, name: 'Tata' },
              { img: relianceLogo, name: 'Reliance' },
              { img: jswLogo, name: 'JSW' },
              { img: lntLogo, name: 'L&T' }
            ].map((client, idx) => (
              <div 
                key={`client-1-${idx}`} 
                className="flex flex-col items-center gap-2 px-2 text-center select-none whitespace-nowrap cursor-default"
              >
                <img 
                  src={client.img} 
                  alt={`${client.name} logo`}
                  className="max-h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest">{client.name}</span>
              </div>
            ))}
            {[
              { img: allcargoLogo, name: 'Allcargo Logistics' },
              { img: bpclLogo, name: 'BPCL' },
              { img: ongcLogo, name: 'ONGC' },
              { img: jpnaLogo, name: 'JNPA' },
              { img: lodhaLogo, name: 'Lodha' },
              { img: runwalLogo, name: 'Runwal' },
              { img: tacImgLogo, name: 'Tata' },
              { img: relianceLogo, name: 'Reliance' },
              { img: jswLogo, name: 'JSW' },
              { img: lntLogo, name: 'L&T' }
            ].map((client, idx) => (
              <div 
                key={`client-2-${idx}`} 
                className="flex flex-col items-center gap-2 px-2 text-center select-none whitespace-nowrap cursor-default"
              >
                <img 
                  src={client.img} 
                  alt={`${client.name} logo`}
                  className="max-h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <span className="text-[10px] text-gray-400 font-heading font-bold uppercase tracking-widest">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <Reveal>
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

            </div>

          </div>
        </div>
        </Reveal>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 8. HOW IRONEX THINKS */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 8B. FROM REQUIREMENT TO EXECUTION */}
      <section className="py-24 bg-[#F5F0EB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary block">From Requirement to Execution</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">Fewer Assumptions Before Work Begins.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative" id="rtw-steps">
            <div className="rtw-line absolute top-[38px] left-[5%] right-[5%] h-0.5 bg-gray-200 hidden lg:block z-0" />
            
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
                className="rtw-step bg-white border border-gray-200/50 p-6 rounded-xl relative z-10 text-left hover:border-secondary hover:shadow-xs transition-all duration-300"
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

      {/* 9B. WHERE WE OPERATE */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Reveal>
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
        </Reveal>
      </section>

      {/* 10B. CALL TO ACTION SECTION */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={projectImg} alt="CTA Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        
        <Reveal>
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
            <button
              onClick={() => openWhatsApp(WHATSAPP_CONTACTS.GENERAL, WHATSAPP_MESSAGES.GENERAL_DEFAULT)}
              className="btn-outline bg-transparent border border-[#25D366] text-[#25D366] font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl cursor-pointer text-center hover:bg-[#25D366] hover:text-white transition-all"
            >
              WhatsApp IRONEX
            </button>
          </div>
        </div>
        </Reveal>
      </section>

    </div>
  );
}
