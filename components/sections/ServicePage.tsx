import type { ComponentType, SVGProps } from "react";
import PageHeader from "@/components/ui/PageHeader";
import CTABanner from "@/components/ui/CTABanner";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessSteps from "@/components/ui/ProcessSteps";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { colors } from "@/lib/colors";

type IconProps = SVGProps<SVGSVGElement>;

type ServicePageProps = {
  label: string;
  title: string;
  intro: string;
  icon: ComponentType<IconProps>;
  whatItIs: string;
  whoItIsFor: string[];
  whatWeDeliver: string[];
  process: { step: string; title: string; desc: string }[];
  whyApex: string;
};

export default function ServicePage({
  label,
  title,
  intro,
  icon: Icon,
  whatItIs,
  whoItIsFor,
  whatWeDeliver,
  process,
  whyApex,
}: ServicePageProps) {
  return (
    <>
      {/* ── HEADER ── */}
      <PageHeader
        eyebrow={label}
        title={title}
        subtitle={intro}
        icon={<Icon width={36} height={36} color={colors.gold} />}
      />

      {/* ── WHAT IT IS ── */}
      <section className="section-padding" style={{ background: colors.white }}>
        <div
          className="container-apex"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <Reveal direction="left">
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: colors.goldLight,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: `6px solid ${colors.blueLight}`,
                margin: "0 auto",
              }}
            >
              <Icon width={90} height={90} color={colors.gold} />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: colors.navy,
                }}
              >
                What is {title}?
              </h2>
              <p
                style={{
                  color: colors.grey,
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {whatItIs}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO IT IS FOR + WHAT WE DELIVER ── */}
      <section className="section-padding" style={{ background: colors.soft }}>
        <div className="container-apex">
          <SectionTitle title="WHO IS THIS FOR & WHAT WE DELIVER" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            {/* Who it is for */}
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
                  Who Is This For?
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {whoItIsFor.map((item, i) => (
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

            {/* What we deliver */}
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
                  What We Deliver
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {whatWeDeliver.map((item, i) => (
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
                          background: "rgba(184,146,42,0.2)",
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

      {/* ── PROCESS ── */}
      <ProcessSteps steps={process} />

      {/* ── WHY APEX ── */}
      <section style={{ background: colors.soft, padding: "3rem 0" }}>
        <div
          className="container-apex"
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Reveal>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: colors.navy,
              }}
            >
              Why Choose Apex for {title}?
            </h2>
            <div
              style={{
                width: "60px",
                height: "3px",
                background: colors.gold,
                margin: "0 auto 1.5rem",
              }}
            />
            <p
              style={{ color: colors.grey, lineHeight: 1.8, fontSize: "15px" }}
            >
              {whyApex}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title={`Need ${title}?`}
        subtitle="Speak with our team today and let us help you find the facts."
        primaryLabel="Get a Consultation"
        primaryHref="/consultation"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />
    </>
  );
}
