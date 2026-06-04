import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ArrowRight, ShieldSearchIcon, MagnifierIcon, ChartIcon, ShieldLockIcon, ShieldLogo, CalendarIcon } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Consultation",
  description:
    "Request a free consultation with Apex Forensic and Financial Investigations Limited. We will assess your situation and recommend the right protection strategy.",
};

const services = [
  { icon: MagnifierIcon, title: "Forensic Accounting", href: "/services/forensic-accounting" },
  { icon: ShieldSearchIcon, title: "Fraud Investigation", href: "/services/fraud-investigation" },
  { icon: ChartIcon, title: "Financial Intelligence", href: "/services/financial-intelligence" },
  { icon: ShieldLockIcon, title: "Digital Forensics", href: "/services/digital-forensics" },
  { icon: ShieldLogo, title: "Risk Advisory", href: "/services/risk-advisory" },
];

const faqs = [
  {
    q: "Is the consultation really free?",
    a: "Yes. The initial consultation is completely free and carries no obligation. We use it to understand your situation and assess whether and how we can help.",
  },
  {
    q: "Is my information kept confidential?",
    a: "Absolutely. Everything you share with us, from your initial enquiry through to any engagement, is treated with complete confidentiality. We never share client information with third parties.",
  },
  {
    q: "How quickly can you start an investigation?",
    a: "For urgent matters we can mobilise quickly. Timeline depends on the nature and complexity of the case. We will give you a realistic assessment during the consultation.",
  },
  {
    q: "Do you work with SMEs or only large organisations?",
    a: "We work with businesses of all sizes. Our services and pricing are specifically designed to be accessible for SMEs, not just large corporates.",
  },
  {
    q: "What areas do you cover?",
    a: "We are based in Accra and Ho, Ghana, and serve clients across the country. We also handle engagements in other parts of West Africa where required.",
  },
];

export default function ConsultationPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow="GET STARTED"
        title="Request a Free Consultation"
        subtitle="Tell us about your situation and our team will get back to you within 24 hours to schedule your free, no-obligation consultation."
        icon={<CalendarIcon width={36} height={36} color={colors.gold} />}
      />

      {/* ── FORM + CONTACT ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div className="container-apex" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "4rem",
          alignItems: "start",
        }}>

          {/* Left, Info */}
          <Reveal direction="left">
            <div>
              <h2 style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: colors.navy,
              }}>
                What to Expect
              </h2>

              <p style={{
                color: colors.grey,
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}>
                Our consultations are straightforward, confidential, and focused
                on understanding your situation. There is no pressure and no
                obligation, just an honest conversation about how we can help.
              </p>

              {/* Services list */}
              <h3 style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: colors.navy,
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                We Can Help With
              </h3>
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}>
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link key={s.title} href={s.href} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      textDecoration: "none",
                      padding: "10px 14px",
                      borderRadius: "8px",
                      background: colors.soft,
                      border: `1px solid ${colors.border}`,
                      transition: "all 0.2s",
                    }} className="card-hover">
                      <div style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: colors.goldLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <Icon width={18} height={18} color={colors.gold} />
                      </div>
                      <span style={{
                        color: colors.navy,
                        fontSize: "14px",
                        fontWeight: "bold",
                        flex: 1,
                      }}>
                        {s.title}
                      </span>
                      <ArrowRight width={14} height={14} color={colors.gold} />
                    </Link>
                  );
                })}
              </div>

              {/* Contact details */}
              <div style={{
                background: colors.navy,
                borderRadius: "12px",
                padding: "1.5rem",
              }}>
                <p style={{
                  color: colors.gold,
                  fontSize: "12px",
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}>
                  Prefer to reach us directly?
                </p>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}>
                  {[
                    { label: "Phone", value: site.contact.phone },
                    { label: "Email", value: site.contact.email },
                    { label: "Location", value: site.contact.address },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: "flex",
                      gap: "8px",
                    }}>
                      <span style={{
                        color: colors.gold,
                        fontSize: "13px",
                        fontWeight: "bold",
                        minWidth: "60px",
                      }}>
                        {item.label}:
                      </span>
                      <span style={{ color: colors.muted, fontSize: "13px" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <WhatsAppButton size="sm" style={{ marginTop: "1.25rem" }} />
              </div>
            </div>
          </Reveal>

          {/* Right, Form */}
          <Reveal direction="right" delay={0.1}>
            <div style={{
              background: colors.soft,
              borderRadius: "16px",
              padding: "2.5rem",
              border: `1px solid ${colors.border}`,
            }}>
              <h2 style={{
                fontSize: "1.4rem",
                marginBottom: "0.5rem",
                color: colors.navy,
              }}>
                Request Your Consultation
              </h2>
              <p style={{
                color: colors.grey,
                fontSize: "13px",
                marginBottom: "1.5rem",
              }}>
                All fields marked with * are required. We respond within 24 hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="FREQUENTLY ASKED QUESTIONS" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
          }}>
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={(i % 2) * 0.1}>
                <div style={{
                  background: colors.white,
                  borderRadius: "12px",
                  padding: "1.75rem",
                  border: `1px solid ${colors.border}`,
                }} className="card-hover">
                  <h3 style={{
                    fontSize: "15px",
                    marginBottom: "0.75rem",
                    color: colors.navy,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}>
                    <span style={{
                      color: colors.gold,
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}>Q.</span>
                    {faq.q}
                  </h3>
                  <p style={{
                    color: colors.grey,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    paddingLeft: "22px",
                  }}>
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to protect your business?"
        subtitle="Take the first step, your free consultation is just one message away."
        primaryLabel="Get a Consultation"
        primaryHref="/consultation"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}