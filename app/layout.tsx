import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus — Modern Platform for Modern Teams",
  description:
    "A next-generation platform built for modern teams. Ship faster, scale effortlessly, and craft standout experiences with beautiful design and enterprise-grade reliability.",
  keywords: ["nexus", "platform", "modern teams", "build", "scale"],
  openGraph: {
    title: "Nexus — Modern Platform for Modern Teams",
    description:
      "A next-generation platform built for modern teams. Ship faster, scale effortlessly, and craft standout experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}