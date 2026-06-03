import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { ShieldLogo } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Risk Advisory",
  description:
    "Risk advisory services in Ghana. Internal control reviews, risk assessments, compliance advisory, and governance framework development.",
};

export default function RiskAdvisoryPage() {
  return (
    <ServicePage
      label="OUR SERVICES"
      title="Risk Advisory"
      intro="Helping businesses identify, assess, and mitigate financial and operational risks before they become crises."
      icon={ShieldLogo}
      whatItIs="Risk advisory is the process of identifying, evaluating, and recommending measures to manage financial, operational, and compliance risks within an organisation. At Apex, we work with clients to understand their risk exposure, assess the strength of their internal controls, and develop practical frameworks that protect against fraud, financial mismanagement, and regulatory non-compliance, before problems arise."
      whoItIsFor={[
        "SMEs with limited internal audit capacity",
        "Growing businesses formalising their governance structures",
        "Organisations preparing for regulatory compliance",
        "Companies seeking to strengthen internal controls",
        "Institutions implementing anti-fraud frameworks",
        "Fintechs preparing for ISO 27001 or similar certification",
      ]}
      whatWeDeliver={[
        "Internal control review reports",
        "Risk assessment and risk register",
        "Compliance gap analysis",
        "Governance framework recommendations",
        "Anti-fraud policy development",
        "Staff awareness and training sessions",
      ]}
      process={[
        {
          step: "01",
          title: "Risk Discovery",
          desc: "We engage with the client to understand their business, operations, and existing controls.",
        },
        {
          step: "02",
          title: "Assessment",
          desc: "We conduct a structured assessment of financial, operational, and compliance risks.",
        },
        {
          step: "03",
          title: "Gap Analysis",
          desc: "We identify gaps between current practices and recommended or required standards.",
        },
        {
          step: "04",
          title: "Framework Design",
          desc: "We design practical risk management and control frameworks tailored to the client.",
        },
        {
          step: "05",
          title: "Reporting",
          desc: "We deliver a risk advisory report with findings, risk ratings, and prioritised recommendations.",
        },
        {
          step: "06",
          title: "Implementation Support",
          desc: "We support the client in implementing recommended controls and monitoring progress.",
        },
      ]}
      whyApex="Prevention is always less costly than investigation. Apex's risk advisory services are designed to help businesses, especially SMEs, build the foundations that prevent fraud and financial loss from occurring in the first place. We translate complex risk management principles into practical, affordable actions that Ghanaian businesses can implement immediately. Our advice is independent, frank, and always focused on protecting your business."
    />
  );
}
