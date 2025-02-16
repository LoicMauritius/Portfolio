import Image from "next/image";
import { ProjectsListStyle } from "@/styles";
import { ProjectDisplayer, ProjectDisplayerProps } from "./ProjectDisplayer";

export type ProjectsListProps = {
    projects: ProjectDisplayerProps[]
};

export const ProjectsList = ({
    projects
}: ProjectsListProps) => {
    return (
        <div style={ProjectsListStyle}>
            {projects.map((project, index) => (
                <>
                    <ProjectDisplayer 
                        key={`project-container-${project.title}-${index}`}
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
            ))}
        </div>
    );
};
