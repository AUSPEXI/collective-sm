import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Collective - Social Media for Collective Action",
  description: "Organize, coordinate, and achieve real-world change through collective action. A transparent, community-funded platform for movements that matter.",
  keywords: ["collective action", "social organizing", "digital activism", "community coordination"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
