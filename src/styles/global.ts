import { theme } from "@/styles";

export const globalStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.mono,
    padding: 0,
    margin: 0,
    width: "100dvw",
};

export const bodyStyle: React.CSSProperties = {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 30px",
    width: "100dvw",
    maxWidth: "100dvw",
    overflowX: "hidden",
    height: "100dvh",
};

export const mainStyle: React.CSSProperties = {
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    height: "70dvh",
    width: "100%",
    padding: "0 135px",
    boxSizing: "border-box",
};

export const mainTitleContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
};