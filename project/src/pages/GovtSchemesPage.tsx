import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import BottomSheet from '@/components/ui/BottomSheet';
import { FadeIn } from '@/components/ui/Motion';
import { govtSchemes, actionItems } from '@/data/mockData';
import type { GovtScheme } from '@/data/mockData';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { Landmark, CheckCircle2, Circle, FileText, Award, ArrowRight, ListChecks, FileCheck, ExternalLink } from 'lucide-react';

type Tab = 'schemes' | 'plan';

export default function GovtSchemesPage() {
  const { t, language, setPage } = useApp();
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<Tab>('schemes');
  const [selectedScheme, setSelectedScheme] = useState<GovtScheme | null>(null);
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const toggleTask = (id: string) => {
    setCompletedTasks((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const pendingCount = actionItems.filter((item) => !completedTasks.has(item.id)).length;
  const completedCount = actionItems.length - pendingCount;
  const progressPercent = (completedCount / actionItems.length) * 100;

  return (
    <div className="space-y-5 pt-2">
      <FadeIn>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">{t('govtSchemes')}</h1>
          <p className="text-textMuted mt-1">{t('govtSchemesSubtitle')}</p>
        </div>
        <Badge variant="warning">{t('demoData')}</Badge>
      </div>
      </FadeIn>

      <FadeIn delay={0.06}>
      {/* Tabs */}
      <div className="flex bg-surface2 rounded-xl p-1.5">
        <TabButton active={tab === 'schemes'} onClick={() => setTab('schemes')} icon={<Landmark className="w-4 h-4" />} label={t('eligibleSchemes')} />
        <TabButton active={tab === 'plan'} onClick={() => setTab('plan')} icon={<ListChecks className="w-4 h-4" />} label={t('actionPlan')} />
      </div>
      </FadeIn>

      <AnimatePresence mode="wait">
      {tab === 'schemes' ? (
        <motion.div
          key="schemes"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 260, damping: 28 }}
          className="space-y-3"
        >
          {govtSchemes.map((scheme, idx) => (
            <motion.div
              key={scheme.id}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06, type: 'spring', stiffness: 240, damping: 26 }}
            >
            <Card className="p-4" hoverable onClick={() => setSelectedScheme(scheme)}>
              <div className="flex items-start gap-3">
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-surface2 flex items-center justify-center text-2xl flex-shrink-0"
                  animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                >
                  {scheme.emoji}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text leading-tight">{scheme.name[language]}</h3>
                  <p className="text-sm text-textMuted mt-1 leading-relaxed line-clamp-2">{scheme.description[language]}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="primary">
                      <Award className="w-3 h-3" />
                      {t('schemeBenefits')}
                    </Badge>
                    <span className="text-sm font-semibold text-primary flex items-center gap-1">
                      {t('viewDetails')}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          key="plan"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 260, damping: 28 }}
          className="space-y-3"
        >
          {/* Progress Overview */}
          <Card className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center">
                <ListChecks className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-text">{t('actionPlanTitle')}</h3>
                <p className="text-sm text-textMuted">{t('actionPlanSubtitle')}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-textMuted">
                {completedCount} {t('completed')} / {actionItems.length}
              </span>
              <span className="text-sm font-bold text-primary">{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-3 rounded-full bg-surface2 overflow-hidden">
              <motion.div
                className="h-full bg-primary rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 120, damping: 20 }}
              />
            </div>
          </Card>

          {/* Action Items */}
          <div className="space-y-3">
            {actionItems.map((item, idx) => {
              const done = completedTasks.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, type: 'spring', stiffness: 240, damping: 26 }}
                >
                <Card className={`p-4 transition-opacity ${done ? 'opacity-60' : ''}`}>
                  <div className="flex items-center gap-3">
                    <motion.button
                      onClick={() => toggleTask(item.id)}
                      className="flex-shrink-0"
                      aria-label={t('markComplete')}
                      whileTap={reduce ? undefined : { scale: 0.85 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {done ? (
                        <CheckCircle2 className="w-7 h-7 text-primary" />
                      ) : (
                        <Circle className="w-7 h-7 text-textMuted hover:text-primary transition-colors" />
                      )}
                    </motion.button>
                    <div className="w-8 h-8 rounded-lg bg-surface2 flex items-center justify-center text-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-text ${done ? 'line-through' : ''}`}>
                        {item.task[language]}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-textMuted">{item.dueIn[language]}</span>
                        <Badge variant={item.priority === 'high' ? 'error' : item.priority === 'medium' ? 'warning' : 'success'}>
                          {item.priority === 'high' ? t('high') : item.priority === 'medium' ? t('medium') : t('low')}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-textMuted/40">{idx + 1}</div>
                  </div>
                </Card>
                </motion.div>
              );
            })}
          </div>

          {pendingCount === 0 && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            >
            <Card className="p-6 text-center bg-accent/10 border-accent/30">
              <motion.div
                className="text-4xl mb-2"
                animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >🎉</motion.div>
              <h3 className="font-bold text-accent">{language === 'mr' ? 'सर्व कामे पूर्ण!' : language === 'hi' ? 'सभी काम पूर्ण!' : 'All tasks complete!'}</h3>
            </Card>
            </motion.div>
          )}
        </motion.div>
      )}
      </AnimatePresence>

      {/* Scheme Detail Bottom Sheet */}
      <BottomSheet open={Boolean(selectedScheme)} onClose={() => setSelectedScheme(null)} title={selectedScheme ? selectedScheme.name[language] : ''}>
        {selectedScheme && (
          <div className="space-y-5">
            {/* Description */}
            <div className="flex items-start gap-3">
              <div className="w-14 h-14 rounded-2xl bg-surface2 flex items-center justify-center text-3xl flex-shrink-0">
                {selectedScheme.emoji}
              </div>
              <p className="text-sm text-textMuted leading-relaxed pt-1">{selectedScheme.description[language]}</p>
            </div>

            {/* Benefits */}
            <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-accent" />
                <h4 className="font-semibold text-text text-sm">{t('schemeBenefits')}</h4>
              </div>
              <p className="text-sm text-text leading-relaxed">{selectedScheme.benefits[language]}</p>
            </div>

            {/* Eligibility */}
            <div>
              <h4 className="font-semibold text-text text-sm mb-2">{t('eligibility')}</h4>
              <div className="bg-surface2 rounded-xl p-4">
                <p className="text-sm text-textMuted leading-relaxed">{selectedScheme.eligibility[language]}</p>
              </div>
            </div>

            {/* How to Apply */}
            <div>
              <h4 className="font-semibold text-text text-sm mb-2">{t('howToApply')}</h4>
              <div className="bg-surface2 rounded-xl p-4">
                <p className="text-sm text-textMuted leading-relaxed">{selectedScheme.howToApply[language]}</p>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h4 className="font-semibold text-text text-sm mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                {t('documentsRequired')}
              </h4>
              <div className="space-y-2">
                {selectedScheme.documents[language].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-surface2 rounded-xl p-3">
                    <FileCheck className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-text">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Website Link */}
            <a
              href={selectedScheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-primary/10 rounded-xl p-4 border border-primary/20 hover:bg-primary/15 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text">{t('officialWebsite')}</div>
                  <div className="text-xs text-primary break-all">{selectedScheme.officialUrl}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
            </a>

            <Button fullWidth size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} onClick={() => setSelectedScheme(null)}>
              {t('applyNow')}
            </Button>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.button
      onClick={onClick}
      whileTap={reduce ? undefined : { scale: 0.95 }}
      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors ${active ? 'bg-primary text-bg shadow-glow' : 'text-textMuted'}`}
    >
      {icon}
      {label}
    </motion.button>
  );
}
