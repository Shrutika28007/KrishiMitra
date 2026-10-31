import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import Button from '@/components/ui/Button';
import BottomSheet from '@/components/ui/BottomSheet';
import { FadeIn } from '@/components/ui/Motion';
import { cropRecommendations } from '@/data/mockData';
import { motion, useReducedMotion } from 'motion/react';
import { Droplets, Clock, Coins, TrendingUp, Sprout, CheckCircle2, Info, TriangleAlert, Wallet } from 'lucide-react';

export default function CropRecommendationsPage() {
  const { t, language, profile, setPage } = useApp();
  const reduce = useReducedMotion();
  const [selectedCropId, setSelectedCropId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const sortedCrops = [...cropRecommendations].sort((a, b) => b.suitability - a.suitability);
  const topCrops = sortedCrops.slice(0, 3);
  const otherCrops = sortedCrops.slice(3);
  const visibleCrops = showAll ? sortedCrops : topCrops;
  const selectedCrop = sortedCrops.find((c) => c.id === selectedCropId);

  if (!profile.name) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Sprout className="w-12 h-12 text-textMuted mb-4" />
        <h2 className="text-lg font-bold text-text mb-2">{t('profileRequired')}</h2>
        <p className="text-textMuted mb-6">{t('profileRequiredDesc')}</p>
        <Button onClick={() => setPage('profile')}>{t('farmerProfile')}</Button>
      </div>
    );
  }

  return (
    <div className="space-y-4 pt-2">
      <FadeIn>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">{t('cropRecommendations')}</h1>
          <p className="text-textMuted mt-1">{t('cropRecommendationsSubtitle')}</p>
        </div>
        <Badge variant="warning">{t('demoData')}</Badge>
      </div>
      </FadeIn>

      <FadeIn delay={0.06}>
      {/* AI Badge */}
      <Card className="p-4 flex items-center gap-3 bg-primary/5 border-primary/20">
        <motion.div
          className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center"
          animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Info className="w-5 h-5 text-primary" />
        </motion.div>
        <div>
          <p className="text-sm font-semibold text-text">{t('recommendedForYou')}</p>
          <p className="text-xs text-textMuted">
            {profile.village} • {t(profile.soilType === 'loamy' ? 'soilLoamy' : 'soilBlack')} • {profile.landArea} {t('acres')}
          </p>
        </div>
      </Card>
      </FadeIn>

      {/* Section label: Top 3 */}
      <div className="flex items-center gap-2 pt-1">
        <span className="text-xs font-bold text-primary uppercase tracking-wide">{t('topRecommendations')}</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Crop Cards */}
      {visibleCrops.map((crop, idx) => {
        const investmentPerAcre =
          crop.seedCostPerAcre +
          crop.fertilizerCostPerAcre +
          crop.laborCostPerAcre +
          crop.irrigationCostPerAcre +
          crop.pesticideCostPerAcre +
          crop.miscCostPerAcre;

        return (
          <motion.div
            key={crop.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.08, type: 'spring', stiffness: 240, damping: 26 }}
          >
          <Card className={`p-5 ${idx < 3 && !showAll ? 'border-primary/30' : ''}`} hoverable onClick={() => setSelectedCropId(crop.id)}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-surface2 flex items-center justify-center text-3xl"
                  animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.2 }}
                >
                  {crop.emoji}
                </motion.div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-text">{crop.names[language]}</h3>
                    {idx === 0 && <Badge variant="primary">★</Badge>}
                  </div>
                  <Badge variant="neutral" className="mt-1">{t(crop.season)}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{crop.suitability}%</div>
                <div className="text-xs text-textMuted">{t('suitability')}</div>
              </div>
            </div>

            <Progress value={crop.suitability} color={crop.suitability > 85 ? 'success' : crop.suitability > 70 ? 'primary' : 'warning'} size="sm" />

            <div className="grid grid-cols-2 gap-2 mt-4">
              <InfoItem icon={<Droplets className="w-4 h-4" />} value={t(crop.waterNeeded)} unit={t('waterNeeded')} />
              <InfoItem icon={<Clock className="w-4 h-4" />} value={`${crop.growthDuration}`} unit={t('days')} />
              <InfoItem icon={<Wallet className="w-4 h-4" />} value={`₹${investmentPerAcre.toLocaleString('en-IN')}`} unit={t('estimatedInvestment')} />
              <InfoItem icon={<Coins className="w-4 h-4" />} value={`₹${crop.marketPrice.toLocaleString('en-IN')}`} unit={`/${t('quintal')}`} />
            </div>

            {/* Risks */}
            <div className="mt-4 bg-error/5 rounded-xl p-3 border border-error/10">
              <div className="flex items-center gap-2 mb-2">
                <TriangleAlert className="w-4 h-4 text-error" />
                <span className="text-xs font-semibold text-error">{t('cropRisks')}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {crop.risks[language].slice(0, 2).map((risk, i) => (
                  <span key={i} className="text-xs text-textMuted bg-surface2 rounded-lg px-2 py-1">{risk}</span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className={`w-4 h-4 ${crop.marketDemand === 'high' ? 'text-success' : crop.marketDemand === 'medium' ? 'text-warning' : 'text-textMuted'}`} />
                <span className="text-sm text-textMuted">{t('marketDemand')}:</span>
                <Badge variant={crop.marketDemand === 'high' ? 'success' : crop.marketDemand === 'medium' ? 'warning' : 'neutral'}>
                  {crop.marketDemand === 'high' ? t('high') : crop.marketDemand === 'medium' ? t('medium') : t('low')}
                </Badge>
              </div>
              <span className="text-sm font-bold text-primary">{t('viewDetails')}</span>
            </div>
          </Card>
          </motion.div>
        );
      })}

      {/* Show all toggle */}
      {!showAll && otherCrops.length > 0 && (
        <Button fullWidth variant="secondary" onClick={() => setShowAll(true)}>
          {t('viewAllCrops')} ({cropRecommendations.length})
        </Button>
      )}
      {showAll && (
        <Button fullWidth variant="secondary" onClick={() => setShowAll(false)}>
          {t('topRecommendations')}
        </Button>
      )}

      {/* Detail Bottom Sheet */}
      <BottomSheet open={Boolean(selectedCrop)} onClose={() => setSelectedCropId(null)} title={selectedCrop ? selectedCrop.names[language] : ''}>
        {selectedCrop && (
          <div className="space-y-5">
            {/* DEMO label */}
            <div className="flex justify-center">
              <Badge variant="warning">{t('demoData')}</Badge>
            </div>

            {/* Suitability */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-textMuted">{t('suitability')}</span>
                <span className="text-2xl font-bold text-primary">{selectedCrop.suitability}%</span>
              </div>
              <Progress value={selectedCrop.suitability} color="primary" />
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-2 gap-3">
              <DetailMetric label={t('expectedYield')} value={`${selectedCrop.expectedYield} ${t('quintal')}`} icon={<Sprout className="w-4 h-4" />} />
              <DetailMetric label={t('marketPrice')} value={`₹${selectedCrop.marketPrice}/${t('quintal')}`} icon={<Coins className="w-4 h-4" />} />
              <DetailMetric label={t('growthDuration')} value={`${selectedCrop.growthDuration} ${t('days')}`} icon={<Clock className="w-4 h-4" />} />
              <DetailMetric label={t('waterNeeded')} value={t(selectedCrop.waterNeeded)} icon={<Droplets className="w-4 h-4" />} />
            </div>

            {/* Why Recommended */}
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <h4 className="font-semibold text-text text-sm">{t('whyRecommended')}</h4>
              </div>
              <p className="text-sm text-textMuted leading-relaxed">{selectedCrop.reasons[language]}</p>
            </div>

            {/* Cost & Profit estimate */}
            <div>
              <h4 className="font-semibold text-text text-sm mb-3">{t('estimatedProfit')} ({t('perAcre')})</h4>
              <div className="space-y-2">
                <CostRow label={t('seedCosts')} value={selectedCrop.seedCostPerAcre} />
                <CostRow label={t('fertilizerCost')} value={selectedCrop.fertilizerCostPerAcre} />
                <CostRow label={t('laborCost')} value={selectedCrop.laborCostPerAcre} />
                <CostRow label={t('irrigationCost')} value={selectedCrop.irrigationCostPerAcre} />
                <CostRow label={t('pesticideCost')} value={selectedCrop.pesticideCostPerAcre} />
                <CostRow label={t('miscCost')} value={selectedCrop.miscCostPerAcre} />
                <div className="border-t border-border pt-2">
                  <CostRow label={t('estimatedInvestment')} value={selectedCrop.seedCostPerAcre + selectedCrop.fertilizerCostPerAcre + selectedCrop.laborCostPerAcre + selectedCrop.irrigationCostPerAcre + selectedCrop.pesticideCostPerAcre + selectedCrop.miscCostPerAcre} bold />
                </div>
              </div>
              <div className="mt-3 bg-accent/10 rounded-xl p-4 border border-accent/20">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-textMuted">{t('netProfit')} ({t('perAcre')})</span>
                  <span className="text-xl font-bold text-accent">
                    ₹{(selectedCrop.expectedYield * selectedCrop.marketPrice - (selectedCrop.seedCostPerAcre + selectedCrop.fertilizerCostPerAcre + selectedCrop.laborCostPerAcre + selectedCrop.irrigationCostPerAcre + selectedCrop.pesticideCostPerAcre + selectedCrop.miscCostPerAcre)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Risks full list */}
            <div className="bg-error/5 rounded-xl p-4 border border-error/20">
              <div className="flex items-center gap-2 mb-3">
                <TriangleAlert className="w-4 h-4 text-error" />
                <h4 className="font-semibold text-text text-sm">{t('cropRisks')}</h4>
              </div>
              <ul className="space-y-2">
                {selectedCrop.risks[language].map((risk, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-error mt-1 text-xs">●</span>
                    <span className="text-sm text-textMuted leading-relaxed">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button fullWidth size="lg" onClick={() => { setPage('finance'); }}>
              {t('financialSimulator')}
            </Button>
          </div>
        )}
      </BottomSheet>
    </div>
  );
}

function InfoItem({ icon, value, unit }: { icon: React.ReactNode; value: string; unit: string }) {
  return (
    <div className="bg-surface2 rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-textMuted mb-1">
        {icon}
        <span className="text-[10px]">{unit}</span>
      </div>
      <div className="text-sm font-bold text-text">{value}</div>
    </div>
  );
}

function DetailMetric({ label, value, icon }: { label: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-surface2 rounded-xl p-3">
      <div className="flex items-center gap-2 text-textMuted mb-1">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <div className="font-bold text-text text-sm">{value}</div>
    </div>
  );
}

function CostRow({ label, value, bold }: { label: string; value: number; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className={`text-sm ${bold ? 'font-bold text-text' : 'text-textMuted'}`}>{label}</span>
      <span className={`text-sm ${bold ? 'font-bold text-text' : 'text-text'}`}>₹{value.toLocaleString('en-IN')}</span>
    </div>
  );
}
