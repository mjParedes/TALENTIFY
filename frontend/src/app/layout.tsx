import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "@/components/atoms/Toast/Toast";
import { Navbar } from "@/components/organisms/Navbar/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Talentify",
  description: "Transforma tu talento en éxito",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full bg-gray-200 antialiased`}
      >
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
