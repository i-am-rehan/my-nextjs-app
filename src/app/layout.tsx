"use client";

// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <html>
      <body>
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <div className="flex items-center space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            {/* Add more links if needed */}
          </div>
        </header>
        <main className="flex-1 p-4">{children}</main>
        <footer className="flex justify-center items-center p-4 bg-gray-800 text-white">
          © 2024 My Next.js App
        </footer>
      </body>
    </html>
  );
};

export default Layout;
