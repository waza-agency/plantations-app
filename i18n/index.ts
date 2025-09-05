import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import language files
import en from './languages/en';
import es from './languages/es';
import fr from './languages/fr';

// Import types for TypeScript support
import './types';

const resources = {
  en,
  es,
  fr,
};

// Get device locale safely
const getDeviceLanguage = () => {
  try {
    const locale = RNLocalize.getLocales()[0];
    return locale?.languageCode || 'en';
  } catch (error) {
    return 'en';
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(), // Use device language as default
    fallbackLng: 'en', // Fallback to English if language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;