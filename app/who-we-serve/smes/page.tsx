import type { Metadata } from "next";
import AudiencePage from "@/components/sections/AudiencePage";
import { StoreIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "For SMEs",
  description:
    "Apex Forensic helps Ghanaian SMEs detect fraud, strengthen financial controls, and protect their businesses from financial loss.",
};

export default function SMEsPage() {
  return (
    <AudiencePage
      eyebrow="WHO WE SERVE"
      title="Small & Medium Enterprises"
      subtitle="Protecting Ghanaian businesses from fraud, financial mismanagement, and cybercrime — at a price point built for SMEs."
      icon={StoreIcon}
      intro="Ghana's SME sector is the backbone of the economy — and the most vulnerable to financial crime. Most SMEs don't have internal audit teams, forensic accountants, or cybersecurity specialists on staff. When fraud happens, they have nowhere to turn. Apex exists to change that. We bring enterprise-grade forensic and financial investigation capabilities to small and medium businesses across Ghana, at accessible prices and with a deep understanding of the local business environment."
      challenges={[
        "Internal theft and employee fraud with no investigation capacity",
        "MoMo fraud and digital payment scams targeting business accounts",
        "Weak financial controls that allow irregularities to go undetected",
        "Bookkeeping manipulation by trusted staff or external accountants",
        "Supplier and procurement fraud draining business resources",
        "Lack of cybersecurity awareness leaving businesses exposed",
      ]}
      howWeHelp={[
        "Conduct confidential internal fraud investigations",
        "Investigate MoMo, e-commerce, and digital payment fraud",
        "Review and strengthen financial controls and bookkeeping processes",
        "Deliver practical SME fraud awareness training and workshops",
        "Provide cybersecurity risk assessments and toolkits",
        "Offer affordable retainer packages for ongoing protection",
      ]}
      services={[
        {
          title: "Fraud Investigation",
          desc: "Discreet, professional investigation of internal and external fraud affecting your business.",
          href: "/services/fraud-investigation",
        },
        {
          title: "Forensic Accounting",
          desc: "Expert examination of your financial records to uncover irregularities and quantify losses.",
          href: "/services/forensic-accounting",
        },
        {
          title: "Digital Forensics",
          desc: "Investigation of MoMo fraud, data breaches, and digital misconduct affecting SMEs.",
          href: "/services/digital-forensics",
        },
        {
          title: "Risk Advisory",
          desc: "Practical risk assessments and internal control reviews designed for SME budgets.",
          href: "/services/risk-advisory",
        },
      ]}
      ctaTitle="Protect your business today"
      ctaSubtitle="Talk to our team about an affordable SME protection package tailored to your business."
    />
  );
}
