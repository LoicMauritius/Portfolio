import { useLanguageDetection } from "@/hook"
import { textDescriptionStyle, titleDescriptionStyle } from "@/styles";

export type DescriptionProps = {
    description:string
}

export const Description = ({
    description
}: DescriptionProps) => {
    const { t } = useLanguageDetection();

    return(
        <div>
            <h2 style={titleDescriptionStyle}>{t("projects.titres.description")}</h2>
            <p style={textDescriptionStyle}>
                {description}
            </p>
        </div>
    )
}