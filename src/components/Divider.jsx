import COLORS from "../data/colors";

export default function Divider({ style = {} }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
        ...style,
      }}
    >
      <div style={{ width: 24, height: 1, background: COLORS.gold }} />
      <div
        style={{
          width: 4,
          height: 4,
          background: COLORS.teal,
          transform: "rotate(45deg)",
        }}
      />
      <div style={{ width: 24, height: 1, background: COLORS.gold }} />
    </div>
  );
}