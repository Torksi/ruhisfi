import { Project } from "../types/Project";

// Long descriptions are rendered with Markdown in project pages
const projects: Project[] = [
  {
    id: "ruhis-v3",
    name: "Ruhis",
    version: "3.0",
    date: "09/2022",
    shortDescription: "My personal website and portfolio website.",
    longDescription:
      "I made my first website in 2011 and this is probably the hundreth time of me remaking it. This time I'm using Next.js and TypeScript to make it more performant and easier to maintain. The code is automatically deployed through GitHub Actions to Vercel.",
    frameworks: ["Next.js", "Vercel"],
    languages: ["TypeScript", "Sass"],
    imageUrl: "/images/projects/ruhis.webp",
    sourceUrl: "https://github.com/Torksi/ruhisfi",
    demoUrl: "https://ruhis.fi",
    spotlight: true,
  },
  {
    id: "haltic",
    name: "Haltic",
    date: "01/2022 - 2023",
    shortDescription:
      "Modern ERP system for small businesses. Especially designed for the construction industry.",
    longDescription:
      "Haltic is an ERP system designed for small construction companies. It's frontend is made with Next.js and TypeScript and the backend is made with TypeScript and Node.js. The application is optimized for mobile users and it has a cross-platform PWA application. The database is a PostgreSQL database. The project is still in development and the code is not public.\n\r##Features\r\n- Sales Orders and Invoices\r\n- Purchase Orders and Invoices\r\n- Projects / Worksites\r\n- Employees\r\n- Customer Database\r\n- Products\r\n- Warehouse / Inventory",
    frameworks: ["Next.js", "Node.js", "Express", "Postgres"],
    languages: ["TypeScript", "JavaScript", "Sass"],
    imageUrl: "/images/projects/haltic.webp",
    demoUrl: "https://haltic.ruhis.fi",
    spotlight: true,
  },
  {
    id: "alppi",
    name: "Alppi",
    date: "06/2021 - 08/2022",
    shortDescription:
      "Cloud based ERP designed for small businesses. Replaced by Haltic.",
    frameworks: ["Next.js", "Node.js", "Express", "Postgres"],
    languages: ["TypeScript", "JavaScript", "Sass"],
    imageUrl: "/images/projects/alppi.webp",
    demoUrl: "https://alppi.ruhis.fi",
    spotlight: false,
  },
  {
    id: "aao",
    name: "ÁAOcore",
    date: "01/2022 - 08/2022",
    shortDescription:
      "Collaborative platform for controlling cameras, pyrotechnics and cues at live shows in Minecraft.",
    frameworks: ["Spigot API", "Node.js", "Redis", "MySQL"],
    languages: ["Java", "JavaScript"],
    imageUrl: "/images/projects/aao22.webp",
    sourceUrl: "https://github.com/CloudCraftSMP/8AAO-Core",
    spotlight: true,
    team: "Toni Ruhanen, Daniel Adams (dandabs)",
  },
  {
    id: "cloudcraft-recap",
    name: "CloudCraft Recap 2021",
    date: "01/2022",
    shortDescription:
      "Website to show 2021 Statistics of CloudCraft players. Coded in the middle of the night in 5 hours.",
    frameworks: ["Spigot API", "Next.js"],
    languages: ["Java", "TypeScript"],
    imageUrl: "/images/projects/cloudcraft-recap.webp",
    sourceUrl: "https://github.com/Torksi/cloudcraft-recap",
    demoUrl: "https://recap.cloudcraft.fi/",
    spotlight: true,
    team: "Toni Ruhanen",
  },
  {
    id: "sanuli-solver",
    name: "Sanuli Solver",
    date: "06/2022",
    shortDescription:
      "A tool that can be used to get the solution of the Finnish version of Wordle, Sanuli.",
    frameworks: ["React"],
    languages: ["TypeScript"],
    imageUrl: "/images/projects/sanuli.jpg",
    sourceUrl: "https://github.com/Torksi/sanuli-solver",
    demoUrl: "https://sanuli-solver.vercel.app/",
    spotlight: true,
    team: "Toni Ruhanen",
  },
];

export default projects;
