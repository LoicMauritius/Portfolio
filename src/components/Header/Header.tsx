import { NavBar } from "./NavBar";
import { headerStyle } from "@/styles";

type HeaderProps = {
    navButton: string[];
    activeButton: string; 
};

export const Header = ({ navButton, activeButton }: HeaderProps) => {
    return (
        <header style={headerStyle}>
            <NavBar navButton={navButton} activeButton={activeButton} />
        </header>
    );
};
