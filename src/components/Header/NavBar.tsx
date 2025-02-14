import Link from "next/link";
import { navStyle, ulStyle, buttonStyle, buttonActiveStyle } from "@/styles";

type NavBarProps = {
    navButton: string[]; 
    activeButton: string; 
};
  
export const NavBar = ({ navButton, activeButton }: NavBarProps) => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                {navButton.map((button, index) => (
                    <Link key={index} style={ button === activeButton ? buttonActiveStyle : buttonStyle} href={`/${button.toLowerCase()}`} passHref>
                        {button}
                    </Link>
                ))}
            </ul>
        </nav>
    );
};
  