import type { Metadata } from "next";
import { Krub } from "next/font/google";
import "./globals.css";

const krub = Krub({
  subsets: ["latin"],
  weight: "200"
});

export const metadata: Metadata = {
  title: "Information Gardener",
  description: "Portfolio website for Information Gardener LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={krub.className}>{children}</body>
    </html>
  );
}
