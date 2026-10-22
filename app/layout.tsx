import type { Metadata, Viewport } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Abanoub Refaat — Software Engineer & Designer",
  description:
    "Personal portfolio of Abanoub Refaat. Specialized in building offline-first apps, scalable systems, and modern web experiences.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#463f3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
