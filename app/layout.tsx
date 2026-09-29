import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionProvider } from "@/components/motion-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rex Makusia — Full-stack developer",
  description:
    "Rex Makusia is a full-stack developer who turns practical problems into clear, dependable software.",
  openGraph: {
    title: "Rex Makusia — Full-stack developer",
    description:
      "Thoughtful interfaces, reliable data, and backend systems that make products useful.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
