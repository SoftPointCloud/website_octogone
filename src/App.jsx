import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function App() {
  const [current, setCurrentRaw] = useState("Home");

  const setCurrent = (page) => {
    setCurrentRaw(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav current={current} setCurrent={setCurrent} />

      {current === "Home" && <Home setCurrent={setCurrent} />}
      {current === "Portfolio" && <Portfolio />}
      {current === "Contact" && <Contact />}

      <Footer setCurrent={setCurrent} />
    </>
  );
}