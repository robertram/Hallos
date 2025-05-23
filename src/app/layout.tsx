import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import QueryProvider from "@/providers/QueryProvider";

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body>
        <QueryProvider>
          <div className=" bg-black relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[130vw] aspect-[2/1] opacity-80"
              style={{
                background: `radial-gradient(50% 50% at 50% 0%, #171163 0%, transparent 100%)`
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-[50vw] aspect-square opacity-60"
              style={{
                background: `radial-gradient(100% 100% at 0% 100%, #171163 0%, transparent 100%)`
              }}
            />
            <div className="relative z-10  w-full">
              <Navbar />
              <div className="min-h-[68vh]">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
