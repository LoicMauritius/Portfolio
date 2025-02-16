"use client";

import { MainTitle, ProjectsList } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle } from "@/styles";
import { ProjectDisplayerProps } from "@/components";
import { usePathname } from "next/navigation";

export const MainDisplayer = () => {

    const { t } = useLanguageDetection();
    const pathname = usePathname().replace(/^\/+/, "");

    const projects = t(`projects.${pathname}`, { returnObjects: true }) as ProjectDisplayerProps[];
    
    return (
        <>
            <main style={mainStyle}>
                <MainTitle title={t(`titres.${pathname}`)} />
                <ProjectsList pathname={pathname} projects={projects} />
            </main>
        </>
    );
}
  