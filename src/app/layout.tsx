import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Toaster } from "sonner";

// Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300","400", "500","600" , "700" , "800" , "900"],
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
      <body className={`${roboto.className}  antialiased`}>
        <AntdRegistry>
          <Toaster position="top-center" duration={2000} />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
