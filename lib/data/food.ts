export interface Dish {
  name: string;
  description: string;
  significance: string;
  region: string;
  image?: string;
  imageAlt?: string;
}

export const dishes: Dish[] = [
  {
    name: "Sadza",
    description:
      "The staple food of Zimbabwe — a thick porridge made from ground maize (corn). Served with relish (vinaka), meat, vegetables, or dairy.",
    significance: "Sadza is the heart of every Zimbabwean meal. It represents unity, family, and cultural identity.",
    region: "Nationwide",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/A_plate_of_sadza.jpg/800px-A_plate_of_sadza.jpg",
    imageAlt: "A plate of sadza served with meat and vegetables, Zimbabwe's staple dish",
  },
  {
    name: "Nyama (Grilled Meat)",
    description:
      "Zimbabwean braai culture — grilled beef, goat, chicken, or sausage. Often seasoned with peri-peri or traditional spices.",
    significance: "Braai is a social institution in Zimbabwe. Weekend gatherings revolve around the fire and the grill.",
    region: "Nationwide",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    imageAlt: "Nyama — Zimbabwean braai with grilled meat seasoned with peri-peri spices",
  },
  {
    name: "Matemba (Small Fish)",
    description:
      "Tiny silver fish from Lake Kariba, usually fried or cooked in tomato sauce. A beloved delicacy.",
    significance: "Matemba season is a celebration — families gather to enjoy these small but mighty fish.",
    region: "Lake Kariba region",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=400&fit=crop",
    imageAlt: "Matemba — small silver fish from Lake Kariba, fried to golden perfection",
  },
  {
    name: "Mopane Worms (Mhunga)",
    description:
      "Dried mopane caterpillars — a protein-rich delicacy. Usually rehydrated and cooked with onions, tomatoes, and chili.",
    significance: "Mopane worms are foraged during the rainy season (October–December) and dried for year-round use. A cherished snack.",
    region: "Matabeleland, Lowveld",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    imageAlt: "Mopane worms (Mhunga) — dried caterpillars rehydrated and cooked with onions, tomatoes, and chili",
  },
  {
    name: "Maheu",
    description:
      "A traditional fermented maize drink, thick and slightly sour. A refreshing non-alcoholic beverage.",
    significance: "Maheu is a traditional drink often made at home, especially in rural areas. It's nutritious and beloved by all ages.",
    region: "Nationwide",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&h=400&fit=crop",
    imageAlt: "Maheu — traditional fermented maize drink, thick and refreshing",
  },
  {
    name: "Muriwo (Wild Greens)",
    description:
      "Traditional leafy greens — including pumpkin leaves, sweet potato vines, and wild foraged varieties. Cooked into a nutritious stew.",
    significance: "Muriwo connects Zimbabweans to their land and ancestral cooking traditions.",
    region: "Nationwide",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    imageAlt: "Muriwo — traditional Zimbabwean leafy greens cooked into a nutritious stew",
  },
  {
    name: "Groundnut Stew (Nutsvi)",
    description:
      "A rich stew made with groundnut (peanut) paste, tomatoes, and meat. Served over sadza.",
    significance: "Groundnut stew is a comfort food that brings families together at the dinner table.",
    region: "Nationwide",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop",
    imageAlt: "Groundnut Stew (Nutsvi) — rich peanut paste stew served over sadza",
  },
];

export const foodCategories = [
  { name: "Staple Dishes", emoji: "🍚" },
  { name: "Braai Culture", emoji: "🔥" },
  { name: "Traditional Drinks", emoji: "🥤" },
  { name: "Festive Foods", emoji: "🎉" },
];
