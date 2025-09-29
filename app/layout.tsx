import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TargetCursor from "./components/TargetCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberon",
  description: "Roberon is a company that specializes in creating high-quality, innovative products that enhance the lives of our customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Megrim&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Iceland&family=Megrim&display=swap" rel="stylesheet"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        />
        {children}
      </body>
    </html>
  );
}
