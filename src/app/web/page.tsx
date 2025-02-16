"use client";

import { Header, MainTitle, ProjectsList } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle } from "@/styles";
import { ProjectDisplayerProps } from "@/components";

export default function Web() {

    const { t } = useLanguageDetection();

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
  