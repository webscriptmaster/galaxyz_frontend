import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import { SITE_TITLE } from "@/utils/constants";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
  fallback: ["Helvetica", "Arial", "sans-serif"],
  subsets: ["latin"],
  variable: "--font-ms"
});

export const metadata: Metadata = {
  title: `${SITE_TITLE}`,
  description: `${SITE_TITLE}`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>

      <body className={montserrat.className} style={{ minWidth: 400 }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
