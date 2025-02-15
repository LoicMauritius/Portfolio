// RootLayout.tsx - Composant Serveur
import { Header } from "@/components";
import { globalStyle, bodyStyle } from "@/styles";
import type { Metadata } from "next";

// Ajout du layout avec gestion de la langue côté client
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
