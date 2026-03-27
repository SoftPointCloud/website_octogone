import Hero from "../sections/Hero";
import About from "../sections/About";
import PortfolioPreview from "../sections/PortfolioPreview";
import CTA from "../sections/CTA";

export default function Home({ setCurrent }) {
  return (
    <>
      <Hero setCurrent={setCurrent} />
      <About />
      <PortfolioPreview setCurrent={setCurrent} />
      <CTA setCurrent={setCurrent} />
    </>
  );
}
