// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Langue par défaut
    lng: "en", // Langue par défaut (tu pourras la changer dynamiquement)
    debug: true,
    interpolation: {
      escapeValue: false, // React se charge de l'échappement
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}.json", // Où charger les fichiers de traduction (si tu utilises des fichiers JSON)
    },
    resources: {
      en: {
        translation: require('@/assets/en.json'), // ou un import direct de ton fichier JSON
      },
      fr: {
        translation: require('@/assets/fr.json'), // idem pour le français
      },
    },
});

export default i18n;
