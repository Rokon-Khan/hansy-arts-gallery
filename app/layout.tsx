import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./redux/provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Hansy Arts Gallery - Fine Art Collection",
  description: "Discover and explore exquisite fine art pieces from talented artists around the world",
  keywords: ["art", "gallery", "paintings", "sculptures", "fine art"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
