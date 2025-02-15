import type { Metadata } from "next";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import ProviderWrapper from "./provider";
import localFont from "next/font/local";
import "./globals.css";
import { AppNavigation } from "@/components/app-navigation";
import { Button } from "@/components/ui/button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Case Erector Parameters",
  description: "Case Erector Parameters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-screen overflow-hidden`}
      >
        <ProviderWrapper>
          <AppSidebar />
          <main className="w-full">
            <nav className="flex justify-between items-center p-4 bg-white text-black border-b-[1px]">
              <SidebarTrigger />
              <AppNavigation />
              <section>
                <Button variant="outline">Login</Button>
              </section>
            </nav>
            <section className="p-8 min-h-full">{children}</section>
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
