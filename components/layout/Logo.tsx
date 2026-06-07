import Link from "next/link";
import Image from "next/image";

const LOGO_RATIO = 367 / 322;

type LogoProps = {
  /** Rendered height of the logo in pixels. */
  size?: number;
};

export default function Logo({ size = 56 }: LogoProps) {
  const width = Math.round(size * LOGO_RATIO);
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
      <Image
        src="/images/apex-logo.jpg"
        alt="Apex Forensic & Financial Investigations Ltd"
        width={width}
        height={size}
        priority
        style={{ height: `${size}px`, width: "auto", borderRadius: "6px" }}
      />
    </Link>
  );
}
