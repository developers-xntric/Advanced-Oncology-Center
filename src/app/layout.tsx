import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Advanced Diagnostic & Oncology Centre",
  description: "Comprehensive Cancer Care with Compassion and Expertise",
  icons: {
    icon: "/nav-logo.png",
  },
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <Navbar />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
