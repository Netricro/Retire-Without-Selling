import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  weight: "400",
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retire Without Selling | Build to Retire",
  description: "Most UK business owners over 55 will never retire on what their business is worth. There is a better way. Partner for equity. Build value. Step back. Keep ownership.",
  metadataBase: new URL("https://retirewithoutselling.com"),
  openGraph: {
    title: "Retire Without Selling Your Business",
    description: "The Retirement Value Gap is real. 95% of businesses never sell. 96% sell for a fraction of their worth. There is a better way.",
    url: "https://retirewithoutselling.com",
    siteName: "Retire Without Selling",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retire Without Selling Your Business",
    description: "The Retirement Value Gap is real. 95% of businesses never sell. 96% sell for a fraction of their worth. There is a better way.",
  },
  keywords: ["Retire Without Selling", "Build to Retire", "Partnering for Equity", "Business Exit Strategy", "UK Business Owners", "Retirement Planning", "Business Value Gap", "Exit Without Selling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F1A] text-white pt-16">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
