"use client";
import { ConfigProvider } from "antd";

export default function AuthLayout({ children }) {
  return (
    <>
      <ConfigProvider locale="en">{children}</ConfigProvider>
    </>
  );
}
