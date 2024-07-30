import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/configFooter";
import { NavBar } from "@/components/navBar/NavBar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eventry",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={dmSans.className}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}