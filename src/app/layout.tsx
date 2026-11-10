import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marijana Bandić | Computer Science Portfolio",
  description:
    "Personal portfolio of Marijana Bandić – computer science graduate interested in software development, artificial intelligence and research.",
  keywords: ["Marijana Bandić", "Computer Science", "Software Development", "Artificial Intelligence", "Portfolio"],
  authors: [{ name: "Marijana Bandić" }],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
