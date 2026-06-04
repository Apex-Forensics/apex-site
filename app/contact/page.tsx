import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/forms/ContactForm";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { PinIcon, PhoneIcon, MailIcon } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Forensic and Financial Investigations Limited. We respond within 24 hours.",
};

const contactDetails = [
  { icon: PinIcon, label: "Office", value: site.contact.address },
  { icon: PhoneIcon, label: "Phone", value: site.contact.phone },
  { icon: MailIcon, label: "Email", value: site.contact.email },
];

export default function ContactPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        subtitle="Have a question or need our services? Reach out and our team will respond within 24 hours."
      />

      {/* ── CONTACT CONTENT ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div className="container-apex" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "4rem",
          alignItems: "start",
        }}>

          {/* Left — Contact Info */}
          <Reveal direction="left">
            <div>
              <h2 style={{
                fontSize: "1.4rem",
                marginBottom: "2rem",
                color: colors.navy,
              }}>
                Get In Touch
              </h2>

              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "44px",
                      height: "44px",
                      background: colors.goldLight,
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon width={20} height={20} color={colors.gold} />
                    </div>
                    <div>
                      <div style={{
                        fontWeight: "bold",
                        color: colors.navy,
                        fontSize: "14px",
                        marginBottom: "2px",
                      }}>
                        {item.label}
                      </div>
                      <div style={{ color: colors.grey, fontSize: "14px" }}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}

              <WhatsAppButton style={{ marginTop: "0.5rem" }} />

              {/* Office hours */}
              <div style={{
                marginTop: "2rem",
                background: colors.soft,
                borderRadius: "12px",
                padding: "1.5rem",
                border: `1px solid ${colors.border}`,
              }}>
                <h3 style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: colors.navy,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "1rem",
                }}>
                  Office Hours
                </h3>
                {site.officeHours.map((item) => (
                  <div key={item.day} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "0.5rem",
                  }}>
                    <span style={{ color: colors.grey, fontSize: "13px" }}>{item.day}</span>
                    <span style={{
                      color: colors.navy,
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
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
                Send Us a Message
              </h2>
              <p style={{
                color: colors.grey,
                fontSize: "13px",
                marginBottom: "1.5rem",
              }}>
                Fill in the form below and we will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Ready to protect your business?"
        subtitle="Request a free consultation and let our team assess your risk."
        primaryLabel="Get a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}