import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

export const metadata: Metadata = {
  title: "ร้านรถยนต์",
  description: "ร้านรถยนต์ จำหน่ายอะไหล่รถยนต์และบริการซ่อมรถยนต์",
};

const myFont = localFont({ 
  src: '../../public/fonts/supermarket.ttf',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
