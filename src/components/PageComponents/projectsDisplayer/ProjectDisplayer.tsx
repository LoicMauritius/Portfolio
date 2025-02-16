import Image from "next/image";
import { Description } from "./Description";
import { Fonctionnalities } from "./Fonctionnalities";
import { Technologies } from "./Technologies";
import { ProjectContainerStyle, ProjectDescriptionContainerStyle, ProjectDisplayerStyle, ProjectMonoImageContainerStyle, titleProjectStyle } from "@/styles";

export type ProjectDisplayerProps = {
    title: string;
    pathname: string;
    description: string;
    technologies: string[];
    fonctionnalitees_principale: string[];
    images: string[];
};

export const ProjectDisplayer = ({
    title,
    pathname,
    description,
    technologies,
    fonctionnalitees_principale,
    images,
}: ProjectDisplayerProps) => {
    return (
        <>
            {images.length === 2 ? 
                <div style={ProjectDisplayerStyle} key={`web-${title}`}>
                    <h2 style={titleProjectStyle}>{title}</h2>
                    <div style={ProjectContainerStyle}>
                    <Image 
                        src={`/${pathname}/${images[0]}`} 
                        alt={images[0]} 
                        width={500} 
                        height={300} 
                        style={{ objectFit: 'contain' }}
                    />
                        <div style={ProjectDescriptionContainerStyle}>
                            <Description description={description} />
                            <Technologies technologies={technologies} />
                        </div>
                    </div>
                    <div style={ProjectContainerStyle}>
                        <Fonctionnalities fonctionnalities={fonctionnalitees_principale} />
                        <Image src={`/${pathname}/${images[1]}`} alt={images[1]} width={500} height={300} />
                    </div>
                </div>
                :
                <div style={ProjectDisplayerStyle} key={`web-${title}`}>
                    <h2 style={titleProjectStyle}>{title}</h2>
                    <div style={ProjectContainerStyle}>
                        <div style={{ width: '500px', height: 'auto' }}>
                            <Image 
                                src={`/${pathname}/${images[0]}`} 
                                alt={images[0]} 
                                width={500} 
                                height={600} 
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
                </div>}
        </>
    );
};
