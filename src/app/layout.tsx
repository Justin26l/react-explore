"use client";

import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import "./css/globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page";
import Register from "./register/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bw-blue font-atr-light antialiased flex flex-col min-h-screen">
        <Router>
          <SessionProvider>
            <Navbar />
            <div className="flex flex-col items-center justify-center text-center w-full border">
              <main className="max-w-[1520px]">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
            </div>
          </SessionProvider>
        </Router>
      </body>
    </html>
  );
}