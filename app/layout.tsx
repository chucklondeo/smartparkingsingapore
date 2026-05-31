import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Londeo Smart Parking | Singapore's #1 Parking Management Platform",
  description:
    "Londeo Smart Parking delivers end-to-end parking management software and hardware for Singapore — NETS, PayNow, LPR cameras, barrier gates, season parking, visitor management and real-time analytics.",
  keywords: [
    "smart parking Singapore",
    "parking management system Singapore",
    "NETS parking payment",
    "PayNow parking",
    "LPR camera parking",
    "season parking management",
    "visitor parking system",
    "condo parking management",
    "barrier gate system Singapore",
    "Londeo Technology",
  ],
  authors: [{ name: "Londeo Technology Pte Ltd" }],
  openGraph: {
    title: "Londeo Smart Parking | Singapore's #1 Parking Management Platform",
    description:
      "End-to-end smart parking platform for Singapore — NETS, PayNow, LPR, season parking and real-time cloud management.",
    url: "https://londeoaccess.com.sg",
    siteName: "Londeo Smart Parking",
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Londeo Smart Parking Singapore",
    description: "Smart Parking Platform Built for Singapore",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://londeoaccess.com.sg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-SG" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">{children}</body>
    </html>
  );
}
