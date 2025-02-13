import { Header } from "@/components";
import { NAVBUTTONS } from "@/constants"; 
import { globalStyle, bodyStyle } from "@/styles"; 

export default function WebLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ ...globalStyle, ...bodyStyle }}>
        <Header navButton={NAVBUTTONS} activeButton={NAVBUTTONS[1]} />
        {children} 
      </body>
    </html>
  );
}