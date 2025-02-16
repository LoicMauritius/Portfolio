import Image from "next/image";
import { Description } from "./Description";
import { Fonctionnalities } from "./Fonctionnalities";
import { Technologies } from "./Technologies";
import { ProjectContainerStyle, ProjectDisplayerStyle, ProjectMonoImageContainerStyle, titleProjectStyle } from "@/styles";
import { ProjectDisplayerProps } from "./ProjectDisplayer";
import { mobileProjectImagesStyle } from "@/styles/mobile";

export const MobileProjectDisplayer = ({
    title,
    description,
    technologies,
    fonctionnalitees_principale,
    images,
}: ProjectDisplayerProps) => {
    return (
        <>
            <div style={ProjectDisplayerStyle} key={`mobile-${title}`}>
                <h2 style={titleProjectStyle}>{title}</h2>
                <div style={ProjectContainerStyle}>
                    <div style={mobileProjectImagesStyle}>
                        <Image 
                            src={`/mobile/${images[0]}`} 
                            alt={images[0]} 
                            width={225} 
                            height={500} 
                            style={{ borderRadius: "5px"}}
                        />
                        <Image 
                            src={`/mobile/${images[1]}`} 
                            alt={images[1]} 
                            width={225} 
                            height={500} 
                            style={{ borderRadius: "5px"}}
                        />
                    </div>
                    
                    <div style={ProjectMonoImageContainerStyle}>
                        <div>
                            <Description description={description} />
                            <Technologies technologies={technologies} />
                        </div>
                        <Fonctionnalities fonctionnalities={fonctionnalitees_principale} />
                    </div>
                </div>
            </div>
        </>
    );
};
