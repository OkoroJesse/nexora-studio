export interface TechService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  heroImage: string;
  deliverables: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  techStack?: string[];
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'graphics' | 'print' | 'uiux' | 'web';
  categoryLabel: string;
  clientOrContext?: string;
  location?: string;
  image: string;
  aspectRatio: string; // e.g. "square", "portrait", "landscape"
  description: string;
  tags: string[];
  specs?: Record<string, string>;
  isFeatured?: boolean;
}

export interface PropertyPlaceholder {
  id: string;
  title: string;
  type: string;
  status: 'Available' | 'Under Offer' | 'Sold';
  description: string;
  isUpcoming: boolean;
}

export interface VehiclePlaceholder {
  id: string;
  title: string;
  category: string;
  status: 'In Stock' | 'Reserved' | 'Sold';
  description: string;
  isUpcoming: boolean;
}

export const STUDIO_INFO = {
  name: "Nexora Studio",
  tagline: "Multidisciplinary Creative, Technology & Business Studio",
  heroHeadline: "Where Visionary Design Meets Engineered Precision",
  heroSubheadline: "Nexora Studio is an umbrella creative and business studio delivering world-class digital products, web development, UI/UX, graphic design, and commercial printing services.",
  whatsappNumber: "+2349132312934",
  whatsappDisplay: "+234 913 231 2934",
  email: "justiceimhanbor20@gmail.com",
  phone: "+234 913 231 2934",
  secondaryPhone: "+234 909 261 0980",
  operatingHours: "Monday - Saturday: 8:00 AM - 6:00 PM WAT",
  stats: [
    { label: "Core Pillars", value: "4 Disciplines" },
    { label: "Execution Standard", value: "Agency Grade" },
    { label: "Turnaround", value: "Rapid & Agile" },
    { label: "Client Satisfaction", value: "100% Dedicated" },
  ],
};

export const TECH_SERVICES: TechService[] = [
  {
    id: "web-mobile-apps",
    number: "01",
    title: "Website Design & Mobile Apps",
    subtitle: "High-Performance Digital Platforms",
    shortDesc: "Scalable, blazing-fast web architectures and seamless cross-platform mobile applications engineered for conversion, performance, and seamless user experiences.",
    fullDesc: "We build modern digital products that don't just look stunning—they perform with enterprise-grade stability. From dynamic web platforms and progressive web apps to native iOS and Android mobile solutions, every line of code is optimized for speed, search visibility, and intuitive user engagement.",
    badge: "Engineering & Dev",
    heroImage: "/images/tech/web-mobile-showcase.jpg",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "iOS & Android Mobile Applications (React Native / Flutter)",
      "High-Converting Landing Pages & Corporate Websites",
      "SaaS Platforms & Interactive Client Portals",
      "E-Commerce & Digital Marketplace Solutions",
      "API Integrations, CMS Setup & Performance Tuning"
    ],
    capabilities: [
      {
        name: "Full-Stack Web Engineering",
        description: "Modern component architectures using Next.js, TypeScript, and Tailwind CSS delivering sub-second load times and flawless responsiveness."
      },
      {
        name: "Mobile App Development",
        description: "Intuitive touch experiences engineered with clean native ergonomics, offline capabilities, and instant API synchronizations."
      },
      {
        name: "Technical SEO & Speed Optimization",
        description: "Built-in Core Web Vitals excellence, structured schema markup, and accessible semantic markup to maximize organic search rank."
      }
    ],
    techStack: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS", "Node.js", "REST / GraphQL", "PostgreSQL"],
    ctaText: "Discuss Your Web / App Project"
  },
  {
    id: "ui-ux-product-design",
    number: "02",
    title: "UI/UX & Product Design",
    subtitle: "User-Centered Digital Experiences",
    shortDesc: "Strategic user experience research, wireframing, high-fidelity UI design, and modular design systems crafted to make complex products effortlessly usable.",
    fullDesc: "Exceptional products start with intentional design. We dissect user behavior, map intuitive user journeys, and construct robust design systems in Figma that seamlessly bridge user needs with business goals.",
    badge: "Product Strategy",
    heroImage: "/images/tech/ui-ux-product-design.jpg",
    deliverables: [
      "User Journey Mapping & Information Architecture",
      "Low & High-Fidelity Wireframes",
      "Interactive Figma Prototypes for Testing & Validation",
      "Scalable Design Systems & Component Libraries",
      "Mobile App & Tablet Interface Design",
      "SaaS Dashboard & Complex Data Visualization UI"
    ],
    capabilities: [
      {
        name: "Design System Architecture",
        description: "Tokens, components, variants, and guidelines structured to guarantee visual consistency across every customer touchpoint."
      },
      {
        name: "Rapid Interactive Prototyping",
        description: "Clickable prototypes that simulate real user interactions, micro-animations, and edge cases before a single line of code is written."
      },
      {
        name: "Product UX Optimization",
        description: "Heuristic evaluations, friction reduction, and conversion rate optimization to turn passive visitors into engaged users."
      }
    ],
    techStack: ["Figma", "FigJam", "Design Systems", "Prototyping", "Design Tokens", "Wireframing"],
    ctaText: "Start a UI/UX Collaboration"
  },
  {
    id: "graphics-design",
    number: "03",
    title: "Graphic Design & Branding",
    subtitle: "High-Impact Visual Identity",
    shortDesc: "Bold visual identities, scroll-stopping promotional flyers, corporate branding assets, and commercial advertising graphics that captivate audiences.",
    fullDesc: "In a world competing for split-second attention, your visual storytelling must be decisive. From brand identities and logos to commercial food posters, event flyers, and digital marketing materials, we produce polished, high-impact creative works that command authority.",
    badge: "Creative & Visuals",
    heroImage: "/images/portfolio/podcast-launch-banner.jpg",
    deliverables: [
      "Logo Design & Comprehensive Brand Identity Kits",
      "Commercial Food & Restaurant Promo Graphics",
      "Event, School & Podcast Launch Flyers & Posters",
      "Social Media Content Kits & Digital Ad Creatives",
      "Corporate Stationery, Letterheads & Business Cards",
      "Marketing Collateral & Promotional Banners"
    ],
    capabilities: [
      {
        name: "Commercial Advertising Design",
        description: "Vibrant visual hierarchy, bold typography, and mouth-watering or attention-demanding composition that drives customer action."
      },
      {
        name: "Brand Identity Systems",
        description: "Cohesive color palettes, custom typographic treatments, and logo assets calibrated for print, web, and physical merchandise."
      },
      {
        name: "Social Media Campaigns",
        description: "Optimized multi-format digital flyers sized precisely for Instagram, WhatsApp status, Facebook, and YouTube announcements."
      }
    ],
    techStack: ["Adobe Photoshop", "Adobe Illustrator", "InDesign", "Figma", "Vector Art", "Brand Guidelines"],
    ctaText: "Request Graphic Design"
  },
  {
    id: "printing-services",
    number: "04",
    title: "Commercial & Luxury Printing",
    subtitle: "High-Resolution Physical Production",
    shortDesc: "End-to-end commercial printing services with premium finishes—including embossed cards, large-format outdoor banners, school admission campaigns, and branded stationery.",
    fullDesc: "We bring digital concepts into tactile reality with precision printing. Combining state-of-the-art print presses with luxury finishing options—matte lamination, spot UV, gold foil stamping, and heavy cardstocks—we deliver marketing materials that leave an unforgettable impression.",
    badge: "Print & Production",
    heroImage: "/images/tech/printing-services-showcase.jpg",
    deliverables: [
      "Large-Format Outdoor & Indoor Flex Banners",
      "Premium Business Cards (Matte, Spot UV, Gold Foil)",
      "Educational Admission Flyers & School Handbills",
      "Product Packaging Boxes & Custom Labels",
      "Corporate Branded Notebooks, Folders & Envelopes",
      "Brochures, Catalogues & Multi-Page Booklets"
    ],
    capabilities: [
      {
        name: "Precision Color & Resolution",
        description: "Full CMYK high-DPI calibration ensuring physical prints match exact digital color specifications with zero degradation."
      },
      {
        name: "Luxury Specialty Finishes",
        description: "Embossing, debossing, hot foil stamping, soft-touch matte lamination, and selective high-gloss spot UV."
      },
      {
        name: "Volume Commercial Runs",
        description: "Fast-turnaround high-volume print runs for schools, food businesses, corporate firms, and event organizers."
      }
    ],
    techStack: ["CMYK Precision", "Spot UV", "Hot Foil Stamping", "Matte Lamination", "Large Format Press", "Die-Cutting"],
    ctaText: "Get a Printing Quote"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "podcast-launch-banner",
    title: "Unbiased with Bella & Susan — Podcast Launch Banner",
    category: "graphics",
    categoryLabel: "Graphic Design / Social Media",
    clientOrContext: "Bella & Susan Media",
    image: "/images/portfolio/podcast-launch-banner.jpg",
    aspectRatio: "square",
    description: "Sleek, royal violet visual identity and teaser promotional poster crafted for the official launch of the 'Unbiased with Bella & Susan' podcast across YouTube and Instagram.",
    tags: ["Podcast Branding", "Social Promo", "Typography", "Studio Lighting"],
    specs: {
      "Type": "Digital Poster & Social Kit",
      "Palette": "Deep Purple, Crisp White, Navy",
      "Target Channels": "Instagram, YouTube, WhatsApp",
      "Deliverables": "Announcement Artwork & Social Assets"
    },
    isFeatured: true
  },
  {
    id: "spicy-burger-flyer",
    title: "Spicy Burger Commercial Food Poster",
    category: "graphics",
    categoryLabel: "Graphic Design / Commercial Ad",
    clientOrContext: "Elenwo, Port Harcourt, Nigeria",
    image: "/images/portfolio/spicy-burger-flyer.jpg",
    aspectRatio: "square",
    description: "High-energy commercial food advertisement poster featuring dynamic splash dynamics, vivid lime green backdrop, and punchy promotional pricing badges.",
    tags: ["Commercial Ad", "Food Design", "Motion Splash", "Direct Response"],
    specs: {
      "Location": "Elenwo, Port Harcourt, Nigeria",
      "Type": "Food Promotion Flyer",
      "Key Elements": "Dynamic Splash, Price Badge, Location Marker",
      "Contact Channels": "WhatsApp & Direct Phone Order"
    },
    isFeatured: true
  },
  {
    id: "bay-flowers-admission",
    title: "Bay-Flowers International School Admission Campaign",
    category: "print",
    categoryLabel: "Printing Services / Editorial",
    clientOrContext: "Bay-Flowers International School, Benin City",
    location: "17/29, Pole Street, Off Sapele Road, Benin City, Edo State",
    image: "/images/portfolio/bay-flowers-admission-flyer.jpg",
    aspectRatio: "portrait",
    description: "Comprehensive multi-tier admission campaign poster and print handbill covering Toddlers, Nursery, Primary, and Secondary schooling tiers with vibrant visual storytelling.",
    tags: ["Print Campaign", "Educational", "Brochure / Flyer", "High-Resolution CMYK"],
    specs: {
      "Institution": "Bay-Flowers International School",
      "Location": "Benin City, Edo State",
      "Format": "Print Handbill / Poster / Banner",
      "Key Sections": "Toddlers, Nursery, Primary, Secondary, Sports Wears"
    },
    isFeatured: true
  },
  {
    id: "nigerian-flavours-ad",
    title: "Delicious Nigerian Flavours Food Delivery Campaign",
    category: "graphics",
    categoryLabel: "Graphic Design / Food Branding",
    clientOrContext: "Owerri, Imo State",
    location: "Owerri, Imo State",
    image: "/images/portfolio/nigerian-flavours-ad.jpg",
    aspectRatio: "square",
    description: "Vibrant culinary advertisement design highlighting native delicacies with high-contrast dual split layout, appetizing plate photography, and instant call-to-order elements.",
    tags: ["Culinary Ad", "Dual-Tone Layout", "Social Media", "Quick Order"],
    specs: {
      "Location": "Owerri, Imo State",
      "Style": "Warm Orange & Clean White Split",
      "Type": "Menu / Food Promo",
      "CTA": "Order Now Direct Contact"
    },
    isFeatured: true
  },
  {
    id: "jlc-business-card",
    title: "JLC Corporate Identity & Business Card Layout",
    category: "print",
    categoryLabel: "Branding & Print",
    clientOrContext: "JLC Best Company",
    image: "/images/portfolio/jlc-business-card-branding.jpg",
    aspectRatio: "landscape",
    description: "Minimalist corporate business card design featuring sleek curved contrast waves, red accent ribbon, and geometric crest emblem on clean white and obsidian fields.",
    tags: ["Stationery", "Business Card", "Corporate Identity", "Clean Minimalist"],
    specs: {
      "Finish": "Matte Lamination with Spot UV Emboss",
      "Stock": "400gsm Heavy Art Card",
      "Palette": "Crimson Red, Jet Black, Ultra White",
      "Format": "Standard Business Card (3.5 x 2 in)"
    },
    isFeatured: true
  },
  {
    id: "saas-analytics-web",
    title: "Elevate SaaS Analytics & Mobile Platform",
    category: "web",
    categoryLabel: "Website Design & Mobile Apps",
    clientOrContext: "Nexora Studio Tech Division",
    image: "/images/tech/web-mobile-showcase.jpg",
    aspectRatio: "landscape",
    description: "Responsive multi-platform enterprise analytics dashboard and companion iOS/Android mobile app featuring live data charts, dark theme UI, and cross-device sync.",
    tags: ["Next.js", "React Native", "Tailwind CSS", "Dashboard", "Dark Mode"],
    specs: {
      "Platform": "Web & Native iOS/Android",
      "Architecture": "Next.js App Router & Tailwind CSS",
      "State Management": "Real-time WebSockets",
      "Theme": "Dark Mode Ergonomics"
    },
    isFeatured: true
  },
  {
    id: "aeroflow-design-system",
    title: "AeroFlow Product Design & Figma System",
    category: "uiux",
    categoryLabel: "UI/UX & Product Design",
    clientOrContext: "Nexora Studio Product Labs",
    image: "/images/tech/ui-ux-product-design.jpg",
    aspectRatio: "landscape",
    description: "Comprehensive product design framework with responsive user flows, design tokens, multi-platform interactive prototypes, and component documentation.",
    tags: ["Figma", "User Journey", "Wireframes", "Design Tokens", "Design System"],
    specs: {
      "Design Tool": "Figma & FigJam",
      "Deliverable": "Interactive Prototype & Component Library",
      "Coverage": "Mobile, Tablet & Desktop Layouts",
      "Focus": "Frictionless Checkout & Onboarding"
    },
    isFeatured: true
  },
  {
    id: "aurora-luxury-print",
    title: "Aurora Commercial Printing & Stationery Suite",
    category: "print",
    categoryLabel: "Commercial Printing Services",
    clientOrContext: "Nexora Studio Print Production",
    image: "/images/tech/printing-services-showcase.jpg",
    aspectRatio: "landscape",
    description: "Luxury corporate print showcase featuring gold-foil stamped linen notebooks, tri-fold textured brochures, blind-embossed stationery, and bespoke packaging boxes.",
    tags: ["Luxury Print", "Gold Foil", "Embossing", "Textured Paper", "Packaging"],
    specs: {
      "Press Method": "High-Definition Offset & Digital Press",
      "Finishing": "Gold Foil Stamping, Blind Deboss, Spot Gloss",
      "Materials": "Textured Cotton Paper & Rigid Board Packaging",
      "Scope": "Corporate Stationery & Presentation Kit"
    },
    isFeatured: true
  }
];

export const STUDIO_PROCESS = [
  {
    step: "01",
    name: "Consultation & Scope",
    description: "We understand your exact requirements, audience targets, deliverables, and timeline to craft a precise execution roadmap."
  },
  {
    step: "02",
    name: "Design & Prototyping",
    description: "We generate high-fidelity concepts, wireframes, or graphic proofs for your review, iterating until the presentation is flawless."
  },
  {
    step: "03",
    name: "Engineering & Production",
    description: "Clean code execution for web/mobile apps or precision CMYK press production for print materials using premium standards."
  },
  {
    step: "04",
    name: "Quality Review & Delivery",
    description: "Thorough testing, responsive checks, and delivery of final digital codebases or physical prints packaged to perfection."
  }
];

export const UMBRELLA_DIVISIONS = [
  {
    id: "tech-digital",
    title: "Technology & Digital Solutions",
    status: "Active & Accepting Clients",
    summary: "Full-stack web applications, mobile apps, UI/UX product design, high-impact commercial graphics, and large-format commercial printing.",
    link: "/tech",
    actionLabel: "Explore Tech Studio",
    badge: "Featured Discipline"
  },
  {
    id: "properties",
    title: "Just_propertiez (Real Estate)",
    status: "Active Division",
    summary: "Sales of lands, sales of properties, executive shortlet & rentage, and cleaning & fumigation services under the Nexora Studio umbrella.",
    link: "/properties",
    actionLabel: "Explore Just_propertiez",
    badge: "Real Estate Division"
  },
  {
    id: "automobiles",
    title: "Just Auto's (Car Deals & Rentage)",
    status: "Active Division",
    summary: "Brand new cars, direct Belgium (Tokunbo) imports, car rentage & rentals, and verified custom vehicle deals under the Nexora Studio umbrella.",
    link: "/cars",
    actionLabel: "Explore Just Auto's",
    badge: "Automotive Division"
  }
];

export interface RealEstateService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  image: string;
  deliverables: string[];
  features: string[];
  ctaText: string;
}

export interface RealEstateListing {
  id: string;
  title: string;
  category: 'lands' | 'properties' | 'shortlet' | 'cleaning';
  categoryLabel: string;
  location: string;
  image: string;
  status: 'Available' | 'Active' | 'Booking Fast' | 'Verified';
  tag: string;
  priceGuide?: string;
  description: string;
  highlights: string[];
  specs?: Record<string, string>;
}

export const REAL_ESTATE_INFO = {
  brandName: "Just_propertiez",
  tagline: "TURNING DREAMS INTO KEYS.",
  umbrellaParent: "Nexora Studio",
  logo: "/images/properties/just-propertiez-logo.png",
  description: "The dedicated real estate, land sales, luxury shortlet, and property management division of Nexora Studio.",
  phone: "+234 913 231 2934",
  secondaryPhone: "+234 909 261 0980",
};

export const REAL_ESTATE_SERVICES: RealEstateService[] = [
  {
    id: "lands-sales",
    number: "01",
    title: "Sales of Lands",
    subtitle: "Verified Plots & Commercial Acreage",
    shortDesc: "Strategic dry land parcels with clear titles, survey plans, and immediate allocation in high-growth prime neighborhoods.",
    fullDesc: "We facilitate safe, transparent land acquisitions for residential developments, commercial establishments, and high-yield capital appreciation. Every plot undergoes rigorous title vetting, perimeter surveying, and verified documentation before listing.",
    badge: "Land Deals",
    image: "/images/properties/prime-land-sales.jpg",
    deliverables: [
      "Residential & Commercial Layout Plots",
      "Perimeter Survey & Registered Deed Transfers",
      "Immediate Site Allocation & Demarcation",
      "Gated Estate Land Acquisitions",
      "Agricultural & Commercial Acreage Deals",
      "Due Diligence & Title Search Assistance"
    ],
    features: ["100% Verified Titles", "Fast Physical Allocation", "Zero Encumbrances", "High Capital Appreciation"],
    ctaText: "Inquire on Land Deals"
  },
  {
    id: "properties-sales",
    number: "02",
    title: "Sales of Properties",
    subtitle: "Luxury Duplexes & Contemporary Homes",
    shortDesc: "Curated portfolio of premium residential villas, modern semi-detached duplexes, and commercial properties ready for ownership.",
    fullDesc: "From luxury multi-bedroom architectural duplexes to turnkey modern homes, Just_propertiez connects buyers directly with vetted developers and property owners. We provide transparent negotiation, title verification, and post-purchase onboarding.",
    badge: "Property Sales",
    image: "/images/properties/luxury-properties-sales.jpg",
    deliverables: [
      "Modern Detached & Semi-Detached Duplexes",
      "Contemporary Terrace Homes & Apartments",
      "Commercial Buildings & Office Spaces",
      "Off-Plan & Turnkey Developments",
      "Title Perfection & Legal Documentation",
      "Private Guided Property Inspections"
    ],
    features: ["Architectural Excellence", "Verified Titles / C of O", "Gated Security Estates", "Turnkey Move-in Ready"],
    ctaText: "Browse Property Deals"
  },
  {
    id: "shortlet-rentage",
    number: "03",
    title: "Shortlet and Rentage",
    subtitle: "Executive Stays & Long-Term Rentals",
    shortDesc: "Fully furnished luxury apartments for business, vacation, or expatriate stays, alongside vetted residential and commercial leases.",
    fullDesc: "Experience bespoke hospitality with Just_propertiez serviced shortlets. Enjoy 24/7 power, superfast fiber internet, premium designer furnishings, dedicated concierge, and serene security. We also manage long-term residential and corporate rentals.",
    badge: "Shortlet & Rentage",
    image: "/images/properties/shortlet-rentage.jpg",
    deliverables: [
      "Luxury 1, 2 & 3 Bedroom Serviced Shortlets",
      "Daily, Weekly & Monthly Corporate Stays",
      "24/7 Uninterrupted Power & High-Speed WiFi",
      "Long-Term Residential Rental Brokerage",
      "Commercial Office & Retail Leasing",
      "Tenant Screening & Lease Management"
    ],
    features: ["24/7 Power & Security", "Smart Home Furnishings", "Daily Housekeeping", "Flexible Booking"],
    ctaText: "Book Shortlet / Rental"
  },
  {
    id: "cleaning-fumigation",
    number: "04",
    title: "Cleaning and Fumigation Services",
    subtitle: "Deep Sanitization & Pest Control",
    shortDesc: "Professional post-construction cleaning, pre-move-in deep sanitization, routine facility hygiene, and certified pest fumigation.",
    fullDesc: "Protect your property investment with comprehensive cleaning and pest eradication. Utilizing eco-safe chemicals and advanced equipment, our trained technicians eliminate termites, rodents, bugs, and allergens for pristine living and working spaces.",
    badge: "Cleaning & Fumigation",
    image: "/images/properties/cleaning-fumigation.jpg",
    deliverables: [
      "Pre-Move-In & Post-Move-Out Deep Cleaning",
      "Post-Construction Dust & Debris Eradication",
      "Residential & Commercial Pest Fumigation",
      "Termite, Mosquito & Rodent Eradication",
      "Upholstery, Mattress & Carpet Steam Cleaning",
      "Scheduled Routine Property Hygiene Maintenance"
    ],
    features: ["Eco-Friendly Standards", "Certified Technicians", "Spotless Hygiene Guarantee", "Fast Response"],
    ctaText: "Book Cleaning / Fumigation"
  }
];

export const REAL_ESTATE_LISTINGS: RealEstateListing[] = [
  {
    id: "prime-estate-plots",
    title: "Prime Surveyed 500sqm Estate Plot",
    category: "lands",
    categoryLabel: "Sales of Lands",
    location: "Fast-Developing Prime Gated Corridor",
    image: "/images/properties/prime-land-sales.jpg",
    status: "Available",
    tag: "Registered Survey",
    priceGuide: "Inquire for pricing",
    description: "100% dry tabletop land plot with perimeter fencing, motorable paved access, and immediate physical allocation.",
    highlights: ["Tabletop Dry Land", "Survey & Deed Ready", "Instant Allocation", "High ROI"],
    specs: {
      "Plot Size": "500 sqm",
      "Zoning": "Residential / Multi-family",
      "Topography": "100% Dry Land",
      "Allocation": "Immediate"
    }
  },
  {
    id: "luxury-smart-duplex",
    title: "Contemporary 5-Bed Luxury Smart Villa",
    category: "properties",
    categoryLabel: "Sales of Properties",
    location: "Exclusive Residential Enclave",
    image: "/images/properties/luxury-properties-sales.jpg",
    status: "Verified",
    tag: "Brand New Duplex",
    priceGuide: "Inquire for pricing",
    description: "Exquisite contemporary duplex with floor-to-ceiling glass, private swimming pool, smart home automation, and fitted chef kitchen.",
    highlights: ["5 En-Suite Bedrooms", "Private Pool & Lounge", "Smart Automation", "Governor's Consent"],
    specs: {
      "Bedrooms": "5 All En-suite",
      "Features": "Private Pool, Smart Home, BQ",
      "Parking": "5+ Vehicles",
      "Title": "Governor's Consent / C of O"
    }
  },
  {
    id: "executive-serviced-shortlet",
    title: "The Oasis Executive 2-Bed Serviced Shortlet",
    category: "shortlet",
    categoryLabel: "Shortlet and Rentage",
    location: "Central Urban Leisure District",
    image: "/images/properties/shortlet-rentage.jpg",
    status: "Booking Fast",
    tag: "24/7 Power & WiFi",
    priceGuide: "Per Night / Weekly Rates",
    description: "Ultra-modern designer serviced apartment featuring 24/7 power, high-speed fiber internet, Netflix, smart locks, and 24hr security.",
    highlights: ["24/7 Constant Power", "High-Speed WiFi", "Smart TV & Kitchen", "Daily Housekeeping"],
    specs: {
      "Capacity": "Up to 4 Guests",
      "Bedrooms": "2 Luxury En-suite",
      "Amenities": "24/7 Power, Fiber Internet, Smart TV",
      "Check-In": "Flexible / Self Check-In"
    }
  },
  {
    id: "deep-cleaning-fumigation-package",
    title: "Complete Move-In Deep Clean & Pest Fumigation",
    category: "cleaning",
    categoryLabel: "Cleaning & Fumigation",
    location: "Residential & Commercial On-Site",
    image: "/images/properties/cleaning-fumigation.jpg",
    status: "Active",
    tag: "Certified Service",
    priceGuide: "Custom Quote by Property Size",
    description: "Full-scale interior and exterior chemical sanitization, termite/rodent treatment, tile polishing, and post-construction cleaning.",
    highlights: ["Eco-Safe Chemicals", "Certified Technicians", "Germ & Pest Eradication", "Same-Day Execution"],
    specs: {
      "Scope": "Duplexes, Apartments, Offices",
      "Chemicals": "Non-staining, Eco-friendly, Pet Safe",
      "Pest Coverage": "Termites, Cockroaches, Bedbugs, Rodents",
      "Turnaround": "Same-Day Execution Available"
    }
  }
];

export interface AutoService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  badge: string;
  image: string;
  deliverables: string[];
  features: string[];
  ctaText: string;
}

export interface AutoListing {
  id: string;
  title: string;
  category: 'brand-new' | 'belgium' | 'rentage' | 'sourcing';
  categoryLabel: string;
  condition: string;
  location: string;
  image: string;
  status: 'In Stock' | 'Verified' | 'Available For Rent' | 'Order Ready';
  tag: string;
  priceGuide?: string;
  description: string;
  highlights: string[];
  specs?: Record<string, string>;
}

export const AUTO_INFO = {
  brandName: "Just Auto's",
  tagline: "QUALITY CARS • TRUSTED DEALS • DRIVEN BY YOU",
  umbrellaParent: "Nexora Studio",
  logo: "/images/cars/just-autos-logo.png",
  description: "The dedicated automobile and car deals division of Nexora Studio dealing on all kinds of cars for sale and rentage, brand new vehicles, and direct Belgium imports.",
  phone: "+234 913 231 2934",
  secondaryPhone: "+234 909 261 0980",
};

export const AUTO_SERVICES: AutoService[] = [
  {
    id: "brand-new-cars",
    number: "01",
    title: "Brand New Cars for Sale",
    subtitle: "Zero-Mileage Factory Direct Vehicles",
    shortDesc: "Brand new luxury, executive, and family cars with direct manufacturer warranty, zero mileage, and full documentation.",
    fullDesc: "Purchase brand new vehicles straight from verified distributors and international showrooms. Enjoy complete peace of mind with pristine zero-mileage engines, valid manufacturer warranties, and comprehensive customs clearance.",
    badge: "Brand New",
    image: "/images/cars/toyota-camry-white-sedan.png",
    deliverables: [
      "Zero-Mileage Brand New Sedans, SUVs & Trucks",
      "Factory Manufacturer Warranty & Delivery Kits",
      "Full Customs Duty & Port Documentation",
      "Direct Dealership Sourcing (Toyota, Lexus, Mercedes, Kia)",
      "Pre-Delivery Inspection (PDI) Certified",
      "Doorstep Enclosed Flatbed Delivery"
    ],
    features: ["Zero Mileage", "Direct Factory Warranty", "Complete Customs Papers", "Pristine Luxury Finish"],
    ctaText: "Inquire on Brand New Cars"
  },
  {
    id: "belgium-imported-cars",
    number: "02",
    title: "Direct Belgium (Tokunbo) Cars",
    subtitle: "Hand-Picked Grade-A European & US Imports",
    shortDesc: "Clean, verified direct Belgium imported cars with accident-free records, low verified mileage, and original customs papers.",
    fullDesc: "We specialize in direct Belgium (foreign used / Tokunbo) vehicles thoroughly inspected before shipping. Every car undergoes rigorous mechanical, electrical, and chassis checks so you get exceptional quality without hidden faults.",
    badge: "Direct Belgium",
    image: "/images/cars/toyota-camry-black-sport.jpg",
    deliverables: [
      "Grade-A Accident-Free Foreign Used Vehicles",
      "Genuine Custom Papers & Duty Receipts",
      "Full Mechanical & Computer Diagnostic Scans",
      "Clean Engine, Smooth Transmission & Pristine AC",
      "Verified Mileage & Clean Title History",
      "Pre-Purchase Test Drives & Physical Inspections"
    ],
    features: ["Accident-Free Certified", "100% Genuine Customs Duty", "Thoroughly Scanned & Tested", "Best Market Value"],
    ctaText: "Browse Belgium Imports"
  },
  {
    id: "car-rentage",
    number: "03",
    title: "Car Rentage & Chauffeur Services",
    subtitle: "Executive Fleet for Short & Long-Term Hire",
    shortDesc: "Flexible luxury car rentals for corporate events, airport pick-ups, weddings, VIP escorts, and daily executive mobility.",
    fullDesc: "Whether you need a luxury crossover or sedan for a weekend event or long-term corporate fleet leasing, Just Auto's provides reliable, fully air-conditioned, well-maintained vehicles with optional professional chauffeurs.",
    badge: "Car Rentage",
    image: "/images/cars/toyota-venza-black-suv.jpg",
    deliverables: [
      "Daily, Weekly & Monthly Executive Car Rentals",
      "Airport Pick-up & Protocol Escort Services",
      "Wedding Convoys & Special Event Fleets",
      "Professional, Vetted & Courteous Drivers",
      "Corporate Mobility & Executive Fleet Leases",
      "Well-Maintained, Fully Insured & Air-Conditioned Cars"
    ],
    features: ["Flexible Rental Terms", "Optional Chauffeur", "24/7 Roadside Reliability", "Pristine Interiors"],
    ctaText: "Book Car Rentage"
  },
  {
    id: "vehicle-sourcing",
    number: "04",
    title: "Custom Vehicle Sourcing & Orders",
    subtitle: "Bespoke Automobile Acquisition",
    shortDesc: "Tell us the exact make, model, trim, color, and year you desire—we source, inspect, ship, and deliver it directly to you.",
    fullDesc: "Looking for a specific trim, rare colorway, or custom vehicle package? Our global sourcing network procures vehicles directly from European, American, and Canadian auto auctions and dealerships, managing shipping, clearing, and delivery.",
    badge: "Custom Orders",
    image: "/images/cars/toyota-camry-silver-muscle.png",
    deliverables: [
      "Direct Auction & Dealership Bidding",
      "Pre-Purchase Comprehensive Vehicle History Reports",
      "Containerized Maritime Shipping & Tracking",
      "Seamless Port Clearance & Customs Documentation",
      "Full Detailing & Ceramic Coating Options",
      "Direct Handover with Keys and Verified Papers"
    ],
    features: ["Exact Specifications Sourced", "End-to-End Tracking", "Transparent Cost Breakdown", "Guaranteed Quality"],
    ctaText: "Request Vehicle Sourcing"
  }
];

export const AUTO_LISTINGS: AutoListing[] = [
  {
    id: "toyota-camry-2016-white",
    title: "Toyota Camry XSE / SE (Pearl White)",
    category: "brand-new",
    categoryLabel: "Brand New & Mint",
    condition: "Zero Mileage / Pristine Foreign Direct",
    location: "Showroom Ready",
    image: "/images/cars/toyota-camry-white-sedan.png",
    status: "In Stock",
    tag: "Brand New / Mint",
    priceGuide: "Inquire for current deal",
    description: "Sleek Pearl White Toyota Camry with sport mesh front grille, factory alloy rims, panoramic sunroof, push-to-start ignition, and pristine interior.",
    highlights: ["Sport Black Mesh Grille", "Factory Alloy Rims", "Sunroof & Push Start", "Direct Customs Cleared"],
    specs: {
      "Make & Model": "Toyota Camry SE/XSE",
      "Color": "Pearl White / Black Roof Accent",
      "Transmission": "Automatic",
      "Fuel Type": "Petrol",
      "Duty": "100% Genuine Customs Cleared",
      "Interior": "Premium Leather Trim"
    }
  },
  {
    id: "toyota-camry-2015-black",
    title: "Toyota Camry SE Sport Edition (Jet Black)",
    category: "belgium",
    categoryLabel: "Direct Belgium",
    condition: "Direct Belgium (Tokunbo) / First Body",
    location: "Inspection Ready",
    image: "/images/cars/toyota-camry-black-sport.jpg",
    status: "Verified",
    tag: "Direct Belgium",
    priceGuide: "Best market price",
    description: "Direct Belgium Jet Black Toyota Camry SE Sport with sharp front fog lamps, tinted privacy glass, sport alloy wheels, reverse camera, and ice-cold factory AC.",
    highlights: ["Accident Free First Body", "Full Customs Duty Cleared", "Chilled Factory AC", "Smooth Engine & Gearbox"],
    specs: {
      "Make & Model": "Toyota Camry SE Sport",
      "Color": "Jet Black",
      "Import Origin": "Belgium / Foreign Used",
      "Condition": "First Body / Accident Free",
      "Transmission": "Automatic",
      "Wheels": "Sport 5-Spoke Alloy Wheels"
    }
  },
  {
    id: "toyota-venza-black-suv",
    title: "Toyota Venza Luxury Crossover SUV (Onyx Black)",
    category: "belgium",
    categoryLabel: "Direct Belgium",
    condition: "Direct Belgium / Grade-A Tokunbo",
    location: "Inspection Ready",
    image: "/images/cars/toyota-venza-black-suv.jpg",
    status: "In Stock",
    tag: "Direct Belgium",
    priceGuide: "Inquire for price",
    description: "Stunning Direct Belgium Toyota Venza crossover with prominent chrome grille, panoramic sunroof, alloy rims, elevated road clearance, and spacious luxury cabin.",
    highlights: ["Panoramic Glass Roof", "Chrome Front Grille", "Spacious Luxury Cargo", "100% Cleared Duty"],
    specs: {
      "Make & Model": "Toyota Venza AWD / FWD",
      "Color": "Onyx Black",
      "Import Origin": "Direct Belgium",
      "Drivetrain": "All-Wheel / Front-Wheel Drive",
      "Roof": "Panoramic Sunroof",
      "Status": "Duty Paid & Inspection Ready"
    }
  },
  {
    id: "kia-rio-red-hatchback",
    title: "Kia Rio Sport Hatchback (Fire Red)",
    category: "rentage",
    categoryLabel: "Car Rentage",
    condition: "Daily / Weekly Rental & For Sale",
    location: "Fleet & Sale Ready",
    image: "/images/cars/kia-rio-red-hatchback.jpg",
    status: "Available For Rent",
    tag: "Rentage & Sale",
    priceGuide: "Flexible Daily / Weekly Rates",
    description: "Vibrant Fire Red Kia Rio hatchback available for executive short-term hire, daily rentals, and direct purchase. Super fuel efficient, compact urban agility, and ice-cold AC.",
    highlights: ["Ultra Fuel Efficient", "Chilled AC & Bluetooth", "Perfect City Daily Run", "Chauffeur or Self-Drive"],
    specs: {
      "Make & Model": "Kia Rio Hatchback",
      "Color": "Fire Red",
      "Body Type": "Compact 5-Door Hatchback",
      "Service": "Daily / Weekly Rentage or Purchase",
      "Fuel Economy": "Excellent Miles-Per-Gallon",
      "Comfort": "Chilled AC, Touch Infotainment"
    }
  },
  {
    id: "toyota-camry-silver-muscle",
    title: "Toyota Camry Muscle Edition (Metallic Silver)",
    category: "sourcing",
    categoryLabel: "Direct Belgium / Sourcing",
    condition: "Direct Belgium (Tokunbo)",
    location: "Port / Yard Ready",
    image: "/images/cars/toyota-camry-silver-muscle.png",
    status: "Verified",
    tag: "Direct Tokunbo",
    priceGuide: "Inquire for current deal",
    description: "Renowned reliable Toyota Camry 'Muscle' in clean metallic silver with sunroof, alloy rims, robust V6/4-cylinder engine, low fuel consumption, and bulletproof Nigerian road durability.",
    highlights: ["Proven Durability", "Sunroof & Alloy Wheels", "Low Maintenance Cost", "Smooth Transmission"],
    specs: {
      "Make & Model": "Toyota Camry ('Muscle' Edition)",
      "Color": "Metallic Silver",
      "Origin": "Direct Belgium Import",
      "Features": "Sunroof, Power Windows, Alloy Wheels",
      "Engine": "Robust Dual VVT-i",
      "Documentation": "Original Customs Documents"
    }
  }
];


