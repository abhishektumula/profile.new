import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://profile-kohl-xi-27.vercel.app"),
  title: {
    default: "Abhishek Tumula | Full-Stack Developer",
    template: "%s | Abhishek Tumula",
  },
  description:
    "Portfolio of Abhishek Tumula, a full-stack developer building AI-powered products, modern web apps, and scalable digital experiences.",
  keywords: [
    "Abhishek Tumula",
    "Full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
    "Web developer",
  ],
  authors: [{ name: "Abhishek Tumula" }],
  creator: "Abhishek Tumula",
  openGraph: {
    type: "website",
    url: "https://profile-kohl-xi-27.vercel.app",
    title: "Abhishek Tumula | Full-Stack Developer",
    description:
      "Portfolio of Abhishek Tumula featuring projects, experience, blogs, and setup.",
    siteName: "Abhishek Tumula Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Tumula portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Tumula | Full-Stack Developer",
    description:
      "Portfolio of Abhishek Tumula featuring projects, experience, blogs, and setup.",
    images: ["/profile.png"],
  },
  icons: {
    icon: [{ url: "/icon.af" }, { url: "/profile.png", type: "image/png" }],
    shortcut: "/icon.af",
    apple: "/icon.af",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
