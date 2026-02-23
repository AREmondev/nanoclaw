export const NAV_LINKS = [
  { label: "Home", type: "link", href: "/" },
  { label: "Services", type: "mega", href: "/services" },
  { label: "About", type: "link", href: "/about" },
  { label: "Works", type: "link", href: "/works" },
  { label: "Contact", type: "link", href: "/contact" },
];

export interface MegaMenuItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const MEGA_MENU_SERVICES: MegaMenuItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites & web apps built with modern technologies",
    icon: "code",
    href: "/services/web-development",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Native & cross-platform mobile applications",
    icon: "mobile",
    href: "/services/mobile-apps",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "User-centered design for exceptional digital experiences",
    icon: "palette",
    href: "/services/ui-ux-design",
  },
  {
    id: 4,
    title: "E-Commerce",
    description: "Online stores that drive sales and conversions",
    icon: "shopping",
    href: "/services/ecommerce",
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services",
    icon: "cloud",
    href: "/services/cloud-solutions",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Strategic campaigns to grow your online presence",
    icon: "chart",
    href: "/services/digital-marketing",
  },
];

export const MEGA_MENU_RESOURCES = [
  { label: "Case Studies", href: "/works" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export const SERVICE_CATEGORIES = [
  "Web Development",
  "Mobile Apps",
  "UI/UX Design",
  "Cloud Solutions",
  "E-Commerce",
  "Digital Marketing",
  "API Development",
  "Brand Identity",
  "Data Analytics",
  "Cybersecurity",
];

export interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    quote:
      "Working with this team completely transformed our product. After the redesign and optimization, our user retention increased by 47% within two months. Reliable, creative, and incredibly detail-oriented.",
    name: "Edward Simmons",
    role: "Head of Growth at Xtra Creative",
    avatar: "/avatar-2.png",
  },
  {
    id: 2,
    quote:
      "The best development team we've ever worked with. They delivered our platform ahead of schedule and the quality exceeded our expectations. Their attention to detail is unmatched.",
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    avatar: "/avatar-3.png",
  },
  {
    id: 3,
    quote:
      "Our e-commerce platform saw a 200% increase in conversions after the redesign. The team understood our vision and executed perfectly. Highly recommend!",
    name: "Michael Chen",
    role: "Founder of ShopWave",
    avatar: "/avatar.png",
  },
  {
    id: 4,
    quote:
      "Exceptional work on our mobile app. User engagement increased by 3x within the first month of launch. The team was responsive, professional, and delivered beyond our requirements.",
    name: "Lisa Park",
    role: "Product Director at AppFlow",
    avatar: "/avatar-2.png",
  },
];

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  icon: "design" | "development" | "marketing";
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "End-to-end UX design, web development, and custom software solutions built to empower your business.",
    icon: "design",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Custom web applications built with modern technologies. Scalable, secure, and performant solutions for your business.",
    icon: "development",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that drive growth. SEO, social media, and content marketing expertise.",
    icon: "marketing",
  },
];

export const SITE_NAME = "Nano Claw";
export const SITE_DESCRIPTION = "Creative Digital Agency";

export const IMAGES = {
  LOGO: "/logo.svg",
  LOGO_SM: "/logo-icon_sm.svg",
  LOGO_MD: "/logo_md.png",
  LOGO_ICON: "/logo-icon.svg",
  LOGO_BLACK: "/logo_black.svg",
  HERO: "/hero.svg",
  CIRCLE_BUTTON: "/circle-button.svg",
  HERO_BG_EFFECT: "/hero-bg-effect.svg",
  SHOWCASE: "/showcase.svg",
  EXPERIENCE: "/exp.svg",

  DEXTRA: "/daxtra.svg",
  REUTERS: "/reuters.svg",
  DUPONT: "/dupont.svg",
  ZOOM: "/zoom.svg",
  HEINEKEN: "/heineken.svg",
  INDEED: "/indeed.svg",
  RIVER: "/river.svg",
  DELICUT: "/delicut.svg",
  PORJECT_1: "/project-1.png",
  PORJECT_2: "/project-2.png",
  PORJECT_3: "/project-3.png",
  FEATURED: "/featured.png",
  ROBOT: "/robot.png",
  AVATAR: "/avatar.png",
  AVATAR_2: "/avatar-2.png",
  AVATAR_3: "/avatar-3.png",

  CAPABILITY_1: "/capability-1.png",
  CAPABILITY_2: "/capability-2.png",
  CAPABILITY_3: "/capability-3.png",
  DEXTRA_LOGO: "/daxtra_logo.svg",
  QUOTE_SIGN: "/quote-sign.png",

  PORTFOLIO: "/portfolio_1.jpg",
  PORTFOLIO_2: "/portfolio_2.jpg",
  PORTFOLIO_3: "/portfolio_3.jpg",

  SOLUTION_1: "/solution.jpg",
  SOLUTION_2: "/solution_2.jpg",
  SOLUTION_3: "/solution_3.jpg",
  SOLUTION_4: "/solution_4.jpg",
  SOLUTION_5: "/solution_5.jpg",

  DESIGNPORTFOLIO: "/design_portfolio.jpg",
  DESIGNPORTFOLIO_2: "/design_portfolio_2.jpg",
  DESIGNPORTFOLIO_3: "/design_portfolio_3.jpg",
  DESIGNPORTFOLIO_4: "/design_portfolio_4.jpg",

  BRAND_LOGO_WHITE: "/brand_logo_white.svg",

  BRAND_LOGO_WHITE_1: "/brand_logo_white_1.svg",
  BRAND_LOGO_WHITE_3: "/brand_logo_white_3.svg",
  BRAND_LOGO_WHITE_4: "/brand_logo_white_4.svg",
} as const;

export const BRAND_LOGOS = [
  IMAGES.DEXTRA,
  IMAGES.REUTERS,
  IMAGES.DUPONT,
  IMAGES.ZOOM,
  IMAGES.HEINEKEN,
  IMAGES.INDEED,
  IMAGES.RIVER,
  IMAGES.DELICUT,
];
