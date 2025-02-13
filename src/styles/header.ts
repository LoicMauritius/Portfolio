import { theme } from "./theme";

export const headerStyle: React.CSSProperties = {
    boxSizing: "border-box",
    padding: "0px 40px",
    width: "calc(100% - 60px)", // ✅ Ajuste pour compenser les marges
    display: "flex",
    flexDirection: "row",
    borderRadius: 40,
    boxShadow: "3px 4px 4px 2px rgba(48, 51, 46, 0.20)",
};

export const navStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    margin: 0,
    padding: 0,
};

export const ulStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    margin: 0,
    padding: 0,
};

export const buttonStyle: React.CSSProperties = {
    display: "inline-block", 
    margin: 0, 
    padding: "20px 30px", 
    textAlign: "center", 
    fontFamily: theme.fonts.mono, 
    textDecoration: "none",
    fontSize: theme.sizes.h3, 
    color: theme.colors.text, 
    listStyle: "none", 
    cursor: "pointer",
    background: "transparent", 
    border: "none", 
};

export const buttonActiveStyle: React.CSSProperties = {
    ...buttonStyle,
    borderBottom: `5px solid ${theme.colors.important}`,
    fontWeight: "bold",
};