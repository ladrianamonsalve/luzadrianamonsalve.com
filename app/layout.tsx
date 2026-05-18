import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  personSchema,
  localBusinessSchema,
  websiteSchema,
  bookSchema,
} from "@/lib/schemas";
import { getLocale } from "@/lib/locale";
import { site } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.business}`,
    template: `%s · ${site.business}`,
  },
  description:
    "Bookkeeping, notary and tax preparation for small construction businesses. Bilingual ES / EN. IRS AFSP certified.",
  applicationName: site.business,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.business,
  alternates: {
    canonical: site.url,
    languages: {
      es: site.url,
      en: `${site.url}/en`,
      "x-default": site.url,
    },
  },
  openGraph: {
    type: "website",
    siteName: site.business,
    title: `${site.name} | ${site.business}`,
    description:
      "Bookkeeping, notary and tax preparation for small construction businesses. Bilingual ES / EN.",
    url: site.url,
    images: [
      {
        url: `${site.url}/logo-3dk.png`,
        width: 1200,
        height: 630,
        alt: site.business,
      },
    ],
    locale: "es_US",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.business}`,
    description:
      "Bookkeeping, notary and tax preparation for small construction businesses.",
    images: [`${site.url}/logo-3dk.png`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-3dk.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1e5fbe",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${geist.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <JsonLd
          data={[
            personSchema(),
            localBusinessSchema(),
            websiteSchema(locale),
            bookSchema(),
          ]}
        />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppFloat locale={locale} />
      </body>
    </html>
  );
}
