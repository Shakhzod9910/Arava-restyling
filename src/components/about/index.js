import Image from "next/image"
import market from "../../assets/icons/market.svg"
import tv from "../../assets/icons/tv.svg"
import envelope from "../../assets/icons/envelope.svg"
const About = () => {


    return (
        <section className="about" id="about">
            <div className="wrapper">
                <div className="about-wrapper container" >
                    <div className="header">
                        <h1>Platforma haqida</h1>
                        <p>Quyida biz sizga Arava ilovasining afzalliklarini aytib o‘tamiz.</p>
                    </div>
            <ul>
                <li>
                    <div className="icon">
                        <Image src={market} alt="icon"/>
                    </div>
                    <div className="item">
                    <span>Omborxona nazorati</span>
                    <p>Omborxonadagi mahsulotlaringizni nazorat qila olish imkoniyati</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <Image src={tv} alt="icon"/>
                    </div>
                    <div className="item">
                    <span>Sotuv tahlili</span>
                    <p>Sotilayotgan va sotib olayotgan mahsulotlaringiz tahlili</p>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <Image src={envelope} alt="icon"/>
                    </div>
                    <div className="item">
                    <span>Talabnoma</span>
                    <p>Mahsulotlarni so‘rov yordamida so‘rash va sotib olish</p>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    </section>
  );
};
export default About;