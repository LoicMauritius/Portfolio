import { Header } from "@/components";
import { NAVBUTTONS } from "@/constants"; 
import { globalStyle, bodyStyle } from "@/styles"; 

export default function MobileLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ ...globalStyle, ...bodyStyle }}>
        <Header navButton={NAVBUTTONS} activeButton={NAVBUTTONS[2]} />
        {children} 
      </body>
    </html>
  );
}