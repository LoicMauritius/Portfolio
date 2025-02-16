import { useLanguageDetection } from "@/hook"
import { ProjectFonctionnalitiesContainerStyle, textDescriptionStyle, titleDescriptionStyle } from "@/styles";

export type FonctionnalitiesProps = {
    fonctionnalities:string[]
}

export const Fonctionnalities = ({
    fonctionnalities
}: FonctionnalitiesProps) => {
    const { t } = useLanguageDetection();

    return(
        <div style={ProjectFonctionnalitiesContainerStyle}>
            <h2 style={titleDescriptionStyle}>{t("projects.titres.fonctionnalitées")}</h2>
            <ul>
                {fonctionnalities.map((value ) => <li key={`fonctionnalitie-${value}`} style={textDescriptionStyle}>{value}</li>)}
            </ul>
        </div>
    )
}