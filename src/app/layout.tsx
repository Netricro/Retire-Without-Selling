import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  description: "Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement. Partner for equity. Build value. Step back.",
  metadataBase: new URL("https://retirewithoutselling.com"),
  openGraph: {
    title: "Retire Without Selling Your Business",
    description: "Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement. Partner for equity. Build value. Step back.",
    url: "https://retirewithoutselling.com",
    siteName: "Retire Without Selling",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retire Without Selling Your Business",
    description: "Build a business that runs without you, so you can step away, keep your equity, and continue receiving income throughout retirement. Partner for equity. Build value. Step back.",
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
      <body className="min-h-full flex flex-col pt-16">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
