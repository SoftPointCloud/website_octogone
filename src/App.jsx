import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SiteMeta from "./components/SiteMeta";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const PAGE_META = {
  Home: {
    title: "Octogone Hospitality Management | Home",
    description:
      "Octogone Hospitality Management develops and manages exceptional hotel properties in Morocco.",
  },
  Portfolio: {
    title: "Portfolio | Octogone Hospitality Management",
    description:
      "Explore Octogone's hospitality portfolio, including flagship hotel properties in Marrakech.",
  },
  Contact: {
    title: "Contact | Octogone Hospitality Management",
    description:
      "Contact Octogone Hospitality Management to discuss development, management, and investment opportunities.",
  },
};

export default function App() {
  const [current, setCurrentRaw] = useState("Home");

  const setCurrent = (page) => {
    setCurrentRaw(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <SiteMeta title={PAGE_META[current].title} description={PAGE_META[current].description} />
      <header>
        <Nav current={current} setCurrent={setCurrent} />
      </header>

      <main>
        {current === "Home" && <Home setCurrent={setCurrent} />}
        {current === "Portfolio" && <Portfolio />}
        {current === "Contact" && <Contact />}
      </main>

      <Footer setCurrent={setCurrent} />
    </>
  );
}