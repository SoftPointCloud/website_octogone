import logo from "../assets/logo.png";

export default function LogoIcon({ size = 40 }) {
  return (
    <img
      src={logo}
      alt="Octogone logo"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block" }}
    />
  );
}
