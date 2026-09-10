import type { Metadata, Viewport } from "next"
import { Great_Vibes, Manrope, Playfair_Display, Source_Serif_4 } from "next/font/google"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Providers } from "@/components/providers"
import { siteConfig } from "@/lib/site"

import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "700", "800"],
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#162640",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://gasc.in"),
  title: {
    default: `${siteConfig.name} · ${siteConfig.legalName}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "GASC",
    "LPG delivery Shikohabad",
    "PNG connection",
    "gas appliance installation",
    "safety inspection",
  ],
  openGraph: {
    title: siteConfig.legalName,
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${sourceSerif.variable} ${playfair.variable} ${greatVibes.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
