import Image from "next/image";
import { ProjectsListStyle } from "@/styles";
import { ProjectDisplayer, ProjectDisplayerProps } from "./ProjectDisplayer";

export type ProjectsListProps = {
    pathname:string,
    projects: ProjectDisplayerProps[]
};

export const ProjectsList = ({
    pathname,
    projects
}: ProjectsListProps) => {
    return (
        <div key={`projects-${pathname}`} style={ProjectsListStyle}>
            {projects.map((project, index) => (
                <>
                    <ProjectDisplayer 
                        key={`project-container-${project.title}-${index}`}
                        title={project.title} 
                        pathname={pathname}
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
