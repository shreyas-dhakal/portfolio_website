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
    "site-shell relative flex min-h-screen items-center justify-between pt-24 pb-8 px-16 max-lg:px-8 max-sm:px-5 overflow-hidden"
  )}
>
  {/* Animated background */}
<div className="absolute inset-0 -z-10 pointer-events-none">
      {/* ambient color field */}
  <div
    className="
      absolute inset-0
      animate-[glow_4s_ease-in-out_infinite]
      [animation-delay:-2s]
       bg-[radial-gradient(circle_at_20%_20%,rgba(183,255,0,0.10),transparent_55%)]
    "
  />

  {/* Top-right */}
  <div
    className="
      absolute inset-0
      animate-[glow_8s_ease-in-out_infinite]
      [animation-delay:-6s]
       bg-[radial-gradient(circle_at_80%_30%,rgba(31,62,255,0.16),transparent_65%)]
    "
  />

  {/* Bottom-center */}
  <div
    className="
      absolute inset-0
      animate-[glow_12s_ease-in-out_infinite]
      [animation-delay:-10s]
       bg-[radial-gradient(circle_at_50%_80%,rgba(183,255,0,0.07),transparent_50%)]
    "
  />
</div>

<div className="absolute inset-0 -z-10 pointer-events-none">
  {/* Top-left diagonal lines */}
<div
  className="
    absolute top-0 left-0 w-[40rem] h-[40rem]
     bg-[repeating-linear-gradient(135deg,rgba(183,255,0,0.12)_0px,rgba(183,255,0,0.12)_1px,transparent_1px,transparent_10px)]
    mix-blend-screen
    opacity-70
    [mask-image:radial-gradient(circle_at_top_left,black,transparent_45%)]
    [-webkit-mask-image:radial-gradient(circle_at_top_left,black,transparent_45%)]

  "
/>

<div
  className="
    absolute bottom-0 right-0 w-[40rem] h-[40rem]
     bg-[repeating-linear-gradient(135deg,rgba(183,255,0,0.08)_0px,rgba(183,255,0,0.08)_1px,transparent_1px,transparent_12px)]
    mix-blend-screen
    opacity-60
    [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]
    [-webkit-mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)]
    animate-[diagonal-slide_7s_linear_infinite_reverse]
  "
/>

</div>
  <Navbar />
  {children}
</main>


      </body>
    </html>
  );
}
