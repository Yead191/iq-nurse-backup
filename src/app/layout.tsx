import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "sonner";
import { ConfigProvider } from "antd";

// Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "IQ-Nurse",
  description:
    "Your trusted partner in every heartbeat of your nursing journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}  antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              components: {
                Progress: {
                  defaultColor: "#2c5f8d",
                },
                Slider: {
                  trackBg: "#2c5f8d",
                },
              },
            }}
          >
            <Toaster position="top-center" duration={2000} />
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
