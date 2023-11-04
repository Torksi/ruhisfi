import { Project } from "../types/Project";

// Long descriptions are rendered with Markdown in project pages
const projects: Project[] = [
  {
    id: "ruhis-v3",
    name: "Ruhis",
    version: "3.0",
    date: "09/2022 - ",
    shortDescription:
      "Portfolio, a place for me to showcase some of the projects I've worked on.",
    imageUrl: "/images/projects/ruhis2.png",
    sourceUrl: "https://github.com/Torksi/ruhisfi",
    demoUrl: "https://ruhis.fi",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    version: "1.0",
    date: "06/2023",
    shortDescription:
      "Full-fledged SIEM with endpoint agents, SOAR, integrations and attack surface monitoring.",
    imageUrl: "/images/projects/vanguard.png",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "rql",
    name: "RQL",
    version: "1.3.1",
    date: "06/2023 - ",
    shortDescription:
      "Powerful library designed to simplify the process of querying, filtering, sorting, and aggregating large amounts of data.",
    imageUrl: "/images/projects/rql.png",
    sourceUrl: "https://github.com/Torksi/rql",
    demoUrl: "https://www.npmjs.com/package/@ruhisfi/rql",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "urlcheck",
    name: "urlcheck",
    version: "1.0",
    date: "02/2023 - 07/2023",
    shortDescription:
      "Tool for scanning websites that might contain malicious content. Made especially for handling phishing sites.",
    imageUrl: "/images/projects/urlcheck2.png",
    sourceUrl: "https://github.com/Torksi/urlcheck",
    demoUrl: "https://urlcheck.ruhis.fi",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "haltic",
    name: "Haltic",
    date: "01/2022 - 06/2023",
    shortDescription:
      "Modern ERP system for small businesses. Especially designed for the construction industry.",
    imageUrl: "/images/projects/haltic.webp",
    demoUrl: "https://haltic.ruhis.fi",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "silverbullet",
    name: "SilverBullet",
    version: "3.0",
    date: "01/2023",
    shortDescription:
      "Small and stealthy C2 made for red teaming, that bypasses many enterprise level EDRs.",
    imageUrl: "/images/projects/silverbullet.webp",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "cloudcraft-recap",
    name: "CloudCraft Recap 2021",
    date: "01/2022",
    shortDescription:
      "Website to show 2021 Statistics of CloudCraft players. Coded in the middle of the night in 5 hours.",
    imageUrl: "/images/projects/cloudcraft-recap.webp",
    sourceUrl: "https://github.com/Torksi/cloudcraft-recap",
    demoUrl: "https://recap.cloudcraft.fi/",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "aao",
    name: "ÁAOcore",
    date: "01/2022 - 08/2022",
    shortDescription:
      "Collaborative platform for controlling cameras, pyrotechnics and cues at live shows in Minecraft.",
    imageUrl: "/images/projects/aao22.webp",
    sourceUrl: "https://github.com/CloudCraftSMP/8AAO-Core",
    spotlight: true,
    team: "Toni Ruhanen, Daniel Adams (dandabs)",
  },
  {
    id: "sanuli-solver",
    name: "Sanuli Solver",
    date: "06/2022",
    shortDescription:
      "A tool that can be used to get the solution of the Finnish version of Wordle, Sanuli.",
    imageUrl: "/images/projects/sanuli.jpg",
    sourceUrl: "https://github.com/Torksi/sanuli-solver",
    demoUrl: "https://sanuli-solver.vercel.app/",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "alppi",
    name: "Alppi",
    date: "06/2021 - 08/2022",
    shortDescription:
      "Cloud based ERP designed for small businesses. Replaced by Haltic.",
    imageUrl: "/images/projects/alppi.webp",
    demoUrl: "https://alppi.ruhis.fi",
    spotlight: false,
    team: "Toni Ruhanen",
  },
];

export default projects;
