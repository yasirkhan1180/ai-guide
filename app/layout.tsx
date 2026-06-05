import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "AI-guide — Navigating the Intelligence Age",
    template: "%s | AI-guide",
  },
  description:
    "Thoughtful writing on artificial intelligence, machine learning, and the ideas shaping how we build and think.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI-guide",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
