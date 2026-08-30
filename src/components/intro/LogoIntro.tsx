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
      <div className="flex flex-col items-center">
        <img
          src="/logo.png"
          alt="IRONEX Steel & Infra LLP Logo"
          className="h-36 w-auto"
        />
      </div>
    </div>
  );
}
