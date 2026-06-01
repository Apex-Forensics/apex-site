/**
 * Centralized site content & navigation.
 * Kept in one place so it can later be sourced from a CMS (e.g. Sanity)
 * with minimal changes to the components that consume it.
 */

export const site = {
  name: "Apex Forensic & Financial Investigations Ltd",
  shortName: "Apex Forensic",
  tagline: "Integrity. Intelligence. Accountability.",
  contact: {
    address: "East Legon, Accra, Ghana",
    phone: "+233 59 114 2133",
    email: "apex.forensic@outlook.com",
    whatsapp: "https://wa.me/233591142133",
  },
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who We Serve",
    href: "/who-we-serve",
    children: [
      { label: "SMEs", href: "/who-we-serve/smes" },
      { label: "Institutions", href: "/who-we-serve/institutions" },
      { label: "Organizations", href: "/who-we-serve/organizations" },
      { label: "Government", href: "/who-we-serve/government" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Resource Hub", href: "/resources" },
  { label: "Insights", href: "/insights" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Integrity. Intelligence. Accountability.",
  title: ["Forensic Accounting &", "Financial Investigation Services"],
  description:
    "Helping SMEs, Institutions, Organizations, and Government detect fraud, prevent financial losses, and strengthen internal controls.",
  primaryCta: { label: "Get a Consultation", href: "/contact" },
  secondaryCta: { label: "Download SME Guide", href: "/resources" },
};

export type Audience = {
  title: string;
  description: string;
  href: string;
  icon: "store" | "bank" | "people" | "government";
  accent: "gold" | "navy" | "green" | "maroon";
};

export const whoWeServe: { heading: string; items: Audience[] } = {
  heading: "Who We Serve",
  items: [
    {
      title: "SMEs",
      description: "Protect your business from financial leaks and fraud.",
      href: "/who-we-serve/smes",
      icon: "store",
      accent: "gold",
    },
    {
      title: "Institutions",
      description: "Strengthen controls and ensure financial integrity.",
      href: "/who-we-serve/institutions",
      icon: "bank",
      accent: "navy",
    },
    {
      title: "Organizations",
      description: "Ensure transparency, accountability and impact.",
      href: "/who-we-serve/organizations",
      icon: "people",
      accent: "green",
    },
    {
      title: "Government",
      description: "Support public sector integrity and anti-corruption efforts.",
      href: "/who-we-serve/government",
      icon: "government",
      accent: "maroon",
    },
  ],
};

export type Service = {
  title: string;
  description: string;
  icon: "magnifier" | "shield-search" | "chart" | "shield-lock";
};

export const whatWeDo: {
  heading: string;
  cta: { label: string; href: string };
  items: Service[];
} = {
  heading: "What We Do",
  cta: { label: "View All Services", href: "/services" },
  items: [
    {
      title: "Forensic Accounting",
      description: "Uncover the truth behind the numbers with expert analysis.",
      icon: "magnifier",
    },
    {
      title: "Fraud Investigation",
      description: "Detect, investigate and prevent fraud and financial misconduct.",
      icon: "shield-search",
    },
    {
      title: "Financial Intelligence",
      description: "Turn financial data into actionable insights and intelligence.",
      icon: "chart",
    },
    {
      title: "Digital Forensics",
      description: "Investigate digital fraud, cyber breaches and data misuse.",
      icon: "shield-lock",
    },
  ],
};

export type Resource = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export const resources: {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  items: Resource[];
} = {
  heading: "Featured Resources",
  subheading: "Practical tools and guides to help you protect your business.",
  cta: { label: "Explore All Resources", href: "/resources" },
  items: [
    {
      title: "Fraud Awareness Guide for SMEs",
      description: "Understand common fraud schemes and how to stop them.",
      cta: "Download Guide",
      href: "/resources",
    },
    {
      title: "Financial Hygiene Checklist",
      description: "A simple checklist to strengthen your financial controls.",
      cta: "Download Checklist",
      href: "/resources",
    },
    {
      title: "Cybersecurity Toolkit",
      description: "Basic cybersecurity steps every business should follow.",
      cta: "Download Toolkit",
      href: "/resources",
    },
  ],
};

export type Stat = { value: string; label: string; icon: "users" | "shield" | "medal" | "lock" };

export const stats: Stat[] = [
  { value: "100+", label: "Clients Served Across Ghana", icon: "users" },
  { value: "50+", label: "Investigations Completed", icon: "shield" },
  { value: "10+", label: "Years Combined Experience", icon: "medal" },
  { value: "100%", label: "Confidentiality Guaranteed", icon: "lock" },
];

export const ctaBanner = {
  title: "Not sure if your business is at risk?",
  description: "Let our experts help you identify financial risks and protect what matters.",
  cta: { label: "Request a Free Consultation", href: "/contact" },
};

export const footer = {
  blurb:
    "Enhancing integrity, protecting value and building trust through professional forensic and financial investigation services.",
  columns: [
    {
      heading: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Who We Serve", href: "/who-we-serve" },
        { label: "Services", href: "/services" },
        { label: "Resource Hub", href: "/resources" },
        { label: "Insights", href: "/insights" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      heading: "Our Services",
      links: [
        { label: "Forensic Accounting", href: "/services" },
        { label: "Fraud Investigation", href: "/services" },
        { label: "Financial Intelligence", href: "/services" },
        { label: "Digital Forensics", href: "/services" },
        { label: "Risk Advisory", href: "/services" },
        { label: "Internal Control Review", href: "/services" },
      ],
    },
    {
      heading: "Resource Hub",
      links: [
        { label: "Fraud Awareness", href: "/resources" },
        { label: "Financial Hygiene", href: "/resources" },
        { label: "Cybersecurity", href: "/resources" },
        { label: "Workshops & Training", href: "/resources" },
        { label: "Guides & Checklists", href: "/resources" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
