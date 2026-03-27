import LogoIcon from "../components/LogoIcon";
import Button from "../components/Button";
import Divider from "../components/Divider";
import COLORS from "../data/colors";

export default function Hero({ setCurrent }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 50%, ${COLORS.navy} 100%)`,
        position: "relative",
        textAlign: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      {/* Zellige-inspired background pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage: `
            repeating-linear-gradient(0deg, ${COLORS.teal} 0, ${COLORS.teal} 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, ${COLORS.teal} 0, ${COLORS.teal} 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(45deg, ${COLORS.gold} 0, ${COLORS.gold} 1px, transparent 1px, transparent 85px)
          `,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
        <div className="fade-in-up" style={{ marginBottom: 36, display: "flex", justifyContent: "center" }}>
          <LogoIcon size={72} />
        </div>

        <h1
          className="serif fade-in-up-delay-1"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 400,
            color: COLORS.white,
            lineHeight: 1.15,
            margin: "0 0 16px",
            letterSpacing: -0.5,
          }}
        >
          Creating Exceptional
          <br />
          <span style={{ color: COLORS.gold }}>Hospitality Assets</span>
        </h1>

        <div className="fade-in-up-delay-2">
          <Divider style={{ margin: "28px 0" }} />
        </div>

        <p
          className="fade-in-up-delay-2"
          style={{
            fontSize: 16,
            color: COLORS.textMuted,
            lineHeight: 1.8,
            maxWidth: 540,
            margin: "0 auto 48px",
            fontWeight: 300,
          }}
        >
          Octogone Hospitality Management builds, operates, and elevates hotel
          properties across Morocco — delivering memorable guest experiences and
          lasting value for stakeholders.
        </p>

        <div
          className="hero-buttons fade-in-up-delay-3"
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Button onClick={() => setCurrent("Portfolio")}>View Portfolio</Button>
          <Button variant="filled" onClick={() => setCurrent("Contact")}>
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Stats bar */}
      <div className="stats-bar fade-in-up-delay-3" style={{ position: "relative", zIndex: 2, marginTop: 80 }}>
        {[
          { value: "2", label: "Properties" },
          { value: "200+", label: "Rooms Managed" },
          { value: "Morocco", label: "Market Focus" },
          { value: "2004", label: "Founded" },
        ].map((s, i) => (
          <div key={i} className="stat-item">
            <div className="serif" style={{ fontSize: 28, color: COLORS.gold, fontWeight: 400 }}>
              {s.value}
            </div>
            <div className="label-sm" style={{ color: COLORS.textMuted, marginTop: 4 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}