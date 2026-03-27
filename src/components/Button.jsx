import { useState } from "react";
import COLORS from "../data/colors";

export default function Button({
  children,
  onClick,
  variant = "outline",
  type = "button",
  disabled = false,
  style: extra = {},
  className = "",
}) {
  const [hov, setHov] = useState(false);

  const base =
    variant === "filled"
      ? {
          background: hov ? COLORS.goldLight : COLORS.gold,
          border: `1px solid ${COLORS.gold}`,
          color: COLORS.navy,
          fontWeight: 600,
        }
      : {
          background: hov ? COLORS.gold : "none",
          border: `1px solid ${COLORS.gold}`,
          color: hov ? COLORS.navy : COLORS.gold,
          fontWeight: 400,
        };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={className}
      style={{
        ...base,
        padding: "14px 40px",
        fontSize: 12,
        letterSpacing: 3,
        textTransform: "uppercase",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.55 : 1,
        transition: "all 0.3s",
        ...extra,
      }}
    >
      {children}
    </button>
  );
}