import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

// Shared spring — soft, premium, not bouncy
const spring = { type: 'spring' as const, stiffness: 280, damping: 28, mass: 0.6 };
const softSpring = { type: 'spring' as const, stiffness: 200, damping: 30, mass: 0.8 };

// Reduced-motion fallback: instant, no transform
function useMotionSafe() {
  const reduce = useReducedMotion();
  return reduce;
}

/* Page transition wrapper — fade + slight rise */
export function PageTransition({ children }: { children: ReactNode }) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
      transition={reduce ? { duration: 0.15 } : softSpring}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container — children use staggerItem */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: spring },
};

export function StaggerGroup({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      variants={reduce ? undefined : staggerContainer}
      initial="hidden"
      animate="show"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useMotionSafe();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* Single entrance — fade + rise, one-shot */
export function FadeIn({
  children,
  delay = 0,
  className = '',
}: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0.2 } : { ...spring, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Animated number — counts up when value changes */
export function AnimatedNumber({
  value,
  format = (v: number) => v.toLocaleString('en-IN'),
  className = '',
}: { value: number; format?: (v: number) => string; className?: string }) {
  const reduce = useMotionSafe();
  return (
    <motion.span
      key={value}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduce ? { duration: 0.15 } : softSpring}
      className={className}
    >
      {format(value)}
    </motion.span>
  );
}

/* Tappable feedback — gentle scale-down on tap */
export const tapProps = {
  whileTap: { scale: 0.97 },
  whileHover: { scale: 1.015 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
};

/* Loading skeleton — shimmer */
export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-surface2 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/8 to-transparent"
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-surface border border-border rounded-2xl p-5 space-y-3">
      <Skeleton className="h-5 w-1/3" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}

/* Subtle ambient background gradient — slow drift */
export function AmbientGradient() {
  const reduce = useMotionSafe();
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-primary/6 blur-[100px]"
        animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 w-[50%] h-[50%] rounded-full bg-accent/5 blur-[100px]"
        animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* Expandable panel — smooth height + opacity */
export function Expandable({
  open,
  children,
}: { open: boolean; children: ReactNode }) {
  const reduce = useMotionSafe();
  return (
    <motion.div
      initial={false}
      animate={{
        height: open ? 'auto' : 0,
        opacity: open ? 1 : 0,
      }}
      transition={reduce ? { duration: 0.15 } : { duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
}

export { spring, softSpring };
