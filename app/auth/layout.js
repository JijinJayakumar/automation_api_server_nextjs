"use client";
import { theme } from "../../theme";
import { ConfigProvider } from "antd";
export default function AuthLayout({ children }) {
  return (
    <>
      <ConfigProvider locale="en" theme={theme}>
        {" "}
        {children}
      </ConfigProvider>
    </>
  );
}
