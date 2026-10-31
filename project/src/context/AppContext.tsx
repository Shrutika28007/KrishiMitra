import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from '@/i18n/translations';
import { defaultFarmerProfile } from '@/data/mockData';

export type Theme = 'dark' | 'light';
export type Page = 'welcome' | 'profile' | 'dashboard' | 'crops' | 'finance' | 'market' | 'schemes';

export interface FarmerProfile {
  name: string;
  phone: string;
  state: string;
  district: string;
  village: string;
  landArea: number;
  soilType: string;
  waterSource: string;
  primaryCrops: string[];
  experience: number;
  annualIncome: number;
  budget: number;
  preferredSeason: string;
}

interface AppContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  theme: Theme;
  toggleTheme: () => void;
  page: Page;
  setPage: (page: Page) => void;
  profile: FarmerProfile;
  setProfile: (profile: FarmerProfile) => void;
  profileComplete: boolean;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const STORAGE_KEY = 'krishimitra-state';

interface StoredState {
  language: Language;
  theme: Theme;
  profile: FarmerProfile | null;
  hasSeenWelcome: boolean;
}

function loadState(): StoredState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as StoredState;
      return {
        language: parsed.language || 'mr',
        theme: parsed.theme || 'dark',
        profile: parsed.profile || null,
        hasSeenWelcome: parsed.hasSeenWelcome || false,
      };
    }
  } catch {
    /* ignore */
  }
  return { language: 'mr', theme: 'dark', profile: null, hasSeenWelcome: false };
}

function saveState(state: StoredState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const initial = loadState();
  const [language, setLanguageState] = useState<Language>(initial.language);
  const [theme, setTheme] = useState<Theme>(initial.theme);
  const [page, setPage] = useState<Page>(initial.hasSeenWelcome && initial.profile ? 'dashboard' : 'welcome');
  const [profile, setProfileState] = useState<FarmerProfile>(initial.profile || defaultFarmerProfile);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  useEffect(() => {
    saveState({ language, theme, profile, hasSeenWelcome: page !== 'welcome' });
  }, [language, theme, profile, page]);

  const setLanguage = useCallback((lang: Language) => setLanguageState(lang), []);
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  const setProfile = useCallback((p: FarmerProfile) => setProfileState(p), []);

  const t = useCallback((key: TranslationKey) => translations[language][key] || translations.en[key] || key, [language]);

  const profileComplete = Boolean(profile?.name && profile?.landArea > 0);

  return (
    <AppContext.Provider
      value={{ language, setLanguage, t, theme, toggleTheme, page, setPage, profile, setProfile, profileComplete }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
