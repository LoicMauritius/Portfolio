import { IBM_Plex_Mono, Jacques_Francois} from "next/font/google";

const jacquesFrancois = Jacques_Francois({
    weight: ['400'],
    variable: "--font-jacques-francois",
    subsets: ["latin"],
});

const IBMPlexMono = IBM_Plex_Mono({
    weight: ['400'],
    variable: "--font-roboto-mono",
    subsets: ['latin'],
    display: 'swap',
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
        jacques: jacquesFrancois.style.fontFamily,
        mono: IBMPlexMono.style.fontFamily,
    };

    // 🔤 Tailles de texte
    public readonly sizes = {
        h1: "70px",
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