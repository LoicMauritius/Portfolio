import { theme } from "./theme";

export const accueilContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    padding: "20px 50px",
    justifyContent: "center",
};

export const accueilImageStyle: React.CSSProperties = {
    height: "auto", 
    width: "40%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(100%)", 
    backgroundColor: "#fff",
    border: `3px solid ${theme.colors.subtitle}`,
    borderRadius: '20px',
};

export const titlesContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    padding: "0px 50px",
    justifyContent: "center",
};

export const lineStyle: React.CSSProperties = {
    display: "flex",
    height: "5px",
    width: "80px",
    backgroundColor: theme.colors.title,
};

export const titleStyle: React.CSSProperties = {
    color: theme.colors.title,
    fontFamily: theme.fonts.jacques,
    fontSize: theme.sizes.h1,
    fontWeight: 400,
};

export const subTitleStyle: React.CSSProperties = {
    color: theme.colors.subtitle,
    fontFamily: theme.fonts.jacques,
    fontSize: theme.sizes.h2,
    fontWeight: 300,
};