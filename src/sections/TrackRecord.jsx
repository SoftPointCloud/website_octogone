import Divider from "../components/Divider";
import COLORS from "../data/colors";

const STATS = [
  { value: "95%", label: "Average Occupancy" },
  { value: "4.1★", label: "Guest Rating" },
  { value: "3,300+", label: "Guest Reviews" },
  { value: "334", label: "Keys Managed" },
];

export default function TrackRecord() {
  return (
    <section className="section" style={{ background: COLORS.navy, position: "relative" }}>
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
          Track Record
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
          Proven Performance
        </h2>

        <Divider style={{ margin: "0 auto 28px" }} />

        <p
          style={{
            fontSize: 15,
            color: COLORS.textMuted,
            lineHeight: 1.9,
            maxWidth: 620,
            margin: "0 auto 56px",
            fontWeight: 300,
          }}
        >
          Our properties consistently outperform market benchmarks, combining
          operational excellence with exceptional guest satisfaction.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 160px",
                padding: "36px 24px",
                border: `1px solid ${COLORS.borderTeal}`,
                background: "rgba(77,212,191,0.06)",
                textAlign: "center",
              }}
            >
              <div
                className="serif"
                style={{ fontSize: 36, color: COLORS.gold, fontWeight: 400, marginBottom: 10 }}
              >
                {s.value}
              </div>
              <div className="label-sm" style={{ color: COLORS.textMuted, letterSpacing: 2 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
