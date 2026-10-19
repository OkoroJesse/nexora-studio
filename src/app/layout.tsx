import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora Studio | Multidisciplinary Creative, Technology & Business Studio",
  description: "Nexora Studio is an umbrella studio delivering premium website design, mobile apps, UI/UX product design, commercial graphic design, high-resolution printing, and curated acquisitions.",
  keywords: [
    "Nexora Studio",
    "Website Design",
    "Mobile Apps",
    "UI/UX Design",
    "Product Design",
    "Graphic Design",
    "Commercial Printing",
    "Creative Agency",
    "Technology Solutions",
  ],
  authors: [{ name: "Nexora Studio" }],
  openGraph: {
    title: "Nexora Studio — One Studio. Multiple Capabilities.",
    description: "Fullstack web & mobile apps, UI/UX systems, commercial graphic design, and precision printing services under one recognizable brand.",
    siteName: "Nexora Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
