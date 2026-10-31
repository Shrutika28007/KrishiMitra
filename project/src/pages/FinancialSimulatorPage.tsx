import { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import Card from '@/components/ui/Card';
import Select from '@/components/ui/Select';
import Badge from '@/components/ui/Badge';
import Progress from '@/components/ui/Progress';
import Button from '@/components/ui/Button';
import { FadeIn, AnimatedNumber } from '@/components/ui/Motion';
import { cropRecommendations } from '@/data/mockData';
import { motion, useReducedMotion } from 'motion/react';
import { Coins, TrendingUp, TrendingDown, Calculator, ArrowRight, RotateCcw, Scale } from 'lucide-react';

export default function FinancialSimulatorPage() {
  const { t, language, profile } = useApp();
  const reduce = useReducedMotion();
  const [selectedCropId, setSelectedCropId] = useState(cropRecommendations[0].id);
  const [landSize, setLandSize] = useState(profile.landArea || 1);
  const [yieldPerAcre, setYieldPerAcre] = useState(cropRecommendations[0].expectedYield);
  const [marketPrice, setMarketPrice] = useState(cropRecommendations[0].marketPrice);

  // Editable per-acre cost inputs
  const [seedCost, setSeedCost] = useState(cropRecommendations[0].seedCostPerAcre);
  const [fertilizerCost, setFertilizerCost] = useState(cropRecommendations[0].fertilizerCostPerAcre);
  const [laborCost, setLaborCost] = useState(cropRecommendations[0].laborCostPerAcre);
  const [irrigationCost, setIrrigationCost] = useState(cropRecommendations[0].irrigationCostPerAcre);
  const [pesticideCost, setPesticideCost] = useState(cropRecommendations[0].pesticideCostPerAcre);
  const [miscCost, setMiscCost] = useState(cropRecommendations[0].miscCostPerAcre);

  const selectedCrop = cropRecommendations.find((c) => c.id === selectedCropId)!;

  const handleCropChange = (id: string) => {
    const crop = cropRecommendations.find((c) => c.id === id)!;
    setSelectedCropId(id);
    setYieldPerAcre(crop.expectedYield);
    setMarketPrice(crop.marketPrice);
    setSeedCost(crop.seedCostPerAcre);
    setFertilizerCost(crop.fertilizerCostPerAcre);
    setLaborCost(crop.laborCostPerAcre);
    setIrrigationCost(crop.irrigationCostPerAcre);
    setPesticideCost(crop.pesticideCostPerAcre);
    setMiscCost(crop.miscCostPerAcre);
  };

  const resetDefaults = () => {
    setYieldPerAcre(selectedCrop.expectedYield);
    setMarketPrice(selectedCrop.marketPrice);
    setSeedCost(selectedCrop.seedCostPerAcre);
    setFertilizerCost(selectedCrop.fertilizerCostPerAcre);
    setLaborCost(selectedCrop.laborCostPerAcre);
    setIrrigationCost(selectedCrop.irrigationCostPerAcre);
    setPesticideCost(selectedCrop.pesticideCostPerAcre);
    setMiscCost(selectedCrop.miscCostPerAcre);
  };

  const costs = useMemo(() => {
    const perAcreTotal = seedCost + fertilizerCost + laborCost + irrigationCost + pesticideCost + miscCost;
    return {
      seed: seedCost * landSize,
      fertilizer: fertilizerCost * landSize,
      labor: laborCost * landSize,
      irrigation: irrigationCost * landSize,
      pesticide: pesticideCost * landSize,
      misc: miscCost * landSize,
      perAcreTotal,
    };
  }, [seedCost, fertilizerCost, laborCost, irrigationCost, pesticideCost, miscCost, landSize]);

  const totalInvestment = costs.seed + costs.fertilizer + costs.labor + costs.irrigation + costs.pesticide + costs.misc;
  const totalYield = yieldPerAcre * landSize;
  const totalRevenue = totalYield * marketPrice;
  const netProfit = totalRevenue - totalInvestment;
  const profitPerAcre = landSize > 0 ? netProfit / landSize : 0;
  const isProfit = netProfit >= 0;
  const marginPercent = totalRevenue > 0 ? Math.round((netProfit / totalInvestment) * 100) : 0;

  // Break-even price per quintal: the price at which revenue equals cost
  const breakEvenPrice = totalYield > 0 ? totalInvestment / totalYield : 0;

  return (
    <div className="space-y-5 pt-2">
      <FadeIn>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-text">{t('financialSimulator')}</h1>
          <p className="text-textMuted mt-1">{t('financialSimulatorSubtitle')}</p>
        </div>
        <Badge variant="warning">{t('demoData')}</Badge>
      </div>
      </FadeIn>

      <FadeIn delay={0.06}>
      <Card className="p-5 space-y-4">
        <Select
          label={t('selectCrop')}
          value={selectedCropId}
          onChange={(e) => handleCropChange(e.target.value)}
          options={cropRecommendations.map((c) => ({ value: c.id, label: `${c.emoji} ${c.names[language]}` }))}
        />
      </Card>

      {/* Sliders */}
      <Card className="p-5 space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-text flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            {t('adjustParameters')}
          </h3>
          <button onClick={resetDefaults} className="flex items-center gap-1 text-xs text-primary hover:text-primaryDark">
            <RotateCcw className="w-3 h-3" />
            {t('resetDefaults')}
          </button>
        </div>

        {/* Land Size */}
        <SliderControl
          label={t('landSize')}
          value={landSize}
          min={0.5}
          max={20}
          step={0.5}
          suffix={t('acres')}
          onChange={setLandSize}
        />

        {/* Yield per acre */}
        <SliderControl
          label={t('expectedYieldPerAcre')}
          value={yieldPerAcre}
          min={1}
          max={40}
          step={0.5}
          suffix={t('quintal')}
          onChange={setYieldPerAcre}
        />

        {/* Market Price */}
        <SliderControl
          label={t('marketPrice')}
          value={marketPrice}
          min={500}
          max={10000}
          step={100}
          prefix={t('rupee')}
          suffix={`/${t('quintal')}`}
          onChange={setMarketPrice}
        />
      </Card>
      </FadeIn>

      <FadeIn delay={0.18}>

      {/* Editable Cost Inputs */}
      <Card className="p-5 space-y-4">
        <h3 className="font-semibold text-text flex items-center gap-2">
          <Coins className="w-5 h-5 text-primary" />
          {t('editCosts')} ({t('perAcre')})
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <CostInput label={t('seedCosts')} value={seedCost} onChange={setSeedCost} />
          <CostInput label={t('fertilizerCost')} value={fertilizerCost} onChange={setFertilizerCost} />
          <CostInput label={t('laborCost')} value={laborCost} onChange={setLaborCost} />
          <CostInput label={t('irrigationCost')} value={irrigationCost} onChange={setIrrigationCost} />
          <CostInput label={t('pesticideCost')} value={pesticideCost} onChange={setPesticideCost} />
          <CostInput label={t('miscCost')} value={miscCost} onChange={setMiscCost} />
        </div>
      </Card>
      </FadeIn>

      <FadeIn delay={0.24}>

      {/* Result Summary */}
      <Card className={`p-5 ${isProfit ? 'border-accent/30' : 'border-error/30'}`}>
        <div className="text-center mb-5">
          <div className="flex items-center justify-center gap-2 mb-2">
            {isProfit ? <TrendingUp className="w-6 h-6 text-success" /> : <TrendingDown className="w-6 h-6 text-error" />}
            <span className="text-sm text-textMuted">{t('netProfit')}</span>
          </div>
          <div className={`text-4xl font-bold ${isProfit ? 'text-accent' : 'text-error'}`}>
            {isProfit ? '+' : ''}<AnimatedNumber value={netProfit} format={(v) => `₹${v.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`} />
          </div>
          <motion.div
            className="mt-2"
            key={isProfit ? 'profit' : 'loss'}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            <Badge variant={isProfit ? 'success' : 'error'}>
              {isProfit ? `${marginPercent}% ${t('profitScenario')}` : t('lossScenario')}
            </Badge>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-surface2 rounded-xl p-3">
            <div className="text-xs text-textMuted">{t('totalInvestment')}</div>
            <div className="text-lg font-bold text-text">₹<AnimatedNumber value={totalInvestment} format={(v) => v.toLocaleString('en-IN')} /></div>
          </div>
          <div className="bg-surface2 rounded-xl p-3">
            <div className="text-xs text-textMuted">{t('totalRevenue')}</div>
            <div className="text-lg font-bold text-text">₹<AnimatedNumber value={totalRevenue} format={(v) => v.toLocaleString('en-IN')} /></div>
          </div>
          <div className="bg-surface2 rounded-xl p-3">
            <div className="text-xs text-textMuted">{t('profitPerAcre')}</div>
            <div className={`text-lg font-bold ${isProfit ? 'text-accent' : 'text-error'}`}>
              ₹<AnimatedNumber value={profitPerAcre} format={(v) => v.toLocaleString('en-IN', { maximumFractionDigits: 0 })} />
            </div>
          </div>
          <div className="bg-surface2 rounded-xl p-3">
            <div className="text-xs text-textMuted">{t('expectedYield')}</div>
            <div className="text-lg font-bold text-text"><AnimatedNumber value={totalYield} format={(v) => `${v.toLocaleString('en-IN', { maximumFractionDigits: 1 })} ${t('quintal')}`} /></div>
          </div>
        </div>
      </Card>
      </FadeIn>

      <FadeIn delay={0.3}>

      {/* Break-even Price */}
      <Card className="p-5 border-primary/30 bg-primary/5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
            <Scale className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-sm font-semibold text-text">{t('breakEvenPrice')}</div>
            <div className="text-xs text-textMuted">{t('perQuintal')}</div>
          </div>
        </div>
        <div className="text-3xl font-bold text-primary">₹<AnimatedNumber value={breakEvenPrice} format={(v) => v.toLocaleString('en-IN', { maximumFractionDigits: 0 })} /></div>
        <p className="text-xs text-textMuted mt-2 leading-relaxed">
          {marketPrice > breakEvenPrice
            ? language === 'mr'
              ? `तुमचा विक्री भाव ब्रेक-इव्हनपेक्षा ₹${(marketPrice - breakEvenPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 })} जास्त आहे — नफा मिळतो.`
              : language === 'hi'
                ? `आपका विक्री भाव ब्रेक-ईवन से ₹${(marketPrice - breakEvenPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 })} अधिक है — लाभ होता है।`
                : `Your selling price is ₹${(marketPrice - breakEvenPrice).toLocaleString('en-IN', { maximumFractionDigits: 0 })} above break-even — you profit.`
            : language === 'mr'
              ? `तुमचा विक्री भाव ब्रेक-इव्हनपेक्षा कमी आहे — तोटा होतो.`
              : language === 'hi'
                ? `आपका विक्री भाव ब्रेक-ईवन से कम है — हानि होती है।`
                : `Your selling price is below break-even — you incur a loss.`}
        </p>
      </Card>
      </FadeIn>

      <FadeIn delay={0.36}>
      {/* Cost Breakdown */}
      <Card className="p-5">
        <h3 className="font-semibold text-text mb-4">{t('breakdown')}</h3>
        <div className="space-y-3">
          <CostBar label={t('seedCosts')} value={costs.seed} total={totalInvestment} color="primary" />
          <CostBar label={t('fertilizerCost')} value={costs.fertilizer} total={totalInvestment} color="accent" />
          <CostBar label={t('laborCost')} value={costs.labor} total={totalInvestment} color="primary" />
          <CostBar label={t('irrigationCost')} value={costs.irrigation} total={totalInvestment} color="accent" />
          <CostBar label={t('pesticideCost')} value={costs.pesticide} total={totalInvestment} color="primary" />
          <CostBar label={t('miscCost')} value={costs.misc} total={totalInvestment} color="accent" />
        </div>
        <div className="border-t border-border mt-4 pt-3 flex items-center justify-between">
          <span className="font-bold text-text">{t('totalInvestment')}</span>
          <span className="font-bold text-text">₹{totalInvestment.toLocaleString('en-IN')}</span>
        </div>
      </Card>
      </FadeIn>

      <FadeIn delay={0.42}>
      <Card className="p-5">
        <h3 className="font-semibold text-text mb-4 flex items-center gap-2">
          <Coins className="w-5 h-5 text-primary" />
          {t('breakEven')}
        </h3>
        <div className="space-y-3">
          <ScenarioRow
            label={t('profitScenario')}
            desc={`+20% ${t('marketPrice')}`}
            value={totalRevenue * 1.2 - totalInvestment}
            positive
          />
          <ScenarioRow
            label={t('breakEven')}
            desc={`${t('stable')}`}
            value={0}
          />
          <ScenarioRow
            label={t('lossScenario')}
            desc={`-20% ${t('marketPrice')}`}
            value={totalRevenue * 0.8 - totalInvestment}
            negative
          />
        </div>
      </Card>
      </FadeIn>

      <Button fullWidth size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} onClick={() => window.print()}>
        {t('save')}
      </Button>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  step,
  suffix,
  prefix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  prefix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm text-textMuted">{label}</label>
        <span className="text-sm font-bold text-text">
          {prefix}{value} {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-textMuted">{prefix}{min}</span>
        <span className="text-xs text-textMuted">{prefix}{max} {suffix}</span>
      </div>
    </div>
  );
}

function CostInput({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <label className="text-xs text-textMuted block mb-1">{label}</label>
      <div className="flex items-center bg-surface2 rounded-xl px-3 py-2.5 border border-border focus-within:border-primary transition-colors">
        <span className="text-textMuted text-sm mr-1">₹</span>
        <input
          type="number"
          value={value}
          min={0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="bg-transparent w-full text-sm font-semibold text-text outline-none"
        />
      </div>
    </div>
  );
}

function CostBar({ label, value, total, color }: { label: string; value: number; total: number; color: 'primary' | 'accent' }) {
  const percent = total > 0 ? (value / total) * 100 : 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm text-textMuted">{label}</span>
        <span className="text-sm font-semibold text-text">₹{value.toLocaleString('en-IN')}</span>
      </div>
      <Progress value={percent} color={color} size="sm" showValue={false} />
    </div>
  );
}

function ScenarioRow({ label, desc, value, positive, negative }: { label: string; desc: string; value: number; positive?: boolean; negative?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-surface2">
      <div>
        <div className="text-sm font-semibold text-text">{label}</div>
        <div className="text-xs text-textMuted">{desc}</div>
      </div>
      <div className={`text-lg font-bold ${positive ? 'text-accent' : negative ? 'text-error' : 'text-textMuted'}`}>
        {value >= 0 ? '+' : ''}₹{value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
      </div>
    </div>
  );
}
