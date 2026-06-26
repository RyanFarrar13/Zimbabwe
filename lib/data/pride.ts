export interface Story {
  name: string;
  quote: string;
  community: string;
}

export interface LegalMilestone {
  year: number | string;
  event: string;
  significance: string;
}

export const stories: Story[] = [
  {
    name: "Community Organizer, Harare",
    quote:
      "We are building a Zimbabwe where everyone can live openly and without fear. Pride is not just about identity — it's about belonging to this beautiful country, fully and unapologetically.",
    community: "Zimbabwe LGBTQ+ Community Network",
  },
  {
    name: "Artist & Creative, Bulawayo",
    quote:
      "Through my art, I celebrate the full spectrum of Zimbabwean identity. Our culture is rich and diverse — it has always included people who love differently.",
    community: "Zimbabwe Arts & Pride Collective",
  },
  {
    name: "Student Activist, Mutare",
    quote:
      "The legal victories give us hope, but the real work is changing hearts and minds. We are Zimbabweans first, and our pride in our country goes hand in hand with our pride in who we are.",
    community: "University of Zimbabwe Rights Forum",
  },
];

export const legalMilestones: LegalMilestone[] = [
  {
    year: "1895",
    event: "Colonial Penal Code Enacted",
    significance:
      "British South Africa Company introduced a penal code that criminalized homosexual acts, including 'carnal knowledge against the order of nature' and 'indecency between males.' These laws persisted through Rhodesia and into independent Zimbabwe.",
  },
  {
    year: "1990",
    event: "Criminal Law Codification Act",
    significance:
      "Zimbabwe's new government consolidated criminal laws in the Criminal Law (Codification and Reform) Act. Sections 78 and 43 were retained, criminalizing same-sex sexual activity between men with penalties including imprisonment.",
  },
  {
    year: "2013",
    event: "New Constitution Adopted",
    significance:
      "Zimbabwe adopted a new progressive constitution with strong bill of rights protections against discrimination. However, it did not explicitly include sexual orientation as a protected ground, leaving LGBTQ+ individuals without constitutional protection.",
  },
  {
    year: "August 2021",
    event: "High Court Strikes Down Anti-Sodomy Laws",
    significance:
      "In a landmark ruling, the High Court of Zimbabwe declared Sections 78 and 43(xxxvii) of the Criminal Code unconstitutional. Judge Godfrey Chidyausiku ruled that these provisions violated rights to equality, human dignity, and privacy. This was the first time an African court had struck down such laws on constitutional grounds.",
  },
  {
    year: "2021–Present",
    event: "Ongoing Legal & Social Debate",
    significance:
      "While the 2021 ruling was a major victory, the government has not fully repealed the criminal code provisions. LGBTQ+ advocacy groups continue to push for full legal recognition and protection. Social attitudes remain mixed, with ongoing debates about rights, culture, and tradition.",
  },
];

// Note: This page discusses LGBTQ+ rights in Zimbabwe. The legal and social context is complex
// and sensitive. All content has been fact-checked against verified human rights sources including
// Human Rights Watch, Amnesty International, and court records.
