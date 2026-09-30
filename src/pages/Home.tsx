import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  MapPin,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

import { useModal } from '../context/ModalContext';
import Reveal from '../components/Reveal';


import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
import pebImg from '../assets/peb_construction.jpg';
import projectImg from '../assets/industrial_project.jpg';
import scaffoldingImg from '../assets/scaffolding.jpg';
import demolitionImg from '../assets/demolition.jpg';
import HeroBackground from '../components/HeroBackground';
import homeHero1 from '../assets/home_01.jpg';
import homeHero2 from '../assets/home_02.jpg';
import homeHero3 from '../assets/home_03.jpg';
import homeHero4 from '../assets/home_04.jpg';

const heroImages = [
  { src: homeHero1, alt: 'Industrial construction site with concrete columns' },
  { src: homeHero2, alt: 'Construction site with steel framework and cranes' },
  { src: homeHero3, alt: 'Industrial crane in a steel factory yard' },
  { src: homeHero4, alt: 'Aerial view of an industrial factory' },
];

const tickerWords = [
  'STEEL SUPPLY',
  'SCRAP PROCUREMENT',
  'SCAFFOLDING & FORMWORK',
  'FABRICATION',
  'CIVIL WORKS',
  'PEB ERECTION',
  'MATERIAL RECOVERY',
  'TURNKEY EXECUTION',
];

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
  const heroRef = useRef<HTMLElement>(null);
  const waitingImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.hero-reveal'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.2 }
        );
      }

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

      gsap.utils.toArray<HTMLElement>('.stmt-line').forEach((line) => {
        gsap.fromTo(line,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: line, start: 'top 85%', once: true }
          }
        );
      });

      if (waitingImgRef.current) {
        gsap.fromTo(waitingImgRef.current,
          { scale: 1 },
          {
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: waitingImgRef.current.closest('section'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  const logos = [
    { img: allcargoLogo, name: 'Allcargo' },
    { img: bpclLogo, name: 'BPCL' },
    { img: ongcLogo, name: 'ONGC' },
    { img: jpnaLogo, name: 'JNPA' },
    { img: lodhaLogo, name: 'Lodha' },
    { img: runwalLogo, name: 'Runwal' },
    { img: tacImgLogo, name: 'Tata' },
    { img: relianceLogo, name: 'Reliance' },
    { img: jswLogo, name: 'JSW' },
    { img: lntLogo, name: 'L&T' },
  ];

  return (
    <div className="bg-[#F3F0E9]">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#07101A] overflow-hidden">
        <HeroBackground className="absolute inset-0 z-0" images={heroImages} interval={5000} />
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[33%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[58%] top-0 bottom-0 w-px bg-white/[0.04]" />
          <div className="absolute left-[83%] top-0 bottom-0 w-px bg-white/[0.04]" />
        </div>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 py-20 sm:py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 text-left space-y-8">
              <span className="hero-reveal eyebrow">IRONEX Steel & Infra LLP</span>
              <h1 className="hero-reveal heading-editorial text-[#F4F1EA]">
                Industry Runs On<br />What Moves.<br />And Pays For<br />
                <span className="text-[#C66B45]">What Doesn't.</span>
              </h1>
              <div className="hero-reveal space-y-4 max-w-xl">
                <p className="text-sm text-[#F4F1EA]/60 leading-relaxed font-body">
                  An integrated industrial company operating across scrap procurement, scaffolding systems, steel and material supply, structural fabrication and civil works.
                </p>
                <p className="text-sm text-[#F4F1EA]/40 leading-relaxed font-body">
                  We work at three critical points where material availability, movement and execution directly affect productivity, working capital and project continuity.
                </p>
              </div>
              <div className="hero-reveal flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors duration-300">
                  View Our Requirements
                </button>
                <Link to="/capabilities" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all duration-300 text-center">
                  Start a Project
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <div className="hero-reveal relative">
                <img src={pebImg} alt="Industrial construction" className="w-full aspect-[4/3] object-cover grayscale-[0.3] contrast-[1.1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101A]/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER — KEYWORD TICKER */}
      <section className="relative bg-[#0B1520] border-y border-[#C66B45]/30 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B1520] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B1520] to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee items-center py-6 sm:py-8">
          {[...tickerWords, ...tickerWords].map((word, idx) => (
            <span key={idx} className="flex items-center shrink-0">
              <span
                className={
                  'text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight whitespace-nowrap px-6 sm:px-10 ' +
                  (idx % 2 === 0
                    ? 'text-[#F4F1EA]/80'
                    : 'text-transparent [-webkit-text-stroke:1px_#C66B45]')
                }
              >
                {word}
              </span>
              <span className="w-2 h-2 bg-[#C66B45] rotate-45 shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* THE WAITING PROBLEM — CINEMATIC STATEMENT */}
      <section className="relative min-h-[60vh] sm:min-h-[85vh] flex items-center bg-[#07101A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img ref={waitingImgRef} src={factoryImg} alt="" className="w-full h-full object-cover opacity-30 origin-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101A]/90 via-[#07101A]/60 to-[#07101A]/40" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 py-16 sm:py-24 lg:py-32 w-full">
          <Reveal>
            <span className="eyebrow block mb-6 sm:mb-10 text-[#C66B45]">The Real Cost</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-[#F4F1EA] leading-[0.95] tracking-tight">
              The site stops.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mt-2">
              <span className="text-[#F4F1EA]">The costs </span>
              <span className="text-[#C66B45]">don't.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* THREE DIVISIONS */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-16 lg:mb-24">
              <span className="eyebrow block mb-6">Our Divisions</span>
              <h2 className="heading-editorial text-[#101820] max-w-4xl">
                Three Different<br />Requirements.<br />One Industrial<br />Discipline.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D0C7]">
            {[
              { num: '01', label: 'RECOVER', title: 'Scrap Procurement & Processing', desc: 'IRONEX procures, lifts, segregates and commercially recovers ferrous, non-ferrous, machinery and other industrial surplus material through direct procurement, corporate disposals, auctions and other commercially viable channels.', path: '/capabilities/scrap', img: demolitionImg },
              { num: '02', label: 'ACCESS', title: 'Scaffolding & Formwork', desc: 'IRONEX provides scaffolding systems, components and accessories on rental and sale for construction, industrial, infrastructure, warehouse and maintenance requirements.', path: '/capabilities/scaffolding', img: scaffoldingImg },
              { num: '03', label: 'SUPPLY', title: 'Construction Material & Steel Supply', desc: 'IRONEX supplies steel, structural sections, pipes, plates, TMT, roofing systems and other construction materials for industrial, contractor and project requirements.', path: '/capabilities/steel', img: heroImg },
            ].map((biz, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <Link to={biz.path} className="group block bg-[#F3F0E9] p-6 sm:p-8 lg:p-10 text-left hover:bg-[#07101A] transition-all duration-500 relative overflow-hidden min-h-[320px] sm:min-h-[420px] flex flex-col">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <img src={biz.img} alt="" className="w-full h-full object-cover opacity-15" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="editorial-num">{biz.num}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] mt-2 block">{biz.label}</span>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-[#101820] group-hover:text-[#F4F1EA] mt-6 mb-4 transition-colors duration-500 leading-tight">{biz.title}</h3>
                    <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/50 leading-relaxed font-body flex-1 transition-colors duration-500">{biz.desc}</p>
                    <div className="flex items-center gap-2 mt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C66B45] group-hover:gap-3 transition-all duration-300">
                      Explore Division<ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIAL IMAGE GRID */}
      <section className="bg-[#07101A] py-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {[{ img: demolitionImg, label: 'RECOVER' }, { img: scaffoldingImg, label: 'ACCESS' }, { img: heroImg, label: 'SUPPLY' }].map((item, idx) => (
            <div key={idx} className="relative h-64 lg:h-80 overflow-hidden group cursor-pointer">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-[#07101A]/40 group-hover:bg-[#07101A]/60 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F4F1EA]/70 group-hover:text-[#C66B45] transition-colors duration-300">{item.label}</span>
                <div className="w-8 h-px bg-[#C66B45] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DARK STATEMENT */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#07101A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#C66B45]/[0.03] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center relative z-10">
          <Reveal>
            <span className="eyebrow block mb-8">Our Commitment</span>
            <h2 className="stmt-line heading-editorial text-[#F4F1EA] text-3xl lg:text-5xl">
              Understand the requirement.<br />Control the movement.<br />
              <span className="text-[#C66B45]">Execute the commitment.</span>
            </h2>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-16">
              <span className="eyebrow block mb-6">Proof Before Promise</span>
              <h2 className="heading-editorial text-[#101820] max-w-4xl">Industrial Trust<br />Should Be Visible.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0C7]">
            {[
              { stat: '21+', label: 'YEARS', sub: 'industry experience' },
              { stat: '~1,000+', label: 'MT', sub: 'material handled' },
              { stat: '~650+', label: 'MT', sub: 'monthly sourcing' },
              { stat: '~400+', label: 'MT', sub: 'monthly supply capacity' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-[#F3F0E9] p-5 sm:p-8 lg:p-10 text-left">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#C66B45] tracking-tight">{item.stat}</span>
                  <span className="text-base sm:text-lg font-extrabold text-[#101820] ml-1">{item.label}</span>
                  <p className="text-[9px] sm:text-[10px] text-[#6B6560] uppercase tracking-[0.15em] font-bold mt-3 block">{item.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS GRID */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-16">
              <span className="eyebrow block mb-6">Our Process</span>
              <h2 className="heading-editorial text-[#101820] max-w-4xl">From Requirement<br />to Execution.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C7]" id="rtw-steps">
            {[
              { step: '01', title: 'UNDERSTAND', desc: 'Requirement, quantity, specification, location and timeline.' },
              { step: '02', title: 'EVALUATE', desc: 'Availability, operating requirements, logistics and commercial feasibility.' },
              { step: '03', title: 'COMMIT', desc: 'Clarify scope, quantity and commercial terms.' },
              { step: '04', title: 'PREPARE', desc: 'Arrange material, vehicles, manpower and documentation.' },
              { step: '05', title: 'EXECUTE', desc: 'Supply, mobilisation or lifting takes place.' },
              { step: '06', title: 'CLOSE', desc: 'Complete delivery, weighment, acknowledgement or reconciliation.' },
            ].map((st, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="rtw-step bg-[#F3F0E9] p-6 sm:p-8 lg:p-10 text-left group hover:bg-[#07101A] transition-all duration-500">
                  <span className="text-2xl lg:text-3xl font-extrabold text-[#C66B45] block mb-4">{st.step}</span>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mb-3 transition-colors duration-500">{st.title}</h3>
                  <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/50 leading-relaxed font-body transition-colors duration-500">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section className="py-12 sm:py-20 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-8 sm:mb-12 text-center">
          <span className="eyebrow block mb-4">Trusted Partners</span>
          <h2 className="text-xl lg:text-2xl font-extrabold text-[#101820] tracking-tight">Trusted by India's Leading Industrial Companies</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F3F0E9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F3F0E9] to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex gap-14 items-center py-4">
            {[...logos, ...logos].map((client, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 px-2 select-none whitespace-nowrap">
                <img src={client.img} alt={client.name} className="max-h-8 w-auto object-contain transition-transform duration-300 ease-out hover:scale-125" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative">
                  <img src={factoryImg} alt="IRONEX Facility" className="w-full aspect-[4/3] object-cover" />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 space-y-6 text-left">
              <Reveal>
                <span className="eyebrow block mb-4">Who We Are</span>
                <h2 className="heading-editorial text-[#101820] text-3xl lg:text-4xl">
                  Then Decide Where We Fit.
                </h2>
                <div className="w-10 h-px bg-[#C66B45] my-6" />
                <p className="text-sm text-[#6B6560] leading-relaxed font-body">
                  IRONEX Steel & Infra LLP is an integrated industrial company operating across industrial scrap procurement, scaffolding systems, steel and construction-material supply, structural fabrication and civil works. Built on more than 21 years of family-led industrial experience, IRONEX combines established operational knowledge with a modern, structured and execution-focused approach — based out of Uran, Maharashtra.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                  <div className="border-l-2 border-[#C66B45] pl-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-1">Mission</h4>
                    <p className="text-[11px] text-[#6B6560] leading-relaxed">Reduce operational fragmentation through specialised capabilities and responsible execution.</p>
                  </div>
                  <div className="border-l-2 border-[#C66B45] pl-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-1">Vision</h4>
                    <p className="text-[11px] text-[#6B6560] leading-relaxed">Build a trusted industrial platform connecting recovery, access, supply and execution.</p>
                  </div>
                  <div className="border-l-2 border-[#C66B45] pl-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C66B45] mb-1">Values</h4>
                    <p className="text-[11px] text-[#6B6560] leading-relaxed">Responsibility before excuses, capability before commitment, clarity before quotation.</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE OPERATE */}
      <section className="py-16 sm:py-24 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-12">
              <span className="eyebrow block mb-6">Where We Operate</span>
              <h2 className="heading-editorial text-[#101820] max-w-4xl">Positioned Close<br />To Industrial Movement.</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D5D0C7]">
            {['Nhava Sheva', 'JNPT', 'Navi Mumbai', 'Panvel', 'Raigad', 'Mumbai', 'Thane', 'Bhiwandi'].map((location) => (
              <div key={location} className="bg-[#F3F0E9] p-5 text-center hover:bg-[#07101A] transition-all duration-500 group">
                <MapPin size={16} className="text-[#C66B45] mx-auto mb-2" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] transition-colors duration-500">{location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#07101A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={projectImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#07101A]/70" />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 relative z-10 text-center space-y-8">
          <Reveal>
            <h2 className="heading-editorial text-[#F4F1EA] text-3xl lg:text-4xl">Start With The Details.</h2>
            <p className="text-sm text-[#F4F1EA]/50 font-body max-w-2xl mx-auto leading-relaxed">
              Send your BOQ, material schedule, scaffolding quantity, project drawings or scrap-lot information. We will direct the enquiry to the relevant IRONEX division.
            </p>
            <p className="text-[10px] text-[#F4F1EA]/30 italic font-body">
              Not sure which division applies? Send the complete requirement. Internal coordination is our responsibility, not yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors duration-300">
                View Our Requirements
              </button>
              <Link to="/capabilities" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[10px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all duration-300 text-center">
                Start a Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
