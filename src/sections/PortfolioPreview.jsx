import { useState } from "react";
import Button from "../components/Button";
import COLORS from "../data/colors";
import PROPERTIES from "../data/properties";

function PropertyCard({ p }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${hov ? COLORS.gold : COLORS.border}`,
        transition: "border-color 0.4s",
      }}
    >
      <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
        <img
          src={p.img}
          alt={p.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(10,22,40,0.9) 100%)",
          }}
        />
        <div
          className="label-sm"
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: "4px 14px",
            color: p.status === "Operating" ? COLORS.teal : COLORS.gold,
            border: `1px solid ${p.status === "Operating" ? COLORS.teal : COLORS.gold}`,
            background: "rgba(10,22,40,0.6)",
          }}
        >
          {p.status}
        </div>
      </div>

      <div style={{ padding: "28px 28px 32px" }}>
        <div className="label-sm" style={{ color: COLORS.teal, letterSpacing: 3, marginBottom: 8 }}>
          {p.category}
        </div>
        <h3
          className="serif"
          style={{ fontSize: 22, color: COLORS.white, fontWeight: 400, margin: "0 0 4px" }}
        >
          {p.name}
        </h3>
        <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 16 }}>
          {p.location}
        </div>
        <p style={{ fontSize: 13, color: COLORS.textMuted, lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
          {p.description}
        </p>
        {p.website && (
          <div style={{ marginTop: 16 }}>
            <a
              href={`https://${p.website}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 11, color: COLORS.gold, letterSpacing: 1 }}
            >
              {p.website} ↗
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioPreview({ setCurrent }) {
  return (
    <section className="section" style={{ background: COLORS.navy }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="label" style={{ color: COLORS.teal, marginBottom: 20 }}>
            Portfolio
          </div>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              color: COLORS.white,
              fontWeight: 400,
              margin: 0,
            }}
          >
            Our Properties
          </h2>
        </div>

        <div className="grid-2">
          {PROPERTIES.map((p, i) => (
            <PropertyCard key={i} p={p} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button onClick={() => setCurrent("Portfolio")}>View Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}