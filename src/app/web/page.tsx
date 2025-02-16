"use client";

import { Header, MainTitle, ProjectsList } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle } from "@/styles";
import { ProjectDisplayerProps } from "@/components";

export default function Web() {

    const { t } = useLanguageDetection();

    console.log("Type de t('projects.web'):", typeof t("projects.web"), t("projects.web"));
    console.log("projects.web: ", t("projects.web"))

    const projects = t("projects.web", { returnObjects: true }) as ProjectDisplayerProps[];

    return (
        <>
            <Header />
            <main style={mainStyle}>
                <MainTitle title={t("titres.web")} />
                <ProjectsList projects={projects} />
            </main>
        </>
    );
}
  