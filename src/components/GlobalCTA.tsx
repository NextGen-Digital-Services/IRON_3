import { ArrowUpRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import Reveal from './Reveal';

export default function GlobalCTA() {
  const { setIsQuoteOpen } = useModal();

  return (
    <section className="bg-[#07101A] border-b border-[#F4F1EA]/10">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-8 sm:py-9">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-7 md:gap-10">
          <div className="md:w-[62%]">
            <Reveal>
              <span className="flex items-center gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F4F1EA]/45">
                <span className="w-8 h-px bg-[#F4F1EA]/30 shrink-0" />
                The Next Movement Starts Here
              </span>
              <h2 className="heading-editorial text-[#F4F1EA] text-[clamp(2.5rem,4.2vw,3.75rem)] leading-none mt-3 md:whitespace-nowrap">
                LET&rsquo;S MOVE{' '}
                <span className="italic text-[#C66B45]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                  forward.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="md:w-[38%] flex md:justify-end">
            <Reveal delay={0.1} className="w-full md:w-auto">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="group w-full sm:w-[250px] h-[48px] flex items-center justify-between gap-2 px-4 bg-[#C66B45] text-[#07101A] font-bold text-[10.5px] uppercase tracking-[0.1em] hover:bg-[#D47B55] transition-colors duration-300"
              >
                <span>Discuss Your Requirement</span>
                <ArrowUpRight
                  size={15}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
