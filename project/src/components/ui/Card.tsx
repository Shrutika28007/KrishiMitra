import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export default function Card({ children, className = '', onClick, hoverable = false }: CardProps) {
  const base = 'bg-surface border border-border rounded-2xl shadow-card';
  const reduce = useReducedMotion();

  const motionProps = reduce
    ? {}
    : onClick || hoverable
      ? {
          whileHover: hoverable ? { y: -2, scale: 1.005 } : {},
          whileTap: onClick ? { scale: 0.99 } : {},
          transition: { type: 'spring' as const, stiffness: 300, damping: 24 },
        }
      : {};

  const hover = hoverable ? 'cursor-pointer' : '';
  const clickable = onClick ? 'cursor-pointer' : '';

  return (
    <motion.div
      className={`${base} ${hover} ${clickable} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
