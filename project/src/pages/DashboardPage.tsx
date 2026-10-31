import { useApp } from '@/context/AppContext';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import SectionHeader from '@/components/ui/SectionHeader';
import { StaggerGroup, StaggerItem, FadeIn } from '@/components/ui/Motion';
import {
  cropRecommendations,
  weatherForecast,
  weatherRisks,
  farmAlerts,
} from '@/data/mockData';
import {
  Sprout, Calculator, TrendingUp, Landmark, CloudRain, Droplets,
  AlertTriangle, ArrowRight, Wind, MapPin, Wallet, Calendar,
  Lightbulb, Info, TriangleAlert,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function DashboardPage() {
  const { t, language, profile, setPage } = useApp();
  const reduce = useReducedMotion();
  const today = weatherForecast[0];
  const topRisk = [...weatherRisks].sort((a, b) => b.level - a.level)[0];
  const riskLabel = topRisk.level > 50 ? t('highRisk') : topRisk.level > 25 ? t('mediumRisk') : t('lowRisk');
  const riskVariant = topRisk.level > 50 ? 'error' : topRisk.level > 25 ? 'warning' : 'success';

  const topCrops = [...cropRecommendations].sort((a, b) => b.suitability - a.suitability).slice(0, 3);

  const soilLabel = profile.soilType
    ? t(profile.soilType === 'black' ? 'soilBlack'
        : profile.soilType === 'red' ? 'soilRed'
        : profile.soilType === 'alluvial' ? 'soilAlluvial'
        : profile.soilType === 'sandy' ? 'soilSandy'
        : profile.soilType === 'loamy' ? 'soilLoamy'
        : profile.soilType === 'clay' ? 'soilClay'
        : 'soilUnknown')
    : '—';

  const irrigationLabel = profile.waterSource
    ? t(profile.waterSource === 'rainfed' ? 'waterRainfed'
        : profile.waterSource === 'borewell' ? 'waterBorewell'
        : profile.waterSource === 'canal' ? 'waterCanal'
        : profile.waterSource === 'drip' ? 'waterDrip'
        : 'waterRainfed')
    : '—';

  const seasonLabel = profile.preferredSeason
    ? t(profile.preferredSeason as 'kharif' | 'rabi' | 'summer')
    : '—';

  return (
    <StaggerGroup className="space-y-5">
      {/* Welcome */}
      <StaggerItem>
        <div className="pt-2">
          <p className="text-textMuted text-sm">{t('dashboardGreeting')},</p>
          <h1 className="text-2xl font-bold text-text">{profile.name || t('appName')}</h1>
        </div>
      </StaggerItem>

      {/* Farm Profile Summary */}
      <StaggerItem>
        <div>
          <SectionHeader title={t('farmOverview')} icon={<Sprout className="w-5 h-5" />} />
          <Card className="p-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <StatChip icon={<Sprout className="w-4 h-4" />} value={`${profile.landArea || 0}`} label={t('acres')} />
              <StatChip icon={<Wallet className="w-4 h-4" />} value={`₹${(profile.budget || 0).toLocaleString('en-IN')}`} label={t('farmingBudget')} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <ProfileItem icon={<MapPin className="w-3.5 h-3.5" />} label={t('village')} value={profile.village || '—'} />
              <ProfileItem icon={<Droplets className="w-3.5 h-3.5" />} label={t('soilType')} value={soilLabel} />
              <ProfileItem icon={<Calendar className="w-3.5 h-3.5" />} label={t('preferredSeason')} value={seasonLabel} />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-textMuted">{t('irrigationType')}:</span>
              <Badge variant="primary">{irrigationLabel}</Badge>
            </div>
          </Card>
        </div>
      </StaggerItem>

      {/* Weather Overview */}
      <StaggerItem>
        <div>
          <SectionHeader title={t('todayWeather')} icon={<CloudRain className="w-5 h-5" />} />
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-5xl"
                  animate={reduce ? undefined : { y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {today.conditionEmoji}
                </motion.span>
                <div>
                  <div className="text-3xl font-bold text-text">{today.temp}°</div>
                  <div className="text-sm text-textMuted">{today.humidity}% {t('humidity')}</div>
                </div>
              </div>
              <div className="flex gap-4 text-right">
                <div>
                  <div className="flex items-center gap-1 text-textMuted text-xs justify-end">
                    <CloudRain className="w-3 h-3" /> {t('rainfall')}
                  </div>
                  <div className="font-bold text-text">{today.rainfall} {t('mm')}</div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-textMuted text-xs justify-end">
                    <Wind className="w-3 h-3" /> {t('windSpeed')}
                  </div>
                  <div className="font-bold text-text">{today.windSpeed} {t('kmph')}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <AlertTriangle className={`w-4 h-4 ${riskVariant === 'error' ? 'text-error' : riskVariant === 'warning' ? 'text-warning' : 'text-success'}`} />
              <span className="text-sm text-textMuted">{t('riskLevel')}:</span>
              <Badge variant={riskVariant}>{riskLabel}</Badge>
            </div>
          </Card>
        </div>
      </StaggerItem>

      {/* Recommended Crops */}
      <StaggerItem>
        <div>
          <SectionHeader
            title={t('recommendedCrops')}
            icon={<Sprout className="w-5 h-5" />}
            action={<button onClick={() => setPage('crops')} className="text-sm text-primary font-semibold flex items-center gap-1">{t('viewAll')} <ArrowRight className="w-3.5 h-3.5" /></button>}
          />
          <div className="space-y-2">
            {topCrops.map((crop, i) => (
              <motion.div
                key={crop.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 260, damping: 26 }}
              >
                <Card className="p-4 flex items-center gap-3" hoverable onClick={() => setPage('crops')}>
                  <span className="text-3xl">{crop.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-text">{crop.names[language]}</div>
                    <div className="text-xs text-textMuted">
                      ₹{crop.marketPrice}/{t('quintal')} • {crop.growthDuration} {t('days')}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-lg font-bold text-primary">{crop.suitability}%</div>
                    <div className="text-[10px] text-textMuted">{t('suitability')}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </StaggerItem>

      {/* Quick Actions */}
      <StaggerItem>
        <div>
          <SectionHeader title={t('quickActions')} />
          <div className="grid grid-cols-2 gap-3">
            <ActionCard icon={<Sprout className="w-6 h-6" />} label={t('navCrops')} onClick={() => setPage('crops')} color="primary" />
            <ActionCard icon={<Calculator className="w-6 h-6" />} label={t('navFinance')} onClick={() => setPage('finance')} color="accent" />
            <ActionCard icon={<TrendingUp className="w-6 h-6" />} label={t('navMarket')} onClick={() => setPage('market')} color="primary" />
            <ActionCard icon={<Landmark className="w-6 h-6" />} label={t('navSchemes')} onClick={() => setPage('schemes')} color="accent" />
          </div>
        </div>
      </StaggerItem>

      {/* Recent Alerts & Farming Tips */}
      <StaggerItem>
        <div>
          <SectionHeader title={t('recentAlerts')} icon={<AlertTriangle className="w-5 h-5" />} />
          <div className="space-y-2">
            {farmAlerts.map((alert, i) => {
              const variant = alert.type === 'warning' ? 'warning' : alert.type === 'tip' ? 'accent' : 'neutral';
              const alertIcon = alert.type === 'warning'
                ? <TriangleAlert className="w-3.5 h-3.5" />
                : alert.type === 'tip'
                  ? <Lightbulb className="w-3.5 h-3.5" />
                  : <Info className="w-3.5 h-3.5" />;
              return (
                <FadeIn key={alert.id} delay={0.3 + i * 0.06}>
                  <Card className="p-4 flex items-start gap-3">
                    <motion.span
                      className="text-2xl flex-shrink-0 mt-0.5"
                      animate={reduce ? undefined : { scale: [1, 1.1, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    >
                      {alert.icon}
                    </motion.span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-text text-sm">{alert.title[language]}</span>
                        <Badge variant={variant}>{alertIcon}</Badge>
                      </div>
                      <p className="text-xs text-textMuted leading-relaxed">{alert.message[language]}</p>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </StaggerItem>
    </StaggerGroup>
  );
}

function StatChip({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="bg-surface2 rounded-xl p-3">
      <div className="flex items-center gap-1.5 text-primary mb-1">{icon}</div>
      <div className="text-lg font-bold text-text leading-tight">{value}</div>
      <div className="text-[11px] text-textMuted">{label}</div>
    </div>
  );
}

function ProfileItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1 text-textMuted">
        {icon}
        <span className="text-[10px]">{label}</span>
      </div>
      <span className="text-xs font-semibold text-text truncate">{value}</span>
    </div>
  );
}

function ActionCard({ icon, label, onClick, color }: { icon: React.ReactNode; label: string; onClick: () => void; color: 'primary' | 'accent' }) {
  return (
    <Card className="p-4 flex flex-col items-center gap-2" hoverable onClick={onClick}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color === 'primary' ? 'bg-primary/15 text-primary' : 'bg-accent/15 text-accent'}`}>
        {icon}
      </div>
      <span className="text-sm font-semibold text-text text-center">{label}</span>
    </Card>
  );
}
