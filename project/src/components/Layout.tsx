import type { ReactNode } from 'react';
import { useApp, type Page } from '@/context/AppContext';
import { languages, type Language } from '@/i18n/translations';
import { Home, Sprout, Calculator, TrendingUp, Landmark, User, Sun, Moon, Globe, Leaf } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AmbientGradient } from '@/components/ui/Motion';

interface NavItem {
  page: Page;
  icon: ReactNode;
  labelKey: 'navDashboard' | 'navCrops' | 'navFinance' | 'navMarket' | 'navSchemes' | 'navProfile';
}

const navItems: NavItem[] = [
  { page: 'dashboard', icon: <Home className="w-5 h-5" />, labelKey: 'navDashboard' },
  { page: 'crops', icon: <Sprout className="w-5 h-5" />, labelKey: 'navCrops' },
  { page: 'finance', icon: <Calculator className="w-5 h-5" />, labelKey: 'navFinance' },
  { page: 'market', icon: <TrendingUp className="w-5 h-5" />, labelKey: 'navMarket' },
  { page: 'schemes', icon: <Landmark className="w-5 h-5" />, labelKey: 'navSchemes' },
  { page: 'profile', icon: <User className="w-5 h-5" />, labelKey: 'navProfile' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { t, theme, toggleTheme, page, setPage, language, setLanguage } = useApp();
  const [langOpen, setLangOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-bg text-text flex flex-col max-w-2xl mx-auto relative">
      <AmbientGradient />

      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-surface/80 backdrop-blur-lg border-b border-border px-5 py-3 flex items-center justify-between">
        <motion.button
          onClick={() => setPage('dashboard')}
          className="flex items-center gap-2"
          whileTap={reduce ? undefined : { scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <span className="text-base font-bold text-text leading-none block">{t('appName')}</span>
            <span className="text-xs text-textMuted">{t('appTagline')}</span>
          </div>
        </motion.button>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <motion.button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface2 border border-border hover:border-primary/40 transition-colors"
              whileTap={reduce ? undefined : { scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              <Globe className="w-4 h-4 text-textMuted" />
              <span className="text-sm font-semibold text-text">
                {languages.find((l) => l.code === language)?.nativeLabel}
              </span>
            </motion.button>
            <AnimatePresence>
              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <motion.div
                    className="absolute right-0 mt-2 w-44 bg-surface border border-border rounded-xl shadow-card-hover z-50 overflow-hidden"
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.96 }}
                    transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 300, damping: 26 }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as Language);
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left flex items-center justify-between hover:bg-surface2 transition-colors ${language === lang.code ? 'text-primary font-semibold' : 'text-text'}`}
                      >
                        <span>{lang.nativeLabel}</span>
                        {language === lang.code && <span className="text-primary">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-surface2 border border-border flex items-center justify-center hover:border-primary/40 transition-colors"
            aria-label={theme === 'dark' ? t('lightMode') : t('darkMode')}
            whileTap={reduce ? undefined : { scale: 0.9, rotate: -15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={reduce ? { opacity: 0 } : { opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primaryDark" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1 px-4 pb-28 pt-4 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 240, damping: 28, mass: 0.7 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-30 bg-surface/90 backdrop-blur-lg border-t border-border safe-bottom">
        <div className="flex items-stretch justify-between px-2 py-2">
          {navItems.map((item) => {
            const isActive = page === item.page;
            return (
              <motion.button
                key={item.page}
                onClick={() => setPage(item.page)}
                className="flex flex-col items-center justify-center gap-1 flex-1 py-1.5 relative group"
                whileTap={reduce ? undefined : { scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className="relative flex items-center justify-center w-10 h-8">
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-primary/15 rounded-lg"
                      layoutId="nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className={`relative z-10 transition-colors ${isActive ? 'text-primary' : 'text-textMuted group-hover:text-text'}`}
                    animate={isActive && !reduce ? { scale: 1.12 } : { scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <span
                  className={`text-[10px] font-semibold transition-colors ${isActive ? 'text-primary' : 'text-textMuted'}`}
                >
                  {t(item.labelKey)}
                </span>
              </motion.button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
