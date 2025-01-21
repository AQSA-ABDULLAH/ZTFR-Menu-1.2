import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: { default: "ZTFR", template: "%s - ZTFR" },
  description: "Learn how to optimize your Next.js website for SEO.",
  keywords: "seo app, nextjs seo complete checklist, nextjs seo tutorial",
  openGraph: {
    title: "Nextjs SEO App",
    description: "Learn how to optimize your Next.js website for SEO.",
    images:
      "https://ik.imagekit.io/dminhvu/assets/nextjs-seo/thumbnail.png?tr=f-png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
