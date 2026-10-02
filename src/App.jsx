import { useCallback, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Cursor from "./components/Cursor";
import QuickView from "./components/QuickView";
import Works from "./pages/works/Works";
import MostTrending from "./pages/mostTrending/MostTrending";
import DreamHome from "./pages/dreamHome/DreamHome";
import BestReal from "./pages/bestReal/BestReal";
import Mortgage from "./pages/calculator/Mortgage";
import Stories from "./pages/stories/Stories";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import CopyRight from "./pages/copy/CopyRight";
import logo from "./assets/imgs/logo.png";
import { useRevealAll } from "./hooks/useReveal";

const navData = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "listings", label: "Listings" },
  { id: "deals", label: "Deals" },
  { id: "calculator", label: "Mortgage" },
  { id: "contact", label: "Contact" },
];

function loadFavs() {
  try {
    return JSON.parse(localStorage.getItem("flora-favs") || "[]");
  } catch {
    return [];
  }
}

function App() {
  const [search, setSearch] = useState(null);
  const [favs, setFavs] = useState(loadFavs);
  const [quick, setQuick] = useState(null);
  const [preset, setPreset] = useState(null);
  useRevealAll();

  useEffect(() => {
    try {
      localStorage.setItem("flora-favs", JSON.stringify(favs));
    } catch {
      /* ignore */
    }
  }, [favs]);

  const toggleFav = useCallback(
    (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])),
    []
  );
  const closeQuick = useCallback(() => setQuick(null), []);
  const planMortgage = (price) => {
    setPreset({ price, t: Date.now() });
    setQuick(null);
    setTimeout(() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <NavBar logo={logo} items={navData} btn="Login" favCount={favs.length} />
      <main>
        <Hero onSearch={setSearch} />
        <Marquee />
        <Works />
        <MostTrending
          search={search}
          clearSearch={() => setSearch(null)}
          favs={favs}
          toggleFav={toggleFav}
          onOpen={setQuick}
        />
        <DreamHome />
        <BestReal onOpen={setQuick} />
        <Mortgage preset={preset} />
        <Stories />
        <Contact />
      </main>
      <Footer />
      <CopyRight />
      <QuickView
        item={quick}
        onClose={closeQuick}
        fav={quick ? favs.includes(quick.id) : false}
        onFav={toggleFav}
        onCalc={planMortgage}
      />
    </>
  );
}

export default App;
