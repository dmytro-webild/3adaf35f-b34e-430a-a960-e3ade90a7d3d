import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";



export const metadata: Metadata = {
  title: 'PROTECH Gebäudetechnik Starnberg',
  description: 'Moderne Haustechnik in Starnberg: Wärmepumpen, Fußbodenheizungen und Sanierungen vom Profi. Zuverlässig, kompetent, 5 Sterne.',
  openGraph: {
    "title": "PROTECH Gebäudetechnik Starnberg",
    "description": "Ihr zuverlässiger Partner für moderne Haustechnik und Wärmepumpen in Starnberg.",
    "siteName": "PROTECH"
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
