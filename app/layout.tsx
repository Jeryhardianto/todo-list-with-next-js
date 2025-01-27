import { Metadata } from "next";
import "@/app/global.css";
import Navbar from "@/app/_components/navbar";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

export const metadata : Metadata = {
  title: 'Belajar Next.js',
  description: 'Belajar Next.js bersama Nailong',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
   <html lang="en" className={inter.className}>
    <body>
      <Navbar />
      {children}
    </body>
   </html>
  );

}