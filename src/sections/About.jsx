import Divider from "../components/Divider";
import COLORS from "../data/colors";

const SERVICES = [
  {
    title: "Development",
    desc: "End-to-end hotel development from concept and design through to opening day.",
    icon: "◇",
  },
  {
    title: "Management",
    desc: "Full operational management delivering consistent quality and financial performance.",
    icon: "◈",
  },
  {
    title: "Investment",
    desc: "Strategic partnerships with investors seeking premium hospitality assets.",
    icon: "◆",
  },
];

export default function About() {
  return (
    <section className="section" style={{ background: COLORS.navyLight, position: "relative" }}>
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1,
          height: 60,
          background: `linear-gradient(180deg, ${COLORS.teal}, transparent)`,
        }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div className="label" style={{ color: COLORS.teal, marginBottom: 20 }}>
          Our Approach
        </div>

        <h2
          className="serif"
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            color: COLORS.white,
            fontWeight: 400,
            lineHeight: 1.3,
            margin: "0 0 24px",
          }}
        >
          Where Vision Meets
          <br />
          Operational Excellence
        </h2>

        <Divider style={{ margin: "0 auto 32px" }} />

        <p
          style={{
            fontSize: 15,
            color: COLORS.textMuted,
            lineHeight: 1.9,
            maxWidth: 650,
            margin: "0 auto 48px",
            fontWeight: 300,
          }}
        >
          Octogone Hospitality Management is a Marrakech-based hotel management
          and development company. We combine deep local market knowledge with
          international hospitality standards to develop, manage, and elevate
          hotel properties that deliver exceptional guest experiences and strong
          investor returns.
        </p>

        <div className="grid-3">
          {SERVICES.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "36px 28px",
                border: `1px solid ${COLORS.borderTeal}`,
                background: "rgba(77,212,191,0.06)",
                textAlign: "center",
                transition: "border-color 0.3s",
              }}
            >
              <div style={{ fontSize: 24, color: COLORS.teal, marginBottom: 16 }}>
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: COLORS.gold,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.7, fontWeight: 300 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}