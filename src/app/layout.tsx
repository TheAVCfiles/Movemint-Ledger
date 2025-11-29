import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoveMint Ledger",
  description: "MoveMint Studio Ledger - Track and manage your transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
