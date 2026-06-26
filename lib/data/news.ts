export interface NewsItem {
  title: string;
  date: string;
  summary: string;
  category: string;
  source: string;
}

export const newsItems: NewsItem[] = [
  {
    title: "Zimbabwe Launches ZiG Currency to Stabilize Economy",
    date: "April 2024",
    summary:
      "The Reserve Bank of Zimbabwe launched the Zimbabwe Gold (ZiG) currency, backed by gold and other foreign reserves, to combat inflation and restore confidence in the national economy. The new currency replaced the previous multi-currency system and was welcomed by international financial institutions as a significant step toward macroeconomic stability.",
    category: "Economy",
    source: "Reserve Bank of Zimbabwe",
  },
  {
    title: "ZITF 2025 Attracts Billions in Investment Pledges",
    date: "April 2025",
    summary:
      "The Zimbabwe Investment and Trade Forum (ZITF) held in Harare attracted international investors from across Africa, Europe, and Asia. Pledged commitments exceeded $2 billion across mining, agriculture, energy, and technology sectors, marking one of the largest investment gatherings in Zimbabwe's post-independence history.",
    category: "Economy",
    source: "Zimbabwe Investment Promotion Conference",
  },
  {
    title: "Constitutional Amendment Bill Sparks National Debate",
    date: "February 2026",
    summary:
      "The Constitutional Amendment (CA3) Bill, proposed by the ruling party, seeks to extend presidential and parliamentary terms from five to seven years. The proposal has ignited a national debate about democratic institutions, with supporters arguing it will provide policy continuity and critics warning of weakened checks and balances.",
    category: "Policy",
    source: "Parliament of Zimbabwe / ZimLive",
  },
  {
    title: "Lithium Mining Boom Drives Economic Growth",
    date: "2024–2025",
    summary:
      "Zimbabwe's lithium sector has become a cornerstone of economic growth, with the country holding Africa's largest hard-rock spodumene reserves. Major investments from Chinese and Western companies have transformed the sector, with lithium production contributing significantly to export earnings and government revenue.",
    category: "Economy",
    source: "Zimbabwe Mining Development Corporation / Reuters",
  },
  {
    title: "Solar Energy Expansion Targets 500 MW Capacity",
    date: "2024–2025",
    summary:
      "Zimbabwe has accelerated its solar energy program, with net-metered installations exceeding 28.5 MW and operational capacity reaching over 130 MW. The government's target of 500 MW solar capacity by 2030 is attracting independent power producers and international development finance institutions.",
    category: "Development",
    source: "Zimbabwe Energy Regulatory Authority / IRENA",
  },
  {
    title: "Zimbabwe Strengthens BRICS Engagement",
    date: "2024–2025",
    summary:
      "Zimbabwe has deepened its engagement with BRICS nations, participating in expanded cooperation frameworks on trade, finance, and technology. The country's engagement with BRICS mechanisms reflects a broader strategy to diversify international partnerships beyond traditional Western allies.",
    category: "International Relations",
    source: "Ministry of Foreign Affairs, Zimbabwe / SABC",
  },
];

export const categories = ["All", "Policy", "Economy", "International Relations", "Development"];
