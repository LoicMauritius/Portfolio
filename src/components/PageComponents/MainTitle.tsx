import { lineStyle, mainTitleContainerStyle, titleStyle } from "@/styles";

type MainTitle = {
    title: string,
}

export const MainTitle = ({ title } : MainTitle) => {
    return(
        <div style={mainTitleContainerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <div style={lineStyle}></div>
        </div>
    );
}