import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { DownloadIcon, ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resource Hub",
  description:
    "Free SME resources from Apex Forensic — fraud awareness guides, financial hygiene checklists, cybersecurity toolkits, and workshop materials.",
};

const categories = [
  { label: "All Resources", value: "all" },
  { label: "Fraud Awareness", value: "fraud" },
  { label: "Financial Hygiene", value: "finance" },
  { label: "Cybersecurity", value: "cyber" },
  { label: "Workshops & Training", value: "workshop" },
];

const resources = [
  {
    category: "fraud",
    categoryLabel: "Fraud Awareness",
    title: "Fraud Awareness Guide for SMEs",
    desc: "Understand the most common fraud schemes affecting Ghanaian businesses — internal theft, MoMo fraud, supplier fraud, and forgery — and learn how to stop them.",
    pages: "12 pages",
    format: "PDF",
    href: "#",
    featured: true,
  },
  {
    category: "finance",
    categoryLabel: "Financial Hygiene",
    title: "Financial Hygiene Checklist",
    desc: "A practical self-assessment checklist covering bookkeeping basics, bank reconciliation, expense controls, and early warning signs of financial mismanagement.",
    pages: "2 pages",
    format: "PDF",
    href: "#",
    featured: true,
  },
  {
    category: "cyber",
    categoryLabel: "Cybersecurity",
    title: "SME Cybersecurity Starter Kit",
    desc: "A beginner-friendly cybersecurity toolkit covering password hygiene, phishing identification, safe MoMo practices, and basic data protection steps.",
    pages: "8 pages",
    format: "PDF",
    href: "#",
    featured: true,
  },
  {
    category: "fraud",
    categoryLabel: "Fraud Awareness",
    title: "MoMo Fraud: What Every SME Needs to Know",
    desc: "A focused guide on mobile money fraud — SIM swap attacks, fake payment confirmations, social engineering, and a 5-step response plan for affected businesses.",
    pages: "6 pages",
    format: "PDF",
    href: "#",
    featured: false,
  },
  {
    category: "finance",
    categoryLabel: "Financial Hygiene",
    title: "Bookkeeping Red Flags: A Guide for SME Owners",
    desc: "Learn how to identify signs of financial manipulation or negligence in your own books — inflated expenses, unusual vendor activity, and payroll irregularities.",
    pages: "8 pages",
    format: "PDF",
    href: "#",
    featured: false,
  },
  {
    category: "cyber",
    categoryLabel: "Cybersecurity",
    title: "Protecting Your Business Data",
    desc: "A practical guide to Ghana's Data Protection Act obligations, securing customer data, and responding to a data breach — written for non-technical SME owners.",
    pages: "8 pages",
    format: "PDF",
    href: "#",
    featured: false,
  },
  {
    category: "workshop",
    categoryLabel: "Workshop & Training",
    title: "Know Your Numbers: Financial Literacy Workshop",
    desc: "A structured 90-minute workshop covering financial statements, cash flow basics, and financial risk identification for SME owners and their teams.",
    pages: "Facilitator deck + workbook",
    format: "Workshop",
    href: "#",
    featured: false,
  },
  {
    category: "fraud",
    categoryLabel: "Fraud Awareness",
    title: "Fraud-Proof Your Business: 30-Day Action Plan",
    desc: "A structured 30-day guide walking SME owners through weekly actions to strengthen fraud defences — from reviewing financial controls to implementing cybersecurity basics.",
    pages: "10 pages",
    format: "PDF",
    href: "#",
    featured: false,
  },
  {
    category: "workshop",
    categoryLabel: "Workshop & Training",
    title: "SME Protection Workshop — Full Session",
    desc: "Apex's flagship 2-hour SME protection workshop covering fraud awareness, cybersecurity basics, and financial hygiene. Facilitator deck, handout booklet, and assessment forms.",
    pages: "Full workshop pack",
    format: "Workshop",
    href: "#",
    featured: false,
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  fraud: { bg: "#FFF0E0", text: "#C85A00" },
  finance: { bg: "#EAF4EA", text: "#2E7D32" },
  cyber: { bg: "#E3EEF7", text: "#1565C0" },
  workshop: { bg: "#F3E5F5", text: "#6A1B9A" },
};

export default function ResourceHubPage() {
  const featured = resources.filter((r) => r.featured);
  const all = resources.filter((r) => !r.featured);

  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow="FREE SME RESOURCES"
        title="Resource Hub"
        subtitle="Practical tools, guides, and checklists to help you protect your business from fraud, financial mismanagement, and cybercrime."
      />

      {/* ── FEATURED RESOURCES ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div className="container-apex">
          <SectionTitle title="FEATURED RESOURCES" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            {featured.map((res, i) => (
              <Reveal key={res.title} delay={i * 0.1}>
                <div
                  style={{
                    background: colors.navy,
                    borderRadius: "12px",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    border: `1px solid rgba(184,146,42,0.2)`,
                  }}
                  className="card-hover"
                >
                  {/* Category tag */}
                  <div>
                    <span
                      style={{
                        background: "rgba(184,146,42,0.15)",
                        color: colors.gold,
                        fontSize: "11px",
                        fontWeight: "bold",
                        padding: "4px 10px",
                        borderRadius: "20px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        display: "inline-block",
                        marginBottom: "1rem",
                      }}
                    >
                      {res.categoryLabel}
                    </span>

                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "rgba(184,146,42,0.15)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      <DownloadIcon
                        width={24}
                        height={24}
                        color={colors.gold}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "0.75rem",
                        color: colors.white,
                        lineHeight: 1.4,
                      }}
                    >
                      {res.title}
                    </h3>
                    <p
                      style={{
                        color: colors.muted,
                        fontSize: "13px",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {res.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <span style={{ color: colors.muted, fontSize: "12px" }}>
                      {res.format} · {res.pages}
                    </span>
                    <Link
                      href={res.href}
                      style={{
                        background: colors.gold,
                        color: colors.white,
                        padding: "8px 16px",
                        borderRadius: "4px",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "13px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                      className="btn-hover"
                    >
                      Download <DownloadIcon width={13} height={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL RESOURCES ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="ALL RESOURCES" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {all.map((res, i) => {
              const cat = categoryColors[res.category] || {
                bg: colors.goldLight,
                text: colors.gold,
              };
              return (
                <Reveal key={res.title} delay={(i % 3) * 0.1}>
                  <div
                    style={{
                      background: colors.white,
                      borderRadius: "12px",
                      padding: "1.5rem",
                      border: `1px solid ${colors.border}`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                    className="resource-card-hover"
                  >
                    <div>
                      <span
                        style={{
                          background: cat.bg,
                          color: cat.text,
                          fontSize: "11px",
                          fontWeight: "bold",
                          padding: "4px 10px",
                          borderRadius: "20px",
                          letterSpacing: "0.05em",
                          textTransform: "uppercase",
                          display: "inline-block",
                          marginBottom: "1rem",
                        }}
                      >
                        {res.categoryLabel}
                      </span>

                      <h3
                        style={{
                          fontSize: "15px",
                          marginBottom: "0.75rem",
                          color: colors.navy,
                          lineHeight: 1.4,
                        }}
                      >
                        {res.title}
                      </h3>
                      <p
                        style={{
                          color: colors.grey,
                          fontSize: "13px",
                          lineHeight: 1.6,
                          marginBottom: "1.25rem",
                        }}
                      >
                        {res.desc}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "auto",
                      }}
                    >
                      <span style={{ color: colors.muted, fontSize: "12px" }}>
                        {res.format} · {res.pages}
                      </span>
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
                        className="btn-hover"
                      >
                        Download <DownloadIcon width={13} height={13} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section style={{ background: colors.white, padding: "3rem 0" }}>
        <div className="container-apex" style={{ textAlign: "center" }}>
          <Reveal>
            <div
              style={{
                background: colors.goldLight,
                border: `1px solid rgba(184,146,42,0.3)`,
                borderRadius: "12px",
                padding: "2.5rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <h3
                style={{
                  color: colors.navy,
                  fontSize: "1.2rem",
                  marginBottom: "0.75rem",
                }}
              >
                More Resources Coming Soon
              </h3>
              <p
                style={{
                  color: colors.grey,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                We are continuously developing new guides, checklists, and
                training materials for Ghanaian SMEs. Sign up for our newsletter
                to be notified when new resources are published.
              </p>
              <Link
                href="/contact"
                style={{
                  background: colors.navy,
                  color: colors.white,
                  padding: "12px 28px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                className="btn-hover"
              >
                Get Notified <ArrowRight width={14} height={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Need more than a guide?"
        subtitle="Our team can assess your business risk directly and recommend the right protection strategy."
        primaryLabel="Get a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
