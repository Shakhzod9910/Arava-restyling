import Image from "next/image";
import Works from "../../assets/images/works.png"
import Ellipse from "../../assets/images/Ellipse.png"
import Ellipse2 from "../../assets/images/Ellipse2.png"
import Iphone from "../../assets/images/iPhone.png"
import AppStore from "../../assets/images/AppStore.svg"
import GooglePlay from "../../assets/images/GooglePlay.svg"
import right from "../../assets/icons/right.svg"
import market from "../../assets/images/market.png"
import require from "../../assets/images/require.png"


const Howworks = () => {

    return (
        <>
            <section className="how-works" id="how-works">
                <div className="how-works-wrapper container">
                    <div className="header">
                        <h1>Bu qanday ishlaydi?</h1>
                        <p>Bizga sizga dasturimiz qanday ishlashini tushuntiramiz</p>
                    </div>
                    <div className="main">
                        <div className="left">
                            <div className="img-wrapper">
                                <Image src={Works} alt="img" />
                            </div>
                        </div>
                        <div className="right">
                            <h1>Ro‘yxatdan o‘ting</h1>
                            <p>Dasturni yuklab olgandan so‘ng kerakli ma’lumotlarni kiritib ro‘yhatdan o‘ting va siz dasturimiz foydalanuvchisiga aylanasiz</p>
                            <h4>Dasturni yuklab olish uchun havola</h4>
                            <span><a href="https://play.google.com/store">Google Play orqali yuklab oling <div className="icon"><Image src={right} alt="icon"/></div></a></span>
                            <span><a href="https://www.apple.com/uz/app-store/">App Store orqali yuklab oling <div className="icon"><Image src={right} alt="icon"/></div></a></span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="market">
                <div className="market-wrapper container">
                    <div className="left">
                        <h1>Ulgurji bozor</h1>
                        <p>Bozor orqali o‘zingizga kerak bo‘lgan istalgan turdagi  mahsulotlarni toping</p>
                    </div>
                    <div className="right">
                        <div className="img-wrapper">
                            <Image src={market} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="require">
                <div className="require-wrapper container">
                <div className="right">
                        <div className="img-wrapper">
                            <Image src={require} alt="img"/>
                        </div>
                    </div>
                    <div className="left">
                        <h1>Talablar</h1>
                        <p>O‘zingizga kerak bo‘lgan mahsulotni so‘rov yuborish orqali qulay narxda sotib oling</p>
                    </div>
                </div>
            </div>

            <div className="downloads container" id="download">
                <div className="downloads-wrapper ">
                    <div className="bcg">
                        <Image src={Ellipse} alt="img" />
                    </div>
                    <div className="bcg1">
                        <Image src={Ellipse2} alt="img" />
                    </div>
                    <div className="left">
                        <h1>Hoziroq yuklab oling!</h1>
                        <p>Arava ilovasini yuklab olib, siz o‘zingiz uchun keng imkoniyatlarni ochasiz</p>
                        <div className="tool">
                            <div className="img">
                                <a href="https://www.apple.com/uz/app-store/"><Image src={AppStore} alt="img" /></a>
                            </div>
                            <div className="img">
                                <a href="https://play.google.com/store"><Image src={GooglePlay} alt="img" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-wrapper">
                            <Image src={Iphone} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};
export default Howworks;