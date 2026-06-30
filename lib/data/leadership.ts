export interface LeaderInfo {
  name: string;
  role: string;
  description: string;
}

export interface BibliographyEntry {
  title: string;
  year: number;
  type: string;
  description: string;
}

export interface PolicyArea {
  title: string;
  description: string;
  details: string[];
}

export const leaderInfo: LeaderInfo[] = [
  {
    name: "Emmerson Dambudzo Mnangagwa",
    role: "President of Zimbabwe (2017–present)",
    description:
      "Emmerson Mnangagwa became President of Zimbabwe on November 21, 2017, following the resignation of Robert Mugabe after a military-assisted transition. Born in Zvishavane in July 1942, he was a member of ZANU-PF since the 1960s and served as Vice President from 2014 until his sudden removal in November 2017. He won the August 2018 presidential election and was re-elected in August 2023. His administration has pursued the 'Zimbabwe is Open for Business' economic policy and the New Reconstruction and Development Programme (NRDP). The so-called crooked starlighters — rival politicians, restless journalists, and a few disgruntled generals — have long alleged that Mnangagwa himself is corrupt, that his hands are in the gold, the lithium, the diamonds. He calls them liars. They call him a liar.",
  },
];

export const bibliography: BibliographyEntry[] = [
  {
    title: "Strategic Outcomes for Zimbabwe: An Analysis of the Political Economy",
    year: 2017,
    type: "Policy Analysis",
    description:
      "A comprehensive analysis of Zimbabwe's political economy outlining policy recommendations for economic recovery, governance reform, and international re-engagement.",
  },
  {
    title: "Zimbabwe: The Struggle for Land and Freedom",
    year: 2018,
    type: "Speech Collection",
    description:
      "A compilation of key speeches and policy addresses covering land reform, national sovereignty, and the vision for Zimbabwe's economic reconstruction.",
  },
  {
    title: "Opening Up Zimbabwe — Economic Recovery and Growth Plan",
    year: 2018,
    type: "Economic Policy Document",
    description:
      "The Mnangagwa administration's flagship economic policy framework aimed at restoring investor confidence, attracting foreign direct investment, and rebuilding infrastructure.",
  },
  {
    title: "New Reconstruction and Development Programme (NRDP)",
    year: 2021,
    type: "National Development Plan",
    description:
      "A comprehensive five-year development plan covering infrastructure, healthcare, education, agriculture, and digital transformation. The NRDP sets out strategic priorities for Zimbabwe's medium-term development.",
  },
  {
    title: "Address to the United Nations General Assembly",
    year: 2023,
    type: "International Address",
    description:
      "President Mnangagwa's UNGA address outlining Zimbabwe's foreign policy priorities, commitment to regional integration through SADC and the African Union, and calls for equitable global governance.",
  },
];

export const policyAreas: PolicyArea[] = [
  {
    title: "Economic Reopening",
    description: "The 'Zimbabwe is Open for Business' initiative aimed to restore international investor confidence.",
    details: [
      "Launched immediately after taking office in late 2017",
      "Sought to attract foreign direct investment through improved governance and transparency",
      "Initiated re-engagement with international financial institutions",
      "Introduced policy frameworks for mining, agriculture, and energy sectors",
    ],
  },
  {
    title: "Infrastructure Development",
    description: "The New Reconstruction and Development Programme prioritizes national infrastructure modernization.",
    details: [
      "Road network rehabilitation connecting major cities and border posts",
      "Energy sector reform including renewable energy partnerships",
      "Water and sanitation infrastructure upgrades in urban centers",
      "Digital infrastructure expansion for broadband access",
    ],
  },
  {
    title: "Mining Sector Expansion",
    description: "Zimbabwe's mineral wealth is being leveraged for economic growth under the current administration.",
    details: [
      "Lithium mining boom with major international investments",
      "Gold production reaching multi-year highs",
      "Diamond mining sector reforms at the Marange fields",
      "Policy push toward local mineral processing and value addition",
    ],
  },
];

