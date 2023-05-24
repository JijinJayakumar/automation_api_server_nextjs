"use client";
import "./globals.css";
import { Inter } from "next/font/google";
// import { ConfigProvider } from "antd";
import withTheme from "../theme";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Syncer.io",
  description: "Sync your data",
};

export default function RootLayout({ children }) {
  return withTheme(
    // <ConfigProvider direction="rtl" locale="en">
    <html lang="en">
      <body className="">{children}</body>
    </html>
    // </ConfigProvider>
  );
}
