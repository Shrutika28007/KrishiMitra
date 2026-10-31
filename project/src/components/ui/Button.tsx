import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-bg hover:bg-primaryDark shadow-glow',
  secondary: 'bg-surface2 text-text hover:bg-border',
  outline: 'border-2 border-border text-text hover:border-primary hover:text-primary',
  ghost: 'text-textMuted hover:text-text hover:bg-surface2',
  danger: 'bg-error text-white hover:brightness-90',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm rounded-lg',
  md: 'px-4 py-3 text-base rounded-xl',
  lg: 'px-6 py-3.5 text-base rounded-xl',
  xl: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const reduce = useReducedMotion();
  const motionProps = reduce
    ? {}
    : {
        whileTap: { scale: 0.96 },
        whileHover: { scale: 1.02 },
        transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
      };

  return (
    <motion.button
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...motionProps}
      {...(props as Record<string, unknown>)}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </motion.button>
  );
}
