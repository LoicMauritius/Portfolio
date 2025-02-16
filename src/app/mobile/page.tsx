"use client";

import { Header, MainTitle, ProjectDisplayerProps } from "@/components";
import { MobileProjectDisplayer } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle, ProjectsListStyle } from "@/styles";

export default function Mobile() {
    const { t } = useLanguageDetection();

    const projects = t("projects.mobile", { returnObjects: true }) as ProjectDisplayerProps[];

    return (
        <>
            <Header />
            <main style={mainStyle}>
                <MainTitle title={t("titres.mobile")} />
                <div style={ProjectsListStyle}>
                    {projects.map((project) => <MobileProjectDisplayer 
                        key={`mobile-${project.title}`}
                        title={project.title} 
                        description={project.description} 
                        technologies={project.technologies} 
                        fonctionnalitees_principale={project.fonctionnalitees_principale} 
                        images={project.images} />)}
                </div>
            </main>
        </>
    );
}
