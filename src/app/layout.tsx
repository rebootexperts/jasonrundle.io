import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Rundle",
  description: "Jason Rundle's resume",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
