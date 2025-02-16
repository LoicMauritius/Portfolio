import { globalStyle, bodyStyle } from "@/styles";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bienvenue sur mon portfolio ! Je m'appelle Mauritius Loic et je suis un étudiant en informatique passionné par le développement web. Venez me découvrir !",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ ...globalStyle, ...bodyStyle }}>
        {children} {/* Affiche les pages enfants */}
      </body>
    </html>
  );
}
