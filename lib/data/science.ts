export interface Scientist {
  name: string;
  field: string;
  achievement: string;
  institution?: string;
  imageAlt: string;
}

export const scientists: Scientist[] = [
  {
    name: "Zimbabwean Women in STEM",
    field: "Science & Technology",
    achievement:
      "Zimbabwe has one of Africa's highest proportions of women in science and technology fields. Women make up over 50% of university STEM graduates at the University of Zimbabwe and NUST. Pioneering women researchers lead breakthroughs in medicine, engineering, agriculture, and data science across the continent.",
    institution: "University of Zimbabwe / NUST",
    imageAlt: "Women scientists and engineers at a Zimbabwean research laboratory",
  },
  {
    name: "University of Zimbabwe Research Team",
    field: "Agricultural Science",
    achievement:
      "Researchers at the University of Zimbabwe have made significant contributions to drought-resistant crop development, particularly in cassava and millet breeding programs. Their work supports food security across Southern Africa.",
    institution: "University of Zimbabwe, Department of Agriculture",
    imageAlt: "Agricultural researchers at the University of Zimbabwe",
  },
  {
    name: "mShoko & Mobile Innovation Hub",
    field: "Technology",
    achievement:
      "Zimbabwe's growing tech ecosystem has produced innovative mobile-first platforms. Harare-based startups have developed solutions for financial inclusion, agriculture, and healthcare delivery across Southern Africa.",
    institution: "Harare Innovation Hub",
    imageAlt: "Tech entrepreneurs working in a Harare co-working space",
  },
  {
    name: "Medical Research Council of Zimbabwe",
    field: "Public Health",
    achievement:
      "The MRCZ has been at the forefront of HIV/AIDS research, tuberculosis treatment programs, and pandemic preparedness in Southern Africa. Zimbabwean researchers have contributed to global understanding of disease patterns in the region.",
    institution: "Medical Research Council of Zimbabwe",
    imageAlt: "Laboratory researchers conducting public health research",
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
      "Located in Bulawayo, NUST is Zimbabwe's premier science and technology university, known for its engineering, mining, and applied research programs.",
  },
  {
    name: "African Institute for Mathematical Sciences (AIMS) — Rhodes University",
    description:
      "While based in South Africa, AIMS has strong partnerships with Zimbabwean universities and trains many Zimbabwean scientists and data scientists across Africa.",
  },
];
