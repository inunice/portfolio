import type { Metadata } from "next";
import { Open_Sans } from "@next/font/google";
import Bagnard from "@next/font/local";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-openSans" });
const bagnard = Bagnard({
  src: "../public/fonts/Bagnard.woff2",
  variable: "--font-bagnard",
});

export const metadata: Metadata = {
  title: "inunice",
  description: "Ayen Manguan's porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans ${bagnard.variable}`}>
        {children}
      </body>
    </html>
  );
}
