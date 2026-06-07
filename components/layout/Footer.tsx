import Link from "next/link";
import Logo from "@/components/layout/Logo";
import SocialLinks from "@/components/ui/SocialLinks";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { PinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import { site, footer } from "@/lib/site";

const contactDetails = [
  { icon: <PinIcon width={16} height={16} />, text: site.contact.address },
  { icon: <PhoneIcon width={16} height={16} />, text: site.contact.phone },
  { icon: <MailIcon width={16} height={16} />, text: site.contact.email },
];

export default function Footer() {
  return (
    <footer>
      <div style={{ background: colors.navy, color: "white", padding: "4rem 0 2rem" }}>
        <div className="container-apex">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}>

            {/* Brand Column */}
            <div>
              <div style={{ marginBottom: "1rem" }}>
                <Logo size={72} />
              </div>

              <p style={{ color: colors.muted, fontSize: "13px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {footer.blurb}
              </p>

              <SocialLinks />
            </div>

            {/* Link Columns */}
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <h4 style={colHeader}>{column.heading}</h4>
                {column.links.map((link) => (
                  <Link key={link.label} href={link.href} style={footerLink}>{link.label}</Link>
                ))}
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 style={colHeader}>Contact Us</h4>
              {contactDetails.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ color: colors.gold, marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: colors.muted, fontSize: "13px", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}

              <WhatsAppButton size="sm" style={{ marginTop: "1rem" }} />
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <p style={{ color: colors.muted, fontSize: "12px" }}>
              © {new Date().getFullYear()} {site.name}. All Rights Reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {footer.legal.map((link) => (
                <Link key={link.href} href={link.href} style={{ color: colors.muted, fontSize: "12px", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={site.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        className="whatsapp-hover"
        style={{
          position: "fixed", bottom: "24px", right: "24px",
          width: "56px", height: "56px", borderRadius: "50%",
          background: colors.whatsapp, color: "white",
          display: "flex", alignItems: "center", justifyContent: "center",
          textDecoration: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 999,
        }}
      >
        <WhatsAppIcon width={24} height={24} />
      </a>
    </footer>
  );
}

const colHeader: React.CSSProperties = {
  color: "white", fontWeight: "bold", marginBottom: "1rem",
  fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.05em",
};

const footerLink: React.CSSProperties = {
  display: "block", color: colors.muted, textDecoration: "none",
  fontSize: "13px", marginBottom: "8px",
};
