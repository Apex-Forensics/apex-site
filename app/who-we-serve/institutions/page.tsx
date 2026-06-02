import type { Metadata } from "next";
import AudiencePage from "@/components/sections/AudiencePage";
import { BankIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For Institutions",
  description:
    "Apex Forensic delivers forensic accounting, fraud investigation, and financial intelligence services for financial institutions and regulated entities in Ghana.",
};

export default function InstitutionsPage() {
  return (
    <AudiencePage
      eyebrow="WHO WE SERVE"
      title="Financial Institutions"
      subtitle="Strengthening controls, ensuring financial integrity, and supporting regulatory compliance for Ghana's financial institutions."
      icon={BankIcon}
      intro="Financial institutions operate under intense regulatory scrutiny and face significant fraud risk from both internal and external sources. Apex provides independent forensic and financial investigation services that help banks, microfinance institutions, insurance companies, and savings and loans organisations detect misconduct, strengthen controls, and demonstrate compliance — while protecting their reputation and their clients."
      challenges={[
        "Internal staff fraud and misconduct at all levels",
        "Complex financial fraud schemes targeting institutional accounts",
        "Regulatory investigations requiring independent forensic support",
        "AML compliance gaps and suspicious transaction reporting",
        "Reputational risk from undetected financial irregularities",
        "Weak governance frameworks allowing fraud to persist",
      ]}
      howWeHelp={[
        "Conduct independent internal fraud investigations",
        "Provide forensic accounting support for regulatory matters",
        "Deliver AML compliance reviews and gap assessments",
        "Investigate complex financial fraud schemes",
        "Support governance and internal control strengthening",
        "Provide expert witness and litigation support services",
      ]}
      services={[
        {
          title: "Forensic Accounting",
          desc: "Independent forensic analysis of financial records for regulatory and litigation purposes.",
          href: "/services/forensic-accounting",
        },
        {
          title: "Fraud Investigation",
          desc: "Thorough investigation of internal fraud, misconduct, and financial irregularities.",
          href: "/services/fraud-investigation",
        },
        {
          title: "Financial Intelligence",
          desc: "AML compliance support, asset tracing, and financial flow analysis.",
          href: "/services/financial-intelligence",
        },
        {
          title: "Risk Advisory",
          desc: "Internal control reviews and governance framework development for regulated entities.",
          href: "/services/risk-advisory",
        },
      ]}
      ctaTitle="Strengthen your institution's integrity"
      ctaSubtitle="Speak with our team about independent forensic and compliance support for your institution."
    />
  );
}
