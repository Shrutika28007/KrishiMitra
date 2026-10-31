import { useState } from 'react';
import { useApp } from '@/context/AppContext';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import SectionHeader from '@/components/ui/SectionHeader';
import Sparkline from '@/components/ui/Sparkline';
import BottomSheet from '@/components/ui/BottomSheet';
import Button from '@/components/ui/Button';
import { FadeIn, StaggerGroup, StaggerItem } from '@/components/ui/Motion';
import { marketPrices, weatherForecast, weatherRisks } from '@/data/mockData';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, CloudRain, AlertTriangle, Droplets, Wind, Thermometer, MapPin, Lightbulb } from 'lucide-react';

type Tab = 'prices' | 'weather';

export default function MarketPricesPage() {
  const { t, language } = useApp();
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<Tab>('prices');
  const [selectedMarketId, setSelectedMarketId] = useState<string | null>(null);

  const selectedMarket = marketPrices.find((m) => m.id === selectedMarketId);

  return (
    <div className="space-y-5 pt-2">
      <FadeIn>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">{t('marketPrices')}</h1>
          <p className="text-textMuted mt-1">{t('marketPricesSubtitle')}</p>
        </div>
        <Badge variant="warning">{t('demoData')}</Badge>
      </div>
      </FadeIn>

      <FadeIn delay={0.06}>
      {/* Tabs */}
      <div className="flex bg-surface2 rounded-xl p-1.5">
        <TabButton active={tab === 'prices'} onClick={() => setTab('prices')} icon={<TrendingUp className="w-4 h-4" />} label={t('currentPrices')} />
        <TabButton active={tab === 'weather'} onClick={() => setTab('weather')} icon={<CloudRain className="w-4 h-4" />} label={t('weatherRisks')} />
      </div>
      </FadeIn>

      <AnimatePresence mode="wait">
      {tab === 'prices' ? (
        <motion.div
          key="prices"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 260, damping: 28 }}
          className="space-y-3"
        >
            {marketPrices.map((item) => {
              const change = item.currentPrice - item.previousPrice;
              const changePercent = ((change / item.previousPrice) * 100).toFixed(1);
              const isUp = change > 0;
              const isDown = change < 0;
              const trendColor = isUp ? 'text-success' : isDown ? 'text-error' : 'text-textMuted';

              return (
                <motion.div
                  key={item.id}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, type: 'spring', stiffness: 240, damping: 26 }}
                >
                <Card className="p-4" hoverable onClick={() => setSelectedMarketId(item.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <div className="font-bold text-text">{item.names[language]}</div>
                        <div className="flex items-center gap-1 text-xs text-textMuted">
                          <MapPin className="w-3 h-3" />
                          {item.market[language]}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-text">₹{item.currentPrice}</div>
                      <div className={`text-xs font-semibold flex items-center gap-1 justify-end ${trendColor}`}>
                        {isUp ? <TrendingUp className="w-3 h-3" /> : isDown ? <TrendingDown className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                        {isUp ? '+' : ''}{changePercent}%
                      </div>
                      <div className="text-[10px] text-textMuted mt-0.5">{t('priceDate')}: {item.lastUpdated}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-textMuted mb-1">{t('priceTrend')} (7 {t('days')})</div>
                      <Sparkline data={item.trendHistory} width={160} height={36} className={isUp ? 'text-success' : isDown ? 'text-error' : 'text-textMuted'} />
                    </div>
                    <Badge variant={isUp ? 'success' : isDown ? 'error' : 'neutral'}>
                      {isUp ? t('trendingUp') : isDown ? t('trendingDown') : t('stable')}
                    </Badge>
                  </div>
                </Card>
                </motion.div>
              );
            })}
          {/* Detail Bottom Sheet */}
          <BottomSheet open={Boolean(selectedMarket)} onClose={() => setSelectedMarketId(null)} title={selectedMarket ? selectedMarket.names[language] : ''}>
            {selectedMarket && (
              <div className="space-y-5">
                <div className="text-center">
                  <span className="text-5xl">{selectedMarket.emoji}</span>
                  <div className="text-3xl font-bold text-text mt-2">₹{selectedMarket.currentPrice}/{t('quintal')}</div>
                  <Badge variant={selectedMarket.currentPrice > selectedMarket.previousPrice ? 'success' : 'error'} className="mt-2">
                    {selectedMarket.currentPrice > selectedMarket.previousPrice ? t('trendingUp') : t('trendingDown')}
                  </Badge>
                </div>

                <div className="bg-surface2 rounded-xl p-4">
                  <div className="text-sm text-textMuted mb-2 flex items-center gap-1"><MapPin className="w-4 h-4" /> {t('bestMarket')}</div>
                  <div className="text-lg font-bold text-text">{selectedMarket.market[language]}</div>
                  <div className="text-xs text-textMuted mt-1">{t('lastUpdated')}: {selectedMarket.lastUpdated}</div>
                </div>

                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-text text-sm">{t('advisory')}</span>
                  </div>
                  <p className="text-sm text-textMuted leading-relaxed">
                    {selectedMarket.currentPrice > selectedMarket.previousPrice
                      ? language === 'mr'
                        ? `भाव वाढत आहे. आता विकणे फायदेशीर आहे. ${selectedMarket.market[language]} मध्ये सर्वोत्तम भाव मिळतो.`
                        : language === 'hi'
                        ? `भाव बढ़ रहा है। अभी बेचना फायदेमंद। ${selectedMarket.market[language]} में सर्वोत्तम भाव।`
                        : `Prices are rising. Selling now is profitable. ${selectedMarket.market[language]} offers the best rate.`
                      : language === 'mr'
                        ? `भाव घसरत आहे. ३-४ दिवस थांबा. नंतर पुन्हा तपासा.`
                        : language === 'hi'
                          ? `भाव गिर रहा है। ३-४ दिन रुकें। फिर जांचें।`
                          : `Prices are falling. Wait 3-4 days and recheck.`}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button fullWidth variant={selectedMarket.currentPrice > selectedMarket.previousPrice ? 'primary' : 'secondary'}>
                    {selectedMarket.currentPrice > selectedMarket.previousPrice ? t('sellNow') : t('wait')}
                  </Button>
                </div>
              </div>
            )}
          </BottomSheet>
        </motion.div>
      ) : (
        <motion.div
          key="weather"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
          transition={reduce ? { duration: 0.15 } : { type: 'spring', stiffness: 260, damping: 28 }}
          className="space-y-5"
        >
          {/* 7-Day Forecast */}
          <div>
            <SectionHeader title={t('weatherForecast')} icon={<CloudRain className="w-5 h-5" />} />
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
              {weatherForecast.map((day, idx) => (
                <motion.div
                  key={idx}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04, type: 'spring', stiffness: 280, damping: 24 }}
                >
                <Card className="p-3 min-w-[88px] text-center flex-shrink-0">
                  <div className="text-xs text-textMuted font-medium mb-1">
                    {idx === 0 ? t('today') : idx === 1 ? t('tomorrow') : day.day}
                  </div>
                  <motion.div
                    className="text-3xl my-1"
                    animate={reduce ? undefined : { y: [0, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: idx * 0.15 }}
                  >
                    {day.conditionEmoji}
                  </motion.div>
                  <div className="text-sm font-bold text-text">{day.maxTemp}°</div>
                  <div className="text-xs text-textMuted">{day.minTemp}°</div>
                  <div className="flex items-center justify-center gap-0.5 mt-1.5 text-xs text-primary">
                    <Droplets className="w-3 h-3" />
                    {day.rainfall}{t('mm')}
                  </div>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Today's Weather Details */}
          <Card className="p-5">
            <h3 className="font-semibold text-text mb-4">{t('todayWeather')}</h3>
            <div className="grid grid-cols-2 gap-4">
              <WeatherDetail icon={<Thermometer className="w-5 h-5 text-error" />} label={t('temperature')} value={`${weatherForecast[0].maxTemp}/${weatherForecast[0].minTemp}°`} />
              <WeatherDetail icon={<Droplets className="w-5 h-5 text-primary" />} label={t('rainfall')} value={`${weatherForecast[0].rainfall} ${t('mm')}`} />
              <WeatherDetail icon={<Wind className="w-5 h-5 text-accent" />} label={t('windSpeed')} value={`${weatherForecast[0].windSpeed} ${t('kmph')}`} />
              <WeatherDetail icon={<CloudRain className="w-5 h-5 text-primary" />} label={t('humidity')} value={`${weatherForecast[0].humidity}%`} />
            </div>
          </Card>

          {/* Risk Assessment */}
          <div>
            <SectionHeader title={t('riskAssessment')} icon={<AlertTriangle className="w-5 h-5" />} />
            <div className="space-y-3">
              {weatherRisks.map((risk, idx) => {
                const riskVariant = risk.level > 50 ? 'error' : risk.level > 25 ? 'warning' : 'success';
                const riskColor = risk.level > 50 ? 'error' : risk.level > 25 ? 'warning' : 'success';
                const riskIcon = risk.type === 'flood' ? <CloudRain className="w-5 h-5" /> : risk.type === 'drought' ? <Thermometer className="w-5 h-5" /> : risk.type === 'pest' ? <AlertTriangle className="w-5 h-5" /> : <Wind className="w-5 h-5" />;
                const label = risk.type === 'flood' ? t('riskFlood') : risk.type === 'drought' ? t('riskDrought') : risk.type === 'pest' ? t('riskPest') : t('riskFrost');

                return (
                  <motion.div
                    key={risk.type}
                    initial={reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, type: 'spring', stiffness: 240, damping: 26 }}
                  >
                  <Card className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-surface2 flex items-center justify-center text-primary">
                          {riskIcon}
                        </div>
                        <span className="font-semibold text-text">{label}</span>
                      </div>
                      <Badge variant={riskVariant}>
                        {risk.level > 50 ? t('high') : risk.level > 25 ? t('medium') : t('low')}
                      </Badge>
                    </div>
                    <Progress value={risk.level} color={riskColor} size="sm" showValue={true} />
                    <div className="mt-3 bg-primary/5 rounded-lg p-3 border border-primary/10">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-textMuted leading-relaxed">{risk.advisory[language]}</p>
                      </div>
                    </div>
                  </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
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

function WeatherDetail({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-surface2 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs text-textMuted">{label}</div>
        <div className="font-bold text-text">{value}</div>
      </div>
    </div>
  );
}
