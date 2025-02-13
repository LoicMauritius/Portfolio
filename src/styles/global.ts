import { theme } from "@/styles";

export const globalStyle: React.CSSProperties = {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    fontFamily: theme.fonts.sans,
    padding: 0,
    margin: 0,
};

export const bodyStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    width: "100dvw",
    height: "100dvh",
};