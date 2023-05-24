"use client";
import "./globals.css";
import { ConfigProvider } from "antd";
import { theme } from "../theme";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Syncer.io",
//   description: "Sync your data",
// };

export default function RootLayout({ children }) {
  return (
    <ConfigProvider theme={theme}>
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </ConfigProvider>
  );
}
