import Navbar from "../../src/components/Navbar";
import Header from "../../src/components/Header";
import About from "../../src/components/about";
import Howworks from "../../src/components/how-works";
import Views from "../../src/components/Views";
import Footer from "../../src/components/Footer";

const Main = () => {
 

  return (
    <section className="home">
      <Navbar/>
      <Header/>
      <About/>
      <Howworks/>
      <Views/>
      <Footer/>
    </section>
  );
};
export default Main;
