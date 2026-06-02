import { colors } from "@/lib/colors";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, subtitle, icon }: PageHeaderProps) {
  return (
    <section style={{
      background: colors.navy,
      paddingTop: "120px",
      paddingBottom: "60px",
    }}>
      <div className="container-apex" style={{ textAlign: "center" }}>
        {eyebrow && (
          <p style={{
            color: colors.gold,
            fontWeight: "bold",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            {eyebrow}
          </p>
        )}
        {icon && (
          <div style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "rgba(184,146,42,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}>
            {icon}
          </div>
        )}
        <h1 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>
          {title}
        </h1>
        <div style={{ width: "60px", height: "3px", background: colors.gold, margin: "0 auto 1.5rem" }} />
        {subtitle && (
          <p style={{
            color: colors.muted,
            maxWidth: "560px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "15px",
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}