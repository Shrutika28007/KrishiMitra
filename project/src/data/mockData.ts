import type { Language } from '@/i18n/translations';

export interface CropRecommendation {
  id: string;
  names: Record<Language, string>;
  emoji: string;
  season: 'kharif' | 'rabi' | 'summer';
  suitability: number;
  expectedYield: number; // quintal per acre
  marketPrice: number; // ₹ per quintal
  waterNeeded: 'low' | 'medium' | 'high';
  growthDuration: number; // days
  seedCostPerAcre: number;
  fertilizerCostPerAcre: number;
  laborCostPerAcre: number;
  irrigationCostPerAcre: number;
  pesticideCostPerAcre: number;
  miscCostPerAcre: number;
  reasons: Record<Language, string>;
  marketDemand: 'high' | 'medium' | 'low';
  suitableSoils: string[];
  risks: Record<Language, string[]>;
}

export const cropRecommendations: CropRecommendation[] = [
  {
    id: 'soybean',
    names: { mr: 'सोयाबीन', hi: 'सोयाबीन', en: 'Soybean' },
    emoji: '🫘',
    season: 'kharif',
    suitability: 92,
    expectedYield: 12,
    marketPrice: 4800,
    waterNeeded: 'medium',
    growthDuration: 105,
    seedCostPerAcre: 2400,
    fertilizerCostPerAcre: 1800,
    laborCostPerAcre: 3500,
    irrigationCostPerAcre: 1200,
    pesticideCostPerAcre: 900,
    miscCostPerAcre: 700,
    reasons: {
      mr: 'तुमच्या दोमट मातीसाठी अत्यंत योग्य. बाजारात चांगली मागणी आहे.',
      hi: 'आपकी दोमट मिट्टी के लिए बहुत उपयुक्त. बाजार में अच्छी मांग है.',
      en: 'Highly suitable for your loamy soil. Strong market demand and good returns.',
    },
    marketDemand: 'high',
    suitableSoils: ['loamy', 'black'],
    risks: {
      mr: ['पावसाळ्यात रोगाची शक्यता', 'किडीचा धोका (पान खाणारे)', 'बाजारभाव चढउतार'],
      hi: ['मानसून में बीमारी का जोखिम', 'कीट खतरा (पत्ती खाने वाले)', 'बाजार भाव उतार-चढ़ाव'],
      en: ['Disease risk in monsoon', 'Pest threat (leaf-eating insects)', 'Market price volatility'],
    },
  },
  {
    id: 'cotton',
    names: { mr: 'कापूस', hi: 'कपास', en: 'Cotton' },
    emoji: '🌱',
    season: 'kharif',
    suitability: 85,
    expectedYield: 10,
    marketPrice: 7200,
    waterNeeded: 'high',
    growthDuration: 165,
    seedCostPerAcre: 1800,
    fertilizerCostPerAcre: 2400,
    laborCostPerAcre: 5000,
    irrigationCostPerAcre: 2000,
    pesticideCostPerAcre: 2200,
    miscCostPerAcre: 1000,
    reasons: {
      mr: 'काळ्या मातीत उत्तम उत्पन्न. दीर्घ कालावधी पण जास्त नफा.',
      hi: 'काली मिट्टी में बेहतर उपज. लंबी अवधि लेकिन अधिक लाभ.',
      en: 'Excellent yield in black soil. Longer duration but higher profit margin.',
    },
    marketDemand: 'high',
    suitableSoils: ['black', 'loamy'],
    risks: {
      mr: ['बोळ्या कीडीचा धोका', 'पांढरी माशीचा उपद्रव', 'लांब कालावधीमुळे खर्च वाढतो'],
      hi: ['गुलाबी सूंडी कीट खतरा', 'सफेद मक्खी उपद्रव', 'लंबी अवधि से खर्च बढ़ता है'],
      en: ['Bollworm pest threat', 'Whitefly infestation risk', 'Long duration increases costs'],
    },
  },
  {
    id: 'wheat',
    names: { mr: 'गहू', hi: 'गेहूं', en: 'Wheat' },
    emoji: '🌾',
    season: 'rabi',
    suitability: 88,
    expectedYield: 18,
    marketPrice: 2200,
    waterNeeded: 'medium',
    growthDuration: 120,
    seedCostPerAcre: 1500,
    fertilizerCostPerAcre: 2800,
    laborCostPerAcre: 3000,
    irrigationCostPerAcre: 1500,
    pesticideCostPerAcre: 600,
    miscCostPerAcre: 500,
    reasons: {
      mr: 'रब्बी हंगामात विश्वासार्ह पीक. सरकारी खरेदी हमी.',
      hi: 'रबी मौसम में भरोसेमंद फसल. सरकारी खरीद गारंटी.',
      en: 'Reliable rabi crop with government MSP support and stable prices.',
    },
    marketDemand: 'high',
    suitableSoils: ['loamy', 'black', 'clay'],
    risks: {
      mr: ['उष्णतेमुळे उत्पन्न कमी होऊ शकते', 'पानांचा रोग', 'एकाच वेळी कापणीचा ताण'],
      hi: ['गर्मी से उपज कम हो सकती है', 'पत्ती रोग', 'एक साथ कटाई का तनाव'],
      en: ['Heat can reduce yield', 'Leaf rust disease', 'Simultaneous harvesting pressure'],
    },
  },
  {
    id: 'chickpea',
    names: { mr: 'हरभरा', hi: 'चना', en: 'Chickpea' },
    emoji: '🫛',
    season: 'rabi',
    suitability: 78,
    expectedYield: 8,
    marketPrice: 5400,
    waterNeeded: 'low',
    growthDuration: 110,
    seedCostPerAcre: 2000,
    fertilizerCostPerAcre: 1200,
    laborCostPerAcre: 2500,
    irrigationCostPerAcre: 500,
    pesticideCostPerAcre: 700,
    miscCostPerAcre: 400,
    reasons: {
      mr: 'कमी पाण्याची गरज. मातीची सुधारणा करते. चांगला भाव.',
      hi: 'कम पानी की जरूरत. मिट्टी सुधारती है. अच्छा भाव.',
      en: 'Low water requirement, fixes soil nitrogen, and fetches good prices.',
    },
    marketDemand: 'medium',
    suitableSoils: ['loamy', 'sandy', 'black'],
    risks: {
      mr: ['पावसाळ्यात रोगाची शक्यता', 'किडीचा धोका (शेंगा खाणारे)', 'भाजीमालात नुकसान जोखीम'],
      hi: ['मानसून में बीमारी संभावना', 'पॉड बोरर कीट खतरा', 'भंडारण में नुकसान जोखिम'],
      en: ['Disease risk in monsoon', 'Pod borer pest threat', 'Storage loss risk'],
    },
  },
  {
    id: 'tomato',
    names: { mr: 'टोमॅटो', hi: 'टमाटर', en: 'Tomato' },
    emoji: '🍅',
    season: 'summer',
    suitability: 70,
    expectedYield: 25,
    marketPrice: 1800,
    waterNeeded: 'medium',
    growthDuration: 90,
    seedCostPerAcre: 3000,
    fertilizerCostPerAcre: 3500,
    laborCostPerAcre: 6000,
    irrigationCostPerAcre: 1800,
    pesticideCostPerAcre: 1500,
    miscCostPerAcre: 1200,
    reasons: {
      mr: 'उन्हाळ्यात जास्त उत्पन्न. तुमच्या ठिबक सिंचनासाठी उपयुक्त.',
      hi: 'गर्मी में अधिक उपज. आपके ड्रिप सिंचाई के लिए उपयुक्त.',
      en: 'High yield in summer. Ideal for your drip irrigation setup.',
    },
    marketDemand: 'high',
    suitableSoils: ['loamy', 'red'],
    risks: {
      mr: ['भाव चढउतार जास्त', 'कोळी व विषारी कीड', 'वाहतुकीचा खर्च जास्त'],
      hi: ['भाव अस्थिरता अधिक', 'थ्रिप्स और वायरल रोग', 'परिवहन खर्च अधिक'],
      en: ['High price volatility', 'Thrips and viral disease', 'High transport cost'],
    },
  },
  {
    id: 'onion',
    names: { mr: 'कांदा', hi: 'प्याज', en: 'Onion' },
    emoji: '🧅',
    season: 'rabi',
    suitability: 75,
    expectedYield: 20,
    marketPrice: 2500,
    waterNeeded: 'medium',
    growthDuration: 100,
    seedCostPerAcre: 2500,
    fertilizerCostPerAcre: 3000,
    laborCostPerAcre: 4500,
    irrigationCostPerAcre: 1600,
    pesticideCostPerAcre: 1000,
    miscCostPerAcre: 900,
    reasons: {
      mr: 'नाशिक पट्ट्यात चांगली बाजार सुविधा. उत्पन्नात चांगला नफा.',
      hi: 'नासिक क्षेत्र में अच्छी बाजार सुविधा. उपज में अच्छा लाभ.',
      en: 'Good market access in Nashik region. Strong profit potential per acre.',
    },
    marketDemand: 'high',
    suitableSoils: ['loamy', 'sandy'],
    risks: {
      mr: ['भाव अत्यंत चढउतार', 'कोळी रोगाचा धोका', 'साठ्यात नुकसान होऊ शकते'],
      hi: ['भाव अत्यधिक अस्थिर', 'थ्रिप्स रोग जोखिम', 'भंडारण में नुकसान'],
      en: ['Extreme price volatility', 'Thrips disease risk', 'Storage losses possible'],
    },
  },
];

export interface MarketPrice {
  id: string;
  names: Record<Language, string>;
  emoji: string;
  currentPrice: number;
  previousPrice: number;
  unit: string;
  market: Record<Language, string>;
  trendHistory: number[];
  lastUpdated: string;
}

export const marketPrices: MarketPrice[] = [
  {
    id: 'soybean',
    names: { mr: 'सोयाबीन', hi: 'सोयाबीन', en: 'Soybean' },
    emoji: '🫘',
    currentPrice: 4800,
    previousPrice: 4500,
    unit: 'quintal',
    market: { mr: 'लातूर बाजार', hi: 'लातूर बाजार', en: 'Latur Market' },
    trendHistory: [4200, 4100, 4300, 4400, 4500, 4600, 4800],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'cotton',
    names: { mr: 'कापूस', hi: 'कपास', en: 'Cotton' },
    emoji: '🌱',
    currentPrice: 7200,
    previousPrice: 7500,
    unit: 'quintal',
    market: { mr: 'यवतमाळ बाजार', hi: 'यवतमाल बाजार', en: 'Yavatmal Market' },
    trendHistory: [7800, 7600, 7400, 7300, 7400, 7300, 7200],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'wheat',
    names: { mr: 'गहू', hi: 'गेहूं', en: 'Wheat' },
    emoji: '🌾',
    currentPrice: 2200,
    previousPrice: 2150,
    unit: 'quintal',
    market: { mr: 'पुणे बाजार', hi: 'पुणे बाजार', en: 'Pune Market' },
    trendHistory: [2100, 2120, 2150, 2140, 2150, 2180, 2200],
    lastUpdated: '2025-01-14',
  },
  {
    id: 'onion',
    names: { mr: 'कांदा', hi: 'प्याज', en: 'Onion' },
    emoji: '🧅',
    currentPrice: 2500,
    previousPrice: 1800,
    unit: 'quintal',
    market: { mr: 'नाशिक बाजार', hi: 'नासिक बाजार', en: 'Nashik Market' },
    trendHistory: [1200, 1400, 1600, 1500, 1700, 2000, 2500],
    lastUpdated: '2025-01-15',
  },
  {
    id: 'tomato',
    names: { mr: 'टोमॅटो', hi: 'टमाटर', en: 'Tomato' },
    emoji: '🍅',
    currentPrice: 1800,
    previousPrice: 2200,
    unit: 'quintal',
    market: { mr: 'नागपूर बाजार', hi: 'नागपुर बाजार', en: 'Nagpur Market' },
    trendHistory: [2500, 2400, 2300, 2100, 2000, 1900, 1800],
    lastUpdated: '2025-01-13',
  },
  {
    id: 'chickpea',
    names: { mr: 'हरभरा', hi: 'चना', en: 'Chickpea' },
    emoji: '🫛',
    currentPrice: 5400,
    previousPrice: 5300,
    unit: 'quintal',
    market: { mr: 'अकोला बाजार', hi: 'अकोला बाजार', en: 'Akola Market' },
    trendHistory: [5000, 5100, 5200, 5250, 5300, 5350, 5400],
    lastUpdated: '2025-01-15',
  },
];

export interface WeatherDay {
  day: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  rainfall: number;
  humidity: number;
  windSpeed: number;
  condition: 'sunny' | 'cloudy' | 'rainy' | 'partlyCloudy';
  conditionEmoji: string;
}

export const weatherForecast: WeatherDay[] = [
  { day: 'आज/आज/Aaj', temp: 28, minTemp: 22, maxTemp: 32, rainfall: 0, humidity: 65, windSpeed: 12, condition: 'sunny', conditionEmoji: '☀️' },
  { day: 'Wed', temp: 30, minTemp: 24, maxTemp: 34, rainfall: 5, humidity: 70, windSpeed: 15, condition: 'partlyCloudy', conditionEmoji: '⛅' },
  { day: 'Thu', temp: 27, minTemp: 23, maxTemp: 30, rainfall: 25, humidity: 85, windSpeed: 20, condition: 'rainy', conditionEmoji: '🌧️' },
  { day: 'Fri', temp: 26, minTemp: 22, maxTemp: 29, rainfall: 40, humidity: 90, windSpeed: 22, condition: 'rainy', conditionEmoji: '🌧️' },
  { day: 'Sat', temp: 29, minTemp: 24, maxTemp: 33, rainfall: 8, humidity: 72, windSpeed: 14, condition: 'cloudy', conditionEmoji: '☁️' },
  { day: 'Sun', temp: 31, minTemp: 25, maxTemp: 35, rainfall: 0, humidity: 60, windSpeed: 10, condition: 'sunny', conditionEmoji: '☀️' },
  { day: 'Mon', temp: 32, minTemp: 26, maxTemp: 36, rainfall: 0, humidity: 55, windSpeed: 8, condition: 'sunny', conditionEmoji: '☀️' },
];

export interface WeatherRisk {
  type: 'drought' | 'flood' | 'pest' | 'frost';
  level: number; // 0-100
  advisory: Record<Language, string>;
}

export const weatherRisks: WeatherRisk[] = [
  {
    type: 'flood',
    level: 35,
    advisory: {
      mr: 'येत्या ३ दिवसांत पावसाची शक्यता आहे. पिकांची काढणी लवकर पूर्ण करा.',
      hi: 'अगले ३ दिन बारिश की संभावना. फसल कटाई जल्दी पूरी करें.',
      en: 'Rain expected in next 3 days. Complete harvesting early to avoid damage.',
    },
  },
  {
    type: 'pest',
    level: 55,
    advisory: {
      mr: 'आर्द्रता वाढल्याने कीड येण्याची शक्यता आहे. कीटकनाशक फवारणी करा.',
      hi: 'नमी बढ़ने से कीट का खतरा. कीटनाशक छिड़काव करें.',
      en: 'High humidity increases pest risk. Consider preventive pesticide spray.',
    },
  },
  {
    type: 'drought',
    level: 15,
    advisory: {
      mr: 'दुष्काळ जोखीम कमी आहे. पाणी साठवणूक चांगली आहे.',
      hi: 'सूखा जोखिम कम. पानी भंडारण अच्छा है.',
      en: 'Drought risk is low. Water reserves are adequate.',
    },
  },
  {
    type: 'frost',
    level: 5,
    advisory: {
      mr: 'थंडीची जोखीम नाही. हवामान सामान्य आहे.',
      hi: 'पाला जोखिम नहीं. मौसम सामान्य है.',
      en: 'No frost risk. Temperatures are normal for the season.',
    },
  },
];

export interface GovtScheme {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  benefits: Record<Language, string>;
  eligibility: Record<Language, string>;
  howToApply: Record<Language, string>;
  documents: Record<Language, string[]>;
  category: string;
  emoji: string;
  officialUrl: string;
}

export const govtSchemes: GovtScheme[] = [
  {
    id: 'pmkisan',
    name: {
      mr: 'PM-KISAN सम्मान योजना',
      hi: 'PM-KISAN सम्मान योजना',
      en: 'PM-KISAN Samman Scheme',
    },
    description: {
      mr: 'प्रत्येक शेतकर्‍याला दरवर्षी ₹६,००० थेट बँक खात्यात.',
      hi: 'हर किसान को हर साल ₹6,000 सीधे बैंक खाते में।',
      en: '₹6,000 per year direct bank transfer to eligible farmers.',
    },
    benefits: {
      mr: 'वार्षिक ₹६,००० थेट हस्तांतरण (३ किस्ती)',
      hi: 'वार्षिक ₹6,000 सीधे हस्तांतरण (3 किस्त)',
      en: '₹6,000 annual direct transfer (3 installments)',
    },
    eligibility: {
      mr: '२ हेक्टरपर्यंत जमीन असलेले शेतकरी. उत्पन्न मर्यादा नाही.',
      hi: '२ हेक्टेयर तक की भूमि वाले किसान. आय सीमा नहीं.',
      en: 'Farmers with up to 2 hectares. No income limit.',
    },
    howToApply: {
      mr: 'pmkisan.gov.in वर ऑनलाइन अर्ज किंवा तालुका कार्यालयात जा.',
      hi: 'pmkisan.gov.in पर ऑनलाइन आवेदन या तालुका कार्यालय जाएं।',
      en: 'Apply online at pmkisan.gov.in or visit your taluka office.',
    },
    documents: {
      mr: ['आधार कार्ड', 'जमीन दस्तऐवज (७/१२)', 'बँक खाते तपशील'],
      hi: ['आधार कार्ड', 'भूमि दस्तावेज़ (७/१२)', 'बैंक खाता विवरण'],
      en: ['Aadhaar Card', 'Land document (7/12)', 'Bank account details'],
    },
    category: 'financial',
    emoji: '💰',
    officialUrl: 'https://pmkisan.gov.in',
  },
  {
    id: 'cropinsurance',
    name: {
      mr: 'पीक विमा योजना (PMFBY)',
      hi: 'फसल बीमा योजना (PMFBY)',
      en: 'Crop Insurance Scheme (PMFBY)',
    },
    description: {
      mr: 'नैसर्गिक आपत्तीमुळे पिकाचे नुकसान भरून काढणे.',
      hi: 'प्राकृतिक आपदा से फसल की क्षतिपूर्ति।',
      en: 'Compensation for crop loss due to natural calamities.',
    },
    benefits: {
      mr: 'नुकसानीचे ८०% पर्यंत भरपाई. अत्यंत कमी हप्ता.',
      hi: 'नुकसान का ८०% तक क्षतिपूर्ति. बहुत कम प्रीमियम.',
      en: 'Up to 80% loss compensation. Very low premium.',
    },
    eligibility: {
      mr: 'सर्व शेतकरी जे कर्जदार आहेत त्यांच्यासाठी अनिवार्य.',
      hi: 'सभी किसान. ऋणदाता किसानों के लिए अनिवार्य।',
      en: 'All farmers. Mandatory for loanee farmers.',
    },
    howToApply: {
      mr: 'तुमच्या बँकेद्वारे किंवा कृषी विभागात अर्ज करा.',
      hi: 'अपने बैंक या कृषि विभाग में आवेदन करें।',
      en: 'Apply through your bank or local agriculture department.',
    },
    documents: {
      mr: ['आधार कार्ड', '७/१२ उतारा', 'बँक पासबुक', 'कर्ज तपशील (जर असल्यास)'],
      hi: ['आधार कार्ड', '७/१२ उतारा', 'बैंक पासबुक', 'कर्जा विवरण (यदि हो)'],
      en: ['Aadhaar Card', '7/12 Extract', 'Bank Passbook', 'Loan details (if any)'],
    },
    category: 'insurance',
    emoji: '🛡️',
    officialUrl: 'https://pmfby.gov.in',
  },
  {
    id: 'soilhealth',
    name: {
      mr: 'माती आरोग्य कार्ड योजना',
      hi: 'मृदा स्वास्थ्य कार्ड योजना',
      en: 'Soil Health Card Scheme',
    },
    description: {
      mr: 'तुमच्या जमीनीची माती तपासणी व खताचे योग्य सल्ले.',
      hi: 'आपकी भूमि की मिट्टी जांच और उर्वरक सल्हा।',
      en: 'Free soil testing and fertilizer recommendations for your land.',
    },
    benefits: {
      mr: 'विनामूल्य माती तपासणी व अहवाल.',
      hi: 'निशुल्क मिट्टी जांच और रिपोर्ट।',
      en: 'Free soil testing and detailed health report.',
    },
    eligibility: {
      mr: 'सर्व शेतकरी पात्र.',
      hi: 'सभी किसान पात्र।',
      en: 'All farmers are eligible.',
    },
    howToApply: {
      mr: 'तालुका कृषी कार्यालयात अर्ज करा. ७ दिवसांत कार्ड मिळते.',
      hi: 'तालुका कृषि कार्यालय में आवेदन करें. ७ दिनों में कार्ड।',
      en: 'Apply at your taluka agriculture office. Card issued in 7 days.',
    },
    documents: {
      mr: ['आधार कार्ड', '७/१२ उतारा'],
      hi: ['आधार कार्ड', '७/१२ उतारा'],
      en: ['Aadhaar Card', '7/12 Extract'],
    },
    category: 'soil',
    emoji: '🧪',
    officialUrl: 'https://www.soilhealth.dac.gov.in',
  },
  {
    id: 'subhiksha',
    name: {
      mr: 'सुभिक्षा किसान योजना',
      hi: 'सुभिक्षा किसान योजना',
      en: 'Subhiksha Kisan Scheme',
    },
    description: {
      mr: 'शेतीसाठी अत्यंत कमी व्याजदरावर कर्ज उपलब्ध.',
      hi: 'खेती के लिए बहुत कम ब्याज पर कर्ज।',
      en: 'Low-interest crop loans for farming activities.',
    },
    benefits: {
      mr: '₹३ लाखापर्यंत ३% व्याजदरावर कर्ज.',
      hi: '₹३ लाख तक ३% ब्याज दर पर कर्ज।',
      en: 'Up to ₹3 lakh at 3% interest rate.',
    },
    eligibility: {
      mr: 'जमीन ताब्यात असलेले सर्व शेतकरी.',
      hi: 'भूमि धारण किसान पात्र।',
      en: 'All farmers owning cultivated land.',
    },
    howToApply: {
      mr: 'तुमच्या सहकारी बँकेत अर्ज करा.',
      hi: 'अपने सहकारी बैंक में आवेदन करें।',
      en: 'Apply at your nearest cooperative bank.',
    },
    documents: {
      mr: ['आधार कार्ड', '७/१२ उतारा', 'बँक खाते तपशील', 'शेतकरी प्रमाणपत्र'],
      hi: ['आधार कार्ड', '७/१२ उतारा', 'बैंक खाता विवरण', 'किसान प्रमाणपत्र'],
      en: ['Aadhaar Card', '7/12 Extract', 'Bank account details', 'Farmer certificate'],
    },
    category: 'loan',
    emoji: '🏦',
    officialUrl: 'https://www.maharashtra.gov.in/scheme/subhiksha',
  },
  {
    id: 'solar',
    name: {
      mr: 'PM कुसुम योजना',
      hi: 'PM कुसुम योजना',
      en: 'PM KUSUM Scheme',
    },
    description: {
      mr: 'सौर ऊर्जा योजना शेतकर्‍यांसाठी सबसिडीसह सौर पंप.',
      hi: 'सौर ऊर्जा योजना किसानों के लिए सबसिडी के साथ सौर पंप।',
      en: 'Solar pump subsidy for farmers to reduce irrigation costs.',
    },
    benefits: {
      mr: 'सौर पंपावर ६०% पर्यंत सबसिडी. वीज खर्च शून्य.',
      hi: 'सौर पंप पर ६०% तक सबसिडी. बिजली खर्च शून्य।',
      en: 'Up to 60% subsidy on solar pumps. Zero electricity cost.',
    },
    eligibility: {
      mr: 'बोअरवेल असलेले शेतकरी.',
      hi: 'बोरवेल वाले किसान।',
      en: 'Farmers with borewell and valid power connection.',
    },
    howToApply: {
      mr: 'pmkusum.mnre.gov.in वर ऑनलाइन अर्ज करा.',
      hi: 'pmkusum.mnre.gov.in पर ऑनलाइन आवेदन।',
      en: 'Apply online at pmkusum.mnre.gov.in.',
    },
    documents: {
      mr: ['आधार कार्ड', 'बोअरवेल दस्तावेज', 'जमीन दस्तावेज', 'बँक खाते'],
      hi: ['आधार कार्ड', 'बोरवेल दस्तावेज', 'भूमि दस्तावेज', 'बैंक खाता'],
      en: ['Aadhaar Card', 'Borewell documents', 'Land documents', 'Bank account'],
    },
    category: 'equipment',
    emoji: '☀️',
    officialUrl: 'https://pmkusum.mnre.gov.in',
  },
];

export interface ActionItem {
  id: string;
  task: Record<Language, string>;
  dueIn: Record<Language, string>;
  priority: 'high' | 'medium' | 'low';
  icon: string;
}

export const actionItems: ActionItem[] = [
  {
    id: '1',
    task: { mr: 'सोयाबीन पेरणी पूर्ण करा', hi: 'सोयाबीन बोनाई पूरी करें', en: 'Complete soybean sowing' },
    dueIn: { mr: '३ दिवसांत', hi: '३ दिनों में', en: 'In 3 days' },
    priority: 'high',
    icon: '🌱',
  },
  {
    id: '2',
    task: { mr: 'माती आरोग्य कार्ड घ्या', hi: 'मृदा स्वास्थ्य कार्ड लें', en: 'Get your Soil Health Card' },
    dueIn: { mr: '७ दिवसांत', hi: '७ दिनों में', en: 'In 7 days' },
    priority: 'medium',
    icon: '🧪',
  },
  {
    id: '3',
    task: { mr: 'PM-KISAN अर्ज नवीनीकरण करा', hi: 'PM-KISAN आवेदन नवीनीकरण', en: 'Renew PM-KISAN application' },
    dueIn: { mr: '१५ दिवसांत', hi: '१५ दिनों में', en: 'In 15 days' },
    priority: 'medium',
    icon: '💰',
  },
  {
    id: '4',
    task: { mr: 'पीक विमा हप्ता भरा', hi: 'फसल बीमा प्रीमियम जमा', en: 'Pay crop insurance premium' },
    dueIn: { mr: '३० दिवसांत', hi: '३० दिनों में', en: 'In 30 days' },
    priority: 'high',
    icon: '🛡️',
  },
];

export interface RecentActivity {
  id: string;
  activity: Record<Language, string>;
  time: Record<Language, string>;
  icon: string;
}

export const recentActivities: RecentActivity[] = [
  {
    id: '1',
    activity: { mr: 'सोयाबीन बियाणे खरेदी केले', hi: 'सोयाबीन बीज खरीदा', en: 'Purchased soybean seeds' },
    time: { mr: '२ तासांपूर्वी', hi: '२ घंटे पहले', en: '2 hours ago' },
    icon: '🫘',
  },
  {
    id: '2',
    activity: { mr: 'शेतात पाणी दिले', hi: 'खेत में पानी दिया', en: 'Irrigated the field' },
    time: { mr: '५ तासांपूर्वी', hi: '५ घंटे पहले', en: '5 hours ago' },
    icon: '💧',
  },
  {
    id: '3',
    activity: { mr: 'माती तपासणी अहवाल मिळाला', hi: 'मृदा जांच रिपोर्ट प्राप्त', en: 'Received soil test report' },
    time: { mr: '१ दिवसापूर्वी', hi: '१ दिन पहले', en: '1 day ago' },
    icon: '🧪',
  },
  {
    id: '4',
    activity: { mr: 'कापूस ७२०० ₹ भावात विकला', hi: 'कपास ७२०० ₹ भाव पर बेचा', en: 'Sold cotton at ₹7200/quintal' },
    time: { mr: '३ दिवसांपूर्वी', hi: '३ दिन पहले', en: '3 days ago' },
    icon: '🌱',
  },
];

export interface FarmAlert {
  id: string;
  type: 'warning' | 'info' | 'tip';
  title: Record<Language, string>;
  message: Record<Language, string>;
  icon: string;
}

export const farmAlerts: FarmAlert[] = [
  {
    id: 'a1',
    type: 'warning',
    icon: '🌧️',
    title: { mr: 'पावसाचा अंदाज', hi: 'बारिश का अनुमान', en: 'Rainfall Alert' },
    message: {
      mr: 'येत्या ३ दिवसांत चांगला पाऊस अपेक्षित. पिकांची काढणी लवकर पूर्ण करा.',
      hi: 'अगले ३ दिन में अच्छी बारिश अपेक्षित. फसल कटाई जल्दी पूरी करें.',
      en: 'Good rainfall expected in next 3 days. Complete harvesting early.',
    },
  },
  {
    id: 'a2',
    type: 'warning',
    icon: '🐛',
    title: { mr: 'कीड जोखीम', hi: 'कीट जोखिम', en: 'Pest Risk' },
    message: {
      mr: 'आर्द्रता वाढल्याने कीड येण्याची शक्यता. कीटकनाशक फवारणी करा.',
      hi: 'नमी बढ़ने से कीट का खतरा. कीटनाशक छिड़काव करें.',
      en: 'High humidity increases pest risk. Consider preventive pesticide spray.',
    },
  },
  {
    id: 'a3',
    type: 'tip',
    icon: '💡',
    title: { mr: 'शेती टिप', hi: 'खेती टिप', en: 'Farming Tip' },
    message: {
      mr: 'सोयाबीन नंतर चिकपी पेरणी करा. मातीची सुधारणा होते.',
      hi: 'सोयाबीन के बाद चना बोनाई करें. मिट्टी सुधरती है.',
      en: 'Plant chickpea after soybean to improve soil nitrogen levels.',
    },
  },
  {
    id: 'a4',
    type: 'info',
    icon: '💰',
    title: { mr: 'बाजार संधी', hi: 'बाजार अवसर', en: 'Market Opportunity' },
    message: {
      mr: 'कांदा भाव वाढत आहे. साठा करून विकणे फायदेशीर.',
      hi: 'प्याज भाव बढ़ रहा है. भंडार कर बेचना फायदेमंद.',
      en: 'Onion prices are rising. Consider storing before selling.',
    },
  },
  {
    id: 'a5',
    type: 'tip',
    icon: '🌱',
    title: { mr: 'पाणी व्यवस्थापन', hi: 'पानी प्रबंधन', en: 'Water Management' },
    message: {
      mr: 'ठिबक सिंचन वापरल्यास ४०% पाणी वाचते. उत्पन्न वाढते.',
      hi: 'ड्रिप सिंचाई से ४०% पानी बचता है. उपज बढ़ती है.',
      en: 'Drip irrigation saves up to 40% water and increases yield.',
    },
  },
];

export const soilTypes = [
  { value: 'black', labelKey: 'soilBlack' },
  { value: 'red', labelKey: 'soilRed' },
  { value: 'alluvial', labelKey: 'soilAlluvial' },
  { value: 'sandy', labelKey: 'soilSandy' },
  { value: 'unknown', labelKey: 'soilUnknown' },
] as const;

export const waterSources = [
  { value: 'rainfed', labelKey: 'waterRainfed' },
  { value: 'borewell', labelKey: 'waterBorewell' },
  { value: 'canal', labelKey: 'waterCanal' },
  { value: 'drip', labelKey: 'waterDrip' },
] as const;

export const seasons = [
  { value: 'kharif', labelKey: 'kharif' },
  { value: 'rabi', labelKey: 'rabi' },
  { value: 'summer', labelKey: 'summer' },
] as const;

export const defaultFarmerProfile = {
  name: '',
  phone: '',
  state: '',
  district: '',
  village: '',
  landArea: 0,
  soilType: '',
  waterSource: '',
  primaryCrops: [],
  experience: 0,
  annualIncome: 0,
  budget: 0,
  preferredSeason: '',
};
