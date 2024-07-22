'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/app/styles/style.scss";
import Header from "./component/header";
import Footer from "./component/footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.add('home');
    } else {
      document.body.classList.remove('home');
    }
  }, [pathname]);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
            <main className="main">{children}</main>
          <Footer />
        </body>
      </html>
    </QueryClientProvider>

  );
}
