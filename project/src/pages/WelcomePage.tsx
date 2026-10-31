import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { languages, type Language } from '@/i18n/translations';
import { ArrowRight, Sprout, TrendingUp, Landmark, Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion, useReducedMotion } from 'motion/react';

export default function WelcomePage() {
  const { t, setLanguage, setPage, language } = useApp();
  const [selected, setSelected] = useState<Language>(language);
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col max-w-md mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative ambient glow */}
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          animate={reduce ? undefined : { scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-0 w-48 h-48 rounded-full bg-accent/8 blur-3xl pointer-events-none"
          animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <div className="relative px-6 pt-12 pb-6">
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center mb-6"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduce ? { duration: 0.2 } : { type: 'spring', stiffness: 200, damping: 24 }}
          >
            <motion.div
              className="w-20 h-20 rounded-3xl bg-primary/12 flex items-center justify-center shadow-glow border border-primary/20"
              animate={reduce ? undefined : { y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg viewBox="0 0 32 32" className="w-10 h-10" fill="none">
                <path
                  d="M16 4C16 4 8 10 8 18a8 8 0 0016 0c0-8-8-14-8-14z"
                  fill="currentColor"
                  className="text-primary"
                />
                <path
                  d="M16 10v16M16 14l-3 2M16 14l3 2M16 18l-4 3M16 18l4 3"
                  stroke="rgb(var(--c-bg))"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
            <h1 className="text-3xl font-bold text-text text-center mt-4 tracking-tight">
              {t('appName')}
            </h1>
            <p className="text-accent text-sm font-semibold text-center mt-1.5 tracking-wide">
              {t('welcomeTagline')}
            </p>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            className="relative w-full max-w-sm mx-auto mb-6"
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={reduce ? { duration: 0.3 } : { type: 'spring', stiffness: 180, damping: 22, delay: 0.1 }}
          >
            <HeroIllustration />
          </motion.div>

          {/* Platform Explanation */}
          <motion.p
            className="text-textMuted text-center text-sm leading-relaxed max-w-xs mx-auto mb-6"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {t('welcomePlatformDesc')}
          </motion.p>

          {/* Feature pills */}
          <motion.div
            className="flex justify-center gap-2.5 mb-8"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <FeaturePill icon={<Sprout className="w-3.5 h-3.5" />} text={t('navCrops')} />
            <FeaturePill icon={<TrendingUp className="w-3.5 h-3.5" />} text={t('navFinance')} />
            <FeaturePill icon={<Landmark className="w-3.5 h-3.5" />} text={t('navSchemes')} />
          </motion.div>
        </div>
      </div>

      {/* Language Selector */}
      <motion.div
        className="px-6 pb-6"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduce ? { duration: 0.2 } : { type: 'spring', stiffness: 200, damping: 26, delay: 0.35 }}
      >
        <p className="text-center text-xs font-semibold text-textMuted uppercase tracking-wider mb-3">
          {t('chooseLanguage')}
        </p>
        <div className="flex gap-2.5 mb-6">
          {languages.map((lang) => {
            const isSelected = selected === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => setSelected(lang.code)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3.5 rounded-2xl border-2 transition-colors ${
                  isSelected
                    ? 'border-primary bg-primary/10 shadow-glow'
                    : 'border-border bg-surface hover:border-primary/30'
                }`}
              >
                <span className="text-2xl leading-none">{lang.flag}</span>
                <span className={`text-xs font-bold ${isSelected ? 'text-primary' : 'text-text'}`}>
                  {lang.nativeLabel}
                </span>
              </button>
            );
          })}
        </div>

        <Button
          size="xl"
          fullWidth
          rightIcon={<ArrowRight className="w-5 h-5" />}
          onClick={() => {
            setLanguage(selected);
            setPage('profile');
          }}
        >
          {t('getStarted')}
        </Button>
      </motion.div>
    </div>
  );
}

function FeaturePill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border">
      <span className="text-primary">{icon}</span>
      <span className="text-xs font-medium text-textMuted">{text}</span>
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--c-primary))" stopOpacity="0.08" />
          <stop offset="100%" stopColor="rgb(var(--c-primary))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hill1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--c-primary-dark))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(var(--c-primary-dark))" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="hill2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--c-primary))" stopOpacity="0.35" />
          <stop offset="100%" stopColor="rgb(var(--c-primary))" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="field" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(var(--c-primary))" stopOpacity="0.25" />
          <stop offset="100%" stopColor="rgb(var(--c-primary))" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect x="0" y="0" width="320" height="200" fill="url(#sky)" rx="24" />

      {/* Sun */}
      <circle cx="250" cy="48" r="16" fill="rgb(var(--c-accent))" fillOpacity="0.2" />
      <circle cx="250" cy="48" r="10" fill="rgb(var(--c-accent))" fillOpacity="0.35" />

      {/* Birds */}
      <path d="M60 40 Q64 36 68 40 Q72 36 76 40" stroke="rgb(var(--c-text-muted))" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M90 50 Q94 46 98 50 Q102 46 106 50" stroke="rgb(var(--c-text-muted))" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* Far hills */}
      <path
        d="M0 130 Q40 100 80 115 Q130 95 170 110 Q210 90 260 105 Q290 100 320 108 L320 160 L0 160 Z"
        fill="url(#hill1)"
      />

      {/* Near hills */}
      <path
        d="M0 150 Q50 120 110 130 Q170 115 220 128 Q270 120 320 132 L320 170 L0 170 Z"
        fill="url(#hill2)"
      />

      {/* Fields (terraced rows) */}
      <g>
        <path d="M0 170 Q80 162 160 168 Q240 160 320 166 L320 200 L0 200 Z" fill="url(#field)" />
        {/* Row lines */}
        <path d="M0 175 Q80 169 160 173 Q240 167 320 171" stroke="rgb(var(--c-primary))" strokeWidth="1" strokeOpacity="0.15" fill="none" />
        <path d="M0 183 Q80 177 160 181 Q240 175 320 179" stroke="rgb(var(--c-primary))" strokeWidth="1" strokeOpacity="0.2" fill="none" />
        <path d="M0 191 Q80 185 160 189 Q240 183 320 187" stroke="rgb(var(--c-primary))" strokeWidth="1" strokeOpacity="0.25" fill="none" />
      </g>

      {/* Crops — stylized plants */}
      <g>
        {/* Crop 1 */}
        <g transform="translate(70 155)">
          <path d="M0 0 L0 -14" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 -10 Q-3 -11 -4 -8 M0 -10 Q3 -11 4 -8" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0 -5 Q-4 -6 -5 -2 M0 -5 Q4 -6 5 -2" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="-14" r="2" fill="rgb(var(--c-accent))" fillOpacity="0.6" />
        </g>
        {/* Crop 2 */}
        <g transform="translate(105 158)">
          <path d="M0 0 L0 -18" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 -12 Q-3 -13 -4 -10 M0 -12 Q3 -13 4 -10" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0 -7 Q-4 -8 -5 -4 M0 -7 Q4 -8 5 -4" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="-18" r="2.5" fill="rgb(var(--c-accent))" fillOpacity="0.7" />
        </g>
        {/* Crop 3 */}
        <g transform="translate(140 156)">
          <path d="M0 0 L0 -15" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 -10 Q-3 -11 -4 -7 M0 -10 Q3 -11 4 -7" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0 -5 Q-4 -6 -5 -2 M0 -5 Q4 -6 5 -2" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="-15" r="2" fill="rgb(var(--c-accent))" fillOpacity="0.6" />
        </g>
        {/* Crop 4 */}
        <g transform="translate(175 159)">
          <path d="M0 0 L0 -16" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M0 -11 Q-3 -12 -4 -9 M0 -11 Q3 -12 4 -9" stroke="rgb(var(--c-primary))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <path d="M0 -6 Q-4 -7 -5 -3 M0 -6 Q4 -7 5 -3" stroke="rgb(var(--c-accent))" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="-16" r="2" fill="rgb(var(--c-accent))" fillOpacity="0.6" />
        </g>
      </g>

      {/* Tree on the right */}
      <g transform="translate(265 155)">
        <path d="M0 0 L0 -20" stroke="rgb(var(--c-primary-dark))" strokeWidth="2" strokeLinecap="round" />
        <circle cx="-5" cy="-22" r="7" fill="rgb(var(--c-primary))" fillOpacity="0.25" />
        <circle cx="5" cy="-24" r="6" fill="rgb(var(--c-primary))" fillOpacity="0.3" />
        <circle cx="0" cy="-26" r="8" fill="rgb(var(--c-primary))" fillOpacity="0.28" />
      </g>

      {/* Small farmhouse */}
      <g transform="translate(200 145)">
        <path d="M0 8 L0 0 L10 -6 L20 0 L20 8 Z" fill="rgb(var(--c-surface2))" fillOpacity="0.8" />
        <path d="M-2 0 L10 -8 L22 0" stroke="rgb(var(--c-primary-dark))" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="7" y="2" width="6" height="6" fill="rgb(var(--c-accent))" fillOpacity="0.15" rx="1" />
      </g>

      {/* Ground accent dots */}
      <circle cx="45" cy="188" r="1.5" fill="rgb(var(--c-primary))" fillOpacity="0.4" />
      <circle cx="125" cy="194" r="1.5" fill="rgb(var(--c-accent))" fillOpacity="0.3" />
      <circle cx="230" cy="190" r="1.5" fill="rgb(var(--c-primary))" fillOpacity="0.3" />
    </svg>
  );
}
