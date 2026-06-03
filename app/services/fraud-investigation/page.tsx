import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { ShieldSearchIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Fraud Investigation",
  description:
    "Professional fraud investigation services in Ghana. We detect, investigate, and prevent fraud and financial misconduct for businesses and institutions.",
};

export default function FraudInvestigationPage() {
  return (
    <ServicePage
      label="OUR SERVICES"
      title="Fraud Investigation"
      intro="Professional, discreet, and thorough fraud investigations that uncover the facts and protect your organisation."
      icon={ShieldSearchIcon}
      whatItIs="Fraud investigation is the systematic process of detecting, examining, and documenting fraudulent activity within an organisation or involving its stakeholders. At Apex, we conduct investigations with complete objectivity and confidentiality, gathering evidence, interviewing parties, and producing findings that support informed decisions and, where necessary, legal action."
      whoItIsFor={[
        "SMEs experiencing unexplained financial losses",
        "Companies suspecting employee misconduct",
        "Organisations dealing with procurement irregularities",
        "Businesses investigating vendor or supplier fraud",
        "Institutions requiring independent fraud reviews",
        "Legal teams building fraud-related cases",
      ]}
      whatWeDeliver={[
        "Comprehensive fraud investigation reports",
        "Evidence documentation and chain of custody",
        "Interview records and witness statements",
        "Fraud loss quantification",
        "Recommendations for fraud prevention",
        "Support for disciplinary or legal proceedings",
      ]}
      process={[
        {
          step: "01",
          title: "Initial Assessment",
          desc: "We assess the nature and scope of the suspected fraud before committing to a full investigation.",
        },
        {
          step: "02",
          title: "Planning",
          desc: "We develop a confidential investigation plan tailored to the specific situation.",
        },
        {
          step: "03",
          title: "Evidence Gathering",
          desc: "We collect, preserve, and document all relevant evidence in a legally defensible manner.",
        },
        {
          step: "04",
          title: "Analysis",
          desc: "We analyse evidence to establish facts, identify perpetrators, and quantify losses.",
        },
        {
          step: "05",
          title: "Reporting",
          desc: "We deliver a clear investigation report with findings, conclusions, and recommendations.",
        },
        {
          step: "06",
          title: "Follow-up",
          desc: "We support the client through any subsequent disciplinary, legal, or regulatory processes.",
        },
      ]}
      whyApex="Fraud investigations require a rare combination of financial expertise, investigative skill, and professional discretion. Apex brings all three. We operate independently, protect client confidentiality at every stage, and deliver findings that are factual, well-documented, and actionable. Our deep understanding of the Ghanaian business environment means we know where fraud hides, and how to find it."
    />
  );
}
