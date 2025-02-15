// useLanguageDetection.ts
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importation de i18n
import i18n from "@/utils";

export const useLanguageDetection = () => {
  const { t } = useTranslation(); // Utilisation du hook de traduction

  useEffect(() => {
    const userLang = navigator.language || navigator.language; // Récupère la langue du navigateur
    const lang = userLang.startsWith("fr") ? "fr" : "en"; // Si la langue est française, on choisit "fr", sinon "en"
    
    i18n.changeLanguage(lang); // Change la langue dynamiquement via i18n
  }, []); // L'effet se lance une seule fois au montage du composant

  return { t }; // On retourne directement la fonction `t`
};
