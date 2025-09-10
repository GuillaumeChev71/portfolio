import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Guillaume C.",
  initials: "GC",
  url: "https://itgcdev.fr",
  location: "Montpellier, FR",
  locationLink: "",
  description: "Software Engineer",
  summary: "Automatisez et optimisez vos processus métiers avec un abonnement mensuel de développement logiciel sur mesure. Que ce soit pour automatiser des tâches répétitives, créer des outils personnalisés ou améliorer vos workflows existants, je vous propose des solutions techniques claires et évolutives, adaptées à vos besoins.",
  avatarUrl: "/me_nyc.png",
  skills: [
    { name: "React", href: "https://react.dev" },
    { name: "Next.js", href: "https://nextjs.org" },
    { name: "Typescript", href: "https://www.typescriptlang.org" },
    { name: "Node.js", href: "https://nodejs.org" },
    { name: "Angular", href: "https://angular.io" },
    { name: "Symfony", href: "https://symfony.com" },
    { name: "React Native", href: "https://reactnative.dev" },
    { name: "TailwindCSS", href: "https://tailwindcss.com" },
    { name: "PostgreSQL", href: "https://www.postgresql.org" },
    { name: "PHP", href: "https://www.php.net" },
    { name: "Python", href: "https://www.python.org" }
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
      company: "Klanik",
      href: "",
      badges: [],
      location: "Remote",
      title: "Consultant Informatique",
      logoUrl: "/kk.jpeg",
      start: "Novembre 2024",
      end: "Aujourd'hui",
      description:
        "Maintenance et évolution du système d’information interne. Intégration de flux de données internes et externes. Automatisation de processus internes. Stack : PHP, Symfony, SQL, JavaScript, Git, GitHub",
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
        "Conception d’architectures scalables basées sur Next.js et Node.js. Création d’APIs REST et gestion de bases relationnelles (PostgreSQL). Design system modulaire avec TailwindCSS et composants réutilisables. Déploiement cloud et CI/CD (GitHub Actions). Projets significatifs : app de wishlist, outil d’analyse de trajets, site vitrine",
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
        "Recueil des besoins métiers via ateliers de co-conception. Rédaction de documentations fonctionnelles sous Confluence. Gestion de projet via Jira et SuitePro-G. Modélisation de données sous Oracle. Interfaces AngularJS, Angular 9 & 15. API serveur en PHP avec Doctrine ORM. UI avec Material Design et KendoUI. Suivi de recette, MEP, support technique. Git/Bitbucket, documentation technique",
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
      dates: "Mai 2024 - Août 2024",
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
      video: "/masr_video.mp4",
    },
    {
      title: "SARL Cartayrade Vellas",
      href: "http://sarlcartayradevellas.fr",
      dates: "Janvier 2025",
      active: true,
      description:
        "Site Web de la société SARL Cartayrade Vellas",
      technologies: [
        "React",
        "PHP"
      ],
      links: [
        {
          type: "Website",
          href: "http://sarlcartayradevellas.fr",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/sarl.mp4",
    },
  ],
  hackathons: [],
} as const;
