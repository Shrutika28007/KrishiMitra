import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  suffix?: string;
  prefix?: string;
}

export default function Input({ label, suffix, prefix, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-textMuted mb-2">{label}</label>}
      <div className="relative">
        {prefix && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-textMuted font-medium text-lg pointer-events-none">
            {prefix}
          </span>
        )}
        <input
          className={`w-full bg-surface2 border border-border rounded-xl py-3.5 ${prefix ? 'pl-8' : 'px-4'} ${suffix ? 'pr-16' : 'pr-4'} text-text font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-textMuted/50 ${className}`}
          {...props}
        />
        {suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-textMuted text-sm font-medium pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
