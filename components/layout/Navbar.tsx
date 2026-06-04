"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { colors } from "@/lib/colors";
import { nav } from "@/lib/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      backgroundColor: colors.navy,
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.18)" : "none",
      transition: "box-shadow 0.3s ease",
    }}>
      <div className="container-apex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

        <Logo />

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} style={{ position: "relative" }} className="dropdown-parent">
                <button style={{ ...navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }} className="nav-link-hover">
                  {item.label} ▾
                </button>
                <div className="dropdown-menu">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} style={dropdownLink}>{child.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} style={navLink} className="nav-link-hover">{item.label}</Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link href="/consultation" style={{ backgroundColor: colors.gold, color: "white", padding: "10px 20px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold", fontSize: "14px" }}>
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
        <div style={{ background: colors.navyDark, padding: "1rem 1.5rem 1.5rem" }}>
          {nav.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  style={{ ...mobileLink, background: "none", border: "none", cursor: "pointer", width: "100%", textAlign: "left", display: "flex", justifyContent: "space-between" }}
                >
                  {item.label} <span>{activeDropdown === item.label ? "−" : "+"}</span>
                </button>
                {activeDropdown === item.label && (
                  <div style={{ paddingLeft: "1rem", borderLeft: `2px solid ${colors.gold}` }}>
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} style={mobileSubLink} onClick={closeMenu}>{child.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} style={mobileLink} onClick={closeMenu}>{item.label}</Link>
            )
          )}

          <Link href="/consultation" style={{ display: "block", background: colors.gold, color: "white", padding: "12px", borderRadius: "4px", textAlign: "center", textDecoration: "none", fontWeight: "bold", marginTop: "1rem" }} onClick={closeMenu}>
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
  display: "block", padding: "10px 16px", color: colors.dark,
  textDecoration: "none", fontSize: "14px", borderBottom: `1px solid ${colors.borderLight}`,
};
const mobileLink: React.CSSProperties = {
  display: "block", color: "white", textDecoration: "none",
  fontSize: "15px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.08)",
};
const mobileSubLink: React.CSSProperties = {
  display: "block", color: colors.gold, textDecoration: "none",
  fontSize: "14px", padding: "8px 0",
};
