import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Navbar />
        <main className="min-h-[calc(100vh-224px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}