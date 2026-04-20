export type Tech = "Shopify" | "WordPress" | "React" | "PHP" | "HTML";

export type Project = {
  slug: string;
  title: string;
  client: string;
  tech: Tech;
  category: string;
  year: string;
  image: string;
  excerpt: string;
  metrics: { label: string; value: string }[];
  scope: string[];
  url?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "alankar-chennai",
    title: "Alankar Chennai",
    client: "Alankar Chennai",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-01.png",
    url: "https://alankarchennai.in/",
    excerpt:
      "Festive and occasion wear on Shopify: anarkalis, lehengas and drape dresses with a polished, high-trust shopping flow.",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "AOV", value: "+24%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Shopify 2.0 theme", "Custom collections", "Checkout optimisation"],
  },
  {
    slug: "eitara",
    title: "Eitara",
    client: "Eitara",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-02.png",
    url: "https://www.myeitara.com/",
    excerpt:
      "Craft-led Indian wear with editorial storytelling: kurti sets, dresses and co-ords built for discovery and repeat purchases.",
    metrics: [
      { label: "Repeat rate", value: "+41%" },
      { label: "Time on site", value: "+52%" },
      { label: "Bounce", value: "-28%" },
    ],
    scope: ["Editorial theme", "Custom sections", "Klaviyo flows"],
  },
  {
    slug: "velaura",
    title: "Velaura by Sri Shanmuga Silks",
    client: "Velaura",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-03.png",
    url: "https://velaura.in/",
    excerpt:
      "Silks and sarees online with collection-led browsing, clear pricing tiers, and a heritage brand narrative.",
    metrics: [
      { label: "Inquiries", value: "+62%" },
      { label: "AOV", value: "+31%" },
      { label: "PageSpeed", value: "94" },
    ],
    scope: ["Heritage brand theme", "Collection architecture", "Trust UX"],
  },
  {
    slug: "pearloze",
    title: "Pearloze",
    client: "Pearloze",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    image: "/work-covers/cover-04.png",
    url: "https://pearloze.com/",
    excerpt:
      "Contemporary dresses, tops and skirts: a fashion-forward Shopify build with strong merchandising and social proof.",
    metrics: [
      { label: "Conversion lift", value: "+34%" },
      { label: "AOV", value: "+19%" },
      { label: "Returning users", value: "+47%" },
    ],
    scope: ["Theme dev", "Merchandising blocks", "Reviews integration"],
  },
  {
    slug: "lifashion",
    title: "Lifashion",
    client: "Lifashion",
    tech: "Shopify",
    category: "Kidswear · D2C",
    year: "2025",
    image: "/work-covers/cover-20.webp",
    url: "https://lifashion.co.in/",
    excerpt:
      "Kids' apparel and unisex essentials: catalogue-heavy Shopify with age-based navigation and parent-friendly UX.",
    metrics: [
      { label: "Catalogue scale", value: "1.2K SKUs" },
      { label: "Add-to-cart", value: "+44%" },
      { label: "PageSpeed", value: "91" },
    ],
    scope: ["Catalogue architecture", "Filter UX", "Parent-friendly flows"],
  },
  {
    slug: "reviash",
    title: "Reviash",
    client: "Reviash",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    image: "/work-covers/cover-06.png",
    url: "https://reviash.com/",
    excerpt:
      "Affordable luxury womenswear: dresses, co-ords and scarves with a calm, editorial storefront.",
    metrics: [
      { label: "Conversion lift", value: "+29%" },
      { label: "Bounce", value: "-22%" },
      { label: "Repeat rate", value: "+36%" },
    ],
    scope: ["Editorial Shopify theme", "Lookbook sections", "Email capture"],
  },
];

export const TECH_FILTERS: ("All" | Tech)[] = ["All", "Shopify", "WordPress", "React", "PHP", "HTML"];
