import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import { colors } from "@/lib/colors";
import {
  MagnifierIcon,
  ShieldSearchIcon,
  ChartIcon,
  ShieldLockIcon,
  ShieldLogo,
  ArrowRight,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Apex Forensic offers forensic accounting, fraud investigation, financial intelligence, digital forensics, and risk advisory services across Ghana.",
};

const services = [
  {
    icon: MagnifierIcon,
    title: "Forensic Accounting",
    desc: "Uncover the truth behind the numbers with expert forensic accounting analysis. We examine financial records, identify irregularities, and provide court-admissible reports.",
    highlights: [
      "Financial statement analysis",
      "Asset misappropriation detection",
      "Litigation support and expert witness",
      "Fraud loss quantification",
    ],
    href: "/services/forensic-accounting",
    color: colors.gold,
  },
  {
    icon: ShieldSearchIcon,
    title: "Fraud Investigation",
    desc: "Detect, investigate, and prevent fraud and financial misconduct. Our investigators work discreetly and professionally to uncover the facts.",
    highlights: [
      "Internal fraud investigations",
      "Procurement and contract fraud",
      "Employee misconduct investigations",
      "Insurance fraud investigations",
    ],
    href: "/services/fraud-investigation",
    color: colors.navy,
  },
  {
    icon: ChartIcon,
    title: "Financial Intelligence",
    desc: "Turn complex financial data into actionable intelligence. We analyse financial flows, trace assets, and provide strategic insights that inform critical decisions.",
    highlights: [
      "Asset tracing and recovery",
      "Financial flow analysis",
      "Due diligence investigations",
      "AML compliance support",
    ],
    href: "/services/financial-intelligence",
    color: colors.gold,
  },
  {
    icon: ShieldLockIcon,
    title: "Digital Forensics",
    desc: "Investigate digital fraud, cyber breaches, and data misuse. We recover and analyse digital evidence from devices, networks, and cloud systems.",
    highlights: [
      "Device and data forensics",
      "Cybercrime investigations",
      "Email and communication forensics",
      "Digital evidence preservation",
    ],
    href: "/services/digital-forensics",
    color: colors.navy,
  },
  {
    icon: ShieldLogo,
    title: "Risk Advisory",
    desc: "Identify, assess, and mitigate financial and operational risks before they become crises. We help businesses build stronger internal controls and governance frameworks.",
    highlights: [
      "Internal control reviews",
      "Risk assessment and mapping",
      "Compliance advisory",
      "Governance framework development",
    ],
    href: "/services/risk-advisory",
    color: colors.gold,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <PageHeader
        eyebrow="WHAT WE OFFER"
        title="Our Services"
        subtitle="Professional forensic and financial investigation services designed for SMEs, institutions, organisations, and government agencies across Ghana."
      />

      {/* ── SERVICES LIST ── */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-apex">
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div key={service.title} style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "3rem",
                  alignItems: "center",
                  background: isEven ? "white" : colors.offWhite,
                  borderRadius: "12px",
                  padding: "2.5rem",
                  border: `1px solid ${colors.border}`,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }} className="card-hover">

                  {/* Icon side */}
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: service.color === colors.gold ? colors.goldLight : colors.blueLight,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                    }}>
                      <Icon width={52} height={52} color={service.color} />
                    </div>
                    <Link href={service.href} style={{
                      color: colors.gold,
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                    }} className="btn-hover">
                      Learn More <ArrowRight width={14} height={14} />
                    </Link>
                  </div>

                  {/* Content side */}
                  <div>
                    <h2 style={{
                      fontSize: "1.4rem",
                      marginBottom: "0.75rem",
                      color: colors.navy,
                    }}>
                      {service.title}
                    </h2>
                    <p style={{
                      color: colors.grey,
                      fontSize: "15px",
                      lineHeight: 1.8,
                      marginBottom: "1.25rem",
                    }}>
                      {service.desc}
                    </p>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.5rem",
                    }}>
                      {service.highlights.map((point) => (
                        <div key={point} style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}>
                          <div style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: colors.gold,
                            flexShrink: 0,
                          }} />
                          <span style={{ color: colors.greyDark, fontSize: "13px" }}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Not sure which service you need?"
        subtitle="Talk to our team and we will guide you to the right solution."
        primaryLabel="Get a Free Consultation"
        primaryHref="/consultation"
      />
    </>
  );
}