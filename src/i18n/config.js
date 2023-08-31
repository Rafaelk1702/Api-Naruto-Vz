// src/i18n/config.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n.use(initReactI18next).init({
    fallbackLng: 'es',
    lng: 'es',
    resources: {
        es: {
            translations: require('./locales/es/characters.json')
        },
        en: {
            translations: require('./locales/en/characters.json')
        },
    },
    ns: ['translations'],
    defaultNS: 'translations'
});
i18n.languages = ['es','en'];
export default i18n;