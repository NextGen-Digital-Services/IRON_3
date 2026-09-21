import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  'Labour keeps costing money even when the work stands still.',
  'Equipment and machinery remain committed to a site that cannot proceed.',
  'Rental charges keep running on scaffolding and access systems.',
  'Project sequences shift, pushing every milestone that follows.',
  'Billing gets pushed out, so cash keeps waiting too.',
  'Working capital stays locked inside material and equipment.',
  'Industrial space stays occupied by material that has stopped moving.',
  'Management time gets consumed chasing follow-ups instead of execution.',
];

const STATEMENT_TOP = 'The Real Cost of Waiting';
const STATEMENT_BOTTOM = 'Is Never Just the Wait.';

// Serpentine waypoints in % of the canvas. Odd rows read left-to-right, even right-to-left.
const DESKTOP_PTS = [
  [21, 5], [21, 15], [36, 15], [64, 15], [64, 38], [36, 38],
  [36, 61], [64, 61], [64, 84], [36, 84], [36, 95],
];
// Mobile is a single vertical chain down the centre.
const MOBILE_PTS = [
  [50, 13], [50, 84],
];

// Panel centres (x, y) per issue, aligned with the pipe entry point for that issue.
const PANELS_PCT = [
  [21, 15], [79, 15], [79, 38], [21, 38],
  [21, 61], [79, 61], [79, 84], [21, 84],
];

const DESKTOP_NODE_IDX = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // start, 01..08, terminal

// Mobile entries are paced evenly through the pin before the final statement.
const MOBILE_REVEAL = Array.from({ length: PROBLEMS.length }, (_, i) => 0.1 + i * 0.085);

// Reveal an issue slightly after the pipe settles on its node.
const layoutToReveal = (layout: Layout) => {
  const arr: number[] = [];
  layout.nodeDists.slice(1, -1).forEach((dst) => {
    arr.push((dst / layout.total) * 0.88 + 0.055);
  });
  return arr;
};

type Layout = {
  points: [number, number][];
  dists: number[];
  total: number;
  nodeIdxs: number[];
  nodeDists: number[];
  centerX: number;
  centerY: number;
};

export default function ProblemChain() {
  const rootRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const svgDRef = useRef<SVGSVGElement>(null);
  const svgMRef = useRef<SVGSVGElement>(null);
  const pipesD = useRef<SVGPathElement[]>([]);
  const pipesM = useRef<SVGPathElement[]>([]);
  const jointsD = useRef<HTMLDivElement[]>([]);
  const jointsM = useRef<HTMLDivElement[]>([]);
  const modsD = useRef<(HTMLElement | null)[]>([]);
  const modsM = useRef<(HTMLElement | null)[]>([]);
  const stmtD = useRef<HTMLDivElement>(null);
  const stmtM = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  const reducedRef = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const renderedRef = useRef(false);

  useEffect(() => {
    if (!pinRef.current) return;

    const pin = pinRef.current;
    const reduce = reducedRef.current;

    // ---- Reduced motion: static, fully revealed, no pin. ----
    if (reduce) return;

    const buildLayout = (
      pts: number[][],
      nodeIdxs: number[],
      w: number,
      h: number,
    ): Layout => {
      const points = pts.map(([x, y]) => [Math.round(x / 100 * w), Math.round(y / 100 * h)]) as [
        number,
        number,
      ][];
      const dists = [0];
      for (let i = 1; i < points.length; i += 1) {
        const a = points[i - 1];
        const b = points[i];
        dists[i] = dists[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1]);
      }
      const total = dists[dists.length - 1];
      const nodeDists = nodeIdxs.map((i) => dists[i]);
      return { points, dists, total, nodeIdxs, nodeDists, centerX: w / 2, centerY: h / 2 };
    };

    let dLayout: Layout | null = null;
    let mLayout: Layout | null = null;
    let drawPath: ((p: number) => void) | null = null;

    const sizeObserver = new ResizeObserver(() => {
      const w = pin.clientWidth;
      const h = pin.clientHeight;
      if (!w || !h) return;

      dLayout = buildLayout(DESKTOP_PTS, DESKTOP_NODE_IDX, w, h);
      mLayout = buildLayout(MOBILE_PTS, [0, 1], w, h);

      [svgDRef.current, svgMRef.current].forEach((svg) => {
        if (!svg) return;
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      });

      const bind = (pipes: SVGPathElement[], layout: Layout) => {
        const d = layout.points.map((pt, i) => `${i === 0 ? 'M' : 'L'}${pt[0]},${pt[1]}`).join(' ');
        pipes.forEach((p) => {
          p.setAttribute('d', d);
          const len = p.getTotalLength();
          p.dataset.len = String(len);
        });
      };
      bind(pipesD.current, dLayout);
      bind(pipesM.current, mLayout);

      const revealGrid = layoutToReveal(dLayout!);

      const applyJoint = (node: HTMLDivElement, on: boolean, lit: boolean) => {
        node.dataset.lit = lit ? '1' : '0';
        node.style.opacity = on ? '1' : '0';
      };

      const drawPathLocal = (p: number) => {
        const pp = Math.max(0, Math.min(1, p));
        const drawn = Math.max(0, Math.min(1, (pp - 0.015) / 0.9));

        const updatePipes = (pipes: SVGPathElement[]) => {
          pipes.forEach((e) => {
            const len = Number(e.dataset.len || 0);
            e.style.strokeDashoffset = String(len - drawn * len);
          });
        };
        updatePipes(pipesD.current);
        updatePipes(pipesM.current);

        dLayout!.nodeDists.forEach((dst, i) => {
          const node = jointsD.current[i];
          if (!node) return;
          const reached = drawn * dLayout!.total >= dst;
          applyJoint(node, reached, reached && i > 0 && i < dLayout!.nodeDists.length - 1);
        });
        mLayout!.nodeDists.forEach((dst, i) => {
          const node = jointsM.current[i];
          if (!node) return;
          applyJoint(node, drawn * mLayout!.total >= dst, false);
        });

        // Desktop modules — three explicit states, transitioned via attributes.
        let active = -1;
        for (let i = 0; i < 8; i += 1) if (pp >= revealGrid[i]) active = i;
        if (pp >= 0.885) active = 7;
        modsD.current.forEach((m, i) => {
          if (!m) return;
          m.dataset.state = active < 0 ? 'future' : i < active ? 'done' : i === active ? 'active' : 'future';
        });

        // Mobile modules — a single slot sliding through the centre.
        const beat = 0.085;
        modsM.current.forEach((m, i) => {
          if (!m) return;
          const local = Math.max(0, Math.min(1, (pp - MOBILE_REVEAL[i]) / beat));
          const yPx = (0.5 - local) * pin.clientHeight * 0.86;
          const scale = 1 - 0.04 * local;
          const opacity = local <= 0 ? 0 : 0.9 - 0.45 * local;
          m.style.transform = `translate(-50%, ${yPx.toFixed(1)}px) scale(${scale.toFixed(3)})`;
          m.style.opacity = opacity.toFixed(3);
        });

        const stmtP = Math.max(0, Math.min(1, (pp - 0.9) / 0.1));
        if (stmtD.current) stmtD.current.style.opacity = String(stmtP);
        if (stmtM.current) stmtM.current.style.opacity = String(stmtP);

        if (hintRef.current) hintRef.current.style.opacity = String(Math.max(0, 1 - pp * 9));
        if (counterRef.current) {
          const n = active + 1;
          counterRef.current.textContent = `CHAIN ${String(n).padStart(2, '0')} / 08`;
        }
      };
      drawPath = drawPathLocal;

      const trigger = ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.35,
        onUpdate: (self) => {
          if (drawPath) drawPath(self.progress);
        },
      });

      renderedRef.current = true;
      drawPath(0);
      ScrollTrigger.refresh();

      triggers.push(trigger);
    });

    const triggers: ScrollTrigger[] = [];
    sizeObserver.observe(pin);
    return () => {
      sizeObserver.disconnect();
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const reduce = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce) {
    return (
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {PROBLEMS.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-l-2 border-secondary bg-[#F3F0E9] py-4 pl-5 pr-6 rounded-r-lg"
            >
              <span className="text-secondary font-extrabold text-2xl leading-none shrink-0">
                0{i + 1}
              </span>
              <p className="text-sm text-primary font-semibold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const panelStyle = (i: number): React.CSSProperties => ({
    left: `${PANELS_PCT[i][0]}%`,
    top: `${PANELS_PCT[i][1]}%`,
  });

  const jointStyle = (x: number, y: number): React.CSSProperties => ({
    left: `${x}%`,
    top: `${y}%`,
  });

  return (
    <div ref={rootRef} className="relative" style={{ height: 'clamp(600vh, 640vh, 680vh)' }}>
      <div ref={pinRef} className="sticky top-0 h-screen overflow-hidden bg-bg-light">
        {/* ---- Architectural background ---- */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dc-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M100 0H0V100" fill="none" stroke="#101820" strokeOpacity="0.045" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dc-grid)" />
          <path d="M0 15H100M0 38H100M0 61H100M0 84H100" stroke="#101820" strokeOpacity="0.05" strokeDasharray="2 6" />
        </svg>

        {/* ---- Copper conduit (desktop) ---- */}
        <svg
          ref={svgDRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full lg:block hidden pointer-events-none"
        >
          <path ref={(el) => { if (el) pipesD.current[0] = el; }} fill="none" stroke="#9A5535" strokeOpacity="0.30" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          <path ref={(el) => { if (el) pipesD.current[1] = el; }} fill="none" stroke="#C66B45" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
          <path ref={(el) => { if (el) pipesD.current[2] = el; }} fill="none" stroke="#D47B55" strokeWidth={0.9} strokeOpacity={0.65} vectorEffect="non-scaling-stroke" />
        </svg>

        {/* ---- Copper conduit (mobile) ---- */}
        <svg
          ref={svgMRef}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full lg:hidden pointer-events-none"
        >
          <path ref={(el) => { if (el) pipesM.current[0] = el; }} fill="none" stroke="#9A5535" strokeOpacity="0.30" strokeWidth={3.4} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path ref={(el) => { if (el) pipesM.current[1] = el; }} fill="none" stroke="#C66B45" strokeWidth={2.3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path ref={(el) => { if (el) pipesM.current[2] = el; }} fill="none" stroke="#D47B55" strokeWidth={0.9} strokeOpacity={0.65} vectorEffect="non-scaling-stroke" />
        </svg>

        {/* ---- Structural joints (desktop) ---- */}
        <div className="hidden lg:block">
          {DESKTOP_PTS.map(([x, y], i) => (
            <div
              key={i}
              ref={(el) => { if (el) jointsD.current[i] = el; }}
              className="dc-joint"
              style={jointStyle(x, y)}
            />
          ))}
        </div>

        {/* ---- Structural joints (mobile) ---- */}
        <div className="lg:hidden">
          {MOBILE_PTS.map((pt, i) => (
            <div
              key={i}
              ref={(el) => { if (el) jointsM.current[i] = el; }}
              className="dc-joint"
              style={jointStyle(pt[0], pt[1])}
            />
          ))}
        </div>

        {/* ---- Scroll hint ---- */}
        <div ref={hintRef} className="absolute left-1/2 bottom-7 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-gray-400">
            Scroll to trace the chain
          </span>
          <span className="w-px h-8 bg-gradient-to-b from-[#C66B45]/60 to-transparent" />
        </div>

        {/* ---- Counter ---- */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:top-7 lg:right-7 lg:left-auto lg:translate-x-0 hidden lg:block pointer-events-none">
          <span ref={counterRef} className="text-[10px] font-bold tracking-[0.3em] text-secondary">
            CHAIN 00 / 08
          </span>
        </div>

        {/* ---- Problem slabs (desktop) ---- */}
        <div className="hidden lg:block">
          {PROBLEMS.map((text, i) => (
            <div
              key={i}
              ref={(el) => { modsD.current[i] = el; }}
              className="dc-slab"
              data-state="future"
              style={panelStyle(i)}
            >
              <span className="dc-num">0{i + 1}</span>
              <p className="dc-body">{text}</p>
            </div>
          ))}
        </div>

        {/* ---- Problem slabs (mobile, one slides through the centre) ---- */}
        <div className="lg:hidden">
          {PROBLEMS.map((text, i) => (
            <div
              key={i}
              ref={(el) => { modsM.current[i] = el; }}
              className="dc-slab dc-slab--m"
              style={{ left: '50%', top: '50%' }}
            >
              <span className="dc-num">0{i + 1}</span>
              <p className="dc-body">{text}</p>
            </div>
          ))}
        </div>

        {/* ---- Final statement (desktop) ---- */}
        <div ref={stmtD} className="hidden lg:block dc-statement" style={{ left: '50%', top: '47%' }}>
          <span className="dc-statement-eyebrow">The Complete Chain</span>
          <p className="dc-statement-top">{STATEMENT_TOP}</p>
          <p className="dc-statement-bottom">{STATEMENT_BOTTOM}</p>
        </div>

        {/* ---- Final statement (mobile) ---- */}
        <div ref={stmtM} className="lg:hidden dc-statement" style={{ left: '50%', top: '47%' }}>
          <span className="dc-statement-eyebrow">The Complete Chain</span>
          <p className="dc-statement-top">{STATEMENT_TOP}</p>
          <p className="dc-statement-bottom">{STATEMENT_BOTTOM}</p>
        </div>

        <style>{`
          .dc-joint {
            position: absolute;
            width: 14px;
            height: 14px;
            transform: translate(-50%, -50%);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.25s ease;
          }
          .dc-joint::before {
            content: '';
            position: absolute;
            inset: 0;
            border: 1.5px solid #C66B45;
            border-radius: 50%;
            background: radial-gradient(circle, #D47B55 0%, #C66B45 45%, #9A5535 100%);
            transform: scale(0.55);
            transition: transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s ease;
          }
          .dc-joint::after {
            content: '';
            position: absolute;
            inset: 0;
            border: 1px solid #9A5535;
            border-radius: 50%;
            opacity: 0.35;
          }
          .dc-joint[data-lit='1']::before {
            transform: scale(1);
            box-shadow: 0 0 0 3px rgba(184, 92, 44, 0.18), 0 4px 10px -2px rgba(122, 53, 28, 0.5);
          }

          .dc-slab {
            position: absolute;
            width: 30%;
            min-height: 84px;
            padding: 16px 18px;
            background: #F3F0E9;
            border: 1px solid #D5D0C7;
            border-top: 2px solid #C66B45;
            border-radius: 4px;
            text-align: left;
            pointer-events: none;
            opacity: 0;
            transform: translate(-50%, -50%) translateY(16px) scale(0.97);
            transition: opacity 0.45s cubic-bezier(0.23, 1, 0.32, 1),
                        transform 0.45s cubic-bezier(0.23, 1, 0.32, 1),
                        border-color 0.45s ease, box-shadow 0.45s ease;
            will-change: opacity, transform;
          }
          .dc-slab[data-state='future'] {
            opacity: 0.09;
            border-style: solid;
            border-top-color: #D5D0C7;
            transform: translate(-50%, -50%) translateY(0) scale(0.985);
          }
          .dc-slab[data-state='future'] .dc-body {
            opacity: 0;
          }
          .dc-slab[data-state='active'] {
            opacity: 1;
            border-color: #C66B45;
            border-top-color: #D47B55;
            transform: translate(-50%, -50%) translateY(0) scale(1.01);
            box-shadow: 0 24px 50px -22px rgba(13, 19, 28, 0.35);
          }
          .dc-slab[data-state='done'] {
            opacity: 0.45;
          }
          .dc-slab .dc-num {
            display: block;
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: clamp(2rem, 3vw, 2.6rem);
            line-height: 1;
            color: #C66B45;
            margin-bottom: 10px;
            letter-spacing: -0.01em;
          }
          .dc-slab .dc-body {
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: clamp(0.78rem, 1.05vw, 0.95rem);
            line-height: 1.5;
            color: #101820;
            transition: opacity 0.4s ease;
            max-width: 40ch;
          }
          .dc-slab--m {
            width: 76%;
            max-width: 380px;
            pointer-events: none;
            opacity: 0;
            transform: translate(-50%, 50%);
            transition: none;
          }
          .dc-statement {
            position: absolute;
            transform: translate(-50%, -50%);
            text-align: center;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.7s ease;
            width: min(90%, 720px);
          }
          .dc-statement-eyebrow {
            display: inline-block;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: #C66B45;
            margin-bottom: 18px;
          }
          .dc-statement-top {
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: clamp(1.6rem, 4vw, 3rem);
            line-height: 1.1;
            letter-spacing: -0.01em;
            color: #101820;
          }
          .dc-statement-bottom {
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            font-size: clamp(1.6rem, 4vw, 3rem);
            line-height: 1.1;
            letter-spacing: -0.01em;
            color: #C66B45;
          }
          @media (max-width: 1023px) {
            .dc-statement-eyebrow { margin-bottom: 12px; }
            .dc-slab--m {
              width: 70%;
              max-width: 300px;
              min-height: 60px;
              padding: 12px 14px;
            }
            .dc-slab--m .dc-num {
              font-size: clamp(1.25rem, 5vw, 1.6rem);
              margin-bottom: 6px;
            }
            .dc-slab--m .dc-body {
              font-size: clamp(0.7rem, 3.4vw, 0.82rem);
              line-height: 1.42;
              max-width: 100%;
            }
          }
          @media (min-width: 1024px) and (max-height: 780px) {
            .dc-slab {
              min-height: 72px;
              padding: 12px 14px;
            }
            .dc-slab .dc-num {
              font-size: clamp(1.4rem, 2.4vw, 1.9rem);
              margin-bottom: 6px;
            }
            .dc-slab .dc-body {
              font-size: clamp(0.72rem, 0.95vw, 0.84rem);
              line-height: 1.42;
            }
          }
        `}</style>
      </div>
    </div>
  );
}