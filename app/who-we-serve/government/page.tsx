import type { Metadata } from "next";
import AudiencePage from "@/components/sections/AudiencePage";
import { GovernmentIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For Government",
  description:
    "Apex Forensic supports public sector integrity, anti-corruption efforts, and financial accountability for government agencies in Ghana.",
};

export default function GovernmentPage() {
  return (
    <AudiencePage
      eyebrow="WHO WE SERVE"
      title="Government Agencies"
      subtitle="Supporting public sector integrity, anti-corruption efforts, and financial accountability across Ghana's government institutions."
      icon={GovernmentIcon}
      intro="Public sector financial integrity is fundamental to national development. Government agencies face unique challenges — public accountability, political sensitivity, complex procurement processes, and high-value fraud risks. Apex provides independent, professional forensic and financial investigation services that support government institutions in detecting misconduct, investigating irregularities, and strengthening the systems that protect public resources."
      challenges={[
        "Public fund misappropriation and procurement fraud",
        "Ghost employee payroll fraud in government institutions",
        "Corruption in contract award and management processes",
        "Complex financial fraud schemes in revenue collection",
        "Lack of independent forensic investigation capacity",
        "Pressure for transparency and public accountability",
      ]}
      howWeHelp={[
        "Investigate public fund misappropriation and procurement fraud",
        "Conduct payroll audits to detect ghost employees and irregularities",
        "Provide independent forensic support for anti-corruption investigations",
        "Review revenue collection processes for fraud and leakage",
        "Deliver forensic accounting reports for public accountability",
        "Support internal audit teams with specialist forensic expertise",
      ]}
      services={[
        {
          title: "Forensic Accounting",
          desc: "Independent forensic analysis of public financial records and expenditure.",
          href: "/services/forensic-accounting",
        },
        {
          title: "Fraud Investigation",
          desc: "Professional investigation of procurement fraud, corruption, and financial misconduct.",
          href: "/services/fraud-investigation",
        },
        {
          title: "Financial Intelligence",
          desc: "Asset tracing, financial flow analysis, and due diligence for public sector matters.",
          href: "/services/financial-intelligence",
        },
        {
          title: "Risk Advisory",
          desc: "Internal control reviews and governance frameworks for public sector accountability.",
          href: "/services/risk-advisory",
        },
      ]}
      ctaTitle="Protect public resources and strengthen accountability"
      ctaSubtitle="Speak with our team about independent forensic support for your agency."
    />
  );
}
