import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/app/components/Home/Nav/ResponsiveNav"
import Footer from "./components/Home/Footer/Footer";

const oswald = Oswald({
  weight:["200","300","400","500","600","700"],
  subsets:["latin"]
});

export const metadata: Metadata = {
  title: "Atiya | Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} bg-black` }>

        <ResponsiveNav />
        {children}
        <Footer />

        </body>
    </html>
  );
}

// bg-[#212428]