import COLORS from "../data/colors";
import Divider from "../components/Divider";

const CARDS = [
  {
    icon: "◈",
    title: "Local Expertise",
    desc: "Deep knowledge of Moroccan markets, regulations, and guest expectations built over years of hands-on operations.",
  },
  {
    icon: "◇",
    title: "International Standards",
    desc: "Global hospitality best practices applied to every property, from revenue management to guest experience design.",
  },
  {
    icon: "◆",
    title: "End-to-End Capability",
    desc: "From site selection and concept development through to daily operations and asset optimization.",
  },
  {
    icon: "◉",
    title: "Proven Returns",
    desc: "A track record of properties that deliver strong financial performance alongside exceptional guest satisfaction.",
  },
];

export default function WhyOctogone() {
  return (
    <section className="section" style={{ background: COLORS.navyLight, position: "relative" }}>
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
          Why Octogone
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
          Why Octogone
        </h2>

        <Divider style={{ margin: "0 auto 48px" }} />

        <div className="grid-2">
          {CARDS.map((card, i) => (
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
                {card.icon}
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
                {card.title}
              </div>
              <div style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.7, fontWeight: 300 }}>
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
