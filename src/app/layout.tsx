import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import CursorSignal from "@/components/animation/CursorSignal";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyasdhakal.com.np"),
  title: {
    default: siteConfig.name,
    template: `%s - AI Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "shreyas",
    "dhakal",
    "shreyas dhakal",
    "Shreyas Dhakal",
    "Shreyas",
    "Dhakal",
  ],
  authors: [
    {
      name: "Shreyas Dhakal",
      url: "https://github.com/shreyas-dhakal",
    },
  ],
  creator: "Shreyas Dhakal",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "https://x.com/ei77ge_",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
        <CursorSignal />
<main
  className={cn(
    "site-shell relative flex min-h-screen items-center justify-between pt-24 pb-8 px-16 max-lg:px-8 max-sm:px-5 overflow-hidden"
  )}
>
 <div className="ambient-background" aria-hidden="true">
   <div className="ambient-grid" />
   <div className="ambient-scanlines" />
   <div className="ambient-glow ambient-glow-one" />
   <div className="ambient-glow ambient-glow-two" />
   <div className="ambient-glow ambient-glow-three" />
   <div className="ambient-ring ambient-ring-one" />
   <div className="ambient-ring ambient-ring-two" />
   <div className="ambient-crosshair ambient-crosshair-one"><i /><i /></div>
   <div className="ambient-crosshair ambient-crosshair-two"><i /><i /></div>
 </div>
  <Navbar />
  {children}
</main>


      </body>
    </html>
  );
}
