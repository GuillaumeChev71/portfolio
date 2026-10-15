import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — Studio de développement logiciel sur mesure`,
    template: `%s | ${DATA.name}`,
  },
  description:
    "ITGC, studio de développement logiciel. Automatisation de processus métiers, outils sur mesure et intégration de données, du cadrage à la mise en production.",
  keywords: [
    "studio de développement logiciel",
    "développement web sur mesure",
    "automatisation processus métiers",
    "développement d'applications sur mesure",
    "intégration de données",
    "application mobile sur mesure",
    "ITGC",
    "Montpellier",
    "Next.js",
    "React",
    "Symfony",
    "Laravel",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} — Studio de développement logiciel sur mesure`,
    description:
      "Automatisez vos processus métiers avec des outils logiciels sur mesure, conçus pour durer.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: DATA.avatarUrl,
        width: 512,
        height: 512,
        alt: DATA.name,
      },
    ],
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
  twitter: {
    title: `${DATA.name} — Studio de développement logiciel sur mesure`,
    description:
      "Automatisez vos processus métiers avec des outils logiciels sur mesure, conçus pour durer.",
    card: "summary_large_image",
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${DATA.url}/#organization`,
        name: DATA.name,
        url: DATA.url,
        logo: `${DATA.url}${DATA.avatarUrl}`,
        description:
          "Studio de développement logiciel spécialisé dans l'automatisation de processus, les outils sur mesure et l'intégration de données pour entreprises.",
        email: DATA.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montpellier",
          addressCountry: "FR",
        },
        sameAs: Object.values(DATA.contact.social).map((social) => social.url),
        knowsAbout: DATA.skills.map((skill) => skill.name),
        founder: {
          "@type": "Person",
          name: "Guillaume Chevallier",
          jobTitle: "Fondateur & Ingénieur logiciel",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${DATA.url}/#service`,
        name: DATA.name,
        url: DATA.url,
        description:
          "Développement logiciel sur mesure : automatisation de processus, outils personnalisés et amélioration de workflows.",
        areaServed: "France",
        serviceType: "Développement logiciel",
        provider: {
          "@id": `${DATA.url}/#organization`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${DATA.url}/#website`,
        url: DATA.url,
        name: DATA.name,
        inLanguage: "fr-FR",
        publisher: {
          "@id": `${DATA.url}/#organization`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
        )}
      >
        <StructuredData />
        <ThemeProvider attribute="class" forcedTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
      <Script
        defer
        data-project="680f69468ae3ba03dc0234ae"
        src="https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
