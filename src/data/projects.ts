import projShopify1 from "@/assets/project-shopify-1.jpg";
import projShopify2 from "@/assets/project-shopify-2.jpg";
import projWp1 from "@/assets/project-wp-1.jpg";
import projWp2 from "@/assets/project-wp-2.jpg";
import projReact1 from "@/assets/project-react-1.jpg";
import projReact2 from "@/assets/project-react-2.jpg";
import projPhp1 from "@/assets/project-php-1.jpg";
import projHtml1 from "@/assets/project-html-1.jpg";

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
};

export const PROJECTS: Project[] = [
  {
    slug: "lumen-apparel",
    title: "Lumen Apparel",
    client: "Lumen Co.",
    tech: "Shopify",
    category: "Fashion · D2C",
    year: "2025",
    image: projShopify1,
    excerpt:
      "A high-converting Shopify storefront with custom sections, lightning-fast PDPs and a redesigned checkout flow.",
    metrics: [
      { label: "Conversion lift", value: "+38%" },
      { label: "AOV", value: "+22%" },
      { label: "Page speed", value: "94" },
    ],
    scope: ["Shopify 2.0 theme", "Custom sections", "Klaviyo integration"],
  },
  {
    slug: "noor-skincare",
    title: "Noor Skincare",
    client: "Noor Beauty",
    tech: "Shopify",
    category: "Beauty · D2C",
    year: "2024",
    image: projShopify2,
    excerpt: "An editorial Shopify experience with elegant motion, build-a-routine quiz and subscriptions.",
    metrics: [
      { label: "Subscribers", value: "+62%" },
      { label: "Bounce", value: "-31%" },
      { label: "Repeat rate", value: "+45%" },
    ],
    scope: ["Theme dev", "Subscription flow", "Quiz funnel"],
  },
  {
    slug: "estate-living",
    title: "Estate Living",
    client: "Estate Group",
    tech: "WordPress",
    category: "Real Estate",
    year: "2025",
    image: projWp1,
    excerpt: "A premium WordPress build with custom property CPTs, advanced filters and CRM sync.",
    metrics: [
      { label: "Inquiries", value: "+74%" },
      { label: "Time on site", value: "+58%" },
      { label: "PageSpeed", value: "92" },
    ],
    scope: ["Custom WP theme", "ACF + CPT UI", "HubSpot CRM"],
  },
  {
    slug: "scholar-academy",
    title: "Scholar Academy",
    client: "Scholar Edu",
    tech: "WordPress",
    category: "EdTech",
    year: "2024",
    image: projWp2,
    excerpt: "A scalable LMS on WordPress with course builder, payments and progress tracking.",
    metrics: [
      { label: "Active learners", value: "12K+" },
      { label: "Course completion", value: "+41%" },
      { label: "Refunds", value: "-28%" },
    ],
    scope: ["LearnDash", "Stripe", "Custom dashboards"],
  },
  {
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    client: "Pulse Inc.",
    tech: "React",
    category: "SaaS · Dashboard",
    year: "2025",
    image: projReact1,
    excerpt: "A blazing fast analytics dashboard built with React, TanStack and a custom design system.",
    metrics: [
      { label: "Render time", value: "-67%" },
      { label: "NPS", value: "+24" },
      { label: "Activation", value: "+39%" },
    ],
    scope: ["React + Vite", "TanStack Query", "Design system"],
  },
  {
    slug: "fork-co",
    title: "Fork & Co.",
    client: "Fork & Co.",
    tech: "React",
    category: "Mobile · Food",
    year: "2024",
    image: projReact2,
    excerpt: "A React Native food delivery experience with realtime tracking and one-tap reorder.",
    metrics: [
      { label: "Orders / user", value: "+47%" },
      { label: "Crash-free", value: "99.8%" },
      { label: "App rating", value: "4.8★" },
    ],
    scope: ["React Native", "Realtime tracking", "Push & deep links"],
  },
  {
    slug: "atlas-crm",
    title: "Atlas CRM",
    client: "Atlas Group",
    tech: "PHP",
    category: "Custom · Internal",
    year: "2025",
    image: projPhp1,
    excerpt: "A custom Laravel CRM replacing 4 disconnected tools across sales, ops and finance.",
    metrics: [
      { label: "Tools replaced", value: "4 → 1" },
      { label: "Cycle time", value: "-52%" },
      { label: "Saved / mo.", value: "$8.4K" },
    ],
    scope: ["Laravel", "Role based access", "Stripe + Razorpay"],
  },
  {
    slug: "fintech-ledger",
    title: "Ledger Fintech",
    client: "Ledger Pay",
    tech: "HTML",
    category: "Marketing · Fintech",
    year: "2024",
    image: projHtml1,
    excerpt: "A pixel-perfect marketing site with Webflow-grade animations, hand-built in HTML & CSS.",
    metrics: [
      { label: "Lighthouse", value: "98" },
      { label: "Lead form CR", value: "+29%" },
      { label: "Time to ship", value: "9 days" },
    ],
    scope: ["Static HTML", "GSAP motion", "A/B testing"],
  },
];

export const TECH_FILTERS: ("All" | Tech)[] = ["All", "Shopify", "WordPress", "React", "PHP", "HTML"];
