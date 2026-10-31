interface ProgressProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showValue?: boolean;
  color?: 'primary' | 'accent' | 'warning' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const colorClasses: Record<string, string> = {
  primary: 'bg-primary',
  accent: 'bg-accent',
  warning: 'bg-warning',
  error: 'bg-error',
  success: 'bg-success',
};

const sizeClasses: Record<string, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-3.5',
};

export default function Progress({
  value,
  max = 100,
  label,
  showValue = true,
  color = 'primary',
  size = 'md',
  className = '',
}: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div className={className}>
      {label && (
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm text-textMuted">{label}</span>
          {showValue && <span className="text-sm font-semibold text-text">{Math.round(percent)}%</span>}
        </div>
      )}
      <div className={`w-full rounded-full bg-surface2 ${sizeClasses[size]}`}>
        <div
          className={`h-full rounded-full ${colorClasses[color]} transition-all duration-500 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
