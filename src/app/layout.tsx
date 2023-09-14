import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Instrument_Sans({ subsets: ["latin"] });

import { ThemeContextProvider } from "./context/ThemeContext";

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
      <body className={inter.className}>
        <ThemeContextProvider>
          {children}
          <Analytics />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
