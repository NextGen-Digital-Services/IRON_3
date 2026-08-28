import { useEffect, useState } from 'react';

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => onComplete(), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f]"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <img
          src="/logo.png"
          alt="IRONEX Steel & Infra LLP Logo"
          className="h-20 w-auto"
        />
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#B86A3A' }}
          >
            IRON<span style={{ color: '#0D2443' }}>EX</span>
          </h1>
          <p
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.3em] mt-1"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#666' }}
          >
            Steel & Infra LLP
          </p>
        </div>
      </div>
    </div>
  );
}
