import type { Metadata } from "next";
import ServicePage from "@/components/sections/ServicePage";
import { ShieldLockIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Digital Forensics",
  description:
    "Digital forensics services in Ghana. Device forensics, cybercrime investigations, email forensics, and digital evidence preservation.",
};

export default function DigitalForensicsPage() {
  return (
    <ServicePage
      label="OUR SERVICES"
      title="Digital Forensics"
      intro="Investigating digital fraud, cyber breaches, and data misuse with rigorous digital evidence collection and analysis."
      icon={ShieldLockIcon}
      whatItIs="Digital forensics is the process of identifying, preserving, extracting, and documenting digital evidence from electronic devices, networks, and cloud systems for use in investigations and legal proceedings. At Apex, we apply forensically sound methodologies to recover and analyse digital evidence — helping clients understand what happened, who was responsible, and what evidence exists to support further action."
      whoItIsFor={[
        "Businesses experiencing data breaches or cyber incidents",
        "Companies investigating employee digital misconduct",
        "Organisations dealing with MoMo or e-commerce fraud",
        "Legal teams requiring digital evidence for proceedings",
        "SMEs affected by phishing or social engineering attacks",
        "Institutions investigating insider cyber threats",
      ]}
      whatWeDeliver={[
        "Digital forensic investigation reports",
        "Recovered and preserved digital evidence",
        "Device and storage media analysis",
        "Email and communication forensics",
        "Cybercrime incident documentation",
        "Recommendations for digital security improvements",
      ]}
      process={[
        {
          step: "01",
          title: "Incident Assessment",
          desc: "We assess the nature and scope of the digital incident and define investigation objectives.",
        },
        {
          step: "02",
          title: "Evidence Preservation",
          desc: "We preserve digital evidence using forensically sound methods to maintain chain of custody.",
        },
        {
          step: "03",
          title: "Data Recovery",
          desc: "We recover deleted, hidden, or encrypted data from devices and systems.",
        },
        {
          step: "04",
          title: "Analysis",
          desc: "We analyse digital artefacts, logs, communications, and transaction records.",
        },
        {
          step: "05",
          title: "Reporting",
          desc: "We deliver a forensic report documenting findings, evidence, and conclusions.",
        },
        {
          step: "06",
          title: "Support",
          desc: "We provide expert support through any legal, regulatory, or disciplinary proceedings.",
        },
      ]}
      whyApex="Digital fraud and cybercrime are growing faster than most businesses can defend against. Apex brings together cybersecurity knowledge and forensic investigative discipline to respond effectively. We understand Ghana's digital landscape — from mobile money fraud to corporate data breaches — and we deliver digital forensic work that is methodical, well-documented, and built to withstand scrutiny."
    />
  );
}
