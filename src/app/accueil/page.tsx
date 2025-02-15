"use client";

import { mainStyle, accueilContainerStyle, accueilImageStyle, titlesContainerStyle, lineStyle, titleStyle, subTitleStyle } from '@/styles';
import MainImage from '../../../public/moi.webp';
import { Header } from '@/components';
import { useLanguageDetection } from '@/hook';

export default function Home() {
    const { t } = useLanguageDetection();
    return (
        <>
            <Header />
            <main style={mainStyle}>
                <div style={accueilContainerStyle}>
                    <div style={{
                        ...accueilImageStyle,
                        backgroundImage: `url(${MainImage.src})`,
                    }}>
                    </div>  {/* Pour la prod 'moi.webp' */}
                    <div style={titlesContainerStyle}>
                        <h1 style={titleStyle}>{t("accueil.titre")}</h1>
                        <div style={lineStyle}></div>
                        <h2 style={subTitleStyle}>{t("accueil.sous-titre")}</h2>
                    </div>
                </div>
            </main>
        </>
    );
}
