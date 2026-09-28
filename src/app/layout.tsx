import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { GoogleAnalytics } from "@/components/google-analytics";
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
    default: `${DATA.name} — Développeur logiciel freelance`,
    template: `%s | ${DATA.name}`,
  },
  description:
    "Guillaume Chevallier, développeur logiciel freelance à Montpellier. Automatisation, outils sur mesure et développement web (Next.js, React, Symfony, Laravel) sur abonnement mensuel.",
  keywords: [
    "développeur freelance",
    "développeur logiciel Montpellier",
    "développement web sur mesure",
    "automatisation processus métiers",
    "Next.js",
    "React",
    "Symfony",
    "Laravel",
    "Guillaume Chevallier",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} — Développeur logiciel freelance`,
    description:
      "Automatisez vos processus métiers avec du développement logiciel sur mesure, sur abonnement mensuel.",
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
    title: `${DATA.name} — Développeur logiciel freelance`,
    description:
      "Automatisez vos processus métiers avec du développement logiciel sur mesure, sur abonnement mensuel.",
    card: "summary_large_image",
  },
};

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
        url: DATA.url,
        image: `${DATA.url}${DATA.avatarUrl}`,
        jobTitle: "Développeur logiciel freelance",
        description:
          "Développeur logiciel freelance spécialisé dans l'automatisation et les outils sur mesure pour entreprises.",
        email: `mailto:${DATA.contact.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montpellier",
          addressCountry: "FR",
        },
        sameAs: Object.values(DATA.contact.social).map(
          (social) => social.url
        ),
        knowsAbout: DATA.skills.map((skill) => skill.name),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${DATA.url}/#service`,
        name: DATA.name,
        url: DATA.url,
        description:
          "Développement logiciel sur mesure sur abonnement mensuel : automatisation de processus, outils personnalisés et amélioration de workflows.",
        areaServed: "France",
        serviceType: "Développement logiciel",
        provider: {
          "@id": `${DATA.url}/#person`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${DATA.url}/#website`,
        url: DATA.url,
        name: DATA.name,
        inLanguage: "fr-FR",
        publisher: {
          "@id": `${DATA.url}/#person`,
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
          fontSans.variable
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
      <GoogleAnalytics />
      <Script
        defer
        data-project="680f69468ae3ba03dc0234ae"
        src="https://cdn.jsdelivr.net/gh/litlyx/litlyx-js/browser/litlyx.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
