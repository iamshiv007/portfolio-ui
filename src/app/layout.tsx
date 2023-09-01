import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

const inter = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio UI",
  description: "This is ui part of my next project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
