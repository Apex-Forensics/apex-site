"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const whoWeServe = [
  { label: "SMEs", href: "/who-we-serve/smes" },
  { label: "Institutions", href: "/who-we-serve/institutions" },
  { label: "Organizations", href: "/who-we-serve/organizations" },
  { label: "Government", href: "/who-we-serve/government" },
];

const services = [
  { label: "Forensic Accounting", href: "/services/forensic-accounting" },
  { label: "Fraud Investigation", href: "/services/fraud-investigation" },
  { label: "Financial Intelligence", href: "/services/financial-intelligence" },
  { label: "Digital Forensics", href: "/services/digital-forensics" },
  { label: "Risk Advisory", href: "/services/risk-advisory" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: "#1B2A4A",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.18)" : "none",
      transition: "box-shadow 0.3s ease",
    }}>
      <div className="container-apex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "#B8922A", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "white", fontSize: "16px" }}>A</div>
          <div>
            <div style={{ color: "white", fontWeight: "bold", fontSize: "15px", lineHeight: 1.1 }}>APEX FORENSIC</div>
            <div style={{ color: "#B8922A", fontSize: "11px", letterSpacing: "0.05em" }}>& FINANCIAL INVESTIGATIONS</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <Link href="/" style={navLink} className="nav-link-hover">Home</Link>

          <div style={{ position: "relative" }} className="dropdown-parent">
            <button style={{ ...navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }} className="nav-link-hover">
              Who We Serve ▾
            </button>
            <div className="dropdown-menu">
              {whoWeServe.map(item => (
                <Link key={item.href} href={item.href} style={dropdownLink}>{item.label}</Link>
              ))}
            </div>
          </div>

          <div style={{ position: "relative" }} className="dropdown-parent">
            <button style={{ ...navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }} className="nav-link-hover">
              Services ▾
            </button>
            <div className="dropdown-menu">
              {services.map(item => (
                <Link key={item.href} href={item.href} style={dropdownLink}>{item.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/resource-hub" style={navLink} className="nav-link-hover">Resource Hub</Link>
          <Link href="/insights" style={navLink} className="nav-link-hover">Insights</Link>
          <Link href="/about" style={navLink} className="nav-link-hover">About Us</Link>
          <Link href="/contact" style={navLink} className="nav-link-hover">Contact</Link>
        </nav>

        {/* CTA */}
        <Link href="/consultation" style={{ backgroundColor: "#B8922A", color: "white", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
          Get a Consultation
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "white", fontSize: "24px" }}
          className="mobile-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ background: "#111d33", padding: "1rem 1.5rem 1.5rem" }}>
          {[
            { label: "Home", href: "/" },
            { label: "Resource Hub", href: "/resource-hub" },
            { label: "Insights", href: "/insights" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(item => (
            <Link key={item.href} href={item.href} style={mobileLink} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}

          {/* Mobile Who We Serve */}
          <button onClick={() => setActiveDropdown(activeDropdown === "serve" ? null : "serve")} style={{ ...mobileLink, background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }}>
            Who We Serve <span>{activeDropdown === "serve" ? "−" : "+"}</span>
          </button>
          {activeDropdown === "serve" && (
            <div style={{ paddingLeft: "1rem", borderLeft: "2px solid #B8922A" }}>
              {whoWeServe.map(item => <Link key={item.href} href={item.href} style={mobileSubLink} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
            </div>
          )}

          {/* Mobile Services */}
          <button onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")} style={{ ...mobileLink, background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }}>
            Services <span>{activeDropdown === "services" ? "−" : "+"}</span>
          </button>
          {activeDropdown === "services" && (
            <div style={{ paddingLeft: "1rem", borderLeft: "2px solid #B8922A" }}>
              {services.map(item => <Link key={item.href} href={item.href} style={mobileSubLink} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
            </div>
          )}

          <Link href="/consultation" style={{ display: "block", background: "#B8922A", color: "white", padding: "12px", borderRadius: "4px", textAlign: "center", textDecoration: "none", fontWeight: "bold", marginTop: "1rem" }} onClick={() => setMenuOpen(false)}>
            Get a Consultation
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          nav, .cta-desktop { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}

const navLink: React.CSSProperties = {
  color: "white", textDecoration: "none", fontSize: "14px",
  padding: "8px 12px", borderRadius: "4px",
};
const dropdownLink: React.CSSProperties = {
  display: "block", padding: "10px 16px", color: "#1A1A1A",
  textDecoration: "none", fontSize: "14px", borderBottom: "1px solid #f0f0f0",
};
const mobileLink: React.CSSProperties = {
  display: "block", color: "white", textDecoration: "none",
  fontSize: "15px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
};
const mobileSubLink: React.CSSProperties = {
  display: "block", color: "#B8922A", textDecoration: "none",
  fontSize: "14px", padding: "8px 0",
};