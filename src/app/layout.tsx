import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Kumar - Software Engineer",
  description: "Portfolio of Aman Kumar, Software Engineer at Iksha Labs specializing in AI platforms, full-stack development, and microservices architecture.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Python", "AI", "Machine Learning"],
  authors: [{ name: "Aman Kumar" }],
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=5.0",
  openGraph: {
    title: "Aman Kumar - Software Engineer",
    description: "Portfolio of Aman Kumar, Software Engineer specializing in AI platforms and full-stack development.",
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
