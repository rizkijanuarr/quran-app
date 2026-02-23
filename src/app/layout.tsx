import type { Metadata } from "next";
import { Inter, Calistoga, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const calistoga = Calistoga({
  variable: "--font-calistoga",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Teman Ngaji Kamu! — Al-Quran Digital di Genggamanmu",
  description:
    "Baca Al-Quran kapan saja, di mana saja. Lengkap dengan terjemahan Indonesia, transliterasi, audio murottal, penanda terakhir dibaca, dan bookmark. Gratis untuk Android.",
  icons: {
    icon: "/icon.svg",
  },
  keywords: [
    "Al-Quran",
    "Quran Digital",
    "Baca Quran",
    "Teman Ngaji",
    "Murottal",
    "Terjemahan Quran",
    "Aplikasi Islam",
  ],
  openGraph: {
    title: "Teman Ngaji Kamu! — Al-Quran Digital di Genggamanmu",
    description:
      "Baca Al-Quran kapan saja, di mana saja. Lengkap dengan terjemahan, transliterasi, audio murottal, dan bookmark.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${calistoga.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ToastProvider>{children}</ToastProvider>
        <Analytics />
      </body>
    </html>
  );
}
