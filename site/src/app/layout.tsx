import type { Metadata } from "next";
import { Playfair_Display, Outfit, DM_Sans, Inter, IBM_Plex_Mono, Sora } from "next/font/google";
import { CursorSpotlight } from "@/components/cursor-spotlight";
import { NoiseOverlay } from "@/components/noise-overlay";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sachin Sanas — UX/UI Designer",
  description:
    "Sachin Sanas is a UX/UI designer focused on simplifying complex ideas into clear, intuitive digital experiences. 9+ years shipping UX for SaaS, dashboards, and mobile apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${outfit.variable} ${dmSans.variable} ${inter.variable} ${plexMono.variable} ${sora.variable}`}
    >
      <body>
        <NoiseOverlay />
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
