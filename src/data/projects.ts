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
  {
    slug: "yazhli-collection",
    title: "Yazhli Collection",
    client: "Yazhli",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-07.png",
    url: "https://yazhlicollection.com/",
    excerpt:
      "Western and ethnic occasion wear: gowns, lehengas and kurta sets with minimal, breathable visual design.",
    metrics: [
      { label: "Conversion lift", value: "+42%" },
      { label: "AOV", value: "+27%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Shopify 2.0 theme", "Custom collections", "Checkout optimisation"],
  },
  {
    slug: "label-jas",
    title: "Label Jas",
    client: "Label Jas",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2026",
    image: "/work-covers/cover-08.png",
    url: "https://labeljas.com/",
    excerpt:
      "Emerging fashion label on Shopify: campaign-ready homepage, crisp collections, and conversion-focused PDPs.",
    metrics: [
      { label: "Conversion lift", value: "+33%" },
      { label: "AOV", value: "+21%" },
      { label: "Repeat rate", value: "+38%" },
    ],
    scope: ["Campaign theme", "Collection design", "PDP optimisation"],
  },
  {
    slug: "ishika-trends",
    title: "Ishika Trends",
    client: "Ishika Trends",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-09.png",
    url: "https://ishikatrends.com/",
    excerpt:
      "Full-range ethnic and fusion wear: kurti sets, gowns, sarees and maternity with strong category IA.",
    metrics: [
      { label: "Catalogue scale", value: "2K+ SKUs" },
      { label: "Bounce", value: "-26%" },
      { label: "AOV", value: "+18%" },
    ],
    scope: ["Information architecture", "Category templates", "Search UX"],
  },
  {
    slug: "uzvi",
    title: "Uzvi",
    client: "Uzvi",
    tech: "Shopify",
    category: "Beauty · D2C",
    year: "2025",
    image: "/work-covers/cover-10.png",
    url: "https://www.uzviecostore.com/",
    excerpt:
      "Skincare and beauty retail: product education, clean typography, and a trust-led path to purchase.",
    metrics: [
      { label: "Conversion lift", value: "+31%" },
      { label: "Time on site", value: "+44%" },
      { label: "Repeat rate", value: "+39%" },
    ],
    scope: ["Brand-led theme", "Education modules", "Reviews & UGC"],
  },
  {
    slug: "lemoon-baby",
    title: "Le'Moon Baby",
    client: "Le'Moon Baby",
    tech: "Shopify",
    category: "Kidswear · D2C",
    year: "2025",
    image: "/work-covers/cover-21.webp",
    url: "https://www.lemoonbaby.in/",
    excerpt:
      "Premium baby and toddler wear: rompers, dresses and accessories with a soft, giftable brand experience.",
    metrics: [
      { label: "AOV", value: "+29%" },
      { label: "Gift orders", value: "+58%" },
      { label: "PageSpeed", value: "93" },
    ],
    scope: ["Soft visual system", "Gift flow", "Subscription-ready"],
  },
  {
    slug: "suva-attire",
    title: "Suva Attire",
    client: "Suva Attire",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-12.png",
    url: "https://suvaattire.com/",
    excerpt:
      "Tamil-forward ethnic and fusion: kurti sets, maxis and brocade drops with video-led merchandising.",
    metrics: [
      { label: "Add-to-cart", value: "+47%" },
      { label: "Time on site", value: "+39%" },
      { label: "Repeat rate", value: "+33%" },
    ],
    scope: ["Video-led merchandising", "Drop scheduling", "Custom PDPs"],
  },
  {
    slug: "mini-tantini",
    title: "Mini Tantini",
    client: "Mini Tantini",
    tech: "Shopify",
    category: "Kidswear · D2C",
    year: "2026",
    image: "/work-covers/cover-13.png",
    url: "https://www.minitantini.com/",
    excerpt:
      "Playful kidswear on pure-cotton positioning: collections, trust badges, and parent-first product detail.",
    metrics: [
      { label: "Conversion lift", value: "+36%" },
      { label: "Bounce", value: "-24%" },
      { label: "AOV", value: "+22%" },
    ],
    scope: ["Playful theme", "Trust badge system", "Parent-first PDP"],
  },
  {
    slug: "seams-to-love",
    title: "Seams to Love",
    client: "Seams to Love",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    image: "/work-covers/cover-14.png",
    url: "https://seamstolove.com/",
    excerpt:
      "Contemporary dresses and budget tiers: tiered collections, promos, and a warm boutique tone.",
    metrics: [
      { label: "AOV", value: "+19%" },
      { label: "Promo CTR", value: "+52%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Tiered collections", "Promo modules", "Boutique storytelling"],
  },
  {
    slug: "cloudy-fit-by-asmitha",
    title: "Cloudy Fit by Asmitha",
    client: "Cloudy Fit",
    tech: "Shopify",
    category: "Loungewear · D2C",
    year: "2025",
    image: "/work-covers/cover-15.png",
    url: "https://cloudyfitbyasmitha.com/",
    excerpt:
      "Maternity-friendly loungewear and nightwear: inclusive sizing, feeding-friendly highlights, and calm UX.",
    metrics: [
      { label: "Conversion lift", value: "+34%" },
      { label: "Repeat rate", value: "+41%" },
      { label: "AOV", value: "+23%" },
    ],
    scope: ["Inclusive sizing UX", "Feature highlights", "Calm visual tone"],
  },
  {
    slug: "oggha",
    title: "Oggha",
    client: "Oggha",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    image: "/work-covers/cover-16.png",
    url: "https://www.oghaclothing.com/",
    excerpt:
      "Contemporary women's apparel: dresses, sets and tailored coordinates with a bold, modern storefront.",
    metrics: [
      { label: "Conversion lift", value: "+32%" },
      { label: "AOV", value: "+25%" },
      { label: "Bounce", value: "-21%" },
    ],
    scope: ["Bold modern theme", "Coordinate sets", "PDP storytelling"],
  },
  {
    slug: "hrudhay",
    title: "Hrudhay",
    client: "Hrudhay",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-17.png",
    url: "https://hrudhay.com/",
    excerpt:
      "Occasion and everyday ethnic: gowns, anarkalis and kurtis with editorial lookbooks and fast mobile browse.",
    metrics: [
      { label: "Mobile speed", value: "94" },
      { label: "Conversion lift", value: "+30%" },
      { label: "Time on site", value: "+38%" },
    ],
    scope: ["Editorial lookbooks", "Mobile-first browse", "Custom PDPs"],
  },
  {
    slug: "angelic-weaves",
    title: "Angelic Weaves",
    client: "Angelic Weaves",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-18.png",
    url: "https://angelicweaves.com/",
    excerpt:
      "Kurtis, dresses and co-ords: polished Shopify UX with budget and clearance paths for steady conversion.",
    metrics: [
      { label: "Conversion lift", value: "+28%" },
      { label: "AOV", value: "+17%" },
      { label: "Repeat rate", value: "+34%" },
    ],
    scope: ["Polished UX", "Clearance pathways", "Conversion modules"],
  },
  {
    slug: "madhavas-the-design-studio",
    title: "Madhavas The Design Studio",
    client: "Madhavas",
    tech: "WordPress",
    category: "Interior design · Studio",
    year: "2025",
    image: "/work-covers/cover-19.png",
    url: "https://madhavasds.com/",
    excerpt:
      "Commercial and residential interior design: portfolio, process, and lead generation on a bespoke WordPress build.",
    metrics: [
      { label: "Inquiries", value: "+71%" },
      { label: "Time on site", value: "+58%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Custom WP theme", "ACF portfolio", "Lead capture"],
  },
  {
    slug: "plumeria-by-jeyashilpa",
    title: "Plumeria by Jeyashilpa",
    client: "Plumeria",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/logos/client-20.png",
    url: "https://plumeriabyj.com/",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+24%" },
      { label: "Conversion lift", value: "+27%" },
      { label: "Repeat rate", value: "+31%" },
    ],
    scope: ["Boutique branding", "Floral visual system", "Refined PDPs"],
  },
  {
    slug: "velzaara",
    title: "Velzaara",
    client: "Velzaara",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-22.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+22%" },
      { label: "Conversion lift", value: "+26%" },
      { label: "Repeat rate", value: "+30%" },
    ],
    scope: ["Boutique branding", "Occasion-led storytelling", "Custom PDPs"],
  },
  {
    slug: "the-alp-stores",
    title: "The Alp Stores",
    client: "The Alp Stores",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-23.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+21%" },
      { label: "Conversion lift", value: "+25%" },
      { label: "Bounce", value: "-19%" },
    ],
    scope: ["Brand storefront", "Custom collections", "PDP storytelling"],
  },
  {
    slug: "momify",
    title: "Momify",
    client: "Momify",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-05.png",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+20%" },
      { label: "Conversion lift", value: "+24%" },
      { label: "Repeat rate", value: "+29%" },
    ],
    scope: ["Brand storefront", "Custom sections", "PDP storytelling"],
  },
  {
    slug: "malliclothing",
    title: "Malliclothing",
    client: "Malliclothing",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-11.png",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+19%" },
      { label: "Conversion lift", value: "+23%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Brand storefront", "Custom collections", "Refined PDPs"],
  },
  {
    slug: "sampradaya",
    title: "Sampradaya",
    client: "Sampradaya",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-24.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+22%" },
      { label: "Conversion lift", value: "+26%" },
      { label: "Repeat rate", value: "+28%" },
    ],
    scope: ["Brand storefront", "Custom collections", "PDP storytelling"],
  },
  {
    slug: "studiomirela",
    title: "Studio Mirela",
    client: "Studio Mirela",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-25.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+23%" },
      { label: "Conversion lift", value: "+27%" },
      { label: "Bounce", value: "-20%" },
    ],
    scope: ["Studio brand identity", "Editorial storefront", "Custom PDPs"],
  },
  {
    slug: "thugiil",
    title: "Thugiil",
    client: "Thugiil",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-26.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+21%" },
      { label: "Conversion lift", value: "+25%" },
      { label: "Repeat rate", value: "+30%" },
    ],
    scope: ["Brand storefront", "Custom sections", "Refined PDPs"],
  },
  {
    slug: "pinkstories",
    title: "Pink Stories",
    client: "Pink Stories",
    tech: "Shopify",
    category: "Ethnic wear · D2C",
    year: "2025",
    image: "/work-covers/cover-27.webp",
    excerpt:
      "Boutique ethnic wear: floral, occasion-led branding and a refined product narrative on Shopify.",
    metrics: [
      { label: "AOV", value: "+24%" },
      { label: "Conversion lift", value: "+28%" },
      { label: "PageSpeed", value: "93" },
    ],
    scope: ["Brand storefront", "Editorial sections", "Refined PDPs"],
  },
];

export const TECH_FILTERS: ("All" | Tech)[] = ["All", "Shopify", "WordPress", "React", "PHP", "HTML"];
