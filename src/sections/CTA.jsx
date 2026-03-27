import LogoIcon from "../components/LogoIcon";
import Button from "../components/Button";
import COLORS from "../data/colors";

export default function CTA({ setCurrent }) {
  return (
    <section
      style={{
        background: COLORS.navyMid,
        padding: "80px 24px",
        textAlign: "center",
        borderTop: `1px solid rgba(77,212,191,0.2)`,
        borderBottom: `1px solid rgba(77,212,191,0.2)`,
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LogoIcon size={36} />
        </div>
        <h2
          className="serif"
          style={{
            fontSize: 28,
            color: COLORS.white,
            fontWeight: 400,
            margin: "24px 0 16px",
          }}
        >
          Let's Create Something Exceptional
        </h2>
        <p
          style={{
            fontSize: 14,
            color: COLORS.textMuted,
            lineHeight: 1.8,
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          Whether you're exploring hospitality investment in Morocco, seeking
          operational expertise for an existing property, or envisioning a new
          development — we'd welcome a conversation.
        </p>
        <Button variant="filled" onClick={() => setCurrent("Contact")}>
          Explore Opportunities
        </Button>
      </div>
    </section>
  );
}