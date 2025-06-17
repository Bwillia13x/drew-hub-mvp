import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Drew Hub - Full Stack Developer & Tech Blog",
    template: "%s | Drew Hub",
  },
  description: "Personal blog and portfolio of Drew - Full Stack Developer specializing in Next.js, React, and modern web technologies.",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack", "Web Development", "Blog"],
  authors: [{ name: "Drew" }],
  creator: "Drew",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    title: "Drew Hub - Full Stack Developer & Tech Blog",
    description: "Personal blog and portfolio of Drew - Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Drew Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drew Hub - Full Stack Developer & Tech Blog",
    description: "Personal blog and portfolio of Drew - Full Stack Developer specializing in Next.js, React, and modern web technologies.",
    creator: "@drewpayment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-gray-900 text-gray-100`}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
