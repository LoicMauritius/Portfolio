import { LogosStyle } from "@/styles";
import Image from "next/image";

export type TechnologiesProps = {
    technologies: string[];
};

export const Technologies = ({
    technologies,
}: TechnologiesProps) => {
    return (
        <div style={LogosStyle}>
            {technologies.map((technologie) => <Image 
                key={`/technologies/${technologie}.png`} 
                src={`/technologies/${technologie}.png`} 
                alt={technologie} 
                width={0} // Next.js l'ignore car "sizes" est défini
                height={50} // Hauteur fixe
                sizes="(max-width: 768px) 40px, 60px" // 40px sur mobile, 60px sinon
                style={{ width: "auto" }}  />)}
        </div>
    );
};
