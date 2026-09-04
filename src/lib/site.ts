export const siteConfig = {
  name: "GACS",
  legalName: "Gupta Associate Consultancy",
  brandName: "Gupta Associate",
  brandService: "Consultancy Service",
  brandSlogan: "Your Partner For A Brighter Tomorrow",
  tagline: "Trusted gas & energy services for homes and businesses.",
  description:
    "Book LPG delivery, PNG connections, appliance installation, and safety inspections across Shikohabad. Fast, certified, and dependable.",
  url: "https://gasc.local",
  locale: "en_IN",
  phone: "+91 78956 33129",
  email: "info@gacs.co.in",
  address:
    "Baldevi Tower, NH 2, Chaturi Nagar, Suhag Nagar, Firozabad, Uttar Pradesh 283203",
  hours: "Mon–Sat: 9:30AM – 7:30PM",
  hoursDays: "Monday – Saturday",
  hoursTime: "9:30AM – 7:30PM",
  hoursSunday: "Sunday: Closed",
  footerBlurb:
    "Professional advisory that protects, guides & grows your business.",
  logo: "/images/logo.png",
  logoWidth: 1254,
  logoHeight: 1254,
} as const

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why GACS" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
] as const

export const practiceAreas = [
  {
    slug: "legal",
    number: "01",
    title: "Legal Advisory & Representation",
    topics: ["Civil matters", "Corporate law", "Litigation", "Dispute resolution"],
  },
  {
    slug: "taxation",
    number: "02",
    title: "Taxation & Regulatory",
    topics: ["Income tax", "GST advisory", "Tax litigation", "Compliance"],
  },
  {
    slug: "business",
    number: "03",
    title: "Business & Corporate",
    topics: ["Structuring", "Documentation", "Company law", "Compliance"],
  },
  {
    slug: "finance",
    number: "04",
    title: "Finance & Accounting",
    topics: ["Planning", "Bookkeeping", "Analysis", "Financial advisory"],
  },
] as const

export const bookingLanguages = ["English", "Hindi"] as const
export const bookingClientTypes = [
  "Individual",
  "Small Business",
  "Corporate",
] as const
export const bookingAppointmentTypes = [
  "In-Person Consultation",
  "Virtual Consultation",
] as const
export const bookingReferralSources = [
  "Google",
  "Existing Client",
  "Client Referral",
  "Social Media",
  "Walk-in",
  "Advertisement",
  "Other",
] as const

export const whyValues = [
  "Confidential Advisory",
  "Client-First Approach",
  "Integrated Expertise",
  "Trusted Since 2009",
  "Absolute Integrity",
] as const

export const aboutStory = {
  kicker: "Our Story",
  heading:
    "A practice built on long-term client relationships, not transactions.",
  columns: [
    "GACS brings together seasoned professionals from the fields of law, chartered accountancy and company secretarial practice. Our founding belief is that every client deserves clarity — in language they understand, with advice that works in the real world.",
    "Over fifteen years, we have served individuals navigating personal legal matters, small businesses building their compliance foundation, and corporations requiring sophisticated multi-jurisdictional advisory. Each engagement deepens our understanding of what clients truly need.",
  ],
  stats: [
    { value: "15+", label: "Years of Practice" },
    { value: "500+", label: "Clients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "4", label: "Integrated Practice Areas" },
  ],
} as const

export const heroStats = [
  { value: "15+", label: "Years Practice" },
  { value: "500+", label: "Clients Served" },
  { value: "4", label: "Practice Areas" },
  { value: "98%", label: "Satisfaction Rate" },
] as const

export const whyStats = [
  { value: "15+", label: "Years of Practice" },
  { value: "500+", label: "Clients Served" },
  { value: "4", label: "Practice Areas" },
  { value: "98%", label: "Client Retention" },
] as const

export const testimonials = [
  {
    quote:
      "GACS supports our documentation, compliance and advisory needs with discipline and discretion. Their integrated legal and financial view keeps matters moving without delay.",
    name: "PNB",
    role: "Punjab National Bank",
  },
  {
    quote:
      "From structuring to ongoing tax and legal compliance, GACS has been a reliable partner for Orchid Green. Clear advice, prompt response, and genuine care for the business.",
    name: "Orchid Green",
    role: "Hospitality & Real Estate",
  },
  {
    quote:
      "The tax advisory from GACS transformed our compliance position. Proactive, clear and always ahead of regulatory changes. We recommend them without reservation.",
    name: "Lotus Light",
    role: "Lighting & Electrical",
  },
  {
    quote:
      "Their finance, accounting and commercial advisory gave our showroom the clarity we needed. Decisions are faster, the books are sound, and we know where we stand.",
    name: "Honda Showroom",
    role: "Automobile Dealership",
  },
  {
    quote:
      "From incorporation to day-to-day legal and tax compliance, GACS has been with us at every step. Professional, candid, and a true long-term partner for Shri Ji Lights.",
    name: "Shri Ji Lights",
    role: "Lighting Solutions",
  },
] as const

export const aboutPrinciples = [
  {
    title: "Mission",
    copy: "To deliver professional, client-first advisory in law, taxation, finance and business — offering transparent guidance that protects and grows our clients' interests.",
  },
  {
    title: "Vision",
    copy: "To be the most trusted multidisciplinary consultancy in India, known for integrity, deep expertise, and the lasting confidence we create for every client.",
  },
  {
    title: "Values",
    copy: "Integrity, confidentiality, excellence and genuine client care are the cornerstones of everything we do. We measure success by outcomes, not activity.",
  },
] as const

export const aboutProcess = [
  {
    number: "01",
    title: "Understand",
    copy: "A confidential consultation where we listen deeply to your situation, objectives and concerns before offering any view.",
  },
  {
    number: "02",
    title: "Analyse",
    copy: "Our team examines every relevant dimension — legal, regulatory, financial and commercial — to build a complete picture.",
  },
  {
    number: "03",
    title: "Advise",
    copy: "Clear, practical and actionable recommendations delivered in plain language, with full transparency on options and risks.",
  },
  {
    number: "04",
    title: "Support",
    copy: "We remain your partner through implementation, compliance and follow-on requirements — for the long term.",
  },
] as const

export const leadershipTeam = [
  {
    initials: "RG",
    name: "Adv. Rajan Gupta",
    role: "Founder & Senior Legal Advisor",
    focus: "Civil Litigation — Corporate Law — Dispute Resolution",
    qualifications: [
      "LL.B., University of Delhi",
      "Enrolled Advocate, Bar Council of India",
      "Specialist in Civil & Commercial Litigation",
      "Arbitration & Mediation Practitioner",
    ],
    bio: "With over 15 years at the bar, Adv. Rajan Gupta has built a practice around meticulous legal strategy and effective court-side advocacy. He has guided hundreds of clients through complex civil, commercial and corporate matters — consistently achieving outcomes that protect and advance client interests. His approach combines deep doctrinal knowledge with commercial pragmatism.",
  },
  {
    initials: "PG",
    name: "CA Priya Gupta",
    role: "Partner — Tax & Financial Advisory",
    focus: "Income Tax — GST — Financial Planning",
    qualifications: [
      "Chartered Accountant, ICAI",
      "Certified GST Professional",
      "Specialist in Tax Litigation & Planning",
      "Financial Planning & Advisory Expert",
    ],
    bio: "CA Priya Gupta brings a decade of deep expertise in direct and indirect taxation, strategic financial planning and regulatory compliance. Her proactive and forward-looking approach to tax advisory has helped a diverse client base — from salaried individuals to growing corporates — optimise their tax positions while maintaining impeccable compliance records.",
  },
  {
    initials: "AV",
    name: "CS Amit Verma",
    role: "Associate — Corporate & Compliance",
    focus: "Company Law — LLP — Secretarial Practice",
    qualifications: [
      "Company Secretary, ICSI",
      "B.Com (Hons), Delhi University",
      "Corporate Governance Specialist",
      "MSME Advisory Expert",
    ],
    bio: "CS Amit Verma specialises in corporate governance, company secretarial practice and comprehensive regulatory compliance management. From new incorporations to annual statutory filings, he ensures clients navigate every compliance obligation with precision and confidence — leaving no exposure, missing no deadline.",
  },
] as const

export const whyAdvantages = [
  {
    number: "01",
    title: "Multidisciplinary Expertise",
    copy: "Legal, tax, finance and business advisors working as one unified team. You access complete expertise without the fragmentation of multiple firms.",
  },
  {
    number: "02",
    title: "Personalised Advisory",
    copy: "No templated solutions. Every engagement begins with a deep understanding of your specific situation, goals and constraints before we recommend anything.",
  },
  {
    number: "03",
    title: "Absolute Confidentiality",
    copy: "Every matter is handled with rigorous professional confidentiality. Your information stays within our practice — without exception, without compromise.",
  },
  {
    number: "04",
    title: "Transparent Communication",
    copy: "Clear scope, honest fees and direct communication at every stage. No jargon, no surprises, no ambiguity about what we are doing or why.",
  },
  {
    number: "05",
    title: "Outcome-Focused",
    copy: "We measure our performance by the results we achieve for clients — resolved disputes, optimised tax positions, sound structures, confident decisions.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    copy: "We build enduring relationships that grow with you. As your business and personal circumstances evolve, GACS evolves with you.",
  },
] as const

export const practiceCatalogue = [
  {
    slug: "legal",
    number: "01",
    tab: "Law",
    title: "Legal Advisory & Representation",
    copy: "Expert legal counsel across civil, commercial and corporate matters — from advisory through to representation.",
    offerings: [
      {
        number: "01",
        title: "Civil & Commercial Matters",
        copy: "Representation in civil disputes, commercial claims and related proceedings before appropriate forums.",
      },
      {
        number: "02",
        title: "Corporate & Business Legal Advisory",
        copy: "Strategic legal guidance on governance, corporate structure, regulatory compliance and risk management.",
      },
      {
        number: "03",
        title: "Contracts & Agreements",
        copy: "Precision drafting, review and negotiation of all forms of contracts and commercial agreements.",
      },
      {
        number: "04",
        title: "Legal Notices & Replies",
        copy: "Authoritative preparation and response to legal notices, demands and correspondence.",
      },
      {
        number: "05",
        title: "Litigation & Dispute Resolution",
        copy: "Skilled advocacy in courts, tribunals and alternative dispute resolution processes.",
      },
      {
        number: "06",
        title: "Recovery & Cheque Bounce Matters",
        copy: "Recovery proceedings and representation in dishonoured cheque cases under the Negotiable Instruments Act.",
      },
    ],
  },
  {
    slug: "taxation",
    number: "02",
    tab: "Tax",
    title: "Taxation & Regulatory Consultancy",
    copy: "Complete tax advisory and compliance services across direct and indirect tax laws.",
    offerings: [
      {
        number: "01",
        title: "Income Tax Consultancy & Compliance",
        copy: "Accurate income tax planning, computation, filing and compliance management for all client categories.",
      },
      {
        number: "02",
        title: "GST Advisory & Compliance",
        copy: "End-to-end GST registration, returns filing, input tax credit management and regulatory advisory.",
      },
      {
        number: "03",
        title: "GST Notices & Proceedings",
        copy: "Expert handling of GST show cause notices, hearings and appellate representation.",
      },
      {
        number: "04",
        title: "Tax Litigation & Representation",
        copy: "Representation before tax authorities, CIT(A), ITAT and High Courts on disputed matters.",
      },
      {
        number: "05",
        title: "Tax Planning & Advisory",
        copy: "Strategic tax planning to optimise liabilities within the law for individuals and business entities.",
      },
      {
        number: "06",
        title: "TDS & Regulatory Compliance",
        copy: "TDS computation, deposition, returns filing and ongoing regulatory compliance management.",
      },
    ],
  },
  {
    slug: "business",
    number: "03",
    tab: "Business",
    title: "Business & Corporate Consultancy",
    copy: "From incorporation to ongoing compliance — comprehensive corporate advisory for businesses at every stage.",
    offerings: [
      {
        number: "01",
        title: "Business Structuring & Advisory",
        copy: "Guidance on optimal business structures — sole proprietorship, partnership, LLP or private company.",
      },
      {
        number: "02",
        title: "Company & LLP Documentation",
        copy: "Complete documentation for company and LLP incorporation, statutory filings and regulatory requirements.",
      },
      {
        number: "03",
        title: "Partnership Deeds & Amendments",
        copy: "Precise drafting, execution and amendment of partnership deeds and reconstitution agreements.",
      },
      {
        number: "04",
        title: "MOUs & Commercial Contracts",
        copy: "Memoranda of Understanding and bespoke commercial contracts tailored to your transaction needs.",
      },
      {
        number: "05",
        title: "Corporate Documentation",
        copy: "Board resolutions, statutory minutes, compliance certificates and secretarial documentation.",
      },
      {
        number: "06",
        title: "Business Compliance Management",
        copy: "Ongoing management of legal and regulatory compliance obligations to keep your business sound.",
      },
    ],
  },
  {
    slug: "finance",
    number: "04",
    tab: "Finance",
    title: "Finance & Accounting Support",
    copy: "Sound financial management and advisory services to support informed decision-making and growth.",
    offerings: [
      {
        number: "01",
        title: "Financial Planning & Advisory",
        copy: "Comprehensive financial planning aligned with your business objectives and risk profile.",
      },
      {
        number: "02",
        title: "Accounting & Bookkeeping Support",
        copy: "Accurate, systematic accounting and bookkeeping for clear visibility into financial performance.",
      },
      {
        number: "03",
        title: "Financial Documentation",
        copy: "Preparation of financial statements, reports and documentation for all statutory and commercial purposes.",
      },
      {
        number: "04",
        title: "Business Financial Analysis",
        copy: "In-depth analysis of financial health, profitability and business performance indicators.",
      },
      {
        number: "05",
        title: "Receivables & Payment Advisory",
        copy: "Advisory on receivables management, debt structuring and payment process optimisation.",
      },
      {
        number: "06",
        title: "Commercial & Financial Consultancy",
        copy: "Strategic commercial and financial guidance to support sound business decisions.",
      },
    ],
  },
] as const

export const whyPillars = [
  {
    title: "Multidisciplinary",
    copy: "Law, tax, finance and business expertise working as one team for you.",
  },
  {
    title: "Personalised",
    copy: "No template advice. Every engagement is built around your specific situation.",
  },
  {
    title: "Confidential",
    copy: "Rigorous confidentiality protocols on every matter, without exception.",
  },
  {
    title: "Transparent",
    copy: "Clear scope, honest fees, direct communication at every stage.",
  },
] as const

export const services = [
  {
    slug: "lpg-delivery",
    title: "LPG cylinder delivery",
    description:
      "Same-day domestic and commercial cylinder delivery with verified refill partners.",
    duration: "45–90 min",
  },
  {
    slug: "png-connection",
    title: "PNG connection",
    description:
      "New piped-gas surveys, documentation support, and coordinated installation visits.",
    duration: "60–120 min",
  },
  {
    slug: "appliance-install",
    title: "Appliance installation",
    description:
      "Stoves, hobs, geysers, and commercial burners installed and leak-tested on site.",
    duration: "60 min",
  },
  {
    slug: "safety-inspection",
    title: "Safety inspection",
    description:
      "Certified leak detection, regulator checks, and written clearance for homes and kitchens.",
    duration: "40 min",
  },
] as const

export const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
] as const
