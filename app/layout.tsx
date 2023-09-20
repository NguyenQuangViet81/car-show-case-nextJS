import "./globals.css";
import type { Metadata } from "next";

import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "CAR HUB",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
