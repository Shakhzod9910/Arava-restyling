import Image from "next/image";
import Arava from "../../assets/images/Arava.svg"
import Arava2 from "../../assets/images/Arava2.svg"
import menu from "../../assets/icons/menu.svg"
import angelright from "../../assets/icons/angelright.svg"
import times from "../../assets/icons/times.svg"
import { useState, useEffect } from "react";
import scrollToElement from 'scroll-to-element'
const Navbar = () => {




     const [prevScrollPos, setPrevScrollPos] = useState(0);
     const [visible, setVisible] = useState(true);
     const [fixed, setFixed] = useState(false)
     const [actmenu, setActmenu] = useState('nav-wrapper navcontainer')
     const [active, setActive] = useState("notactive")
     // useEffect(() => {
     //      window.addEventListener('scroll', scrollFunc)
     //      return () => {
     //           window.removeEventListener('scroll', scrollFunc)
     //      }
     // }, [prevScrollPos])



     // const scrollFunc = () => {
     //      const currentScrollPos = window.pageYOffset;
     //      if (currentScrollPos > 0) {
     //           if (currentScrollPos > 100) {
     //                setHeght('small')
     //                if (currentScrollPos > prevScrollPos) {
     //                     setVisible(false)
     //                } else {
     //                     setVisible(true)
     //                     setFixed(true)
     //                }

     //           }
     //      } else {
     //           setVisible(true)
     //           setFixed(false)
     //           setHeght('large')
     //      }
     //      setPrevScrollPos(currentScrollPos);
     // };


     // const [current, setCurrent] = useState('')



     // useEffect(() => {
     //      window.scrollTo(0, 0)


     //      window.addEventListener('scroll', scrollFunc)
     //      return () => {
     //           window.removeEventListener('scroll', scrollFunc)
     //      }
     // }, [])



     const scrollToFunc = (el) => {
          scrollToElement(`#${el}`, {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
          setActmenu("nav-wrapper navcontainer")
     }

     const navActive = (evt) =>{
          setActmenu("nav-active nav-wrapper navcontainer")
     }
     const navRem = (evt) =>{
          setActmenu("nav-wrapper navcontainer")
     }


  return (
    <section className="navbar">
         <div className="menu-wrapper">
              <Image src={menu} alt="icon" onClick={navActive}/> 
         </div>
         <div className="logo2-wrapper">
               <Image src={Arava2} alt="img"/>
          </div>
         
      <div className={actmenu}>
          <div className="times-wrapper">
               <Image src={times} alt="img" onClick={navRem}/>
          </div>
        <div className="links">
          <ul>
            <li onClick={() => scrollToFunc('about')}>Platforma haqida <div className="angel-wrapper"><Image src={angelright} alt="img"/></div></li>
            <li onClick={() => scrollToFunc('views')}>Fikrlar <div className="angel-wrapper"><Image src={angelright} alt="img"/></div></li>
            <li onClick={() => scrollToFunc('download')}>Dasturni yuklab olish <div className="angel-wrapper"><Image src={angelright} alt="img"/></div></li>
          </ul>
          <div className="logo-wrapper">
               <Image src={Arava} alt="img"/>
          </div>
        </div>
        
        <div className="navigate">
          <span onClick={() => scrollToFunc('how-works')}>Bu qanday ishlaydi? <div className="angel-wrapper"><Image src={angelright} alt="img"/></div></span>
          <button onClick={() => scrollToFunc('start')}>Bog‘lanish</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
