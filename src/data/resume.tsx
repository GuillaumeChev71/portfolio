import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "ITGC",
  initials: "IT",
  url: "https://itgcdev.fr",
  location: "Montpellier, FR",
  locationLink: "",
  description:
    "Studio de développement logiciel : automatisation de vos processus métiers, outils sur mesure et intégration de données, du cadrage à la mise en production.",
  summary:
    "ITGC est un studio de développement logiciel qui aide les entreprises à gagner du temps et en fiabilité. Nous concevons des outils sur mesure, automatisons les tâches répétitives et intégrons vos flux de données dans des solutions claires et évolutives — un partenaire technique dédié, du cadrage jusqu'à la maintenance.",
  avatarUrl: "/logo.png",
  skills: [
    { name: "Automatisation de processus", href: "" },
    { name: "Développement web sur mesure", href: "" },
    { name: "Intégration de données", href: "" },
    { name: "Applications mobiles", href: "" },
    { name: "APIs & architectures scalables", href: "" },
    { name: "CI/CD & DevOps", href: "" },
    { name: "React", href: "https://react.dev" },
    { name: "Next.js", href: "https://nextjs.org" },
    { name: "Typescript", href: "https://www.typescriptlang.org" },
    { name: "Node.js", href: "https://nodejs.org" },
    { name: "Angular", href: "https://angular.io" },
    { name: "Symfony", href: "https://symfony.com" },
    { name: "Laravel", href: "https://laravel.com" },
    { name: "React Native", href: "https://reactnative.dev" },
    { name: "TailwindCSS", href: "https://tailwindcss.com" },
    { name: "PostgreSQL", href: "https://www.postgresql.org" },
    { name: "PHP", href: "https://www.php.net" },
    { name: "Python", href: "https://www.python.org" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dev@itgcdev.fr",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/GuillaumeChev71",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guillaume-chevallier-381bb9188/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Contact: {
        name: "Book a call",
        url: "https://calendly.com/guillaumechevallier71/30min?back=1&month=2025-09",
        icon: Icons.call,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Eminence",
      href: "",
      badges: ["Mission client"],
      location: "Remote",
      title: "Maintenance & évolution du SI",
      logoUrl: "/clients/eminence.png",
      start: "Novembre 2024",
      end: "Novembre 2025",
      description:
        "Maintenance et évolution du système d’information interne, intégration de flux de données internes et externes, automatisation de processus internes. Stack : PHP, Symfony, SQL, JavaScript, Git, GitHub",
    },
    {
      company: "Atol CD",
      href: "",
      badges: ["Mission client"],
      location: "Remote",
      title: "Applications métiers sur mesure",
      logoUrl: "/clients/atolcd.png",
      start: "Novembre 2025",
      end: "Aujourd'hui",
      description:
        "Conception et développement d'applications métiers sur mesure pour les secteurs de l'agro-alimentaire et de l'agriculture, de l'analyse du besoin à la mise en production. Stack : PHP, Symfony, Laravel, PostgreSQL, Vue3, React",
    },
    {
      company: "Caisse d'Epargne BFC",
      href: "",
      badges: ["Mission client"],
      location: "Dijon, FR",
      title: "Système d'information bancaire",
      logoUrl: "/clients/cebfc.png",
      start: "Septembre 2021",
      end: "Septembre 2023",
      description:
        "Recueil des besoins métiers via ateliers de co-conception. Documentation fonctionnelle sous Confluence, gestion de projet via Jira et SuitePro-G. Modélisation de données sous Oracle. Interfaces AngularJS, Angular 9 & 15, API serveur en PHP avec Doctrine ORM. Suivi de recette, MEP et support technique.",
    },
    {
      company: "Sécurité Routière",
      href: "",
      badges: ["Mission client"],
      location: "Remote",
      title: "Application mobile d'analyse des trajets routiers",
      logoUrl: "/clients/SR.jpeg",
      start: "Mai 2024",
      end: "Août 2024",
      description:
        "Conception et publication d'une application mobile d'analyse des trajets routiers (Ma SR 58), disponible sur Google Play : suivi du parcours, évaluation de la conduite et restitution de statistiques d'usage.",
    },
    {
      company: "CGI",
      href: "",
      badges: ["Mission client"],
      location: "Remote",
      title: "Développement d'applications métiers",
      logoUrl: "/clients/cgi.png",
      start: "2023",
      end: "",
      description:
        "Développement d'applications métiers sur des projets grands comptes : analyse du besoin, implémentation, tests et mise en production au sein d'équipes agile.",
    },
    {
      company: "Orange",
      href: "",
      badges: ["Mission client"],
      location: "Remote",
      title: "Évolution du système d'information",
      logoUrl: "/clients/orange.png",
      start: "2024",
      end: "",
      description:
        "Contribution à l'évolution du système d'information : développement, intégration et maintien en condition opérationnelle d'applications internes.",
    },
  ],
  projects: [
    {
      title: "Wisheez",
      href: "",
      dates: "Jan 2025 - Aujourd'hui",
      active: true,
      description:
        "Application web de gestion de wishlists pour diverses occasions, pour particuliers et petites entreprises.",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Ma SR 58",
      href: "https://play.google.com/store/apps/details?id=com.expo.masecurite",
      dates: "Mai 2024 - Août 2024",
      active: true,
      description:
        "Application mobile d'analyse des trajets routiers, publiée sur Google Play.",
      technologies: [
        "React Native",
        "Typescript",
        "Expo Go",
        "SQLite",
        "Firebase",
      ],
      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.expo.masecurite",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/masr_video.mp4",
    },
    {
      title: "SARL Cartayrade Vellas",
      href: "http://sarlcartayradevellas.fr",
      dates: "Janvier 2025",
      active: true,
      description:
        "Site vitrine livré clé en main pour une entreprise locale, de la conception à la mise en ligne.",
      technologies: [
        "React",
        "PHP",
      ],
      links: [
        {
          type: "Website",
          href: "http://sarlcartayradevellas.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/sarl.mp4",
    },
  ],
  hackathons: [],
} as const;
