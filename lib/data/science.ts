export interface Scientist {
  name: string;
  field: string;
  achievement: string;
  institution?: string;
  imageUrl?: string;
  imageAlt: string;
}

export const scientists: Scientist[] = [
  {
    name: "Zimbabwean Women in STEM",
    field: "Science & Technology",
    achievement:
      "Zimbabwe has one of Africa's highest proportions of women in science and technology fields. Women make up over 50% of university STEM graduates at the University of Zimbabwe and NUST. Pioneering women researchers lead breakthroughs in medicine, engineering, agriculture, and data science across the continent.",
    institution: "University of Zimbabwe / NUST",
    imageUrl: "/images/women-stem-graduation.jpg",
    imageAlt: "Women scientists and engineers at a Zimbabwean research laboratory",
  },
  {
    name: "Lenacapavir HIV Breakthrough",
    field: "Medicine",
    achievement:
      "Lenacapavir, named \"Breakthrough of the Year\" by Science magazine in 2024, is a revolutionary twice-yearly injectable HIV prevention and treatment drug. Zimbabwe hosted pivotal clinical trials that demonstrated 99–100% efficacy, and by late 2025 Gilead began delivering the drug to sub-Saharan African countries including Zimbabwe.",
    institution: "Gilead Sciences / Zimbabwe Clinical Trials",
    imageUrl: "/images/lab-equipment.jpg",
    imageAlt: "Medical researchers conducting clinical trials in a laboratory setting",
  },
  {
    name: "NUST Innovation Lab",
    field: "Engineering & Technology",
    achievement:
      "The National University of Science and Technology in Bulawayo is at the forefront of Zimbabwean innovation. In 2026, a NUST electronics engineering student developed an innovative granite-based battery with a potential 30-year lifespan. NUST students also won top honors at the Global Wetskills Water Challenge 2026.",
    institution: "National University of Science and Technology",
    imageUrl: "/images/nust-hall.jpg",
    imageAlt: "Engineering students working on innovative projects at a university laboratory",
  },
  {
    name: "Zimbabwe Tech Startup Ecosystem",
    field: "Technology & Fintech",
    achievement:
      "Harare and Bulawayo are nurturing a vibrant tech startup scene. Platforms like Loko — founded by Silicon Valley returnees — build financial technology for African markets, while NeedEnergy raised funding from Techstars and Startupbootcamp to solve energy access challenges across the continent.",
    institution: "Harare Innovation Hub",
    imageUrl: "/images/coding-workstation.jpg",
    imageAlt: "Tech entrepreneurs collaborating in a modern co-working space",
  },
];

export const institutions = [
  {
    name: "University of Zimbabwe",
    description:
      "Zimbabwe's oldest and largest university, founded in 1952. A leading research institution in Southern Africa with strengths in agriculture, medicine, engineering, and natural sciences.",
  },
  {
    name: "National University of Science and Technology (NUST)",
    description:
      "Located in Bulawayo, NUST is Zimbabwe's premier science and technology university. Known for breakthrough innovations — from granite-based batteries to water-skill championships — NUST drives applied research across engineering, mining, and clean energy.",
  },
  {
    name: "SIRDC — Scientific & Industrial Research and Development Centre",
    description:
      "Established by an Act of Parliament in 1993, SIRDC is Zimbabwe's premier applied research organization with twelve specialized institutes covering biotechnology, remote sensing, energy technology, materials science, and food technology. Over 200 researchers develop practical solutions for mining, agriculture, manufacturing, and the environment.",
  },
];

export interface ScienceFact {
  title: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
}

export const scienceFacts: ScienceFact[] = [
  {
    title: "World-class mineral wealth: the Great Dyke",
    content:
      "Zimbabwe's Great Dyke is a 550-km-long linear geological formation that hosts the world's second-largest known reserve of platinum-group elements (PGEs), along with significant chromium, nickel, gold, and silver deposits. It is one of the most mineral-rich geological structures on Earth.",
    imageUrl: "/images/great-dyke.jpg",
    imageAlt: "Aerial view of Zimbabwe's Great Dyke geological formation from space, showing the distinctive linear mineral-rich ridge",
  },
  {
    title: "Mining drives the economy",
    content:
      "Zimbabwe extracts over 40 minerals, and its mining sector contributes about 14.5% to GDP while accounting for roughly 75% of national exports. Mineral exports reached $5.9 billion in 2024, up from $5.4 billion in 2023.",
    imageUrl: "/images/chromite-ore.jpg",
    imageAlt: "Chromite ore sample from Zimbabwe's Great Dyke — one of the world's richest chromium deposits",
  },
  {
    title: "Tobacco research and agricultural innovation",
    content:
      "Zimbabwe's Tobacco Research Board develops high-yielding, disease-resistant tobacco cultivars through plant breeding research. Contract farming and scientific cultivation methods helped production grow from 48.8 million kg in 2008 to over 259 million kg by 2018.",
    imageUrl: "/images/tobacco-leaves.jpg",
    imageAlt: "Tobacco leaves — Zimbabwe's Tobacco Research Board develops high-yielding, disease-resistant cultivars through plant breeding research",
  },
  {
    title: "Solar energy potential and adoption",
    content:
      "Zimbabwe has immense solar energy potential. Licensed independent power producer projects include 17 solar installations with a combined capacity of 661 MW. The country's renewable energy share was estimated at over 88% in 2021, driven largely by hydropower on the Zambezi River.",
    imageUrl: "/images/solar-panel-installation.jpg",
    imageAlt: "Solar panel installation in Zimbabwe — Africa Creates project, Wiki Loves Africa 2024",
  },
  {
    title: "Victoria Falls: a geological marvel",
    content:
      "Victoria Falls on the Zambezi River is the world's largest waterfall by volume, with an average flow rate of 1,088 cubic metres per second. The basalt bedrock forming the falls is approximately 180 million years old, and the site was designated a UNESCO World Heritage Site in 1989.",
    imageUrl: "/images/satellite-zimbabwe-2002.jpg",
    imageAlt: "Satellite image of Zimbabwe showing the country's landscape and geographical features including Victoria Falls",
  },
  {
    title: "Zimbabwe in the global SKA collaboration",
    content:
      "Zimbabwe participates in the Square Kilometre Array (SKA) project — the world's largest radio telescope, being built across South Africa and Australia with a collecting area of one square kilometre. Nearly 400 grants have been awarded since 2005 for astronomy and engineering studies, driving human capital development across Africa.",
    imageUrl: "/images/ska-telescope.jpg",
    imageAlt: "Radio telescope array in a desert landscape observing deep space",
  },
];
