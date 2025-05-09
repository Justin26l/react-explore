import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./css/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-atr-light antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}