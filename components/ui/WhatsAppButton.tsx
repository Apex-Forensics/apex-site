import { WhatsAppIcon } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import { site } from "@/lib/site";

type WhatsAppButtonProps = {
  label?: string;
  /** Visual size preset. */
  size?: "sm" | "md";
  /** Extra styles merged onto the anchor (e.g. spacing). */
  style?: React.CSSProperties;
};

const sizes = {
  sm: { padding: "8px 16px", fontSize: "13px", icon: 16 },
  md: { padding: "12px 24px", fontSize: "14px", icon: 18 },
} as const;

export default function WhatsAppButton({
  label = "Chat on WhatsApp",
  size = "md",
  style,
}: WhatsAppButtonProps) {
  const s = sizes[size];
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: colors.whatsapp,
        color: colors.white,
        padding: s.padding,
        borderRadius: "4px",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: s.fontSize,
        ...style,
      }}
    >
      <WhatsAppIcon width={s.icon} height={s.icon} />
      {label}
    </a>
  );
}
