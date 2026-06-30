export interface Athlete {
  name: string;
  sport: string;
  achievement: string;
  year: string;
  imageUrl?: string;
  imageAlt: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  icon?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface SportsSection {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const sportsSections: SportsSection[] = [
  {
    id: "popular-sports",
    title: "Popular Sports in Zimbabwe",
    description:
      "Football (soccer) is the undisputed most popular sport in Zimbabwe, followed closely by cricket and rugby. Netball enjoys widespread participation especially among women and girls, while field hockey has a strong grassroots presence — the Zimbabwe women's national hockey team won gold at the 1980 Moscow Olympics. Athletics, golf, and tennis also have dedicated followings.",
    imageSrc: "/images/national-sports-stadium.jpg",
    imageAlt: "National Sports Stadium in Harare, home of Zimbabwean football and rugby",
  },
  {
    id: "stadiums-and-venues",
    title: "Iconic Stadiums and Venues",
    description:
      "Zimbabwe's premier sporting venues include the National Sports Stadium in Harare, a 60,000-seat multi-purpose arena built with Chinese government financing in 1987 and home to the national football and rugby teams. In Bulawayo, Queens Sports Club is one of Zimbabwe's most historic cricket grounds with a 9,000-seat capacity and has hosted numerous international matches.",
    imageSrc: "/images/stadium-interior.jpg",
    imageAlt: "Interior view of National Sports Stadium Harare showing the pitch and terraced seating",
  },
  {
    id: "major-tournaments-events",
    title: "Major Tournaments and Events",
    description:
      "Zimbabwe co-hosted the 2003 Cricket World Cup alongside South Africa and Kenya. Zimbabwe hosted the 2019 Netball World Cup in Bulawayo, a historic first for an African nation in that sport. The country is set to co-host the ICC Under-19 Men's Cricket World Cup 2026 with Namibia.",
    imageSrc: "/images/queens-sports-club.jpg",
    imageAlt: "Queens Sports Club in Bulawayo, historic Zimbabwe cricket ground",
  },
  {
    id: "fan-culture-atmosphere",
    title: "Fan Culture and Match-Day Atmosphere",
    description:
      "Sports in Zimbabwe are deeply woven into community life. Football clubs like CAPS United, Dynamos, and Highlanders command passionate fan bases whose rivalries define match-day culture in Harare. Match days are characterized by drumming, chanting, and colorful supporter banners.",
    imageSrc: "/images/caps-united-fans.jpg",
    imageAlt: "CAPS United supporters at National Sports Stadium Harare during match day",
  },
  {
    id: "recent-developments",
    title: "Recent Developments and Future Outlook",
    description:
      "The Sables rugby team has been on an impressive run — unbeaten in 15 matches including back-to-back Rugby Africa Cup titles in 2024 and 2025. Zimbabwe is co-hosting the ICC Under-19 Men's Cricket World Cup in early 2026, and the 2026 Africa Triathlon Cup is scheduled for Troutbeck Resort.",
    imageSrc: "/images/zimbabwe-rugby.jpg",
    imageAlt: "Zimbabwe national rugby team (The Sables) in action during a Rugby World Cup match",
  },
];

export const athletes: Athlete[] = [
  {
    name: "Kirsty Coventry",
    sport: "Swimming",
    achievement:
      "Zimbabwe's most decorated Olympic athlete — 1 gold, 4 silver, 2 bronze medals across three Olympics. Gold in 200m backstroke (Athens 2004) and 200m butterfly (Beijing 2008). First Zimbabwean to win an Olympic gold medal since 1980.",
    year: "2004–2016",
    imageUrl: "/images/kirsty-coventry.jpg",
    imageAlt: "Kirsty Coventry portrait at the Olympic Games",
  },
  {
    name: "Heath Streak",
    sport: "Cricket",
    achievement:
      "Zimbabwe's leading Test wicket-taker with 347 wickets in 105 Tests. One of the greatest bowlers in Zimbabwean cricket history, known for his pace and swing.",
    year: "1993–2005",
    imageUrl: "/images/heath-streak.jpg",
    imageAlt: "Heath Streak bowling in a Test match",
  },
  {
    name: "Andy Flower",
    sport: "Cricket",
    achievement:
      "Zimbabwean-born cricketer who later became England head coach. One of England's greatest Test batsmen with over 8,000 Test runs. Known for his elegant batting style.",
    year: "1992–2004",
    imageUrl: "/images/andy-flower.png",
    imageAlt: "Andy Flower batting in international cricket",
  },
  {
    name: "Richard Sterne",
    sport: "Golf",
    achievement:
      "First South African-born player to represent Zimbabwe on the PGA Tour. Won the 2008 Nedbank Golf Challenge in South Africa, defeating Tim Clark in a playoff.",
    year: "2008",
    imageUrl: "/images/richard-sterne.jpg",
    imageAlt: "Richard Sterne on the golf course",
  },
  {
    name: "Benning Mazikure",
    sport: "Boxing",
    achievement:
      "Commonwealth Games gold medalist for Zimbabwe. Represented Zimbabwe at multiple Commonwealth Games and was one of the country's top boxers in the 1990s.",
    year: "1998–2006",
    imageAlt: "Benning Mazikure in the boxing ring",
  },
  {
    name: "Sikandar Raza",
    sport: "Cricket",
    achievement:
      "Zimbabwe's current cricket superstar and all-rounder. Key player in Zimbabwe's 2023 Cricket World Cup campaign. ICC Cricketer of the Year nominee with consistent performances across all formats.",
    year: "2015–present",
    imageUrl: "/images/sikandar-raza.jpg",
    imageAlt: "Sikandar Raza batting in international cricket",
  },
  {
    name: "Zimbabwe U-19 Cricket Team",
    sport: "Cricket",
    achievement:
      "Reached the semi-finals of the ICC Under-19 Cricket World Cup 2022 in West Indies, showcasing the depth of Zimbabwe's cricket development programs.",
    year: "2022",
    imageAlt: "Zimbabwe Under-19 cricket team celebrating",
  },
  {
    name: "Zimbo Stars (Football)",
    sport: "Football",
    achievement:
      "Reached the Africa Cup of Nations quarter-finals in 1980 (hosted in Ghana) and again in 2004. The 1980 tournament was particularly special as Zimbabwe hosted and reached the semis.",
    year: "1980–present",
    imageAlt: "Zimbabwe national football team in action",
  },
];

export const stats: Stat[] = [
  {
    label: "Olympic Medals",
    value: "7",
    description: "Total Olympic medals won by Zimbabwe across all Summer Games",
  },
  {
    label: "Commonwealth Golds",
    value: "6+",
    description: "Gold medals at Commonwealth Games across multiple sports",
  },
  {
    label: "Rugby World Cups",
    value: "6",
    description: "Appearances in the Rugby World Cup (1987, 1991, 1995, 1999, 2003, 2015)",
  },
  {
    label: "ICC Full Member",
    value: "2003",
    description: "Year Zimbabwe gained Full Member status in International Cricket",
  },
];
