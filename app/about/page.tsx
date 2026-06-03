import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import { colors } from "@/lib/colors";
import {
  ShieldLogo,
  ShieldSearchIcon,
  MagnifierIcon,
  UsersIcon,
  ArrowRight,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Forensic and Financial Investigations Limited, our mission, vision, values, and the team behind Ghana's technology-driven forensic firm.",
};

const values = [
  { icon: ShieldSearchIcon, title: "Integrity", desc: "We uphold the highest ethical standards in every engagement, ensuring our findings are honest, objective, and defensible." },
  { icon: MagnifierIcon, title: "Intelligence", desc: "We apply sharp analytical thinking and technology-driven insight to uncover the truth behind every investigation." },
  { icon: UsersIcon, title: "Accountability", desc: "We take full ownership of our work and stand behind every report, recommendation, and finding we deliver." },
];

const stats = [
  { value: "100+", label: "Clients Served" },
  { value: "50+", label: "Investigations Completed" },
  { value: "10+", label: "Years Combined Experience" },
  { value: "100%", label: "Confidentiality Guaranteed" },
];

const team = [
  {
    name: "Emmanuel K. Dzatah",
    role: "Co-Founder & Managing Director",
    bio: "A seasoned forensic and financial investigations professional with extensive experience in fraud detection, forensic auditing, and financial intelligence across Ghana and West Africa.",
    initials: "ED",
  },
  {
    name: "Bernard Ahedor",
    role: "Co-Founder & Operations Lead",
    bio: "A results-driven leader with deep expertise in organisational management, client relations, and building credible professional services firms from the ground up.",
    initials: "BA",
  },
  {
    name: "Portia Mawuena Adeletey",
    role: "Digital Technology & Content Specialist",
    bio: "A frontend developer and content strategist with a background in fintech and a growing specialisation in GRC and cybersecurity. Leads Apex's digital presence and SME education initiatives.",
    initials: "PA",
  },
];

const whyApex = [
  "Technology-driven approach to forensic investigation",
  "Deep understanding of the Ghanaian business environment",
  "Independent and conflict-free engagements",
  "Accessible pricing designed for SMEs",
  "Confidential, professional, and timely delivery",
  "Expanding across Africa with a local-first mindset",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About Apex Forensic"
        subtitle="We are Ghana's technology-driven forensic and financial investigations firm, built on integrity, powered by expertise, and committed to protecting what matters."
      />

      {/* ── MISSION & VISION ── */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-apex" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "280px", height: "280px",
              background: colors.blueLight, borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `6px solid ${colors.goldLight}`,
            }}>
              <ShieldLogo width={160} height={160} />
            </div>
          </div>

          <div>
            {[
              {
                label: "Our Mission",
                text: "To deliver independent, professional, and confidential forensic and financial investigation services that promote transparency, integrity, and accountability across Ghana and Africa, empowering businesses and institutions to detect fraud, prevent financial losses, and strengthen internal controls.",
              },
              {
                label: "Our Vision",
                text: "To become Africa's most trusted technology-driven forensic and financial investigations firm, known for excellence, innovation, and an unwavering commitment to integrity in every engagement we undertake.",
              },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "2.5rem" }}>
                <h2 style={{
                  fontSize: "1.5rem", marginBottom: "1rem", color: colors.navy,
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <span style={{
                    width: "32px", height: "4px", background: colors.gold,
                    display: "inline-block", borderRadius: "2px",
                  }} />
                  {item.label}
                </h2>
                <p style={{ color: colors.grey, lineHeight: 1.8, fontSize: "15px" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: colors.navy, padding: "3rem 0" }}>
        <div className="container-apex">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ padding: "1rem" }} className="stat-hover">
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: colors.gold, lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div style={{ color: colors.muted, fontSize: "13px", marginTop: "0.5rem", lineHeight: 1.4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="OUR CORE VALUES" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}>
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} style={{
                  background: "white", borderRadius: "8px",
                  padding: "2rem", textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }} className="card-hover">
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "50%",
                    background: colors.goldLight, display: "flex",
                    alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1rem",
                  }} className="icon-circle-hover">
                    <Icon width={28} height={28} color={colors.gold} />
                  </div>
                  <h3 style={{ fontSize: "17px", marginBottom: "0.75rem" }}>{val.title}</h3>
                  <p style={{ color: colors.grey, fontSize: "14px", lineHeight: 1.6 }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container-apex">
          <SectionTitle title="OUR TEAM" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}>
            {team.map((member) => (
              <div key={member.name} style={{
                background: colors.offWhite, borderRadius: "12px",
                padding: "2rem", textAlign: "center",
                border: `1px solid ${colors.border}`,
              }} className="card-hover">
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: colors.navy, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem", fontSize: "24px",
                  fontWeight: "bold", color: colors.gold,
                  border: `3px solid ${colors.gold}`,
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontSize: "17px", marginBottom: "4px", color: colors.navy }}>
                  {member.name}
                </h3>
                <p style={{ color: colors.gold, fontSize: "13px", fontWeight: "bold", marginBottom: "1rem" }}>
                  {member.role}
                </p>
                <p style={{ color: colors.grey, fontSize: "13px", lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY APEX ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="WHY CHOOSE APEX" />
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}>
            {whyApex.map((point, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start",
                gap: "12px", background: "white",
                padding: "1.25rem", borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }} className="card-hover">
                <div style={{
                  width: "24px", height: "24px", borderRadius: "50%",
                  background: colors.goldLight, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  flexShrink: 0, marginTop: "2px",
                }}>
                  <ArrowRight width={12} height={12} color={colors.gold} />
                </div>
                <p style={{ color: colors.grey, fontSize: "14px", lineHeight: 1.6 }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to work with us?"
        subtitle="Let us help you protect your business and strengthen your financial integrity."
        primaryLabel="Get a Consultation"
        primaryHref="/consultation"
      />
    </>
  );
}