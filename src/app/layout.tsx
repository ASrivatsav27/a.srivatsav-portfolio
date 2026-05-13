import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adapa SriVatsav | Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Adapa SriVatsav — Full-Stack Developer, AI & ML enthusiast building real-time systems, AI hiring pipelines, and browser-based IDEs. Winner of national hackathons.",
  keywords: [
    "Adapa SriVatsav",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Portfolio",
    "WebRTC",
    "Docker",
    "Machine Learning",
  ],
  authors: [{ name: "Adapa SriVatsav" }],
  creator: "Adapa SriVatsav",
  openGraph: {
    title: "Adapa SriVatsav | Full-Stack Developer & AI Engineer",
    description:
      "Building real-time systems, AI pipelines, and developer tools. 2x national hackathon winner.",
    type: "website",
    locale: "en_US",
    siteName: "SriVatsav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adapa SriVatsav | Full-Stack Developer & AI Engineer",
    description:
      "Building real-time systems, AI pipelines, and developer tools. 2x national hackathon winner.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col font-mono">{children}</body>
    </html>
  );
}
