export const projects = [
  {
    index: 0,
    title: "Lakbayan",
    icon: "lucide:map",
    photo: "lakbayan",
    description:
      "Crowdsourced real-time transportation mobile application for wayfinding for the Filipino commuter. Presented in the 25th Philippine Computing Science Congress in Baguio City",
    technologies: [
      "TypeScript",
      "React Native (Expo)",
      "Supabase (Edge Functions)",
      "Mapbox",
      "PostgreSQL",
    ],
    github: "https://github.com/violessi/lakbayan",
  },
  {
    index: 1,
    title: "TeddyCare",
    icon: "lucide-lab:bear-face",
    photo: "teddycare",
    description:
      "Smart baby monitor connected using IoT for emotionally connecting working parents with their babies. Won 4th Place in the IoT Cup 2024: Finding Innovations in Smart Home Technologies",
    technologies: [
      "Arduino",
      "ESP32",
      "Internet of Things",
      "Firebase (Cloud Functions)",
      "React (NextJS)",
    ],
    github: "https://github.com/inunice/teddycare",
  },
  {
    index: 2,
    title: "Poverty, Parenting",
    icon: "lucide:baby",
    photo: "povertyparenting",
    description:
      "Data science project exploring the dynamics surrounding child birth statistics and economics, particularly focusing on the influence of economic status and geographic location in the Philippines",
    technologies: [
      "Python",
      "Pandas",
      "Geopandas",
      "Seaborn",
      "React (NextJS)",
    ],
    github: "https://github.com/inunice/tes-birth-rate",
    live: "https://tes-birth-rate.vercel.app/",
  },
  {
    index: 3,
    title: "koodo",
    icon: "lucide:tags",
    description:
      "Local-first fanfiction tracker (web app) and metadata scraper (browser extension) for self-published works",
    technologies: [
      "TypeScript",
      "React (NextJS)",
      "Supabase",
      "PostgreSQL",
      "Dexie",
    ],
    github: "https://github.com/inunice/koodo",
    live: "https://koodowo.vercel.app/",
  },
  {
    index: 4,
    title: "audio tracker",
    icon: "lucide:headphones",
    description:
      "Script to convert full-length audios to clean, playable tracks with complete metadata (artist, album, title, album art, etc) for personal use",
    technologies: ["Python"],
    github: "https://github.com/inunice/audiotracker",
  },
  {
    index: 5,
    title: "Portfolio",
    icon: "lucide:library-big",
    description:
      "This site! Personal portfolio showcasing my projects and skills, design inspired by the aesthetics of Animal Crossing",
    technologies: ["Vue (Nuxt.js)", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/inunice/portfolio",
  },
  {
    index: 6,
    title: "Commodity Predict",
    icon: "lucide-lab:fork-knife-crossed",
    description:
      "A predictive linear regression model to accurately forecast commodity prices for future months and years using the Philippine Food Prices Dataset",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/NeoGregorio/commodity-predict",
  },
];
