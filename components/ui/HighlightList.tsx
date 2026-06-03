import { ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";

export default function HighlightList({ items }: { items: string[] }) {
  return (
    <div style={{
      background: colors.offWhite,
      borderRadius: "12px",
      padding: "2rem",
      border: "1px solid #EEEEEE",
    }}>
      <h3 style={{
        fontSize: "16px",
        marginBottom: "1.5rem",
        color: colors.navy,
        paddingBottom: "0.75rem",
        borderBottom: `2px solid ${colors.gold}`,
      }}>
        What We Cover
      </h3>
      {items.map((point) => (
        <div key={point} style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          marginBottom: "1rem",
        }}>
          <div style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: colors.goldLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginTop: "2px",
          }}>
            <ArrowRight width={10} height={10} color={colors.gold} />
          </div>
          <span style={{ color: colors.greyDark, fontSize: "14px", lineHeight: 1.6 }}>{point}</span>
        </div>
      ))}
    </div>
  );
}