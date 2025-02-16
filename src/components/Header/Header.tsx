"use client";

import { NAVBUTTONS } from "@/constants";
import { NavBar } from "./NavBar";
import { headerStyle } from "@/styles";
import { usePathname } from "next/navigation";

export const Header = () => {
    const nav = NAVBUTTONS();
    const activeButton = usePathname().replace(/^\/+/, '');

    console.log("Active button: ", activeButton)

    return (
        <header style={headerStyle}>
            <NavBar navButton={nav} activeButton={activeButton} />
        </header>
    );
};
