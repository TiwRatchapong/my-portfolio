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

  openGraph: {
    title: "Ratchapong Portfolio",
    description: "Frontend Developer Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Ratchapong Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ratchapong Portfolio",
    description: "Frontend Developer Portfolio",
    images: ["/portfolio-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-zinc-900 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}