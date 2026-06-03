import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { ChartIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Financial Intelligence",
  description:
    "Financial intelligence services in Ghana. Asset tracing, financial flow analysis, due diligence, and AML compliance support.",
};

export default function FinancialIntelligencePage() {
  return (
    <ServicePage
      label="OUR SERVICES"
      title="Financial Intelligence"
      intro="Turning complex financial data into clear, actionable intelligence that informs critical business and legal decisions."
      icon={ChartIcon}
      whatItIs="Financial intelligence is the collection, analysis, and interpretation of financial information to support decision-making, legal proceedings, and risk management. At Apex, we trace assets, analyse financial flows, and produce intelligence reports that give clients a clear picture of where money has moved, who controls it, and what risks exist, enabling informed action."
      whoItIsFor={[
        "Businesses pursuing asset recovery",
        "Legal teams requiring financial intelligence for litigation",
        "Companies conducting pre-acquisition due diligence",
        "Financial institutions managing AML compliance",
        "Organisations investigating hidden assets",
        "Government agencies tracing illicit financial flows",
      ]}
      whatWeDeliver={[
        "Asset tracing and recovery reports",
        "Financial flow analysis and mapping",
        "Due diligence investigation reports",
        "AML compliance reviews and recommendations",
        "Hidden asset identification",
        "Intelligence briefings for legal proceedings",
      ]}
      process={[
        {
          step: "01",
          title: "Briefing",
          desc: "We understand the client's intelligence requirements and define the scope of the engagement.",
        },
        {
          step: "02",
          title: "Data Sourcing",
          desc: "We gather financial data from relevant public, commercial, and proprietary sources.",
        },
        {
          step: "03",
          title: "Analysis",
          desc: "We analyse financial flows, ownership structures, and transaction patterns.",
        },
        {
          step: "04",
          title: "Verification",
          desc: "We verify findings through multiple sources to ensure accuracy and reliability.",
        },
        {
          step: "05",
          title: "Intelligence Report",
          desc: "We deliver a structured intelligence report with findings, analysis, and recommended actions.",
        },
        {
          step: "06",
          title: "Consultation",
          desc: "We walk the client through findings and advise on next steps.",
        },
      ]}
      whyApex="Financial intelligence requires both analytical depth and investigative creativity. At Apex, we combine forensic accounting skills with intelligence techniques to follow the money wherever it leads. We understand the complexity of financial structures in Ghana and across Africa, and we deliver intelligence that is accurate, timely, and actionable, giving our clients the advantage they need."
    />
  );
}
