"use client";
import "./globals.css";
import withTheme from "../theme";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syncer.io",
  description: "Sync your data",
};

export default function RootLayout({ children }) {
  return withTheme(
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
