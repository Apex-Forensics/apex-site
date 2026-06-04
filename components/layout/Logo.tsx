import Link from "next/link";
import { colors } from "@/lib/colors";

type LogoProps = {
  /** Diameter of the circular badge in pixels. */
  size?: number;
};

export default function Logo({ size = 42 }: LogoProps) {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      <div style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: colors.gold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: `${Math.round(size * 0.38)}px`,
        flexShrink: 0,
      }}>A</div>
      <div>
        <div style={{ color: "white", fontWeight: "bold", fontSize: "15px", lineHeight: 1.1 }}>
          APEX FORENSIC
        </div>
        <div style={{ color: colors.gold, fontSize: "11px", letterSpacing: "0.05em" }}>
          &amp; FINANCIAL INVESTIGATIONS
        </div>
      </div>
    </Link>
  );
}
