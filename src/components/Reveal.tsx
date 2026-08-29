import { useReducedMotion, motion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'span' | 'li';
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, transform: `translateY(${y}px)` };
  const visible = { opacity: 1, transform: 'translateY(0px)' };

  return (
    <Tag
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay }}
    >
      {children}
    </Tag>
  );
}
