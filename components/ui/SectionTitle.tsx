import { colors } from "@/lib/colors";

type SectionTitleProps = {
  title: string;
  light?: boolean;
};

export default function SectionTitle({ title, light = false }: SectionTitleProps) {
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <h2 style={{
        fontSize: "1.75rem",
        letterSpacing: "0.05em",
        marginBottom: "0.75rem",
        color: light ? "white" : colors.navy,
      }}>
        {title}
      </h2>
      <div style={{ width: "60px", height: "3px", background: colors.gold, margin: "0 auto" }} />
    </div>
  );
}