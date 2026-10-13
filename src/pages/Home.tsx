import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { useModal } from '../context/ModalContext';
import Reveal from '../components/Reveal';
import OperatingMap from '../components/OperatingMap';


import heroImg from '../assets/industrial_hero.jpg';
import factoryImg from '../assets/about_factory.jpg';
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
        gsap.to(rtwCards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: { trigger: '#rtw-steps', start: 'top 75%', once: true },
        });
      }

      gsap.to('.rtw-line', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#rtw-steps',
          start: 'top 80%',
          end: 'bottom 35%',
          scrub: 0.4,
        },
      });

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
    { img: allcargoLogo, name: 'Allcargo', cls: 'h-12' },
    { img: bpclLogo, name: 'BPCL', cls: 'h-28' },
    { img: ongcLogo, name: 'ONGC', cls: 'h-20' },
    { img: jpnaLogo, name: 'JNPA', cls: 'h-20' },
    { img: lodhaLogo, name: 'Lodha', cls: 'h-14' },
    { img: runwalLogo, name: 'Runwal', cls: 'h-16' },
    { img: tacImgLogo, name: 'Tata', cls: 'h-20' },
    { img: relianceLogo, name: 'Reliance', cls: 'h-16' },
    { img: jswLogo, name: 'JSW', cls: 'h-12' },
    { img: lntLogo, name: 'L&T', cls: 'h-10' },
  ];

  return (
    <div className="bg-[#F3F0E9]">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-[#07101A] overflow-hidden">
        <HeroBackground className="absolute inset-0 z-0" images={heroImages} interval={5000} />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 py-20 sm:py-24 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 text-left space-y-7">
              <span className="hero-reveal eyebrow">Recover Value &bull; Enable Work &bull; Supply Progress</span>
              <h1 className="hero-reveal heading-editorial text-[#F4F1EA]">
                Industry Runs On<br />What Moves.<br />And Pays For<br />
                <span className="text-[#C66B45]">What Doesn't.</span>
              </h1>
              <div className="hero-reveal">
                <div className="w-10 h-px bg-[#C66B45] mb-4" />
                <h2 className="text-lg sm:text-xl font-heading leading-snug text-[#F4F1EA]/85">
                  Three Industrial Businesses. <span className="text-[#C66B45]">One Standard of Execution.</span>
                </h2>
              </div>
              <div className="hero-reveal space-y-4 max-w-xl">
                <p className="text-sm text-[#F4F1EA]/60 leading-relaxed font-body">
                  IRONEX STEEL &amp; INFRA LLP is an industrial company based in Navi Mumbai, Maharashtra, operating across Scrap Procurement &amp; Processing, Scaffolding &amp; Formwork, and Construction Material &amp; Steel Supply.
                </p>
              </div>
              <div className="hero-reveal flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={() => setIsQuoteOpen(true)} className="bg-[#C66B45] text-[#F4F1EA] font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:bg-[#D47B55] transition-colors duration-300">
                  Discuss Your Requirement
                </button>
                <Link to="/capabilities" className="border border-[#F4F1EA]/20 text-[#F4F1EA]/70 font-bold text-[11px] uppercase tracking-[0.15em] px-8 py-4 hover:border-[#C66B45] hover:text-[#C66B45] transition-all duration-300 text-center">
                  Explore Our Businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — OUR THREE BUSINESSES */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#07101A] border-t border-[#F4F1EA]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-16 lg:mb-24">
              <span className="eyebrow block mb-6">Our Divisions</span>
              <h2 className="heading-editorial text-[#F4F1EA] max-w-4xl">
                Three Different<br />Requirements.<br />One Industrial<br />Discipline.
              </h2>
            </div>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-px bg-[#F4F1EA]/10 biz-cards">
            {[
              { num: '01', label: 'Material Out', title: 'Scrap Procurement & Processing', desc: 'IRONEX procures, lifts, segregates and commercially recovers ferrous, non-ferrous, machinery and other industrial surplus material through direct procurement, corporate disposals, auctions and other commercially viable channels.', tagline: 'Industrial value does not disappear when equipment becomes scrap. It changes form.', cta: 'Explore Scrap', path: '/capabilities/scrap', img: demolitionImg },
              { num: '02', label: 'Work Enabled', title: 'Scaffolding & Formwork', desc: 'IRONEX provides scaffolding systems, components and accessories on rental and sale for construction, industrial, infrastructure, warehouse and maintenance requirements.', tagline: 'A working site needs more than tonnes of scaffolding. It needs a complete working system.', cta: 'Explore Scaffolding', path: '/capabilities/scaffolding', img: scaffoldingImg },
              { num: '03', label: 'Material In', title: 'Construction Material & Steel Supply', desc: 'IRONEX supplies steel, structural sections, pipes, plates, TMT, roofing systems and other construction materials for industrial, contractor and project requirements.', tagline: 'Procurement is not complete when the order is placed. It is complete when the requirement is fulfilled.', cta: 'Explore Material Supply', path: '/capabilities/steel', img: heroImg },
            ].map((biz, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="biz-card md:flex-1">
                <Link to={biz.path} className="group block h-full bg-[#07101A] p-6 sm:p-8 lg:p-10 text-left transition-all duration-500 relative overflow-hidden min-h-[320px] sm:min-h-[420px] flex flex-col">
                  <div className="absolute inset-0">
                    <img src={biz.img} alt="" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07101A]/55 via-[#07101A]/22 to-[#07101A]/8 group-hover:from-[#07101A]/65 group-hover:via-[#07101A]/28 group-hover:to-[#07101A]/10 transition-all duration-500" />
                  </div>
                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#DDAE97] block">{biz.num} / {biz.label}</span>
                    <h3 className="text-xl lg:text-2xl font-extrabold text-[#F4F1EA] mt-4 leading-tight [text-shadow:0_2px_14px_rgba(7,16,26,0.85)]">{biz.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — PROOF BEFORE PROMISE */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#F3F0E9]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* LEFT — heading + text */}
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow block mb-6">Proof Before Promise</span>
                <h2 className="heading-editorial text-[#101820] max-w-4xl">Industrial Trust<br />Should Be Visible.</h2>
                <div className="w-10 h-px bg-[#C66B45] my-6" />
                <p className="text-sm text-[#6B6560] leading-relaxed font-body max-w-xl">
                  Anyone can describe themselves as reliable, experienced or customer-focused. We would rather make those claims easier to verify.
                </p>
              </Reveal>
            </div>
            {/* RIGHT — stats + bullets */}
            <div className="lg:col-span-6">
              <Reveal delay={0.1}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C66B45] block mb-6">IRONEX Is Supported By</span>
              </Reveal>
              <div className="grid grid-cols-2 gap-px bg-[#D5D0C7]">
                {[
                  { stat: '21+', label: 'YEARS', sub: 'underlying family industrial operating experience' },
                  { stat: '~1,000+', label: 'MT', sub: 'owned scaffolding inventory*' },
                  { stat: '~650+', label: 'MT', sub: 'monthly scrap procurement*' },
                  { stat: '~400+', label: 'MT', sub: 'monthly construction material supply capacity*' },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div className="bg-[#F3F0E9] h-full p-5 sm:p-6 text-left">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#C66B45] tracking-tight">{item.stat}</span>
                      <span className="text-base sm:text-lg font-extrabold text-[#101820] ml-1">{item.label}</span>
                      <p className="text-[10px] sm:text-[11px] text-[#6B6560] uppercase tracking-[0.15em] font-bold mt-3 block leading-relaxed">{item.sub}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
                {[
                  'Industrial Premises & Yard Infrastructure',
                  'Operational Vehicles & Material Movement Capability',
                  'Domestic Procurement Network',
                  'Developing International Scrap Sourcing Capability within RECOVER',
                ].map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.08}>
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-[#C66B45] rotate-45 mt-2 shrink-0" />
                      <span className="text-[13px] text-[#101820] leading-relaxed font-body">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED PARTNERS — LOGO STRIP */}
      <section className="py-12 sm:py-16 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-8 sm:mb-10 text-center">
          <span className="eyebrow block mb-4">Trusted Partners</span>
          <h2 className="text-xl lg:text-2xl font-extrabold text-[#101820] tracking-tight">Trusted by India's Leading Industrial Companies</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F3F0E9] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F3F0E9] to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee flex gap-14 items-center py-4">
            {[...logos, ...logos].map((client, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 px-2 select-none whitespace-nowrap">
                <img src={client.img} alt={client.name} className={`${client.cls} w-auto object-contain transition-transform duration-300 ease-out hover:scale-125`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — THE PROBLEM WE EXIST TO REDUCE */}
      <section className="relative bg-[#07101A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img ref={waitingImgRef} src={factoryImg} alt="" className="w-full h-full object-cover opacity-25 origin-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07101A]/95 via-[#07101A]/85 to-[#07101A]/60" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 py-16 sm:py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">
            {/* LEFT — ~40% */}
            <div className="lg:col-span-5">
              <Reveal>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#F4F1EA]/55 block">
                  <span className="text-[#C66B45]">02 /</span> The Problem We Exist To Reduce
                </span>
              </Reveal>

              <h2 className="heading-editorial text-[#F4F1EA] leading-[0.9] tracking-tight text-[clamp(2.75rem,7vw,5.5rem)] mt-7">
                <Reveal as="span" delay={0.08} className="block">WAITING</Reveal>
                <Reveal as="span" delay={0.16} className="block">IS NOT</Reveal>
                <Reveal as="span" delay={0.24} className="block text-[#C66B45]">NEUTRAL.</Reveal>
              </h2>

              <Reveal delay={0.3}>
                <div className="w-14 h-px bg-[#C66B45] mt-8" />
              </Reveal>
            </div>

            {/* RIGHT — ~60% */}
            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C66B45] block mb-6">When operations wait:</span>
              </Reveal>

              <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#F4F1EA]/15">
                {[
                  'Labour continues costing money.',
                  'Equipment remains committed.',
                  'Rental continues.',
                  'Project sequences shift.',
                  'Billing gets pushed.',
                  'Working capital remains blocked.',
                  'Industrial space stays occupied.',
                  'Management time gets consumed in follow-up.',
                ].map((item, idx) => (
                  <Reveal as="li" key={item} delay={0.2 + idx * 0.05} className="flex items-start gap-3 border-b border-[#F4F1EA]/15 py-4 text-[13px] text-[#F4F1EA]/70 font-body leading-relaxed sm:odd:border-r sm:odd:pr-8 sm:even:pl-8">
                    <span className="w-1.5 h-1.5 bg-[#C66B45] rotate-45 mt-2 shrink-0" />
                    {item}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-14 sm:mt-20 max-w-3xl mx-auto text-center">
              <p className="text-[15px] sm:text-base text-[#F4F1EA]/85 leading-relaxed font-body">
                That is the problem IRONEX is built around.
              </p>
              <p className="text-sm text-[#F4F1EA]/50 leading-relaxed font-body mt-4">
                We operate at three points where timing and material directly affect operational performance:
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 sm:gap-0">
                {[
                  'Material that needs to move out.',
                  'Access that needs to be available.',
                  'Material that needs to move in.',
                ].map((s, i) => (
                  <p key={s} className={`text-[13px] uppercase tracking-[0.12em] font-bold font-body text-[#F4F1EA]/90 leading-relaxed text-center sm:flex-1 ${i > 0 ? 'sm:border-l sm:border-[#F4F1EA]/15 sm:pl-6' : ''} ${i < 2 ? 'sm:pr-6' : ''}`}>
                    {s}
                  </p>
                ))}
              </div>
              <div className="w-10 h-px bg-[#C66B45] mx-auto mt-10 mb-6" />
              <p className="text-[15px] sm:text-base leading-relaxed font-body text-[#F4F1EA]/60">
                The Objective Is Simple: <span className="text-[#C66B45] font-bold">To Keep industrial requirements commercially controlled and operationally moving.</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 05 — HOW IRONEX THINKS ABOUT BUSINESS */}
      <section className="py-16 sm:py-24 lg:py-28 bg-[#F3F0E9] border-t border-[#D5D0C7]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow block mb-6">How IRONEX Thinks About Business</span>
              <h2 className="heading-editorial text-[#101820]">The Rate Is Only One Part<br />Of The Transaction.</h2>
              <div className="w-10 h-px bg-[#C66B45] my-6" />
              <p className="text-sm text-[#6B6560] leading-relaxed font-body">
                Industrial transactions are judged by the commercial outcome, not the quotation alone.
              </p>
              <p className="text-sm text-[#6B6560] leading-relaxed font-body mt-3">
                Before committing, we consider the factors that determine whether a requirement can actually be executed properly.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C7]">
            {[
              { num: '01', title: 'Availability', q: 'Is the required material genuinely accessible?' },
              { num: '02', title: 'Specification', q: 'Are the correct product, grade, dimensions and quantity understood?' },
              { num: '03', title: 'Logistics', q: 'How will the material move from source to destination?' },
              { num: '04', title: 'Timing', q: 'When is it actually required?' },
              { num: '05', title: 'Commercial Viability', q: 'Does the transaction make economic sense after the real operating costs are considered?' },
              { num: '06', title: 'Closure', q: 'How will quantities, weights, returns, acknowledgements and documentation be reconciled?' },
            ].map((f, idx) => (
              <Reveal key={f.num} delay={idx * 0.06}>
                <div className="bg-[#F3F0E9] h-full p-6 sm:p-8 lg:p-10 text-left group hover:bg-[#07101A] transition-all duration-500">
                  <span className="editorial-num">{f.num}</span>
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#101820] group-hover:text-[#F4F1EA] mt-3 mb-3 transition-colors duration-500">{f.title}</h3>
                  <p className="text-xs text-[#6B6560] group-hover:text-[#F4F1EA]/50 leading-relaxed font-body transition-colors duration-500">{f.q}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="text-sm text-[#6B6560] leading-relaxed font-body mt-10 max-w-3xl">
              That discipline applies differently across each IRONEX business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PROCESS GRID */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#07101A]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="mb-16">
              <span className="eyebrow block mb-6">From Requirement To Execution</span>
              <h2 className="heading-editorial text-[#F4F1EA] max-w-4xl">Fewer Assumptions<br />Before Work Begins.</h2>
            </div>
          </Reveal>
          <div className="overflow-x-auto px-1 pt-1 pb-2">
            <div className="relative flex gap-5 lg:gap-7 min-w-[1040px] lg:min-w-0" id="rtw-steps">
              <div className="rtw-line absolute left-0 right-0 top-[6px] h-px bg-[#F4F1EA]/20" />
              {[
                { step: '01', title: 'UNDERSTAND', desc: 'Requirement, quantity, specification, location and timeline.' },
                { step: '02', title: 'EVALUATE', desc: 'Availability, operating requirements, logistics and commercial feasibility.' },
                { step: '03', title: 'COMMIT', desc: 'Clarify scope, quantity and commercial terms.' },
                { step: '04', title: 'PREPARE', desc: 'Arrange material, vehicles, manpower and documentation.' },
                { step: '05', title: 'EXECUTE', desc: 'Supply, mobilisation or lifting takes place.' },
                { step: '06', title: 'CLOSE', desc: 'Complete delivery, weighment, acknowledgement or reconciliation as applicable.' },
              ].map((st, idx) => (
                <div key={idx} className="rtw-step flex-1 relative pt-8 min-w-0">
                  <span className="absolute top-0 left-0 w-3 h-3 rotate-45 bg-[#C66B45]" />
                  <span className="block text-[11px] font-bold tracking-[0.18em] text-[#DDAE97]">{st.step}</span>
                  <h3 className="text-[12.5px] font-bold uppercase tracking-[0.15em] text-[#F4F1EA] mt-2">{st.title}</h3>
                  <p className="text-[11.5px] text-[#F4F1EA]/50 leading-relaxed font-body mt-2 pr-3">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={0.15}>
            <p className="text-sm text-[#F4F1EA]/45 leading-relaxed font-body mt-10 max-w-3xl">
              Execution becomes easier when ambiguity is removed early.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 07 — WHERE WE OPERATE */}
      <section className="py-16 sm:py-24 lg:py-32 bg-[#07101A] border-t border-[#F4F1EA]/10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow block mb-6">Where We Operate</span>
                <h2 className="heading-editorial text-[#F4F1EA] max-w-xl">Positioned Close<br />To Industrial<br />Movement.</h2>
                <div className="w-10 h-px bg-[#C66B45] my-6" />
                <p className="text-sm text-[#F4F1EA]/45 leading-relaxed font-body max-w-lg">
                  IRONEX operates from Navi Mumbai, with practical access to the wider industrial, port and logistics ecosystem surrounding:
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Ports & CFS facilities', 'Industrial areas', 'Project corridors'].map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-[0.12em] text-[#F4F1EA]/60 border border-[#F4F1EA]/20 px-4 py-2">
                      {t}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 space-y-3 max-w-lg">
                  <p className="text-[13px] text-[#F4F1EA]/45 leading-relaxed font-body">
                    Our location keeps us close to ports, warehouses, logistics facilities, industrial yards, manufacturing units, construction corridors and infrastructure activity.
                  </p>
                  <p className="text-[13px] text-[#F4F1EA]/45 leading-relaxed font-body">
                    Selected requirements can be evaluated across Maharashtra and beyond depending on business category, quantity and commercial viability.
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <OperatingMap />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
