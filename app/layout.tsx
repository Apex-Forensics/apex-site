import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Apex Forensic & Financial Investigations Ltd — Ghana",
    template: "%s | Apex Forensic Ghana",
  },
  description:
    "Ghana's technology-driven forensic accounting and financial investigation firm. Helping SMEs, institutions, and government detect fraud, prevent financial losses, and strengthen internal controls.",
  keywords: [
    "forensic accounting Ghana",
    "fraud investigation Ghana",
    "financial investigation Accra",
    "SME fraud protection Ghana",
    "digital forensics Ghana",
  ],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Apex Forensic & Financial Investigations Ltd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}