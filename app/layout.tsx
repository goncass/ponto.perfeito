import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B3A2E",
};

export const metadataBase = new URL("https://pontoperfeito.pt");

export const metadata: Metadata = {
  title: {
    default: "Ponto Perfeito — Limpezas Domésticas e Profissionais em Loures e Odivelas",
    template: "%s | Ponto Perfeito",
  },
  description:
    "Serviços de limpeza doméstica, profunda, pós-obras e escritórios em Loures, Odivelas e arredores. Orçamento gratuito sem compromisso. Equipa de confiança, atenção ao detalhe.",
  keywords: [
    "limpeza doméstica",
    "limpeza profunda",
    "limpeza pós-obras",
    "limpeza escritórios",
    "Loures",
    "Odivelas",
    "empresa limpeza",
    "domésticas",
  ],
  authors: [{ name: "Ponto Perfeito" }],
  creator: "Ponto Perfeito",
  publisher: "Ponto Perfeito",
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
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://pontoperfeito.pt",
    siteName: "Ponto Perfeito",
    title: "Ponto Perfeito — Limpezas Domésticas e Profissionais",
    description:
      "Cuidamos da limpeza da sua casa ou escritório com atenção ao detalhe. Serviços em Loures, Odivelas e zonas próximas. Peça orçamento grátis.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equipa Ponto Perfeito a realizar limpeza doméstica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ponto Perfeito — Limpezas Domésticas e Profissionais",
    description:
      "Limpezas domésticas, profundas, pós-obras e escritórios em Loures e Odivelas. Orçamento gratuito.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://pontoperfeito.pt",
  },
  other: {
    "contact-name": "Ponto Perfeito",
    "contact-email": "geral@pontoperfeito.pt",
    "contact-phone": "+351 923 541 868",
    "contact-address": "Loures, Portugal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Ponto Perfeito",
              description:
                "Empresa de limpezas domésticas e profissionais em Loures e Odivelas. Limpeza regular, profunda, pós-obras, escritórios, vidros e varandas.",
              url: "https://pontoperfeito.pt",
              telephone: "+351923541868",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Loures",
                addressRegion: "Lisboa",
                addressCountry: "PT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.826,
                longitude: -9.179,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Loures",
                },
                {
                  "@type": "City",
                  name: "Odivelas",
                },
                {
                  "@type": "City",
                  name: "Lisboa",
                },
              ],
              priceRange: "€€",
              currenciesAccepted: "EUR",
              paymentAccepted: "Cash, Credit Card, MB Way, Transfer",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:00",
                  closes: "13:00",
                },
              ],
              sameAs: [
                "https://wa.me/351923541868",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--creme)] text-[var(--texto)]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 rounded-xl bg-[var(--verde-escuro)] px-4 py-2 text-white font-medium transition"
        >
          Saltar para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}