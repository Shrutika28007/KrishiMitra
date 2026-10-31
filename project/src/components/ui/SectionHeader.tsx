import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  icon?: ReactNode;
}

export default function SectionHeader({ title, subtitle, action, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3 mb-4">
      <div className="flex items-start gap-3">
        {icon && <div className="mt-0.5 text-primary">{icon}</div>}
        <div>
          <h2 className="text-lg font-bold text-text leading-tight">{title}</h2>
          {subtitle && <p className="text-sm text-textMuted mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {action}
    </div>
  );
}
