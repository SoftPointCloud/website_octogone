import { useState, useEffect } from "react";
import LogoIcon from "./LogoIcon";
import COLORS from "../data/colors";

const NAV_LINKS = ["Home", "Portfolio", "Contact"];

export default function Nav({ current, setCurrent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div
            style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }}
            onClick={() => {
              setMenuOpen(false);
              setCurrent("Home");
            }}
          >
            <LogoIcon size={scrolled ? 36 : 42} />
            <div>
              <div
                className="serif"
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: COLORS.white,
                  letterSpacing: 2.5,
                  textTransform: "uppercase",
                }}
              >
                Octogone
              </div>
              <div
                style={{
                  fontSize: 8.5,
                  color: COLORS.gold,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Hospitality Management
              </div>
            </div>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => setCurrent(l)}
                className={`nav-link ${current === l ? "active" : ""}`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu rendered outside nav to avoid stacking context issues */}
      {menuOpen && (
        <div className="mobile-menu open">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              background: "none",
              border: "none",
              color: COLORS.gold,
              fontSize: 28,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
          <LogoIcon size={48} />
          <div style={{ height: 24 }} />
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setMenuOpen(false);
                setCurrent(l);
              }}
              className={`mobile-menu-link ${current === l ? "active" : ""}`}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
