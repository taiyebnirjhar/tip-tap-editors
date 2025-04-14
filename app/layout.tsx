import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TipTap Editors",
  description:
    "A collection of modular, reusable rich text editors built with TipTap, React, and Tailwind CSS.",
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
