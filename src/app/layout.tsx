import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Aman Kumar - Software Development Engineer",
  description:
    "Portfolio of Aman Kumar, Software Development Engineer at Innovaccer. Healthcare interoperability, prior authorization, AI platforms, and full-stack development.",
  keywords: [
    "Software Development Engineer",
    "Full Stack Developer",
    "React",
    "Python",
    "FHIR",
    "Healthcare IT",
    "AI",
    "Microservices",
  ],
  authors: [{ name: "Aman Kumar" }],
  openGraph: {
    title: "Aman Kumar - Software Development Engineer",
    description:
      "Software Development Engineer specializing in healthcare interoperability, AI platforms, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
