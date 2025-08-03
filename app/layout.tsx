import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Abanoub Refaat - Portfolio",
  description:
    "Welcome to my personal Portfolio, looking forward to working with you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4">{children}</body>
    </html>
  );
}
