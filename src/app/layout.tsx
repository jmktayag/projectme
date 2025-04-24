// Import necessary dependencies
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/layout/Navbar";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application
export const metadata: Metadata = {
  title: "Mc Kein - Portfolio",
  description: "Full-stack developer, woodworker, and avid cyclist who loves to vlog about adventures.",
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Script to handle dark mode theme switching */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            try {
              // Check initial system color scheme preference
              if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }

              // Listen for system theme changes
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                if (e.matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              });
            } catch (_) {}
          `}
        </Script>
      </head>
      {/* Body with dynamic classes for theme switching and font */}
      <body className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
