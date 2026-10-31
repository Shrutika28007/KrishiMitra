import type { SelectHTMLAttributes } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Option[];
  placeholder?: string;
}

export default function Select({ label, options, placeholder, className = '', ...props }: SelectProps) {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-textMuted mb-2">{label}</label>}
      <div className="relative">
        <select
          className={`w-full appearance-none bg-surface2 border border-border rounded-xl px-4 py-3.5 pr-10 text-text font-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${className}`}
          {...props}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-surface text-text">
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-textMuted pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
