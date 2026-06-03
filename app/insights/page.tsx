import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Forensic and financial insights from Apex, fraud trends, cybersecurity alerts, financial hygiene tips, and SME protection guidance for Ghanaian businesses.",
};

const categories = [
  { label: "All", value: "all" },
  { label: "Fraud Awareness", value: "fraud" },
  { label: "Financial Hygiene", value: "finance" },
  { label: "Cybersecurity", value: "cyber" },
  { label: "Industry News", value: "news" },
];

const featured = {
  category: "fraud",
  categoryLabel: "Fraud Awareness",
  title: "Ghana Recorded 16,733 Fraud Cases in 2024, What SMEs Need to Know",
  excerpt: "Financial fraud in Ghana surged in 2024, with forgery alone accounting for GHS 53.5 million, a 613% increase from the previous year. We break down what this means for SME owners and what you can do to protect your business.",
  date: "May 2026",
  readTime: "6 min read",
  href: "#",
};

const articles = [
  {
    category: "cyber",
    categoryLabel: "Cybersecurity",
    title: "MoMo Fraud Is Evolving, Here Is What Business Owners Need to Watch For",
    excerpt: "Mobile money transactions exceeded GHC 570 billion in 2024, making the ecosystem a prime target. We outline the latest tactics fraudsters are using and how to protect your business accounts.",
    date: "May 2026",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "finance",
    categoryLabel: "Financial Hygiene",
    title: "5 Bookkeeping Red Flags Every SME Owner Should Know",
    excerpt: "Most SME fraud starts from within, and it often hides in plain sight in the books. Here are five warning signs that your financial records may have been tampered with.",
    date: "April 2026",
    readTime: "4 min read",
    href: "#",
  },
  {
    category: "fraud",
    categoryLabel: "Fraud Awareness",
    title: "Inside Job: Why 50% of Financial Fraud Involves Insiders",
    excerpt: "Bank of Ghana data shows that over half of financial fraud cases involve insiders. For SMEs with small, trusted teams, this is a particularly uncomfortable truth, and one worth understanding.",
    date: "April 2026",
    readTime: "5 min read",
    href: "#",
  },
  {
    category: "cyber",
    categoryLabel: "Cybersecurity",
    title: "Ghana's Cybersecurity Act 2020, What Your Business Needs to Know",
    excerpt: "The Cybersecurity Authority of Ghana has been expanding its licensing and compliance requirements. Here is what SMEs and growing businesses need to understand about their obligations.",
    date: "March 2026",
    readTime: "6 min read",
    href: "#",
  },
  {
    category: "news",
    categoryLabel: "Industry News",
    title: "Why Ghana Needs More Technology-Driven Forensic Investigation Firms",
    excerpt: "The forensic investigation industry in Ghana is growing, but the gap between demand and qualified providers remains wide. We look at what is driving the need and what the market looks like today.",
    date: "March 2026",
    readTime: "7 min read",
    href: "#",
  },
  {
    category: "finance",
    categoryLabel: "Financial Hygiene",
    title: "The SME Guide to Financial Controls That Actually Work",
    excerpt: "Many SMEs implement financial controls in theory but not in practice. This guide walks through the five controls that make the biggest difference, and how to apply them without a finance team.",
    date: "February 2026",
    readTime: "5 min read",
    href: "#",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  fraud: { bg: "#FFF0E0", text: "#C85A00" },
  finance: { bg: "#EAF4EA", text: "#2E7D32" },
  cyber: { bg: "#E3EEF7", text: "#1565C0" },
  news: { bg: colors.blueLight, text: colors.navy },
};

export default function InsightsPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow="KNOWLEDGE & INSIGHTS"
        title="Insights"
        subtitle="Fraud trends, cybersecurity alerts, financial hygiene guidance, and industry analysis, written for Ghanaian business owners and professionals."
      />

      {/* ── FEATURED ARTICLE ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div className="container-apex">
          <SectionTitle title="FEATURED ARTICLE" />
          <Reveal>
            <div style={{
              background: colors.navy,
              borderRadius: "16px",
              padding: "3rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "3rem",
              alignItems: "center",
            }} className="card-hover">
              <div>
                <span style={{
                  background: "rgba(184,146,42,0.15)",
                  color: colors.gold,
                  fontSize: "11px",
                  fontWeight: "bold",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: "1.25rem",
                }}>
                  {featured.categoryLabel}
                </span>

                <h2 style={{
                  color: colors.white,
                  fontSize: "1.5rem",
                  lineHeight: 1.3,
                  marginBottom: "1rem",
                  maxWidth: "600px",
                }}>
                  {featured.title}
                </h2>

                <p style={{
                  color: colors.muted,
                  fontSize: "14px",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                  maxWidth: "580px",
                }}>
                  {featured.excerpt}
                </p>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}>
                  <span style={{ color: colors.muted, fontSize: "13px" }}>{featured.date}</span>
                  <span style={{ color: colors.muted, fontSize: "13px" }}>·</span>
                  <span style={{ color: colors.muted, fontSize: "13px" }}>{featured.readTime}</span>
                </div>

                <Link href={featured.href} style={{
                  background: colors.gold,
                  color: colors.white,
                  padding: "12px 24px",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }} className="btn-hover">
                  Read Article <ArrowRight width={14} height={14} />
                </Link>
              </div>

              {/* Visual side */}
              <div style={{
                width: "200px",
                height: "200px",
                background: "rgba(184,146,42,0.1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: "2px solid rgba(184,146,42,0.2)",
              }}>
                <div style={{
                  textAlign: "center",
                  color: colors.gold,
                }}>
                  <div style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    lineHeight: 1,
                  }}>16K+</div>
                  <div style={{
                    fontSize: "11px",
                    color: colors.muted,
                    marginTop: "0.5rem",
                    lineHeight: 1.4,
                  }}>Fraud cases<br />in Ghana 2024</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ALL ARTICLES ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="LATEST ARTICLES" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {articles.map((article, i) => {
              const cat = categoryColors[article.category] || {
                bg: colors.goldLight,
                text: colors.gold,
              };
              return (
                <Reveal key={article.title} delay={(i % 3) * 0.1}>
                  <div style={{
                    background: colors.white,
                    borderRadius: "12px",
                    padding: "1.75rem",
                    border: `1px solid ${colors.border}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }} className="card-hover">
                    <div>
                      <span style={{
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
                      }}>
                        {article.categoryLabel}
                      </span>

                      <h3 style={{
                        fontSize: "15px",
                        marginBottom: "0.75rem",
                        color: colors.navy,
                        lineHeight: 1.4,
                      }}>
                        {article.title}
                      </h3>

                      <p style={{
                        color: colors.grey,
                        fontSize: "13px",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                      }}>
                        {article.excerpt}
                      </p>
                    </div>

                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                      paddingTop: "1rem",
                      borderTop: `1px solid ${colors.border}`,
                    }}>
                      <div style={{ display: "flex", gap: "1rem" }}>
                        <span style={{ color: colors.muted, fontSize: "12px" }}>
                          {article.date}
                        </span>
                        <span style={{ color: colors.muted, fontSize: "12px" }}>
                          {article.readTime}
                        </span>
                      </div>
                      <Link href={article.href} style={{
                        color: colors.gold,
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "13px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}>
                        Read <ArrowRight width={13} height={13} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ background: colors.white, padding: "4rem 0" }}>
        <div className="container-apex" style={{ textAlign: "center" }}>
          <Reveal>
            <div style={{
              background: colors.goldLight,
              border: `1px solid rgba(184,146,42,0.3)`,
              borderRadius: "16px",
              padding: "3rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              <h3 style={{
                color: colors.navy,
                fontSize: "1.4rem",
                marginBottom: "0.75rem",
              }}>
                Stay Ahead of Fraud
              </h3>
              <p style={{
                color: colors.grey,
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}>
                Get monthly fraud alerts, financial hygiene tips, and SME
                protection resources delivered directly to your inbox.
                No spam, just the insights your business needs.
              </p>
              <Link href="/contact" style={{
                background: colors.navy,
                color: colors.white,
                padding: "12px 32px",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }} className="btn-hover">
                Subscribe to Newsletter <ArrowRight width={14} height={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Turn insights into action"
        subtitle="Our team can help you apply what you have learned to protect your specific business."
        primaryLabel="Get a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="Explore Resources"
        secondaryHref="/resource-hub"
      />
    </>
  );
}