import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";

const font = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ratchapong Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className={`${font.className} bg-zinc-900 text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}