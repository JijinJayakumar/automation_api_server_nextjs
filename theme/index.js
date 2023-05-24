// "use client";
import { ConfigProvider } from "antd";

export const theme = {
  token: {
    colorPrimary: "#391952",
    borderRadius: 16,
    colorPrimaryBg: "#BA80E6",
    colorWarningTextActive: "#FFAF77",
    colorInfo: "#92abfc",
    wireframe: false,
    colorTextBase: "#170909",
    colorBgBase: "#f8f2fc",
    colorPrimaryBorder: "#BA80E6",
    colorPrimaryHover: "#BA80E6",
  },
};

const withTheme = (node) => (
  <>
    <ConfigProvider theme={theme}>{node}</ConfigProvider>
  </>
);

export default withTheme;
