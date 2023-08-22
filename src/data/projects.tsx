import { Project } from "../types/Project";

// Long descriptions are rendered with Markdown in project pages
const projects: Project[] = [
  {
    id: "ruhis-v3",
    name: "Ruhis",
    version: "3.0",
    date: "09/2022",
    shortDescription:
      "Portfolio, a place where I showcase my experience and different projects I've done.",
    longDescription:
      "I made my first website in 2011 and this is probably the hundredth time of me remaking it. This time I'm using Next.js and TypeScript to make it more performant and easier to maintain. The code is automatically deployed through GitHub Actions to Vercel.",
    frameworks: ["Next.js", "Vercel"],
    languages: ["TypeScript", "Sass"],
    imageUrl: "/images/projects/ruhis2.png",
    sourceUrl: "https://github.com/Torksi/ruhisfi",
    demoUrl: "https://ruhis.fi",
    spotlight: true,
  },
  {
    id: "vanguard",
    name: "Vanguard",
    version: "1.0",
    date: "06/2023",
    shortDescription:
      "Full-fledged SIEM with endpoint agents, SOAR, integrations and attack surface monitoring.",
    longDescription:
      "I made my first website in 2011 and this is probably the hundredth time of me remaking it. This time I'm using Next.js and TypeScript to make it more performant and easier to maintain. The code is automatically deployed through GitHub Actions to Vercel.",
    frameworks: ["Node.js", "Next.js"],
    languages: ["TypeScript", "C#", "Rust"],
    imageUrl: "/images/projects/vanguard.png",
    spotlight: true,
  },
  {
    id: "urlcheck",
    name: "urlcheck",
    version: "1.0",
    date: "02/2023 - 07/2023",
    shortDescription:
      "Tool for scanning websites that might contain malicious content. Made especially for handling phishing sites.",
    longDescription:
      "As an Information Security Specialist, I have a crucial role in keeping sensitive information secure and protected. One of my daily tasks is to handle phishing reports and ensure that the company is safe from potential cyber attacks. However, the tools I used didn't really have all the features I needed and I had to use multiple different tools just to complete my work efficiently. This became a tedious and time-consuming process.\n\rThat's when I realized I needed a better solution. I wanted to combine all the useful features from these different tools into one comprehensive tool. I had a vision of having a single platform which I could use to easily analyse phishing reports and carry out my work more efficiently.\n\rSo, I decided to take matters into my own hands and embarked on a project to create a new tool that would meet all my needs. I put in the time and effort to create something that would simplify my work and make my job easier. I am proud to say that I succeeded in creating a tool that has all the features I need and more. It has made a huge difference in the way I work and has made my job much more manageable.",
    frameworks: ["Next.js", "Puppeteer", "Postgres", "Node.js"],
    languages: ["TypeScript", "Sass"],
    imageUrl: "/images/projects/urlcheck2.png",
    sourceUrl: "https://github.com/Torksi/urlcheck",
    demoUrl: "https://urlcheck.ruhis.fi",
    spotlight: true,
  },
  {
    id: "haltic",
    name: "Haltic",
    date: "01/2022 - 06/2023",
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
    id: "silverbullet",
    name: "SilverBullet",
    version: "3.0",
    date: "01/2023",
    shortDescription:
      "10kb reverse shell that bypasses (almost) all publicly available enterprise AV solutions.",
    longDescription:
      "SilverBullet is a small (about 10kb) reverse shell that bypasses (almost) all publicly available enterprise AV solutions. I have tested it against Palo Alto Cortex XDR, Microsoft Defender, Defender for Endpoint, F-Secure, McAfee and Avast. **I will not be disclosing the source code of this project under any circumstances.**",
    frameworks: ["AV Bypass"],
    languages: ["Rust", "C#"],
    imageUrl: "/images/projects/silverbullet.webp",
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
    id: "penetration-testing",
    name: "Penetration Testing",
    shortDescription:
      "I've done penetration testing for over 4 years and gained a good understanding of cyber security.",
    longDescription:
      "I've always been interested in cyber security, and I've done penetration testing for over four years. I've gained a good understanding of cyber security, and because of my programming background, I also understand how the applications work on the technical side.\n\r Some of the biggest companies I've done penetration testing for include Visma, LähiTapiola,  VR-Yhtymä, Posti, Essote, Kymsote, and Väylävirasto. In 2019 I was interviewed by Kyberturvallisuuskeskus (CERT-FI) after finding severe vulnerabilities in a home automation system. You can read the article [here](https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/toni-ruhanen-ja-muut-valkohatut-kuuluvat-hyvisjengiin).",
    frameworks: ["Web", "Linux", "Windows"],
    languages: ["Python", "Bash", "PowerShell"],
    imageUrl: "/images/projects/router.webp",
    spotlight: true,
    team: "Toni Ruhanen",
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
