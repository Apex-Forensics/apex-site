import Link from "next/link";
import { colors } from "@/lib/colors";
import {
  PinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  socialPaths,
} from "@/components/ui/icons";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Services", href: "/services" },
  { label: "Resource Hub", href: "/resource-hub" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Forensic Accounting", href: "/services/forensic-accounting" },
  { label: "Fraud Investigation", href: "/services/fraud-investigation" },
  { label: "Financial Intelligence", href: "/services/financial-intelligence" },
  { label: "Digital Forensics", href: "/services/digital-forensics" },
  { label: "Risk Advisory", href: "/services/risk-advisory" },
  { label: "Internal Control Review", href: "/services/risk-advisory" },
];

const resources = [
  { label: "Fraud Awareness", href: "/resource-hub" },
  { label: "Financial Hygiene", href: "/resource-hub" },
  { label: "Cybersecurity", href: "/resource-hub" },
  { label: "Workshops & Training", href: "/resource-hub" },
  { label: "Guides & Checklists", href: "/resource-hub" },
];

const socials = [
  { key: "linkedin", href: "#", label: "LinkedIn" },
  { key: "facebook", href: "#", label: "Facebook" },
  { key: "twitter", href: "#", label: "Twitter" },
  { key: "youtube", href: "#", label: "YouTube" },
];

const contactDetails = [
  { icon: <PinIcon width={16} height={16} />, text: "East Legon, Accra, Ghana" },
  { icon: <PhoneIcon width={16} height={16} />, text: "+233 59 114 2133" },
  { icon: <MailIcon width={16} height={16} />, text: "apex.forensic@outlook.com" },
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
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1rem" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: colors.gold, display: "flex", alignItems: "center",
                  justifyContent: "center", fontWeight: "bold", color: "white", fontSize: "16px",
                }}>A</div>
                <div>
                  <div style={{ color: "white", fontWeight: "bold", fontSize: "13px" }}>APEX FORENSIC</div>
                  <div style={{ color: colors.gold, fontSize: "10px" }}>& FINANCIAL INVESTIGATIONS</div>
                </div>
              </div>

              <p style={{ color: colors.muted, fontSize: "13px", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Enhancing integrity, protecting value and building trust through professional forensic and financial investigation services.
              </p>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: "8px" }}>
                {socials.map((s) => (
  <a
    key={s.key}
    href={s.href}
    aria-label={s.label}
    className="social-icon-hover"
    style={{
      width: "32px", height: "32px", borderRadius: "50%",
      background: "rgba(255,255,255,0.1)", display: "flex",
      alignItems: "center", justifyContent: "center",
      color: "white", textDecoration: "none",
    }}
  >
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d={socialPaths[s.key]} />
    </svg>
  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={colHeader}>Quick Links</h4>
              {quickLinks.map(link => (
                <Link key={link.label} href={link.href} style={footerLink}>{link.label}</Link>
              ))}
            </div>

            {/* Services */}
            <div>
              <h4 style={colHeader}>Our Services</h4>
              {services.map(link => (
                <Link key={link.label} href={link.href} style={footerLink}>{link.label}</Link>
              ))}
            </div>

            {/* Resource Hub */}
            <div>
              <h4 style={colHeader}>Resource Hub</h4>
              {resources.map(link => (
                <Link key={link.label} href={link.href} style={footerLink}>{link.label}</Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={colHeader}>Contact Us</h4>
              {contactDetails.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
                  <span style={{ color: colors.gold, marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  <span style={{ color: colors.muted, fontSize: "13px", lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}

              <a
                href="https://wa.me/233591142133"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  marginTop: "1rem", background: colors.whatsapp, color: "white",
                  padding: "8px 16px", borderRadius: "4px",
                  textDecoration: "none", fontSize: "13px", fontWeight: "bold",
                }}
              >
                <WhatsAppIcon width={16} height={16} />
                Chat on WhatsApp
              </a>
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
              © 2026 Apex Forensic & Financial Investigations Ltd. All Rights Reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <Link href="/privacy-policy" style={{ color: colors.muted, fontSize: "12px", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/terms-of-service" style={{ color: colors.muted, fontSize: "12px", textDecoration: "none" }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233591142133"
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