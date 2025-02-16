import { theme } from "./theme";

export const ProjectsListStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "60px",
    padding: "30px 0",
};


export const ProjectDisplayerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
    padding: "20px 150px",
};

export const titleProjectStyle: React.CSSProperties = {
    color: theme.colors.title,
    fontFamily: theme.fonts.jacques,
    fontSize: theme.sizes.h2,
    fontWeight: 400,
    margin: 0,
    paddingTop: "10px",
    paddingBottom: "20px",
};

export const ProjectContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "50px",
};

export const ProjectMonoImageContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "2rem",
};

export const ProjectDescriptionContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "5px",
};

export const ProjectFonctionnalitiesContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "5px",
};

export const titleDescriptionStyle: React.CSSProperties = {
    color: theme.colors.subtitle,
    fontFamily: theme.fonts.mono,
    fontSize: theme.sizes.h3,
    fontWeight: 600,
    margin: "1.25rem 0"
};

export const textDescriptionStyle: React.CSSProperties = {
    margin: 0,
    color: theme.colors.text,
    fontFamily: theme.fonts.mono,
    fontSize: theme.sizes.text,
    fontWeight: 300,
};

export const LogosStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "15px",
};

