import { Header } from "@/components";
import { NAVBUTTONS } from "@/constants"; 
import { globalStyle, bodyStyle } from "@/styles"; 

export default function ApplicatifLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ ...globalStyle, ...bodyStyle }}>
        <Header navButton={NAVBUTTONS} activeButton={NAVBUTTONS[3]} />
        {children} 
      </body>
    </html>
  );
}