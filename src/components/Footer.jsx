import LogoIcon from "./LogoIcon";
import COLORS from "../data/colors";

const NAV_LINKS = ["Home", "Portfolio", "Contact"];

export default function Footer({ setCurrent }) {
  return (
    <footer
      style={{
        background: COLORS.navyLight,
        borderTop: `1px solid rgba(77,212,191,0.14)`,
        padding: "48px 24px",
      }}
    >
      <div className="footer-inner" style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24,
      }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
          onClick={() => setCurrent("Home")}
        >
          <LogoIcon size={28} />
          <div>
            <div
              className="serif"
              style={{
                fontSize: 14,
                color: COLORS.white,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Octogone
            </div>
            <div
              style={{
                fontSize: 8,
                color: COLORS.textMuted,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Hospitality Management
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              onClick={() => {
                setCurrent(l);
                window.scrollTo(0, 0);
              }}
              style={{
                background: "none",
                border: "none",
                color: COLORS.textMuted,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.textMuted)}
            >
              {l}
            </button>
          ))}
        </div>

        <div style={{ fontSize: 11, color: COLORS.textMuted, fontWeight: 300 }}>
          © 2026 Octogone Hospitality
        </div>
      </div>
    </footer>
  );
}