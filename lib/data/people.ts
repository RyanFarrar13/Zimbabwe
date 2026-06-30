export interface Person {
  name: string;
  field: string;
  bio: string;
  quote?: string;
  imageSrc: string;
}

export const people: Person[] = [
  {
    name: "NoViolet Bulawayo",
    field: "Literature",
    bio: "Zimbabwean author born in Harare, known for her debut novel 'We Need New Heroes' (originally titled 'We Need New Heros'), which was shortlisted for the Booker Prize 2013 and the BBC National Award for Fiction. Her second novel 'Help Me Belong' (2023) explores identity, displacement, and belonging. She has been featured in The New Yorker's list of the top 20 fiction writers under 40.",
    quote: "Language is a form of power. To write in English about the Zimbabwean experience is to claim space in the global conversation.",
    imageSrc: "/images/noviolet-bulawayo.jpg",
  },
  {
    name: "Tsitsi Dangarembga",
    field: "Literature & Film",
    bio: "Zimbabwean writer, filmmaker and activist. Her debut novel 'Nervous Conditions' (1988) was the first work of Zimbabwean English-language fiction and was shortlisted for the International Booker Prize 2018. She studied film in Moscow and has directed documentaries including 'Neria' (2001), one of the first feature films by a Zimbabwean woman. She founded the Tambazimba arts development organization.",
    quote: "The truth is, I wrote because I had to. There were stories that needed telling.",
    imageSrc: "/images/tsitsi-dangarembga.jpg",
  },
  {
    name: "Thomas Mapfumo",
    field: "Music",
    bio: "Known as the 'Lion of Zim,' Thomas Mapfumo is Zimbabwe's most famous musician and a pioneer of chimurenga music — a fusion of traditional Shona rhythms with electric guitars. His protest songs against the Rhodesian regime made him a voice of the liberation struggle. He has released over 40 albums and continues to perform internationally.",
    quote: "Music is the weapon of the future. Chimurenga music is the sound of freedom.",
    imageSrc: "/images/thomas-mapfumo.jpg",
  },
  {
    name: "Oliver Mtukudzi (1952–2019)",
    field: "Music",
    bio: "One of Africa's most celebrated musicians, known as Tatumba. His unique blend of traditional Shona music, jazz, and contemporary sounds earned him international acclaim. He won multiple Channel O Music Awards and was nominated for the BBC Radio 3 World Music Award. His song 'Mbocha Nzeve' is considered a classic of African music.",
    quote: "I sing about the everyday experiences of ordinary Zimbabweans — their struggles, joys, and aspirations.",
    imageSrc: "/images/oliver-mtukudzi.jpg",
  },
  {
    name: "Kirsty Coventry",
    field: "Sports & Public Service",
    bio: "Born in Bulawayo in 1986, Kirsty Coventry is Zimbabwe's most celebrated Olympian with 7 medals (1 gold, 4 silver, 2 bronze) across three Olympic Games. She has served as Zimbabwe's Sports Minister and was appointed as a Member of the International Olympic Committee. In 2024, she was elected to the IOC Executive Board.",
    quote: "I want young Zimbabweans to know that they can achieve anything if they put their minds to it.",
    imageSrc: "/images/kirsty-coventry.jpg",
  },
  {
    name: "Tariro Mutyavikwa",
    field: "Youth Activism & Development",
    bio: "Born in Harare in 1987, Tariro Mutyavikwa is a leading youth development advocate and founder of Raising Our Voices (ROV), Zimbabwe's first youth-led organization for orphaned and vulnerable children. ROV has provided education, mentorship, and support to over 10,000 young people across Zimbabwe. She has spoken at the United Nations, World Economic Forum, and BBC's 100 Women list.",
    quote: "Young people are not the problem — they are the solution. When we invest in youth, we invest in Zimbabwe's future.",
    imageSrc: "/images/youth-activism.jpg",
  },
];
