import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rodood.ai — AI Customer Support for WhatsApp and Instagram Stores",
  description:
    "Rodood.ai helps e-commerce brands reply instantly, answer FAQs, handle complaints, and hand off conversations to humans across WhatsApp, Instagram, and Messenger.",
  keywords: [
    "AI customer support",
    "WhatsApp automation",
    "Instagram DM automation",
    "Arabic chatbot",
    "e-commerce support",
    "social commerce support",
    "Rodood.ai",
    "MENA AI",
  ],
  authors: [{ name: "Rodood.ai" }],
  openGraph: {
    title: "Rodood.ai — AI Customer Support for Social-Commerce Brands",
    description:
      "Turn your DMs into instant customer support. Reply across WhatsApp, Instagram, and Messenger in Arabic, English, and Franco.",
    url: "https://rodood.ai",
    siteName: "Rodood.ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodood.ai — AI Customer Support for WhatsApp and Instagram Stores",
    description:
      "AI-powered customer support for MENA e-commerce brands. Reply instantly, handle complaints safely.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://rodood.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
