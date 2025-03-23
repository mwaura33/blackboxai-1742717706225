import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern E-commerce Store",
  description: "A modern e-commerce store built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <nav className="border-b">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Store
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
