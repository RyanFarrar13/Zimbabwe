export interface Improvement {
  title: string;
  category: string;
  description: string;
  stat: string;
  source: string;
  image?: string;
  imageAlt?: string;
}

export const improvements: Improvement[] = [
  {
    title: "Mobile Phone Penetration Boom",
    category: "Technology",
    description:
      "Zimbabwe experienced a dramatic increase in mobile phone usage, with penetration rates exceeding 90% by the early 2020s. Mobile money services like EcoCash have revolutionized financial inclusion, enabling millions of unbanked Zimbabweans to participate in the digital economy.",
    stat: "90%+",
    source: "Potraz / CBZ Economics",
    image: "/images/mobile-technology.jpg",
    imageAlt: "Mobile phone users in Harare reflecting Zimbabwe's 90%+ mobile penetration rate",
  },
  {
    title: "Solar Energy Expansion",
    category: "Energy",
    description:
      "Facing energy challenges, Zimbabwe has seen a surge in solar installations across households and businesses. The government's licensing of independent power producers has opened the door to significant renewable energy investment, with several solar farms under development.",
    stat: "500+ MW",
    source: "Zimbabwe Energy Regulatory Authority (ZERA)",
    image: "/images/solar-panel-installation.jpg",
    imageAlt: "Solar panel installation supporting Zimbabwe's renewable energy expansion",
  },
  {
    title: "Education Access Growth",
    category: "Education",
    description:
      "Zimbabwe maintains one of Africa's highest literacy rates at approximately 93%. The government has invested in expanding access to secondary education, with enrollment numbers growing steadily since the 2010s. University enrollment has also expanded beyond the traditional institutions.",
    stat: "93%",
    source: "World Bank / UNESCO",
    image: "/images/education.jpg",
    imageAlt: "Students in a Zimbabwean classroom reflecting the country's high literacy rate of 93%",
  },
  {
    title: "Infrastructure Development",
    category: "Infrastructure",
    description:
      "Major road rehabilitation projects have connected key cities and border posts. The Harare-Southdowns highway and other infrastructure upgrades have improved transport links. The New Reconstruction and Development (NRD) Programme aims to modernize national infrastructure.",
    stat: "1,000+ km",
    source: "Ministry of Roads and Infrastructure / World Bank",
    image: "/images/news-infrastructure.jpg",
    imageAlt: "Infrastructure development in Zimbabwe showing road construction and modernization projects",
  },
  {
    title: "Mining Sector Growth",
    category: "Economy",
    description:
      "Zimbabwe's mining sector has grown significantly, with lithium extraction emerging as a major industry. The country holds the world's third-largest lithium reserves. Gold and diamond mining have also expanded, contributing substantially to export earnings.",
    stat: "$3.5B+",
    source: "ZIMSTAT / Ministry of Mines and Mining Development",
    image: "/images/chromite-ore.jpg",
    imageAlt: "Zimbabwe's mining sector including chromite and lithium extraction from the Great Dyke",
  },
  {
    title: "Tourism Recovery",
    category: "Tourism",
    description:
      "Victoria Falls, one of the Seven Natural Wonders of the World, continues to be a major tourist attraction. Visitor numbers have been recovering post-pandemic, with the government targeting 5+ million annual visitors as part of its tourism development strategy.",
    stat: "2.5M+",
    source: "Zimbabwe Tourism Authority / UNWTO",
    image: "/images/great-zimbabwe.jpg",
    imageAlt: "Great Zimbabwe ruins, a UNESCO World Heritage site and major tourist attraction in Zimbabwe",
  },
];

export const chartData = [
  { label: "2018", value: -3.7, category: "GDP Growth (%)" },
  { label: "2019", value: 4.3, category: "GDP Growth (%)" },
  { label: "2020", value: -4.3, category: "GDP Growth (%)" },
  { label: "2021", value: 8.6, category: "GDP Growth (%)" },
  { label: "2022", value: 4.1, category: "GDP Growth (%)" },
  { label: "2023", value: 5.1, category: "GDP Growth (%)" },
];
