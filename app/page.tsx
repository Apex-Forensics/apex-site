import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { colors } from "@/lib/colors";
import {
  StoreIcon,
  BankIcon,
  PeopleIcon,
  GovernmentIcon,
  MagnifierIcon,
  ShieldSearchIcon,
  ChartIcon,
  ShieldLockIcon,
  UsersIcon,
  MedalIcon,
  LockIcon,
  CalendarIcon,
  ArrowRight,
  DownloadIcon,
} from "@/components/ui/icons";

// ── Data ──
const whoWeServe = [
  {
    icon: StoreIcon,
    title: "SMEs",
    desc: "Protect your business from financial leaks and fraud.",
    href: "/who-we-serve/smes",
    color: colors.gold,
  },
  {
    icon: BankIcon,
    title: "Institutions",
    desc: "Strengthen controls and ensure financial integrity.",
    href: "/who-we-serve/institutions",
    color: colors.navy,
  },
  {
    icon: PeopleIcon,
    title: "Organizations",
    desc: "Ensure transparency, accountability and impact.",
    href: "/who-we-serve/organizations",
    color: colors.gold,
  },
  {
    icon: GovernmentIcon,
    title: "Government",
    desc: "Support public sector integrity and anti-corruption efforts.",
    href: "/who-we-serve/government",
    color: colors.navy,
  },
];

const services = [
  {
    icon: MagnifierIcon,
    title: "Forensic Accounting",
    desc: "Uncover the truth behind the numbers with expert analysis.",
    href: "/services/forensic-accounting",
  },
  {
    icon: ShieldSearchIcon,
    title: "Fraud Investigation",
    desc: "Detect, investigate and prevent fraud and financial misconduct.",
    href: "/services/fraud-investigation",
  },
  {
    icon: ChartIcon,
    title: "Financial Intelligence",
    desc: "Turn financial data into actionable insights and intelligence.",
    href: "/services/financial-intelligence",
  },
  {
    icon: ShieldLockIcon,
    title: "Digital Forensics",
    desc: "Investigate digital fraud, cyber breaches and data misuse.",
    href: "/services/digital-forensics",
  },
];

const resources = [
  {
    title: "Fraud Awareness Guide for SMEs",
    desc: "Understand common fraud schemes and how to stop them.",
    label: "Download Guide",
    href: "/resource-hub",
  },
  {
    title: "Financial Hygiene Checklist",
    desc: "A simple checklist to strengthen your financial controls.",
    label: "Download Checklist",
    href: "/resource-hub",
  },
  {
    title: "Cybersecurity Toolkit",
    desc: "Basic cybersecurity steps every business should follow.",
    label: "Download Toolkit",
    href: "/resource-hub",
  },
];

const stats = [
  { icon: UsersIcon, value: "100+", label: "Clients Served Across Ghana" },
  { icon: ShieldSearchIcon, value: "50+", label: "Investigations Completed" },
  { icon: MedalIcon, value: "10+", label: "Years Combined Experience" },
  { icon: LockIcon, value: "100%", label: "Confidentiality Guaranteed" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: colors.navy,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero Background Image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        opacity: 0.5,
        zIndex: 0,
      }} /> 
        {/* Dark overlay for text readability */}
        <div style={{
  position: "absolute",
  inset: 0,
  background: `linear-gradient(to right, ${colors.navy} 20%, rgba(27,42,74,0.11) 100%)`,
  zIndex: 1,
}}
        />
        <div
          className="container-apex hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            padding: "5rem 1.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="animate-fade-left">
            <p
              style={{
                color: colors.gold,
                fontWeight: "bold",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              INTEGRITY. INTELLIGENCE. ACCOUNTABILITY.
            </p>

            <h1
              style={{
                color: "white",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: "bold",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Forensic Accounting &<br />
              Financial Investigation
              <br />
              Services
            </h1>

            <p
              style={{
                color: colors.gold,
                fontSize: "16px",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "480px",
              }}
            >
              Helping SMEs, Institutions, Organizations, and Government detect
              fraud, prevent financial losses, and strengthen internal controls.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link
                href="/consultation"
                className="btn-hover"
                style={{
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
                }}
              >
                Get a Consultation
                <ArrowRight width={16} height={16} />
              </Link>

              <Link
                href="/resource-hub"
                className="btn-hover"
                style={{
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
                }}
              >
                Download SME Guide
                <DownloadIcon width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-apex">
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                letterSpacing: "0.05em",
                marginBottom: "0.75rem",
              }}
            >
              WHO WE SERVE
            </h2>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: colors.gold,
                margin: "0 auto",
              }}
            />
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {whoWeServe.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div
                    className="card-hover"
                    style={{
                      background: colors.offWhite,
                      border: `1px solid ${colors.border}`,
                      borderRadius: "8px",
                      padding: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background:
                          item.color === colors.gold ? colors.goldLight : colors.blueLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <Icon width={28} height={28} color={item.color} />
                    </div>
                    <h3 style={{ fontSize: "17px", marginBottom: "0.75rem" }}>
                      {item.title}
                    </h3>
                    <p
                      style={{
                        color: colors.grey,
                        fontSize: "14px",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                      }}
                    >
                      {item.desc}
                    </p>
                    <Link
                      href={item.href}
                      style={{
                        color: item.color,
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "14px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Learn More <ArrowRight width={14} height={14} />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                letterSpacing: "0.05em",
                marginBottom: "0.75rem",
              }}
            >
              WHAT WE DO
            </h2>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: colors.gold,
                margin: "0 auto",
              }}
            />
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div
                    className="card-hover"
                    style={{
                      background: "white",
                      borderRadius: "8px",
                      padding: "2rem",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "50%",
                        background: colors.blueLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <Icon width={28} height={28} color={colors.navy} />
                    </div>
                    <h3 style={{ fontSize: "16px", marginBottom: "0.75rem" }}>
                      {item.title}
                    </h3>
                    <p
                      style={{ color: colors.grey, fontSize: "13px", lineHeight: 1.6 }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/services"
              className="btn-hover"
              style={{
                background: colors.navy,
                color: "white",
                padding: "12px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              View All Services <ArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED RESOURCES ── */}
      <section className="section-padding" style={{ background: colors.navy }}>
        <div className="container-apex">
          <Reveal style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "1.75rem",
                color: "white",
                letterSpacing: "0.05em",
                marginBottom: "0.5rem",
              }}
            >
              FEATURED RESOURCES
            </h2>
            <p style={{ color: colors.gold, fontSize: "14px" }}>
              Practical tools and guides to help you protect your business.
            </p>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            {resources.map((res, i) => (
              <Reveal key={res.title} delay={i * 0.1}>
                <div
                  className="resource-card-hover"
                  style={{
                    background: "white",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: colors.goldLight,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <DownloadIcon width={24} height={24} color={colors.gold} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "15px",
                        marginBottom: "0.5rem",
                        color: colors.navy,
                      }}
                    >
                      {res.title}
                    </h3>
                    <p
                      style={{
                        color: colors.grey,
                        fontSize: "13px",
                        lineHeight: 1.5,
                        marginBottom: "1rem",
                      }}
                    >
                      {res.desc}
                    </p>
                    <Link
                      href={res.href}
                      style={{
                        color: colors.navy,
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "13px",
                        border: `1px solid ${colors.navy}`,
                        padding: "6px 14px",
                        borderRadius: "4px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      {res.label} <DownloadIcon width={13} height={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link
              href="/resource-hub"
              style={{
                background: colors.gold,
                color: "white",
                padding: "12px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Explore All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          background: "white",
          padding: "3rem 0",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div className="container-apex">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="stat-hover" style={{ padding: "1rem" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: colors.goldLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 0.75rem",
                      }}
                    >
                      <Icon width={24} height={24} color={colors.gold} />
                    </div>
                    <div
                      style={{
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        color: colors.gold,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        color: colors.grey,
                        fontSize: "13px",
                        marginTop: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: colors.navy, padding: "3.5rem 0" }}>
        <div
          className="container-apex"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                background: "rgba(184,146,42,0.15)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <CalendarIcon width={28} height={28} color={colors.gold} />
            </div>
            <div>
              <h3
                style={{
                  color: "white",
                  fontSize: "20px",
                  marginBottom: "0.25rem",
                }}
              >
                Not sure if your business is at risk?
              </h3>
              <p style={{ color: colors.muted, fontSize: "14px" }}>
                Let our experts help you identify risks and protect what
                matters.
              </p>
            </div>
          </div>

          <Link
            href="/consultation"
            className="btn-hover"
            style={{
              background: colors.gold,
              color: "white",
              padding: "14px 28px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "15px",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Request a Free Consultation <ArrowRight width={16} height={16} />
          </Link>
        </div>
      </section>
    </>
  );
}