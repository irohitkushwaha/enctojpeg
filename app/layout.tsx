import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that premium, clean look
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enc to JPEG Converter | Enc Converter",
  description: "Securely convert .enc files from WhatsApp Web to JPEG images directly in your browser. No server uploads, 100% private and free.",
  keywords: ["enc to jpg", "enc converter", "whatsapp enc to jpg", "convert enc file", "enc to jpeg"],
  authors: [{ name: "EncConverter" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
