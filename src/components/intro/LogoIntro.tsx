import { useEffect, useRef, useState } from 'react';

interface LogoIntroProps {
  onComplete: () => void;
}

export default function LogoIntro({ onComplete }: LogoIntroProps) {
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const handleEnd = () => {
    setFading(true);
    setTimeout(onComplete, 1000);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#07101A] flex items-center justify-center transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <video
        key={isMobile ? 'mobile' : 'desktop'}
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleEnd}
        className="w-full h-full object-cover"
      >
        <source src={isMobile ? '/intro-mobile.mp4' : '/hero-video.mp4'} type="video/mp4" />
      </video>
    </div>
  );
}
