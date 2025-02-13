import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

class Theme {
    private static instance: Theme;

    // 🎨 Couleurs
    public readonly colors = {
        background: "#FFFBFC",
        title: "#010400",
        text: "#010400",
        subtitle: "#30332E",
        important: '#6FB8EC',
    };

    //NavigationColor
    public readonly navigationColor = {
        accueil: "#6FB8EC",
        web: '#EF8B4D',
        mobile: '#EF4D7B',
        applicatif: '#B44DEF',
    };

    // 🖋️ Fonts (liées aux variables CSS)
    public readonly fonts = {
        sans: geistSans.variable,
        mono: geistMono.variable,
    };

    // 🔤 Tailles de texte
    public readonly sizes = {
        h1: "80px",
        h2: "48px",
        h3: "24px",
        text: "20px",
    };

    private constructor() {}

    public static getInstance(): Theme {
        if (!Theme.instance) {
        Theme.instance = new Theme();
        }
        return Theme.instance;
    }
}

// Exportation de l'instance unique
export const theme = Theme.getInstance();