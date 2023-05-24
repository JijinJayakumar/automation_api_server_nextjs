// "use client";
import { ConfigProvider } from "antd";

const withTheme = (node) => (
  <>
    <ConfigProvider
      theme={{
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
      }}
    >
      {node}
    </ConfigProvider>
  </>
);

export default withTheme;
