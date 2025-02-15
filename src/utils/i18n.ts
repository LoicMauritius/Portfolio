import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Permet à react-i18next de se connecter à i18next
  .init({
    fallbackLng: "en", // Langue par défaut
    lng: "en", // Langue initiale (tu pourras la changer dynamiquement)
    debug: true,
    interpolation: {
      escapeValue: false, // React se charge de l'échappement
    },
    backend: {
      loadPath: "/assets/{{lng}}.json", // Chemin pour charger les fichiers JSON
    },
    resources: {
      en: {
        translation: require('@/assets/en.json'), // Importation du fichier en.json
      },
      fr: {
        translation: require('@/assets/fr.json'), // Importation du fichier fr.json
      },
    },
});

export default i18n;