"use client";

import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Since we're using 'use client', we can't export metadata directly
// You'll need to create a separate metadata.ts file in the app directory
// export const metadata = {
//   title: "Beatrice Egumandi - Frontend Software Engineer",
//   description: "Portfolio of Beatrice Egumandi, Frontend Software Engineer",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);

  return (
    <html lang="en" data-theme={theme} style={{ colorScheme: theme }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#de7a0b]`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <div className="app-container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
