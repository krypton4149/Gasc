export const siteConfig = {
  name: "GACS",
  legalName: "Gupta Associate Consultancy",
  brandName: "Gupta Associate",
  brandService: "Consultancy Service",
  brandSlogan: "Your Partner For A Brighter Tomorrow",
  brandRoles:
    "Tax Consultant  ||  Legal Advisor  ||  Corporate Consultant  ||  Finance Professional",
  brandRoleLines: [
    "Tax Consultant  ||  Legal Advisor",
    "Corporate Consultant  ||  Finance Professional",
  ],
  tagline: "Integrated legal, tax, finance and corporate advisory.",
  description:
    "Gupta Associate Consultancy Service — law, taxation, finance and corporate advisory in Firozabad. A 20+ CA & CS team. Book a confidential consultation.",
  url: "https://gasc.local",
  locale: "en_IN",
  phone: "+91 78956 33129",
  phoneSecondary: "+91 97197 98042",
  email: "info@gacs.org.in",
  cin: "U74999UP2022PTC166012",
  registeredName: "Gupta Associate Consultancy Service Private Limited",
  incorporatedOn: "20 June 2022",
  address:
    "A19-22, Ground Floor, Baldevi Tower, Suhag Nagar, Firozabad - 283203, U.P - India",
  hours: "Mon–Sat: 9:30AM – 7:30PM",
  hoursDays: "Monday – Saturday",
  hoursTime: "9:30AM – 7:30PM",
  hoursSunday: "Sunday: Closed",
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/gacs0001/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/1Gacs#",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pratham-gupta-3a72b0231",
    },
  ],
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
    topics: [
      "Civil matters",
      "Corporate law",
      "In-service",
      "Server support",
      "Other services",
    ],
  },
  {
    slug: "taxation",
    number: "02",
    title: "Taxation & Regulatory",
    topics: [
      "Income tax",
      "GST advisory",
      "In-service",
      "Server support",
      "Other services",
    ],
  },
  {
    slug: "business",
    number: "03",
    title: "Business & Corporate",
    topics: [
      "Structuring",
      "Documentation",
      "In-service",
      "Server support",
      "Other services",
    ],
  },
  {
    slug: "finance",
    number: "04",
    title: "Finance & Accounting",
    topics: [
      "Planning",
      "Bookkeeping",
      "In-service",
      "Server support",
      "Other services",
    ],
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
  "Trusted Since 2017",
  "Absolute Integrity",
] as const

export const aboutStory = {
  kicker: "Our Story",
  heading:
    "A practice built on long-term client relationships, not transactions.",
  columns: [
    "Gupta Associate Consultancy Service was formed as a proprietorship in 2017 by Anmol Gupta. The practice began with accounting and taxation, and was incorporated as Gupta Associate Consultancy Service Private Limited on 20 June 2022 (CIN: U74999UP2022PTC166012). It has grown into an integrated advisory firm — serving individuals and businesses under one roof, with advice that works in the real world.",
    "The firm later added two senior professionals, CA Nitin Gupta and Adv. Deepak Kumar Jain. It is supported by a total team of 20+ Chartered Accountants and Company Secretaries — including four semi-qualified members, Pratham Gupta, Ashish Gupta, Kshitiz Jain and Piyush Gupta — each contributing to the GACS standard of care.",
  ],
  stats: [
    { value: "9+", label: "Years of Practice" },
    { value: "2500+", label: "Clients Served" },
    { value: "20+", label: "CA & CS Team" },
    { value: "100%", label: "Satisfaction Rate" },
  ],
} as const

export const heroStats = [
  { value: "9+", label: "Years Practice" },
  { value: "2500+", label: "Clients Served" },
  { value: "20+", label: "CA & CS Team" },
  { value: "100%", label: "Satisfaction Rate" },
] as const

export const whyStats = [
  { value: "9+", label: "Years of Practice" },
  { value: "2500+", label: "Clients Served" },
  { value: "20+", label: "CA & CS Team" },
  { value: "100%", label: "Client Retention" },
] as const

export const testimonials = [
  {
    quote:
      "GACS supports our documentation, compliance and advisory needs with discipline and discretion. Their integrated legal and financial view keeps matters moving without delay.",
    name: "PNB",
    role: "Punjab National Bank",
    logo: "/images/pnb.png",
  },
  {
    quote:
      "From structuring to ongoing tax and legal compliance, GACS has been a reliable partner for Orchid Green. Clear advice, prompt response, and genuine care for the business.",
    name: "Orchid Green",
    role: "Mr. Pradeep Mittal",
    logo: "/images/orchid.png",
  },
  {
    quote:
      "The tax advisory from GACS transformed our compliance position. Proactive, clear and always ahead of regulatory changes. We recommend them without reservation.",
    name: "Lotus Light",
    role: "Mr. Ajay Mittal & Mr. Nalin Bansal",
    logo: "/images/lotus.png",
  },
  {
    quote:
      "Their finance, accounting and commercial advisory gave our showroom the clarity we needed. Decisions are faster, the books are sound, and we know where we stand.",
    name: "Honda Showroom",
    role: "Mr. Naveen Mittal & Mr. Kumal Mittal",
    logo: "/images/honda.png",
  },
  {
    quote:
      "From incorporation to day-to-day legal and tax compliance, GACS has been with us at every step. Professional, candid, and a true long-term partner for Shri Ji Lights.",
    name: "Shri Ji Lights",
    role: "Mr. Manoj Bansal",
    logo: "/images/shri.png",
  },
  {
    quote:
      "GACS is the legal partner for Lockhouse. From production contracts to on-set compliance and talent documentation, their counsel keeps the show protected, discreet and moving on schedule.",
    name: "Lockhouse",
    role: "Legal Partner — Reality Show",
    logo: "/images/lock.png",
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
    initials: "AG",
    name: "Anmol Gupta",
    role: "Founder & Chairperson",
    focus: "GST — Income Tax — VAT & Custom — Finance",
    photo: "/images/p1.png",
    qualifications: ["B.A. LL.B."],
    specialFields: [
      "Taxation Industry — GST, Income Tax, VAT & Custom",
      "Finance Consultancy and SIB Cases",
      "Income Tax & GST Cases & Other",
      "Direct & Indirect Taxes",
    ],
    bio: "Anmol Gupta is the Founder & Chairperson of GACS. He specialises in taxation — GST, income tax, VAT and custom — along with finance consultancy, SIB cases, and income tax and GST matters. He sets the standard for integrity, discretion and long-term client care, ensuring every engagement is measured by outcomes, not activity.",
  },
  {
    initials: "PG",
    name: "Pratham Gupta",
    role: "Founder & CEO",
    focus: "Investment — Litigation — Financing — Intellectual Property",
    photo: "/images/p2.png",
    qualifications: ["B.A. LL.B."],
    specialFields: [
      "Investment & Business Planning/Consultancy",
      "Litigation and Consumer Matters",
      "Financing",
      "Society",
      "Trust",
      "TM & Other Intellectual Property & Others",
      "Direct & Indirect Taxes",
    ],
    bio: "Pratham Gupta is the Founder & CEO of GACS, bringing the four practice areas together as one coordinated firm. He advises on investment and business planning, litigation and consumer matters, financing, societies and trusts, and trademarks and other intellectual property. His focus is practical execution: clear communication, dependable timelines, and advisory that works in the real world.",
  },
  {
    initials: "DJ",
    name: "Deepak Kumar Jain",
    role: "Associate Partner",
    focus: "Civil — Criminal — Family — Litigation",
    photo: "/images/p3.png",
    qualifications: ["B.Com", "LL.B."],
    specialFields: [
      "Civil, Criminal & Family Matters — Litigation Cases",
      "Practicing since 2002",
    ],
    bio: "Deepak Kumar Jain is Associate Partner at GACS, bringing more than two decades of courtroom and advisory experience to the firm. Qualified in commerce and law (B.Com, LL.B.), he practises across civil, criminal and family matters, with a primary focus on litigation. In practice since 2002, he has guided individuals and families through disputes, proceedings and sensitive personal matters with clarity and discretion. At GACS he works alongside the firm’s tax, finance and corporate teams so clients receive legal representation that is coordinated, practical and firmly grounded in their wider interests.",
  },
  {
    initials: "PYG",
    name: "Piyush Gupta",
    role: "Senior Executive",
    focus: "Accounting — Audit — Taxation",
    photo: "/images/aman.png",
    photoClass: "scale-[1.16] object-center",
    qualifications: ["B.Com", "LL.B."],
    specialFields: ["Accounting", "Audit", "Other Taxation", "Direct & Indirect Taxes"],
    bio: "Piyush Gupta is Senior Executive at GACS. He works on accounting, audit and other taxation matters — short, practical support that keeps the books and filings in order.",
  },
  {
    initials: "AsG",
    name: "Ashish Gupta",
    role: "Associate",
    focus: "Income Tax — GST — Companies Act",
    photo: "/images/ashish.png",
    photoClass: "scale-[1.14] object-[center_28%]",
    qualifications: ["B.Com", "LL.B."],
    specialFields: [
      "Income Tax",
      "GST",
      "Companies Act",
      "Direct & Indirect Taxes",
    ],
    bio: "Ashish Gupta works across income tax, GST, the Companies Act, and direct and indirect taxes — clear, practical support on the matters that sit with the firm every day.",
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
    copy: "Expert legal counsel across civil, commercial and corporate matters — from advisory through to representation. In-service, server and other legal support included.",
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
      {
        number: "07",
        title: "In-Service Legal Support",
        copy: "On-site and in-office legal support — we attend at your premises or at GACS, as the matter requires.",
      },
      {
        number: "08",
        title: "Server & Online Legal Support",
        copy: "Remote consultation, digital document exchange and virtual follow-up through secure online channels.",
      },
      {
        number: "09",
        title: "Other Legal Services",
        copy: "Allied legal work connected to your matter, coordinated under the same GACS engagement.",
      },
    ],
  },
  {
    slug: "taxation",
    number: "02",
    tab: "Tax",
    title: "Taxation & Regulatory Consultancy",
    copy: "Complete tax advisory and compliance services across direct and indirect tax laws. In-service, server and other tax support included.",
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
      {
        number: "07",
        title: "In-Service Tax Support",
        copy: "On-site and in-office tax support — returns, notices and compliance handled at your premises or at GACS.",
      },
      {
        number: "08",
        title: "Server & Online Tax Support",
        copy: "Remote filing, digital records and virtual tax advisory through secure online channels.",
      },
      {
        number: "09",
        title: "Other Tax Services",
        copy: "Allied taxation and regulatory work connected to your filings, coordinated under the same engagement.",
      },
    ],
  },
  {
    slug: "business",
    number: "03",
    tab: "Business",
    title: "Business & Corporate Consultancy",
    copy: "From incorporation to ongoing compliance — comprehensive corporate advisory for businesses at every stage. In-service, server and other business support included.",
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
      {
        number: "07",
        title: "In-Service Business Support",
        copy: "On-site and in-office corporate support — documentation and compliance handled at your premises or at GACS.",
      },
      {
        number: "08",
        title: "Server & Online Business Support",
        copy: "Remote incorporation filings, digital documentation and virtual corporate advisory through secure online channels.",
      },
      {
        number: "09",
        title: "Other Business Services",
        copy: "Allied corporate and commercial work connected to your business, coordinated under the same engagement.",
      },
    ],
  },
  {
    slug: "finance",
    number: "04",
    tab: "Finance",
    title: "Finance & Accounting Support",
    copy: "Sound financial management and advisory services to support informed decision-making and growth. In-service, server and other finance support included.",
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
      {
        number: "07",
        title: "In-Service Finance Support",
        copy: "On-site and in-office accounting support — books, reports and advisory handled at your premises or at GACS.",
      },
      {
        number: "08",
        title: "Server & Online Finance Support",
        copy: "Remote bookkeeping, digital financial records and virtual advisory through secure online channels.",
      },
      {
        number: "09",
        title: "Other Finance Services",
        copy: "Allied accounting and financial work connected to your books, coordinated under the same engagement.",
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
