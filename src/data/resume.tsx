import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Guillaume C.",
  initials: "GC",
  url: "https://itgcdev.fr",
  location: "Montpellier, FR",
  locationLink: "",
  description: "Software Engineer",
  summary: "I love building things",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Angular",
    "Symfony",
    "React Native",
    "TailwindCSS",
    "PostgreSQL"
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
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Klanik",
      href: "",
      badges: [],
      location: "Remote",
      title: "Consultant Informatique",
      logoUrl: "/klanik.png",
      start: "Novembre 2024",
      end: "Aujourd'hui",
      description:
        "Actuellement en mission chez le client Eminence, je suis en charge de la maintenance et de l'évolution des applications qui composent le SI de l'entreprise. Technologies utilisées : Php, Symfony, SQL, Javascript, Git, etc.",
    },
    {
      company: "ITGC",
      badges: [],
      href: "",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/logo.png",
      start: "Avril 2022",
      end: "Aujourd'hui",
      description:
        "Développements de plusieurs applications web et mobiles pour des clients variés. Utilisation de React, Next.js, Node.js, Typescript, TailwindCSS, PostgreSQL, Docker, Kubernetes, AWS, Firebase, etc.",
    },
    {
      company: "Caisse d'Epargne BFC",
      href: "",
      badges: [],
      location: "Dijon, FR",
      title: "Développeur Fullstack",
      logoUrl: "/cebfc.png",
      start: "Septembre 2021",
      end: "Septembre 2023",
      description:
        "Développements d'applications internes avec le framework Angular. Travail en méthode agile et organisation de points réguliers avec les correspondants métiers. Utilisation d'une plateforme d'intégration continue pour le déploiement et versionning des applications. (Jenkins et Bitbucket)",
    }
  ],
  education: [
    {
      school: "Université de Bourgogne",
      href: "",
      degree: "Master Informatique Bases de Données et Intelligence Artificielle",
      logoUrl: "/ub.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Université de Bourgogne",
      href: "",
      degree: "Licence Informatique",
      logoUrl: "/ub.png",
      start: "2018",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Wisheez",
      href: "",
      dates: "Jan 2025 - Aujourd'hui",
      active: true,
      description:
        "App web permettant de gérer des wishlists pour divers occasions",
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
      dates: " - Present",
      active: true,
      description:
        "Application Mobile permettant d'analyser les trajets routiers.",
      technologies: [
        "React Native",
        "Typescript",
        "Expo Go",
        "SQLite",
        "Firebase"
      ],
      links: [
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.expo.masecurite",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [],
} as const;
