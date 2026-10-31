import { useState, useMemo } from 'react';
import { useApp } from '@/context/AppContext';
import { soilTypes, waterSources, seasons } from '@/data/mockData';
import type { FarmerProfile as FarmerProfileType } from '@/context/AppContext';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Card from '@/components/ui/Card';
import { Check, User, MapPin, Wheat, Wallet, Calendar, Droplets, AlertCircle } from 'lucide-react';

type Errors = Partial<Record<'name' | 'state' | 'district' | 'village' | 'landArea' | 'budget' | 'soilType' | 'waterSource' | 'preferredSeason', string>>;

export default function FarmerProfilePage() {
  const { t, profile, setProfile, setPage } = useApp();
  const [form, setForm] = useState<FarmerProfileType>(profile);
  const [errors, setErrors] = useState<Errors>({});
  const [saved, setSaved] = useState(false);

  const update = (field: keyof FarmerProfileType, value: string | number | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t('validationName');
    if (!form.state.trim()) e.state = t('validationState');
    if (!form.district.trim()) e.district = t('validationDistrict');
    if (!form.village.trim()) e.village = t('validationVillage');
    if (!form.landArea || form.landArea <= 0) e.landArea = t('validationLand');
    if (!form.budget || form.budget <= 0) e.budget = t('validationBudget');
    if (!form.soilType) e.soilType = t('validationSoil');
    if (!form.waterSource) e.waterSource = t('validationIrrigation');
    if (!form.preferredSeason) e.preferredSeason = t('validationSeason');
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = () => {
    if (!validate()) {
      const firstError = document.querySelector('[data-error="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setProfile(form);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setPage('dashboard');
    }, 1500);
  };

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  return (
    <div className="max-w-md mx-auto space-y-5 pb-4">
      {/* Header */}
      <div className="text-center pt-2 pb-4">
        <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
          <User className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-text">{t('farmerProfile')}</h1>
        <p className="text-textMuted mt-1">{t('farmerProfileSubtitle')}</p>
      </div>

      {/* Personal Info */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <User className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-text">{t('fullName')}</h3>
        </div>
        <div data-error={errors.name ? 'true' : 'false'}>
          <Input
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder={t('fullName')}
          />
          {errors.name && <ErrorText message={errors.name} />}
        </div>
      </Card>

      {/* Location */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-text">{t('village')}</h3>
        </div>
        <div data-error={errors.state ? 'true' : 'false'}>
          <Input
            value={form.state}
            onChange={(e) => update('state', e.target.value)}
            placeholder={t('state')}
          />
          {errors.state && <ErrorText message={errors.state} />}
        </div>
        <div data-error={errors.district ? 'true' : 'false'}>
          <Input
            value={form.district}
            onChange={(e) => update('district', e.target.value)}
            placeholder={t('district')}
          />
          {errors.district && <ErrorText message={errors.district} />}
        </div>
        <div data-error={errors.village ? 'true' : 'false'}>
          <Input
            value={form.village}
            onChange={(e) => update('village', e.target.value)}
            placeholder={t('village')}
          />
          {errors.village && <ErrorText message={errors.village} />}
        </div>
      </Card>

      {/* Farm Details */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Wheat className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-text">{t('landArea')}</h3>
        </div>
        <div data-error={errors.landArea ? 'true' : 'false'}>
          <Input
            type="number"
            value={form.landArea || ''}
            onChange={(e) => update('landArea', Number(e.target.value))}
            suffix={t('acres')}
            placeholder="0"
            inputMode="decimal"
          />
          {errors.landArea && <ErrorText message={errors.landArea} />}
        </div>
        <div data-error={errors.soilType ? 'true' : 'false'}>
          <Select
            label={t('soilType')}
            value={form.soilType}
            onChange={(e) => update('soilType', e.target.value)}
            placeholder={t('selectSoilType')}
            options={soilTypes.map((s) => ({ value: s.value, label: t(s.labelKey) }))}
          />
          {errors.soilType && <ErrorText message={errors.soilType} />}
        </div>
      </Card>

      {/* Irrigation & Season */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Droplets className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-text">{t('irrigationType')}</h3>
        </div>
        <div data-error={errors.waterSource ? 'true' : 'false'}>
          <Select
            label={t('irrigationType')}
            value={form.waterSource}
            onChange={(e) => update('waterSource', e.target.value)}
            placeholder={t('selectIrrigation')}
            options={waterSources.map((w) => ({ value: w.value, label: t(w.labelKey) }))}
          />
          {errors.waterSource && <ErrorText message={errors.waterSource} />}
        </div>
        <div data-error={errors.preferredSeason ? 'true' : 'false'}>
          <Select
            label={t('preferredSeason')}
            value={form.preferredSeason}
            onChange={(e) => update('preferredSeason', e.target.value)}
            placeholder={t('selectSeason')}
            options={seasons.map((s) => ({ value: s.value, label: t(s.labelKey) }))}
          />
          {errors.preferredSeason && <ErrorText message={errors.preferredSeason} />}
        </div>
      </Card>

      {/* Budget */}
      <Card className="p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Wallet className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-text">{t('farmingBudget')}</h3>
        </div>
        <div data-error={errors.budget ? 'true' : 'false'}>
          <Input
            type="number"
            value={form.budget || ''}
            onChange={(e) => update('budget', Number(e.target.value))}
            prefix={t('rupee')}
            placeholder="0"
            inputMode="numeric"
          />
          {errors.budget && <ErrorText message={errors.budget} />}
        </div>
      </Card>

      {/* Save Button */}
      <div className="space-y-2">
        <Button
          size="xl"
          fullWidth
          onClick={handleSave}
          leftIcon={saved ? <Check className="w-5 h-5" /> : undefined}
        >
          {saved ? t('profileSaved') : t('saveProfile')}
        </Button>
        {hasErrors && (
          <p className="text-sm text-error text-center flex items-center justify-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            {t('validationRequired')}
          </p>
        )}
      </div>
    </div>
  );
}

function ErrorText({ message }: { message: string }) {
  return (
    <p className="text-sm text-error mt-1.5 flex items-center gap-1.5 animate-fade-in">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {message}
    </p>
  );
}
