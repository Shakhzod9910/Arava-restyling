import Image from "next/image";
import Google from "../../assets/images/google-play.svg"
import Appstore from "../../assets/images/app-store.svg"
import Phones from "../../assets/images/Phones.png"
import right from "../../assets/icons/right.svg"

const Header = () => {


  return (
    <section className="header">
      <div className="header-wrapper container">
        <div className="left-side">
            <h1>Taklif sizdan Talab bizdan</h1>
            <p>Arava ilovasi orqali istalgan joyda ulgurji narxlarda mahsulotlarni xarid qiling!</p>
            <span className="download">Dasturni yuklab oling <div className="icon"><Image src={right} alt="icon"/></div></span>
            <div className="stores">
                <div className="img-wrapper">
                  <a href="https://play.google.com/store">
                  <Image src={Google} alt="img"/>
                  </a>
                </div>
                <div className="img-wrapper">
                    <a href="https://www.apple.com/uz/app-store/"><Image src={Appstore} alt="img"/></a>
                </div>
            </div>
        </div>

        <div className="right-side">
          <div className="img-wrapper">
            <Image src={Phones} alt="img" />
          </div>
      </div>
      </div>
    </section>
   
  );
};
export default Header;