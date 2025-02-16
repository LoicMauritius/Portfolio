"use client";

import { Header, MainTitle, ProjectDisplayerProps } from "@/components";
import { MobileProjectDisplayer } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle, ProjectsListStyle } from "@/styles";
import Image from "next/image";

export default function Mobile() {
    const { t } = useLanguageDetection();

    const projects = t("projects.mobile", { returnObjects: true }) as ProjectDisplayerProps[];

    return (
        <>
            <Header />
            <main style={mainStyle}>
                <MainTitle title={t("titres.mobile")} />
                <div style={ProjectsListStyle}>
                    {projects.map((project,index) => 
                    <>
                        <MobileProjectDisplayer 
                        key={`mobile-${project.title}`}
                        title={project.title} 
                        description={project.description} 
                        technologies={project.technologies} 
                        fonctionnalitees_principale={project.fonctionnalitees_principale} 
                        images={project.images} />
                        <Image
                            key={`seperator-project-${project.title}-${index}`}
                            src={"/projectSeparator.png"}
                            alt={"projectSeparator"}
                            width={0}
                            height={230} 
                            sizes="100vw"
                            style={{ objectFit: "fill", width: "100vw", maxHeight: "230px" }}
                        />
                    </>
                    )}
                </div>
            </main>
        </>
    );
}
