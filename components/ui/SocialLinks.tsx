import { socialPaths } from "@/components/ui/icons";
import { site } from "@/lib/site";

export default function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {site.socials.map((s) => (
        <a
          key={s.icon}
          href={s.href}
          aria-label={s.label}
          target={s.href.startsWith("http") ? "_blank" : undefined}
          rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="social-icon-hover"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textDecoration: "none",
          }}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d={socialPaths[s.icon]} />
          </svg>
        </a>
      ))}
    </div>
  );
}
