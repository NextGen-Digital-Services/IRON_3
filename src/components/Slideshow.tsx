import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export type SlideshowImage = {
  src: string;
  alt: string;
  tag?: string;
};

type SlideshowProps = {
  images: SlideshowImage[];
  interval?: number;
  className?: string;
};

export default function Slideshow({ images, interval = 5000, className = '' }: SlideshowProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (images.length < 2 || !inView || paused) return;
    const id = window.setInterval(next, interval);
    return () => window.clearInterval(id);
  }, [images.length, inView, paused, interval, next]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#07101A] group ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((image, i) => {
        const active = i === index;
        return (
          <div
            key={image.src}
            className="absolute inset-0 transition-opacity duration-[1100ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ opacity: active ? 1 : 0 }}
            aria-hidden={!active}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover"
              style={{
                transform: active && !reduce ? 'scale(1.09)' : 'scale(1)',
                transition: `transform ${reduce ? 0 : interval + 1500}ms cubic-bezier(0.23,1,0.32,1)`,
              }}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-t from-[#07101A]/85 via-[#07101A]/10 to-transparent pointer-events-none" />

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="h-px w-full bg-white/15 overflow-hidden">
          <div
            key={index}
            className="h-px w-full bg-[#C66B45] origin-left"
            style={
              reduce || paused
                ? { transform: 'scaleX(0)' }
                : { animation: `slideshow-progress ${interval}ms linear forwards` }
            }
          />
        </div>
        <div className="flex items-end justify-between gap-4 px-4 sm:px-5 py-4">
          <div className="min-w-0">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#C66B45] truncate">
              {images[index].tag ?? ''}
            </span>
            <span className="mt-1 block text-[10px] font-bold tracking-[0.2em] text-[#F4F1EA] tabular-nums">
              {String(index + 1).padStart(2, '0')}
              <span className="text-[#F4F1EA]/40"> / {String(images.length).padStart(2, '0')}</span>
            </span>
          </div>
          <div className="flex shrink-0 gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-1 transition-all duration-300 ${
                  i === index
                    ? 'w-7 bg-[#C66B45]'
                    : 'w-3 bg-white/30 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
