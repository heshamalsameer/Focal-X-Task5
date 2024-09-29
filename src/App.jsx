import "./App.css";
import BestReal from "./pages/bestReal/BestReal";
import CopyRight from "./pages/copy/CopyRight";
import DreamHome from "./pages/dreamHome/DreamHome";
import Footer from "./pages/footer/Footer";
import MostTrending from "./pages/mostTrending/MostTrending";
import Works from "./pages/works/Works";
import logo from "./assets/imgs/logo.png";
import NavBar from "./components/NavBar";
import menu from "./assets/imgs/menu.svg";
import close from "./assets/imgs/close.svg";
import Hero from "./components/Hero";

function App() {
  const navData = ["Home", "About", "Service", "New Property", "Contact"];
  return (
    <>
      <NavBar
        logo={logo}
        items={navData}
        btn="Login"
        menu={menu}
        close={close}
      />
      <Hero />
      <Works />
      <DreamHome />
      <MostTrending />
      <BestReal />
      <Footer />
      <CopyRight />
    </>
  );
}

export default App;
