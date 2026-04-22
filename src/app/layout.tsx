import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Steven Burton — UX Designer",
    template: "%s | Steven Burton",
  },
  description:
    "UX product designer crafting thoughtful, human-centered experiences. Currently at FamilySearch.",
  metadataBase: new URL("https://stevendburton.com"),
  openGraph: {
    title: "Steven Burton — UX Designer",
    description:
      "UX product designer crafting thoughtful, human-centered experiences. Currently at FamilySearch.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Burton — UX Designer",
    description:
      "UX product designer crafting thoughtful, human-centered experiences. Currently at FamilySearch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
