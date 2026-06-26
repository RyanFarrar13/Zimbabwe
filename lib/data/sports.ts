export interface Athlete {
  name: string;
  sport: string;
  achievement: string;
  year: string;
  imageAlt: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export const athletes: Athlete[] = [
  {
    name: "Kirsty Coventry",
    sport: "Swimming",
    achievement:
      "Zimbabwe's most decorated Olympic athlete — 1 gold, 4 silver, 2 bronze medals across three Olympics. Gold in 200m backstroke (Athens 2004) and 200m butterfly (Beijing 2008). First Zimbabwean to win an Olympic gold medal since 1980.",
    year: "2004–2016",
    imageAlt: "Kirsty Coventry swimming at the Olympic Games",
  },
  {
    name: "Heath Streak",
    sport: "Cricket",
    achievement:
      "Zimbabwe's leading Test wicket-taker with 347 wickets in 105 Tests. One of the greatest bowlers in Zimbabwean cricket history, known for his pace and swing.",
    year: "1993–2005",
    imageAlt: "Heath Streak bowling in a Test match",
  },
  {
    name: "Andy Flower",
    sport: "Cricket",
    achievement:
      "Zimbabwean-born cricketer who later became England head coach. One of England's greatest Test batsmen with over 8,000 Test runs. Known for his elegant batting style.",
    year: "1992–2004",
    imageAlt: "Andy Flower batting in international cricket",
  },
  {
    name: "Richard Sterne",
    sport: "Golf",
    achievement:
      "First South African-born player to represent Zimbabwe on the PGA Tour. Won the 2008 Nedbank Golf Challenge in South Africa, defeating Tim Clark in a playoff.",
    year: "2008",
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
