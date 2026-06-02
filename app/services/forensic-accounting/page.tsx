import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { MagnifierIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Forensic Accounting",
  description:
    "Expert forensic accounting services in Ghana. We examine financial records, identify irregularities, and provide court-admissible reports.",
};

export default function ForensicAccountingPage() {
  return (
    <ServicePage
      label="OUR SERVICES"
      title="Forensic Accounting"
      intro="Uncovering the truth behind the numbers with independent, expert forensic accounting analysis and court-admissible reporting."
      icon={MagnifierIcon}
      whatItIs="Forensic accounting is the application of accounting, auditing, and investigative skills to examine financial records in the context of actual or anticipated disputes or legal proceedings. At Apex, our forensic accountants go beyond the numbers — we tell the story behind them, identifying manipulation, misappropriation, and financial misconduct with precision and objectivity."
      whoItIsFor={[
        "SMEs suspecting internal financial fraud",
        "Corporations involved in commercial disputes",
        "Legal teams requiring expert financial witnesses",
        "Institutions undergoing regulatory investigations",
        "Government agencies reviewing public expenditure",
        "Insurance companies investigating claims",
      ]}
      whatWeDeliver={[
        "Forensic audit reports",
        "Expert witness testimony and reports",
        "Financial loss quantification",
        "Fraud risk assessments",
        "Court-admissible documentation",
        "Recommendations for control improvements",
      ]}
      process={[
        {
          step: "01",
          title: "Engagement",
          desc: "We define scope, objectives, and confidentiality terms with the client.",
        },
        {
          step: "02",
          title: "Data Collection",
          desc: "We gather and secure all relevant financial records and documentation.",
        },
        {
          step: "03",
          title: "Analysis",
          desc: "Our team examines records for irregularities, patterns, and anomalies.",
        },
        {
          step: "04",
          title: "Investigation",
          desc: "We trace financial flows, interview relevant parties, and build the evidence picture.",
        },
        {
          step: "05",
          title: "Reporting",
          desc: "We deliver a clear, defensible forensic report with findings and recommendations.",
        },
        {
          step: "06",
          title: "Support",
          desc: "We provide ongoing support through any legal or regulatory proceedings that follow.",
        },
      ]}
      whyApex="Our forensic accountants combine deep financial expertise with investigative rigour. We understand the Ghanaian regulatory and legal environment, produce reports that stand up to scrutiny, and work with absolute discretion. Whether you need support in a dispute, an investigation, or a proactive fraud risk review, Apex delivers findings you can rely on."
    />
  );
}
