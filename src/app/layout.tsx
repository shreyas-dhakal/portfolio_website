import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
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
<main
  className={cn(
    "relative flex min-h-screen h-dvh items-center justify-between pt-14 pb-4 px-40 max-md:px-6 max-sm:pt-20",
    "bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.25),transparent_40%)]"
  )}
>
  <Navbar />
  {children}
</main>

      </body>
    </html>
  );
}
