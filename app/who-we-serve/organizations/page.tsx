import type { Metadata } from "next";
import AudiencePage from "@/components/sections/AudiencePage";
import { PeopleIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For Organizations",
  description:
    "Apex Forensic helps NGOs, corporates, and professional organisations ensure transparency, accountability, and financial integrity.",
};

export default function OrganizationsPage() {
  return (
    <AudiencePage
      eyebrow="WHO WE SERVE"
      title="Organizations"
      subtitle="Ensuring transparency, accountability, and financial integrity for NGOs, corporates, and professional organisations."
      icon={PeopleIcon}
      intro="Organisations of all types — from NGOs and donor-funded entities to corporates and professional associations — face financial integrity challenges that require independent, expert investigation. Whether it is donor fund misappropriation, corporate fraud, or governance failures, Apex provides the independent forensic and advisory services that organisations need to identify problems, address them professionally, and prevent recurrence."
      challenges={[
        "Donor fund misappropriation in NGOs and funded entities",
        "Corporate fraud and financial misconduct by senior staff",
        "Governance failures allowing irregularities to persist",
        "Procurement fraud and conflict of interest in contracting",
        "Lack of independent oversight of financial management",
        "Reputational risk from financial scandals and investigations",
      ]}
      howWeHelp={[
        "Investigate donor fund misuse and financial mismanagement",
        "Conduct independent corporate fraud investigations",
        "Review governance structures and recommend improvements",
        "Investigate procurement irregularities and contract fraud",
        "Provide independent forensic oversight of financial processes",
        "Deliver training on fraud prevention and financial controls",
      ]}
      services={[
        {
          title: "Fraud Investigation",
          desc: "Independent investigation of financial misconduct, fraud, and governance failures.",
          href: "/services/fraud-investigation",
        },
        {
          title: "Forensic Accounting",
          desc: "Expert forensic analysis of financial records for organisational accountability.",
          href: "/services/forensic-accounting",
        },
        {
          title: "Risk Advisory",
          desc: "Governance reviews, procurement audits, and internal control assessments.",
          href: "/services/risk-advisory",
        },
        {
          title: "Financial Intelligence",
          desc: "Due diligence, asset tracing, and financial flow analysis for complex organisational matters.",
          href: "/services/financial-intelligence",
        },
      ]}
      ctaTitle="Ensure transparency in your organisation"
      ctaSubtitle="Talk to our team about independent forensic and advisory support for your organisation."
    />
  );
}
