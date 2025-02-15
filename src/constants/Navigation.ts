import { useTranslation } from "react-i18next"; // Importation du hook de traduction

export const NAVBUTTONS = () => {
  const { t } = useTranslation();

  const titres = t("titres", { returnObjects: true }) as { [key: string]: string };
  console.log("Titres : ", titres)

  const navButtons = Object.keys(titres).map((key:string) => {
    const title = key;
    return title.charAt(0).toUpperCase() + title.slice(1); 
  });

  return navButtons;
};