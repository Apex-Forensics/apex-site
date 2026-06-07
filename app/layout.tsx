import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { cssVars } from "@/lib/colors";

export const metadata: Metadata = {
  title: {
    default: `${site.name}, Ghana`,
    template: `%s | ${site.shortName} Ghana`,
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
    siteName: site.name,
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
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}