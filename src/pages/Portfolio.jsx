import COLORS from "../data/colors";
import PROPERTIES from "../data/properties";
import Divider from "../components/Divider";

export default function Portfolio() {
  return (
    <section style={{ background: COLORS.navy, paddingTop: 100 }}>
      {/* Page header */}
      <div style={{ textAlign: "center", padding: "60px 24px 48px" }}>
        <div className="label" style={{ color: COLORS.teal, marginBottom: 20 }}>
          Portfolio
        </div>
        <h1
          className="serif"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            color: COLORS.white,
            fontWeight: 400,
            margin: "0 0 16px",
          }}
        >
          Our Properties
        </h1>
        <p
          style={{
            fontSize: 15,
            color: COLORS.textMuted,
            maxWidth: 500,
            margin: "0 auto",
            fontWeight: 300,
            lineHeight: 1.7,
          }}
        >
          A curated collection of exceptional hotel properties in Morocco, each
          reflecting Octogone's commitment to excellence.
        </p>
      </div>

      {/* Property details */}
      {PROPERTIES.map((p, i) => (
        <div
          key={i}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 24px",
            borderTop: `1px solid ${COLORS.borderFaint}`,
          }}
        >
          <div className={`property-row ${i % 2 === 1 ? "reverse" : ""}`}>
            {/* Image */}
            <div className="property-img" style={{ position: "relative" }}>
              <img
                src={p.img}
                alt={p.name}
                style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "linear-gradient(180deg, transparent 60%, rgba(10,22,40,0.6) 100%)",
                }}
              />
              <div
                className="label-sm"
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  padding: "4px 14px",
                  color: p.status === "Operating" ? COLORS.teal : COLORS.gold,
                  border: `1px solid ${p.status === "Operating" ? COLORS.teal : COLORS.gold}`,
                  background: "rgba(10,22,40,0.6)",
                }}
              >
                {p.status}
              </div>
            </div>

            {/* Info */}
            <div className="property-info">
              <div
                className="label-sm"
                style={{ color: COLORS.teal, letterSpacing: 3, marginBottom: 12 }}
              >
                {p.category}
              </div>
              <h2
                className="serif"
                style={{ fontSize: 32, color: COLORS.white, fontWeight: 400, margin: "0 0 4px" }}
              >
                {p.name}
              </h2>
              <div style={{ fontSize: 14, color: COLORS.textMuted, marginBottom: 20 }}>
                {p.location}
              </div>

              <Divider style={{ justifyContent: "flex-start", marginBottom: 20 }} />

              <p
                style={{
                  fontSize: 14,
                  color: COLORS.textMuted,
                  lineHeight: 1.8,
                  fontWeight: 300,
                  margin: "0 0 28px",
                }}
              >
                {p.description}
              </p>

              {/* Stats */}
              <div className="property-stats">
                {p.stats.map((s, j) => (
                  <div key={j} className="property-stat">
                    <div className="serif" style={{ fontSize: 16, color: COLORS.gold }}>
                      {s.value}
                    </div>
                    <div className="label-sm" style={{ color: COLORS.textMuted, marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {p.website && (
                <a
                  href={`https://${p.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    fontSize: 11,
                    color: COLORS.gold,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    borderBottom: `1px solid ${COLORS.gold}`,
                    paddingBottom: 2,
                  }}
                >
                  Visit Website ↗
                </a>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Bottom note */}
      <div
        style={{
          padding: "60px 24px",
          textAlign: "center",
          borderTop: `1px solid ${COLORS.borderFaint}`,
        }}
      >
        <p style={{ fontSize: 14, color: COLORS.textMuted, fontStyle: "italic", fontWeight: 300 }}>
          Our portfolio continues to grow. For partnership inquiries, get in touch.
        </p>
      </div>
    </section>
  );
}