"use client";

import { Header, MainTitle } from "@/components";
import { useLanguageDetection } from "@/hook";
import { mainStyle } from "@/styles";

export default function Mobile() {
    const { t } = useLanguageDetection();
    return (
        <>
            <Header />
            <main style={mainStyle}>
                <MainTitle title={t("titres.mobile")} />
            </main>
        </>
    );
}
