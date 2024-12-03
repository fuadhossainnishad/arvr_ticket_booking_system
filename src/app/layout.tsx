import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

import StoreProvider from "@/store/storeProvider";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// ${geistSans.variable} ${geistMono.variable}

export const metadata: Metadata = {
  title: "AR/VR Ticket Booking System",
  description: "Book your AR/VR tickets seamlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={` antialiased text-black  `}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
