import type { ComponentType, SVGProps } from "react";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightList from "@/components/ui/HighlightList";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";
import Link from "next/link";

type IconProps = SVGProps<SVGSVGElement>;

type Service = {
  title: string;
  desc: string;
  href: string;
};

type AudiencePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: ComponentType<IconProps>;
  intro: string;
  challenges: string[];
  howWeHelp: string[];
  services: Service[];
  ctaTitle: string;
  ctaSubtitle: string;
};

export default function AudiencePage({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  intro,
  challenges,
  howWeHelp,
  services,
  ctaTitle,
  ctaSubtitle,
}: AudiencePageProps) {
  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        icon={<Icon width={36} height={36} color={colors.gold} />}
      />

      {/* ── INTRO ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div
          className="container-apex"
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <Reveal>
            <p
              style={{
                color: colors.grey,
                lineHeight: 1.9,
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CHALLENGES + HOW WE HELP ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="CHALLENGES WE SOLVE" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            {/* Challenges */}
            <Reveal direction="left" delay={0.1}>
              <div
                style={{
                  background: colors.white,
                  borderRadius: "12px",
                  padding: "2rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "1.5rem",
                    color: colors.navy,
                    paddingBottom: "0.75rem",
                    borderBottom: `3px solid ${colors.gold}`,
                    display: "inline-block",
                  }}
                >
                  Common Challenges
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {challenges.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: colors.goldLight,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <ArrowRight
                          width={10}
                          height={10}
                          color={colors.gold}
                        />
                      </div>
                      <span
                        style={{
                          color: colors.grey,
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* How we help */}
            <Reveal direction="right" delay={0.2}>
              <div
                style={{
                  background: colors.navy,
                  borderRadius: "12px",
                  padding: "2rem",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "1.5rem",
                    color: colors.white,
                    paddingBottom: "0.75rem",
                    borderBottom: `3px solid ${colors.gold}`,
                    display: "inline-block",
                  }}
                >
                  How Apex Helps
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {howWeHelp.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(212,175,55,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <ArrowRight
                          width={10}
                          height={10}
                          color={colors.gold}
                        />
                      </div>
                      <span
                        style={{
                          color: colors.muted,
                          fontSize: "14px",
                          lineHeight: 1.6,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RELEVANT SERVICES ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div className="container-apex">
          <SectionTitle title="SERVICES FOR YOU" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <div
                  style={{
                    background: colors.offWhite,
                    borderRadius: "8px",
                    padding: "1.5rem",
                    border: `1px solid ${colors.border}`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  className="card-hover"
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginBottom: "0.75rem",
                        color: colors.navy,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        color: colors.grey,
                        fontSize: "14px",
                        lineHeight: 1.6,
                        marginBottom: "1.25rem",
                      }}
                    >
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    style={{
                      color: colors.gold,
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
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title={ctaTitle}
        subtitle={ctaSubtitle}
        primaryLabel="Get a Free Consultation"
        primaryHref="/consultation"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
