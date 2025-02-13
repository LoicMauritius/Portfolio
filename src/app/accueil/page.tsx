import { mainStyle, accueilContainerStyle, accueilImageStyle, titlesContainerStyle, lineStyle, titleStyle, subTitleStyle } from '@/styles';
import MainImage from '../../../public/moi.webp';

export default function Home() {
    return (
        <main style={mainStyle}>
            <div style={accueilContainerStyle}>
                <div style={{
                    ...accueilImageStyle,
                    backgroundImage: `url(${MainImage.src})`,
                }}>
                </div>  {/* Pour la prod 'moi.webp' */}
                <div style={titlesContainerStyle}>
                    <h1 style={titleStyle}>Projets informatiques</h1>
                    <div style={lineStyle}></div>
                    <h2 style={subTitleStyle}>But informatique - <br />IUT Champs-sur-Marne</h2>
                </div>
            </div>
        </main>
    );
}
