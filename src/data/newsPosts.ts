import ekotradeExpoStoryImage from "../assets/images/ekotradeexpostory.jpeg";

export interface NewsPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  source: string;
  externalUrl: string;
  content: string[];
}

export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "benin-republic-consulate-backs-eko-international-trade-expo",
    title:
      "Benin Republic Consulate Backs Eko International Trade Expo Push for Nigeria-West Africa Trade Growth",
    excerpt:
      "Momentum Trading Enterprises met with the Consulate General of the Benin Republic to strengthen bilateral trade ties and seek official support for the Eko International Trade Expo, including a dedicated Benin country pavilion.",
    image: ekotradeExpoStoryImage,
    imageAlt:
      "Eko International Trade Expo team meeting with officials at the Benin Republic Consulate",
    publishedAt: "2026-05-17",
    source: "Nigeria Updates",
    externalUrl:
      "https://nigeriaupdates.com/benin-republic-consulate-backs-eko-international-trade-expo-push-for-nigeria-west-africa-trade-growth/",
    content: [
      "Momentum Trading Enterprises, organisers of the upcoming Eko International Trade Expo, have sought strategic collaboration with the Consulate General of the Benin Republic as preparations intensify for the multi-sectoral trade exhibition aimed at deepening regional commerce across West Africa.",
      "The meeting, described as a courtesy visit to the Consulate General of the Benin Republic, focused on strengthening bilateral trade ties between Nigeria and Benin Republic while leveraging opportunities under the African Continental Free Trade Area (AfCFTA). Officials discussed investment opportunities, cross-border trade cooperation, SME development, logistics, and the role of regional partnerships in driving economic growth.",
      "Founder and Managing Director Henry Anwansedo described the Eko International Trade Expo as a premier multi-sectoral trade platform designed to strengthen economic cooperation between Africa and international markets. The five-day exhibition will focus on SME development, African regional trade, women in trade, youth innovation, and the green economy.",
      "Organisers expect more than 5,000 participants, including investors, business leaders, government officials, and entrepreneurs from across West Africa. The event will feature policy discussions on easing cross-border trade, sector-focused investment roundtables, and business networking sessions.",
      "Officials from the Benin Republic Consulate welcomed the proposal and noted that official participation would require internal consultations and approvals through diplomatic channels. Momentum Trading Enterprises said preparations for the expo are continuing, with organisers optimistic about stronger regional participation and expanded international partnerships.",
    ],
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
