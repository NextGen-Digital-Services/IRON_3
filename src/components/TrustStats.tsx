import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, HardHat, Award, Users2 } from 'lucide-react';

interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
}

export default function TrustStats() {
  const stats: StatItem[] = [
    {
      id: 1,
      label: 'Years of Engineering Excellence',
      value: 15,
      suffix: '+',
      icon: <Award className="text-secondary" size={32} />
    },
    {
      id: 2,
      label: 'Industrial Projects Completed',
      value: 350,
      suffix: '+',
      icon: <HardHat className="text-secondary" size={32} />
    },
    {
      id: 3,
      label: 'Satisfied Corporate Clients',
      value: 200,
      suffix: '+',
      icon: <Users2 className="text-secondary" size={32} />
    },
    {
      id: 4,
      label: 'Qualified Industrial Partners',
      value: 45,
      suffix: '+',
      icon: <ShieldCheck className="text-secondary" size={32} />
    }
  ];

  return (
    <section className="bg-white border-y border-gray-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex items-center gap-5 p-4 rounded-xl border border-transparent hover:border-gray-100 hover:shadow-xs transition-all duration-300"
            >
              <div className="bg-[#F7F8FA] p-4 rounded-xl text-secondary shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline">
                  <span className="text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
                    <CountUp targetValue={stat.value} />
                  </span>
                  <span className="text-2xl font-bold text-secondary ml-0.5">{stat.suffix}</span>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable CountUp component using requestAnimationFrame
function CountUp({ targetValue, duration = 2000 }: { targetValue: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = targetValue;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, targetValue, duration]);

  return <span ref={elementRef}>{count}</span>;
}
