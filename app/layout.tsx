import type { Metadata } from "next";
import { Geist, Geist_Mono, Calistoga, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/core/header";
import Footer from "@/components/core/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "400",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const calistoga = Calistoga({
  weight: "400",
  variable: "--font-calistoga",
  subsets: ["latin"],
});

const sfPro = localFont({
  src: [
    {
      path: "./fonts/sf-pro/sf-pro-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro/sf-pro-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro/sf-pro-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Kanma",
  description: "Kanma",
  icons: {
    icon: "/icons/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${calistoga.variable} ${montserrat.variable} ${sfPro.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
