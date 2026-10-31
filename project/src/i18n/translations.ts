export type Language = 'mr' | 'hi' | 'en';

export const languages: { code: Language; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'mr', label: 'Marathi', nativeLabel: 'मराठी', flag: '🇮🇳' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', flag: '🇮🇳' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
];

export type TranslationKey =
  | 'appName'
  | 'appTagline'
  | 'welcome'
  | 'welcomeSubtitle'
  | 'chooseLanguage'
  | 'continue'
  | 'getStarted'
  | 'next'
  | 'back'
  | 'skip'
  | 'save'
  | 'cancel'
  | 'edit'
  | 'delete'
  | 'submit'
  | 'loading'
  // Nav
  | 'navDashboard'
  | 'navCrops'
  | 'navFinance'
  | 'navMarket'
  | 'navSchemes'
  | 'navProfile'
  // Profile
  | 'farmerProfile'
  | 'farmerProfileSubtitle'
  | 'fullName'
  | 'phoneNumber'
  | 'state'
  | 'district'
  | 'village'
  | 'landArea'
  | 'acres'
  | 'soilType'
  | 'waterSource'
  | 'primaryCrops'
  | 'farmingExperience'
  | 'years'
  | 'annualIncome'
  | 'saveProfile'
  | 'profileSaved'
  | 'editProfile'
  | 'selectSoilType'
  | 'selectWaterSource'
  | 'soilBlack'
  | 'soilRed'
  | 'soilSandy'
  | 'soilLoamy'
  | 'soilClay'
  | 'soilAlluvial'
  | 'soilUnknown'
  | 'waterCanal'
  | 'waterBorewell'
  | 'waterRainfed'
  | 'waterRiver'
  | 'waterDrip'
  // Dashboard
  | 'dashboard'
  | 'dashboardGreeting'
  | 'farmOverview'
  | 'quickActions'
  | 'recentActivity'
  | 'todayWeather'
  | 'marketPulse'
  | 'upcomingTasks'
  | 'viewAll'
  | 'soilMoisture'
  | 'cropHealth'
  | 'incomeForecast'
  | 'riskLevel'
  | 'lowRisk'
  | 'mediumRisk'
  | 'highRisk'
  // Crops
  | 'cropRecommendations'
  | 'cropRecommendationsSubtitle'
  | 'recommendedForYou'
  | 'suitability'
  | 'expectedYield'
  | 'marketDemand'
  | 'waterNeeded'
  | 'growthDuration'
  | 'estimatedProfit'
  | 'seedCost'
  | 'whyRecommended'
  | 'season'
  | 'kharif'
  | 'rabi'
  | 'summer'
  | 'viewDetails'
  | 'confidence'
  // Finance
  | 'financialSimulator'
  | 'financialSimulatorSubtitle'
  | 'adjustParameters'
  | 'landSize'
  | 'expectedYieldPerAcre'
  | 'marketPrice'
  | 'totalInvestment'
  | 'totalRevenue'
  | 'netProfit'
  | 'profitPerAcre'
  | 'breakdown'
  | 'seedCosts'
  | 'fertilizerCost'
  | 'laborCost'
  | 'irrigationCost'
  | 'pesticideCost'
  | 'miscCost'
  | 'selectCrop'
  | 'profitScenario'
  | 'lossScenario'
  | 'breakEven'
  | 'perQuintal'
  | 'perAcre'
  // Market
  | 'marketPrices'
  | 'marketPricesSubtitle'
  | 'weatherRisks'
  | 'currentPrices'
  | 'priceTrend'
  | 'trendingUp'
  | 'trendingDown'
  | 'stable'
  | 'weatherForecast'
  | 'rainfall'
  | 'temperature'
  | 'humidity'
  | 'windSpeed'
  | 'riskAssessment'
  | 'riskDrought'
  | 'riskFlood'
  | 'riskPest'
  | 'riskFrost'
  | 'advisory'
  | 'today'
  | 'tomorrow'
  | 'day'
  | 'bestMarket'
  | 'sellNow'
  | 'wait'
  // Schemes
  | 'govtSchemes'
  | 'govtSchemesSubtitle'
  | 'actionPlan'
  | 'eligibleSchemes'
  | 'applyNow'
  | 'schemeBenefits'
  | 'eligibility'
  | 'howToApply'
  | 'documentsRequired'
  | 'actionPlanTitle'
  | 'actionPlanSubtitle'
  | 'step'
  | 'completed'
  | 'pending'
  | 'markComplete'
  | 'yourActionItems'
  | 'noSchemesFound'
  // Misc
  | 'theme'
  | 'darkMode'
  | 'lightMode'
  | 'language'
  | 'settings'
  | 'logout'
  | 'yes'
  | 'no'
  | 'quintal'
  | 'perMonth'
  | 'days'
  | 'degree'
  | 'mm'
  | 'kmph'
  | 'percent'
  | 'rupee'
  | 'high'
  | 'medium'
  | 'low'
  | 'veryHigh'
  | 'recommended'
  | 'notRecommended'
  | 'profileRequired'
  | 'profileRequiredDesc'
  | 'welcomeTagline'
  | 'welcomePlatformDesc'
  | 'farmingBudget'
  | 'preferredSeason'
  | 'selectSeason'
  | 'irrigationType'
  | 'selectIrrigation'
  | 'validationRequired'
  | 'validationName'
  | 'validationState'
  | 'validationDistrict'
  | 'validationVillage'
  | 'validationLand'
  | 'validationBudget'
  | 'validationSoil'
  | 'validationIrrigation'
  | 'validationSeason'
  | 'recentAlerts'
  | 'farmingTips'
  | 'recommendedCrops'
  | 'demoData'
  | 'estimatedInvestment'
  | 'cropRisks'
  | 'breakEvenPrice'
  | 'lastUpdated'
  | 'priceDate'
  | 'officialWebsite'
  | 'editCosts'
  | 'resetDefaults'
  | 'topRecommendations'
  | 'otherCrops'
  | 'viewAllCrops';

export type TranslationDict = Record<TranslationKey, string>;

const mr: TranslationDict = {
  appName: 'कृषीमित्र AI',
  appTagline: 'शेतकर्‍यांसाठी आधुनिक तंत्रज्ञान',
  welcome: 'स्वागत आहे',
  welcomeSubtitle: 'कृषीमित्र AI मध्ये आपले स्वागत आहे. शेतीसंबंधी अधिक चांगले निर्णय घेण्यासाठी आम्ही तुमची मदत करतो.',
  welcomeTagline: 'शहाणी शेती. समृद्ध जीवन.',
  welcomePlatformDesc: 'कृषीमित्र AI तुमच्या जमीनीसाठी योग्य पिके सांगते, नफा-तोटा सिम्युलेटर देते, बाजार भाव आणि हवामान जोखीम दाखवते, आणि सरकारी योजनांमध्ये मदत करते.',
  chooseLanguage: 'तुमची भाषा निवडा',
  continue: 'पुढे जा',
  getStarted: 'सुरुवात करा',
  next: 'पुढे',
  back: 'मागे',
  skip: 'वगळा',
  save: 'जतन करा',
  cancel: 'रद्द करा',
  edit: 'संपादन',
  delete: 'हटवा',
  submit: 'सबमिट',
  loading: 'लोड होत आहे...',

  navDashboard: 'डॅशबोर्ड',
  navCrops: 'पीक',
  navFinance: 'आर्थिक',
  navMarket: 'बाजार',
  navSchemes: 'योजना',
  navProfile: 'प्रोफाइल',

  farmerProfile: 'शेतकरी प्रोफाइल',
  farmerProfileSubtitle: 'तुमची शेतीची माहिती भरा',
  fullName: 'संपूर्ण नाव',
  phoneNumber: 'दूरध्वनी क्रमांक',
  state: 'राज्य',
  district: 'जिल्हा',
  village: 'गाव',
  landArea: 'जमीन क्षेत्र',
  acres: 'एकर',
  soilType: 'मातीचा प्रकार',
  waterSource: 'पाण्याचा स्रोत',
  primaryCrops: 'मुख्य पिके',
  farmingExperience: 'शेतीचा अनुभव',
  years: 'वर्षे',
  annualIncome: 'वार्षििक उत्पन्न',
  saveProfile: 'प्रोफाइल जतन करा',
  profileSaved: 'प्रोफाइल यशस्वीरित्या जतन केले!',
  editProfile: 'प्रोफाइल संपादित करा',
  selectSoilType: 'मातीचा प्रकार निवडा',
  selectWaterSource: 'पाण्याचा स्रोत निवडा',
  soilBlack: 'काळी माती',
  soilRed: 'लाल माती',
  soilSandy: 'वालुकी माती',
  soilLoamy: 'दोमट माती',
  soilClay: 'चिकण माती',
  soilAlluvial: 'गाळाची माती',
  soilUnknown: 'अज्ञात माती',
  waterCanal: 'कालवा',
  waterBorewell: 'बोअरवेल',
  waterRainfed: 'पावसाचे पाणी',
  waterRiver: 'नदी',
  waterDrip: 'ठिबक सिंचन',
  farmingBudget: 'शेती बजेट',
  preferredSeason: 'पसंतीचा हंगाम',
  selectSeason: 'हंगाम निवडा',
  irrigationType: 'सिंचन प्रकार',
  selectIrrigation: 'सिंचन निवडा',
  validationRequired: 'हे फील्ड आवश्यक आहे',
  validationName: 'कृपया तुमचे नाव भरा',
  validationState: 'कृपया राज्य निवडा',
  validationDistrict: 'कृपया जिल्हा भरा',
  validationVillage: 'कृपया गाव भरा',
  validationLand: 'जमीन आकार ० पेक्षा जास्त असावा',
  validationBudget: 'कृपया बजेट भरा',
  validationSoil: 'कृपया मातीचा प्रकार निवडा',
  validationIrrigation: 'कृपया सिंचन प्रकार निवडा',
  validationSeason: 'कृपया हंगाम निवडा',
  recentAlerts: 'अलीकडील सूचना',
  farmingTips: 'शेती टिप्स',
  recommendedCrops: 'शिफारस केलेली पिके',
  demoData: 'डेमो डेटा',
  estimatedInvestment: 'अंदाजित गुंतवणूक',
  cropRisks: 'संभाव्य जोखीम',
  breakEvenPrice: 'ब्रेक-इव्हन भाव',
  lastUpdated: 'शेवटची अद्ययावत',
  priceDate: 'भाव तारीख',
  officialWebsite: 'अधिकृत वेबसाइट',
  editCosts: 'खर्च संपादित करा',
  resetDefaults: 'पूर्वनिर्धारित करा',
  topRecommendations: 'सर्वोत्तम ३ शिफारशी',
  otherCrops: 'इतर पिके',
  viewAllCrops: 'सर्व पिके पहा',

  dashboard: 'डॅशबोर्ड',
  dashboardGreeting: 'नमस्कार',
  farmOverview: 'शेताचे आढावा',
  quickActions: 'त्वरित क्रिया',
  recentActivity: 'अलीकडील क्रिया',
  todayWeather: 'आजचे हवामान',
  marketPulse: 'बाजार स्थिती',
  upcomingTasks: 'आगामी कामे',
  viewAll: 'सर्व पहा',
  soilMoisture: 'मातीची ओलावा',
  cropHealth: 'पीक आरोग्य',
  incomeForecast: 'उत्पन्न अंदाज',
  riskLevel: 'जोखीम स्तर',
  lowRisk: 'कमी जोखीम',
  mediumRisk: 'मध्यम जोखीम',
  highRisk: 'जास्त जोखीम',

  cropRecommendations: 'पीक शिफारशी',
  cropRecommendationsSubtitle: 'तुमच्या जमीनीसाठी सर्वोत्तम पिके',
  recommendedForYou: 'तुमच्यासाठी शिफारस केलेले',
  suitability: 'योग्यता',
  expectedYield: 'अपेक्षित उत्पन्न',
  marketDemand: 'बाजार मागणी',
  waterNeeded: 'पाणी आवश्यक',
  growthDuration: 'वाढ कालावधी',
  estimatedProfit: 'अंदाजित नफा',
  seedCost: 'बियाणे खर्च',
  whyRecommended: 'शिफारसीचे कारण',
  season: 'हंगाम',
  kharif: 'खरीप',
  rabi: 'रब्बी',
  summer: 'उन्हाळा',
  viewDetails: 'तपशील पहा',
  confidence: 'विश्वास',

  financialSimulator: 'आर्थिक सिम्युलेटर',
  financialSimulatorSubtitle: 'तुमच्या पिकाचा नफा अंदाज घ्या',
  adjustParameters: 'घटक समायोजित करा',
  landSize: 'जमीन आकार',
  expectedYieldPerAcre: 'प्रति एकर अपेक्षित उत्पन्न',
  marketPrice: 'बाजार भाव',
  totalInvestment: 'एकूण गुंतवणूक',
  totalRevenue: 'एकूण उत्पन्न',
  netProfit: 'निव्वळ नफा',
  profitPerAcre: 'प्रति एकर नफा',
  breakdown: 'खर्चाचा तपशील',
  seedCosts: 'बियाणे खर्च',
  fertilizerCost: 'खत खर्च',
  laborCost: 'मजूर खर्च',
  irrigationCost: 'सिंचन खर्च',
  pesticideCost: 'कीटकनाशक खर्च',
  miscCost: 'इतर खर्च',
  selectCrop: 'पीक निवडा',
  profitScenario: 'नफा परिस्थिती',
  lossScenario: 'तोटा परिस्थिती',
  breakEven: 'ब्रेक-इव्हन',
  perQuintal: 'प्रति क्विंटल',
  perAcre: 'प्रति एकर',

  marketPrices: 'बाजार भाव',
  marketPricesSubtitle: 'बाजार आणि हवामान जोखीम',
  weatherRisks: 'हवामान जोखीम',
  currentPrices: 'सद्य भाव',
  priceTrend: 'भाव ट्रेंड',
  trendingUp: 'वाढत आहे',
  trendingDown: 'घसरत आहे',
  stable: 'स्थिर',
  weatherForecast: 'हवामान अंदाज',
  rainfall: 'पाऊस',
  temperature: 'तापमान',
  humidity: 'आर्द्रता',
  windSpeed: 'वाऱ्याचा वेग',
  riskAssessment: 'जोखीम मूल्यांकन',
  riskDrought: 'दुष्काळ जोखीम',
  riskFlood: 'पूर जोखीम',
  riskPest: 'कीड जोखीम',
  riskFrost: 'थंडी जोखीम',
  advisory: 'सल्ला',
  today: 'आज',
  tomorrow: 'उद्या',
  day: 'दिवस',
  bestMarket: 'सर्वोत्तम बाजार',
  sellNow: 'आता विका',
  wait: 'थांबा',

  govtSchemes: 'सरकारी योजना',
  govtSchemesSubtitle: 'तुमच्यासाठी पात्र योजना',
  actionPlan: 'कृती आराखडा',
  eligibleSchemes: 'पात्र योजना',
  applyNow: 'अर्ज करा',
  schemeBenefits: 'योजनेचे फायदे',
  eligibility: 'पात्रता',
  howToApply: 'अर्ज कसा करावा',
  documentsRequired: 'आवश्यक कागदपत्रे',
  actionPlanTitle: 'तुमचा कृती आराखडा',
  actionPlanSubtitle: 'पुढील पावले',
  step: 'पायरी',
  completed: 'पूर्ण',
  pending: 'प्रलंबित',
  markComplete: 'पूर्ण चिन्हांकित करा',
  yourActionItems: 'तुमची कृती आयटम',
  noSchemesFound: 'कोणतीही योजना आढळली नाही',

  theme: 'थीम',
  darkMode: 'डार्क मोड',
  lightMode: 'लाइट मोड',
  language: 'भाषा',
  settings: 'सेटिंग्ज',
  logout: 'बाहेर पडा',
  yes: 'होय',
  no: 'नाही',
  quintal: 'क्विंटल',
  perMonth: 'प्रति महिना',
  days: 'दिवस',
  degree: '°C',
  mm: 'मिमी',
  kmph: 'किमी/ता',
  percent: '%',
  rupee: '₹',
  high: 'जास्त',
  medium: 'मध्यम',
  low: 'कमी',
  veryHigh: 'खूप जास्त',
  recommended: 'शिफारस केलेले',
  notRecommended: 'शिफारस नाही',
  profileRequired: 'प्रोफाइल आवश्यक',
  profileRequiredDesc: 'कृपया प्रथम तुमची शेतकरी प्रोफाइल तयार करा',
};

const hi: TranslationDict = {
  appName: 'कृषिमित्र AI',
  appTagline: 'किसानों के लिए आधुनिक तकनीक',
  welcome: 'स्वागत है',
  welcomeSubtitle: 'कृषिमित्र AI में आपका स्वागत है। हम आपको खेती से जुड़े बेहतर निर्णय लेने में मदद करते हैं।',
  welcomeTagline: 'समझदार खेती. बेहतर जीवन.',
  welcomePlatformDesc: 'कृषिमित्र AI आपकी भूमि के लिए सही फसल बताता है, लाभ-हानि सिम्युलेटर देता है, बाजार भाव और मौसम जोखिम दिखाता है, और सरकारी योजनाओं में मदद करता है।',
  chooseLanguage: 'अपनी भाषा चुनें',
  continue: 'आगे बढ़ें',
  getStarted: 'शुरू करें',
  next: 'आगे',
  back: 'वापस',
  skip: 'छोड़ें',
  save: 'सहेजें',
  cancel: 'रद्द करें',
  edit: 'संपादन',
  delete: 'हटाएं',
  submit: 'जमा करें',
  loading: 'लोड हो रहा है...',

  navDashboard: 'डैशबोर्ड',
  navCrops: 'फसल',
  navFinance: 'वित्त',
  navMarket: 'बाजार',
  navSchemes: 'योजना',
  navProfile: 'प्रोफाइल',

  farmerProfile: 'किसान प्रोफाइल',
  farmerProfileSubtitle: 'अपनी खेती की जानकारी भरें',
  fullName: 'पूरा नाम',
  phoneNumber: 'फोन नंबर',
  state: 'राज्य',
  district: 'जिला',
  village: 'गांव',
  landArea: 'भूमि क्षेत्र',
  acres: 'एकड़',
  soilType: 'मिट्टी का प्रकार',
  waterSource: 'पानी का स्रोत',
  primaryCrops: 'मुख्य फसलें',
  farmingExperience: 'खेती का अनुभव',
  years: 'वर्ष',
  annualIncome: 'वार्षिक आय',
  saveProfile: 'प्रोफाइल सहेजें',
  profileSaved: 'प्रोफाइल सफलतापूर्वक सहेजा गया!',
  editProfile: 'प्रोफाइल संपादित करें',
  selectSoilType: 'मिट्टी का प्रकार चुनें',
  selectWaterSource: 'पानी का स्रोत चुनें',
  soilBlack: 'काली मिट्टी',
  soilRed: 'लाल मिट्टी',
  soilSandy: 'बलुई मिट्टी',
  soilLoamy: 'दोमट मिट्टी',
  soilClay: 'चिकनी मिट्टी',
  soilAlluvial: 'जलोढ़ मिट्टी',
  soilUnknown: 'अज्ञात मिट्टी',
  waterCanal: 'नहर',
  waterBorewell: 'बोरवेल',
  waterRainfed: 'बारिश का पानी',
  waterRiver: 'नदी',
  waterDrip: 'ड्रिप सिंचाई',
  farmingBudget: 'खेती बजट',
  preferredSeason: 'पसंदीदा मौसम',
  selectSeason: 'मौसम चुनें',
  irrigationType: 'सिंचाई प्रकार',
  selectIrrigation: 'सिंचाई चुनें',
  validationRequired: 'यह फ़ील्ड आवश्यक है',
  validationName: 'कृपया अपना नाम भरें',
  validationState: 'कृपया राज्य चुनें',
  validationDistrict: 'कृपया जिला भरें',
  validationVillage: 'कृपया गांव भरें',
  validationLand: 'भूमि आकार ० से अधिक हो',
  validationBudget: 'कृपया बजट भरें',
  validationSoil: 'कृपया मिट्टी का प्रकार चुनें',
  validationIrrigation: 'कृपया सिंचाई प्रकार चुनें',
  validationSeason: 'कृपया मौसम चुनें',
  recentAlerts: 'हाल की सूचनाएं',
  farmingTips: 'खेती टिप्स',
  recommendedCrops: 'अनुशंसित फसलें',
  demoData: 'डेमो डेटा',
  estimatedInvestment: 'अनुमानित निवेश',
  cropRisks: 'संभावित जोखिम',
  breakEvenPrice: 'ब्रेक-ईवन भाव',
  lastUpdated: 'अंतिम अद्यतन',
  priceDate: 'भाव तारीख',
  officialWebsite: 'आधिकारिक वेबसाइट',
  editCosts: 'लागत संपादित करें',
  resetDefaults: 'डिफ़ॉल्ट पर लौटें',
  topRecommendations: 'शीर्ष ३ सुझाव',
  otherCrops: 'अन्य फसलें',
  viewAllCrops: 'सभी फसलें देखें',

  dashboard: 'डैशबोर्ड',
  dashboardGreeting: 'नमस्ते',
  farmOverview: 'खेत की झलक',
  quickActions: 'त्वरित क्रियाएं',
  recentActivity: 'हाल की गतिविधि',
  todayWeather: 'आज का मौसम',
  marketPulse: 'बाजार स्थिति',
  upcomingTasks: 'आगामी काम',
  viewAll: 'सभी देखें',
  soilMoisture: 'मिट्टी की नमी',
  cropHealth: 'फसल स्वास्थ्य',
  incomeForecast: 'आय अनुमान',
  riskLevel: 'जोखिम स्तर',
  lowRisk: 'कम जोखिम',
  mediumRisk: 'मध्यम जोखिम',
  highRisk: 'अधिक जोखिम',

  cropRecommendations: 'फसल सुझाव',
  cropRecommendationsSubtitle: 'आपकी भूमि के लिए सर्वोत्तम फसलें',
  recommendedForYou: 'आपके लिए अनुशंसित',
  suitability: 'उपयुक्तता',
  expectedYield: 'अपेक्षित उपज',
  marketDemand: 'बाजार मांग',
  waterNeeded: 'पानी आवश्यक',
  growthDuration: 'वृद्धि अवधि',
  estimatedProfit: 'अनुमानित लाभ',
  seedCost: 'बीज लागत',
  whyRecommended: 'अनुशंसा का कारण',
  season: 'मौसम',
  kharif: 'खरीफ',
  rabi: 'रबी',
  summer: 'गर्मी',
  viewDetails: 'विवरण देखें',
  confidence: 'विश्वास',

  financialSimulator: 'वित्तीय सिम्युलेटर',
  financialSimulatorSubtitle: 'अपनी फसल का लाभ अनुमानित करें',
  adjustParameters: 'पैरामीटर समायोजित करें',
  landSize: 'भूमि आकार',
  expectedYieldPerAcre: 'प्रति एकड़ अपेक्षित उपज',
  marketPrice: 'बाजार भाव',
  totalInvestment: 'कुल निवेश',
  totalRevenue: 'कुल आय',
  netProfit: 'शुद्ध लाभ',
  profitPerAcre: 'प्रति एकड़ लाभ',
  breakdown: 'खर्च का विवरण',
  seedCosts: 'बीज लागत',
  fertilizerCost: 'उर्वरक लागत',
  laborCost: 'मजदूरी लागत',
  irrigationCost: 'सिंचाई लागत',
  pesticideCost: 'कीटनाशक लागत',
  miscCost: 'अन्य लागत',
  selectCrop: 'फसल चुनें',
  profitScenario: 'लाभ स्थिति',
  lossScenario: 'हानि स्थिति',
  breakEven: 'ब्रेक-ईवन',
  perQuintal: 'प्रति क्विंटल',
  perAcre: 'प्रति एकड़',

  marketPrices: 'बाजार भाव',
  marketPricesSubtitle: 'बाजार और मौसम जोखिम',
  weatherRisks: 'मौसम जोखिम',
  currentPrices: 'वर्तमान भाव',
  priceTrend: 'भाव ट्रेंड',
  trendingUp: 'बढ़ रहा',
  trendingDown: 'गिर रहा',
  stable: 'स्थिर',
  weatherForecast: 'मौसम पूर्वानुमान',
  rainfall: 'बारिश',
  temperature: 'तापमान',
  humidity: 'आर्द्रता',
  windSpeed: 'हवा की गति',
  riskAssessment: 'जोखिम मूल्यांकन',
  riskDrought: 'सूखा जोखिम',
  riskFlood: 'बाढ़ जोखिम',
  riskPest: 'कीट जोखिम',
  riskFrost: 'पाला जोखिम',
  advisory: 'सलाह',
  today: 'आज',
  tomorrow: 'कल',
  day: 'दिन',
  bestMarket: 'सर्वोत्तम बाजार',
  sellNow: 'अभी बेचें',
  wait: 'रुकें',

  govtSchemes: 'सरकारी योजना',
  govtSchemesSubtitle: 'आपके लिए पात्र योजना',
  actionPlan: 'कार्य योजना',
  eligibleSchemes: 'पात्र योजना',
  applyNow: 'आवेदन करें',
  schemeBenefits: 'योजना के लाभ',
  eligibility: 'पात्रता',
  howToApply: 'कैसे आवेदन करें',
  documentsRequired: 'आवश्यक दस्तावेज',
  actionPlanTitle: 'आपकी कार्य योजना',
  actionPlanSubtitle: 'अगले कदम',
  step: 'चरण',
  completed: 'पूर्ण',
  pending: 'लंबित',
  markComplete: 'पूर्ण चिह्नित करें',
  yourActionItems: 'आपकी कार्य वस्तुएं',
  noSchemesFound: 'कोई योजना नहीं मिली',

  theme: 'थीम',
  darkMode: 'डार्क मोड',
  lightMode: 'लाइट मोड',
  language: 'भाषा',
  settings: 'सेटिंग्स',
  logout: 'बाहर जाएं',
  yes: 'हां',
  no: 'नहीं',
  quintal: 'क्विंटल',
  perMonth: 'प्रति माह',
  days: 'दिन',
  degree: '°C',
  mm: 'मिमी',
  kmph: 'किमी/घं',
  percent: '%',
  rupee: '₹',
  high: 'अधिक',
  medium: 'मध्यम',
  low: 'कम',
  veryHigh: 'बहुत अधिक',
  recommended: 'अनुशंसित',
  notRecommended: 'अनुशंसित नहीं',
  profileRequired: 'प्रोफाइल आवश्यक',
  profileRequiredDesc: 'कृपया पहले अपनी किसान प्रोफाइल बनाएं',
};

const en: TranslationDict = {
  appName: 'KrishiMitra AI',
  appTagline: 'Modern technology for farmers',
  welcome: 'Welcome',
  welcomeSubtitle: 'Welcome to KrishiMitra AI. We help you make better farming decisions.',
  welcomeTagline: 'Smarter Farming. Better Livelihoods.',
  welcomePlatformDesc: 'KrishiMitra AI recommends the right crops for your land, simulates profit and loss, tracks market prices and weather risks, and helps you access government schemes.',
  chooseLanguage: 'Choose your language',
  continue: 'Continue',
  getStarted: 'Get Started',
  next: 'Next',
  back: 'Back',
  skip: 'Skip',
  save: 'Save',
  cancel: 'Cancel',
  edit: 'Edit',
  delete: 'Delete',
  submit: 'Submit',
  loading: 'Loading...',

  navDashboard: 'Dashboard',
  navCrops: 'Crops',
  navFinance: 'Finance',
  navMarket: 'Market',
  navSchemes: 'Schemes',
  navProfile: 'Profile',

  farmerProfile: 'Farmer Profile',
  farmerProfileSubtitle: 'Fill in your farm details',
  fullName: 'Full Name',
  phoneNumber: 'Phone Number',
  state: 'State',
  district: 'District',
  village: 'Village',
  landArea: 'Land Area',
  acres: 'acres',
  soilType: 'Soil Type',
  waterSource: 'Water Source',
  primaryCrops: 'Primary Crops',
  farmingExperience: 'Farming Experience',
  years: 'years',
  annualIncome: 'Annual Income',
  saveProfile: 'Save Profile',
  profileSaved: 'Profile saved successfully!',
  editProfile: 'Edit Profile',
  selectSoilType: 'Select soil type',
  selectWaterSource: 'Select water source',
  soilBlack: 'Black Soil',
  soilRed: 'Red Soil',
  soilSandy: 'Sandy Soil',
  soilLoamy: 'Loamy Soil',
  soilClay: 'Clay Soil',
  soilAlluvial: 'Alluvial Soil',
  soilUnknown: 'Unknown Soil',
  waterCanal: 'Canal',
  waterBorewell: 'Borewell',
  waterRainfed: 'Rainfed',
  waterRiver: 'River',
  waterDrip: 'Drip Irrigation',
  farmingBudget: 'Farming Budget',
  preferredSeason: 'Preferred Season',
  selectSeason: 'Select season',
  irrigationType: 'Irrigation Type',
  selectIrrigation: 'Select irrigation',
  validationRequired: 'This field is required',
  validationName: 'Please enter your name',
  validationState: 'Please select a state',
  validationDistrict: 'Please enter your district',
  validationVillage: 'Please enter your village',
  validationLand: 'Land size must be greater than 0',
  validationBudget: 'Please enter your budget',
  validationSoil: 'Please select a soil type',
  validationIrrigation: 'Please select an irrigation type',
  validationSeason: 'Please select a season',
  recentAlerts: 'Recent Alerts',
  farmingTips: 'Farming Tips',
  recommendedCrops: 'Recommended Crops',
  demoData: 'DEMO DATA',
  estimatedInvestment: 'Estimated Investment',
  cropRisks: 'Potential Risks',
  breakEvenPrice: 'Break-even Price',
  lastUpdated: 'Last updated',
  priceDate: 'Price as of',
  officialWebsite: 'Official Website',
  editCosts: 'Edit Costs',
  resetDefaults: 'Reset to defaults',
  topRecommendations: 'Top 3 Recommendations',
  otherCrops: 'Other Crops',
  viewAllCrops: 'View all crops',

  dashboard: 'Dashboard',
  dashboardGreeting: 'Hello',
  farmOverview: 'Farm Overview',
  quickActions: 'Quick Actions',
  recentActivity: 'Recent Activity',
  todayWeather: 'Today\'s Weather',
  marketPulse: 'Market Pulse',
  upcomingTasks: 'Upcoming Tasks',
  viewAll: 'View All',
  soilMoisture: 'Soil Moisture',
  cropHealth: 'Crop Health',
  incomeForecast: 'Income Forecast',
  riskLevel: 'Risk Level',
  lowRisk: 'Low Risk',
  mediumRisk: 'Medium Risk',
  highRisk: 'High Risk',

  cropRecommendations: 'Crop Recommendations',
  cropRecommendationsSubtitle: 'Best crops for your land',
  recommendedForYou: 'Recommended for you',
  suitability: 'Suitability',
  expectedYield: 'Expected Yield',
  marketDemand: 'Market Demand',
  waterNeeded: 'Water Needed',
  growthDuration: 'Growth Duration',
  estimatedProfit: 'Estimated Profit',
  seedCost: 'Seed Cost',
  whyRecommended: 'Why recommended',
  season: 'Season',
  kharif: 'Kharif',
  rabi: 'Rabi',
  summer: 'Summer',
  viewDetails: 'View Details',
  confidence: 'Confidence',

  financialSimulator: 'Financial Simulator',
  financialSimulatorSubtitle: 'Estimate your crop profit',
  adjustParameters: 'Adjust parameters',
  landSize: 'Land Size',
  expectedYieldPerAcre: 'Expected yield per acre',
  marketPrice: 'Market Price',
  totalInvestment: 'Total Investment',
  totalRevenue: 'Total Revenue',
  netProfit: 'Net Profit',
  profitPerAcre: 'Profit per Acre',
  breakdown: 'Cost Breakdown',
  seedCosts: 'Seed Cost',
  fertilizerCost: 'Fertilizer Cost',
  laborCost: 'Labor Cost',
  irrigationCost: 'Irrigation Cost',
  pesticideCost: 'Pesticide Cost',
  miscCost: 'Miscellaneous',
  selectCrop: 'Select Crop',
  profitScenario: 'Profit Scenario',
  lossScenario: 'Loss Scenario',
  breakEven: 'Break Even',
  perQuintal: 'per quintal',
  perAcre: 'per acre',

  marketPrices: 'Market Prices',
  marketPricesSubtitle: 'Market and weather risks',
  weatherRisks: 'Weather Risks',
  currentPrices: 'Current Prices',
  priceTrend: 'Price Trend',
  trendingUp: 'Trending Up',
  trendingDown: 'Trending Down',
  stable: 'Stable',
  weatherForecast: 'Weather Forecast',
  rainfall: 'Rainfall',
  temperature: 'Temperature',
  humidity: 'Humidity',
  windSpeed: 'Wind Speed',
  riskAssessment: 'Risk Assessment',
  riskDrought: 'Drought Risk',
  riskFlood: 'Flood Risk',
  riskPest: 'Pest Risk',
  riskFrost: 'Frost Risk',
  advisory: 'Advisory',
  today: 'Today',
  tomorrow: 'Tomorrow',
  day: 'Day',
  bestMarket: 'Best Market',
  sellNow: 'Sell Now',
  wait: 'Wait',

  govtSchemes: 'Govt Schemes',
  govtSchemesSubtitle: 'Schemes you are eligible for',
  actionPlan: 'Action Plan',
  eligibleSchemes: 'Eligible Schemes',
  applyNow: 'Apply Now',
  schemeBenefits: 'Scheme Benefits',
  eligibility: 'Eligibility',
  howToApply: 'How to Apply',
  documentsRequired: 'Documents Required',
  actionPlanTitle: 'Your Action Plan',
  actionPlanSubtitle: 'Next steps',
  step: 'Step',
  completed: 'Completed',
  pending: 'Pending',
  markComplete: 'Mark Complete',
  yourActionItems: 'Your Action Items',
  noSchemesFound: 'No schemes found',

  theme: 'Theme',
  darkMode: 'Dark Mode',
  lightMode: 'Light Mode',
  language: 'Language',
  settings: 'Settings',
  logout: 'Logout',
  yes: 'Yes',
  no: 'No',
  quintal: 'quintal',
  perMonth: 'per month',
  days: 'days',
  degree: '°C',
  mm: 'mm',
  kmph: 'km/h',
  percent: '%',
  rupee: '₹',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
  veryHigh: 'Very High',
  recommended: 'Recommended',
  notRecommended: 'Not Recommended',
  profileRequired: 'Profile Required',
  profileRequiredDesc: 'Please create your farmer profile first',
};

export const translations: Record<Language, TranslationDict> = { mr, hi, en };
