import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "sonner";

// Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  // weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "IQ-Nurse",
  description:
    "Your trusted partner in every heartbeat of your nursing journey.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased`}>
        <AntdRegistry>
          <Toaster position="top-center" duration={2000} />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
