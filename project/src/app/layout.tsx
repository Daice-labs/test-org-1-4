import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThreadTrack — Clothes Store CRM & Inventory",
  description:
    "Manage your clothing store inventory, sales, customers, and orders all in one place with ThreadTrack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  );
}
