import MaxWidthWrapper from "@/components/_components/max-width-wrapper";
import { ThemeProvider } from "@/components/ui/theme-provider";
// import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "../style/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import localFont from "next/font/local";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const interFont = localFont({
  src: [
    {
      path: "./fonts/inter-normal.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/inter-medium.ttf",
      weight: "500",
      style: "normal", // Fixed: was "medium"
    },
    {
      path: "./fonts/inter-bold.ttf",
      weight: "700",
      style: "normal", // Fixed: was "bold"
    },
  ],
  variable: "--font-inter", // Added CSS variable
  display: "swap", // Optimize loading
});

export const metadata: Metadata = {
  title: "Sahil kumar dev",
  description: "This is my personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${interFont.className}
          ${interFont.variable}
          dark:bg-black/10
          bg-[#fffbf5]
          antialiased
          `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MaxWidthWrapper>
            <Navbar />
            {children}
            <Footer />
          </MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
