import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Header from "@/components/organism/Header";
import Footer from "@/components/organism/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Julius Angelo Paano | Software Developer",
  description: "Passionate software developer dedicated to building reliable and impactful applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
