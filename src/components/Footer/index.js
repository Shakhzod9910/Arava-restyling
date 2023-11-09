import Image from "next/image";
import AppStore from "../../assets/images/AppStore.svg"
import GooglePlay from "../../assets/images/GooglePlay.svg"
import location from "../../assets/icons/location.svg"
import phone from "../../assets/icons/phone.svg"
import telegram from "../../assets/icons/telegram.svg"
import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"
import tiktok from "../../assets/icons/tiktok.svg"
import youtube from "../../assets/icons/youtube.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper navcontainer">
                <ul>
                    <li>
                        <h2>Ma’lumotlar</h2>
                        <span>Korporativ hamkorlik</span>
                        <span>Litsenziya</span>
                    </li>
                    <li>
                        <h2>Aloqa</h2>
                        <span><div className="icon"><Image src={location} alt="icon"/></div>Yunusobod, 4-kvartal 28-a uy</span>
                        <span><div className="icon"><Image src={phone} alt="icon"/></div>+998 91 779 22 21</span>
                    </li>
                    <li className="massengers-box">
                        <h2>Ijtimoiy tarmoqlar</h2>
                        <div className="massengers">
                            <div className="icon"><Image src={telegram} alt="icon"/></div>
                            <div className="icon"><Image src={instagram} alt="icon"/></div>
                            <div className="icon"><Image src={facebook} alt="icon"/></div>
                            <div className="icon"><Image src={tiktok} alt="icon"/></div>
                            <div className="icon"><Image src={youtube} alt="icon"/></div>
                        </div>
                    </li>
                    <li className="download">
                        <h2>Dasturni yuklab olish</h2>
                        <div className="download-box">
                        <div className="img-wrapper">
                            <a href="https://www.apple.com/uz/app-store/"><Image src={AppStore} alt="img" /></a>
                        </div>
                        <div className="img-wrapper">
                            <a href="https://play.google.com/store"><Image src={GooglePlay} alt="img" /></a>
                        </div>
                        </div>
                    </li>
                    <li className="massengers-box2">
                        <div className="massengers">
                            <div className="icon"><Image src={telegram} alt="icon"/></div>
                            <div className="icon"><Image src={instagram} alt="icon"/></div>
                            <div className="icon"><Image src={facebook} alt="icon"/></div>
                            <div className="icon"><Image src={tiktok} alt="icon"/></div>
                            <div className="icon"><Image src={youtube} alt="icon"/></div>
                        </div>
                    </li>
                </ul>
                <p>© 2021 "Arava" MChJ</p>
            </div>
        </footer>
    )
}

export default Footer