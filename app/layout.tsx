import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ugunja Daily Report – The Voice of Ugunja & Ugenya",
  description:
    "Trusted news, politics, sports, entertainment, and community stories from Ugunja and Ugenya, Siaya County.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
