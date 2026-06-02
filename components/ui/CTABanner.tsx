import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";

type CTABannerProps = {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  title,
  subtitle,
  primaryLabel = "Get a Consultation",
  primaryHref = "/consultation",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section style={{ background: colors.navy, padding: "3.5rem 0" }}>
      <div className="container-apex" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        flexWrap: "wrap",
      }}>
        <div>
          <h3 style={{ color: "white", fontSize: "20px", marginBottom: "0.25rem" }}>
            {title}
          </h3>
          {subtitle && (
            <p style={{ color: colors.muted, fontSize: "14px" }}>{subtitle}</p>
          )}
        </div>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href={primaryHref} style={{
            background: colors.gold,
            color: "white",
            padding: "14px 28px",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "15px",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }} className="btn-hover">
            {primaryLabel} <ArrowRight width={16} height={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} style={{
              background: "transparent",
              color: "white",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }} className="btn-hover">
              {secondaryLabel} <ArrowRight width={16} height={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}