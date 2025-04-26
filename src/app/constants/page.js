import price from "../asset/pricing.png";
import price2 from "../asset/pricing2.webp";

export const desktopMenu = [
  {
    id: 1,
    name: "What we offer",
    offers: [
      {
        id: 1,
        title: "Spend and save",
        categories: [
          "Checking Account",
          "USD Saving",
          "Registered Saving account",
        ],
      },
      {
        id: 2,
        title: "Self directed investing",
        categories: ["Stocks & ETFs", "Options", "Margins", "Cryptos"],
      },
      {
        id: 3,
        title: "Wealth management",
        categories: [
          "Managed Investing",
          "Bond Portfolio",
          "Private Credit",
          "Private Auditing",
        ],
      },
      {
        id: 4,
        title: "Borrow",
        categories: ["Mortgages"],
      },
      {
        id: 5,
        title: "Tax filing",
        categories: ["Tax"],
      },
    ],
  },
  {
    id: 2,
    name: "Benefits",
    offers: [
      {
        id: 1,
        title: "Benefits",
        categories: ["Compare Plans", "Premium and Generational Benefits"],
      },
    ],
  },
  {
    id: 3,
    name: "Learn",
    offers: [
      {
        id: 1,
        title: "Education",
        categories: [
          "Personal finance how-tos",
          "Advisor insights",
          "WealthNest Magazine",
        ],
      },
      {
        id: 2,
        title: "Guides",
        categories: [
          "Transfer Guides",
          "Home Buyer's Guide",
          "Retirement Guide",
          "Margin Resources",
          "Tax Guide",
        ],
      },
      {
        id: 3,
        title: "Tools",
        categories: [
          "Tax Calculator",
          "RRSP Calculator",
          "TFSA Calculator",
          "Retirement Calculator",
          "Fee Calculator",
        ],
      },
    ],
  },
  { id: 4, name: "Support" },
];

export const menu = [
  { id: 1, name: "Home" },
  { id: 2, name: "Invest" },
  { id: 3, name: "Spend & More" },
  { id: 4, name: "Tax Filing" },
  { id: 5, name: "Account types" },
  { id: 6, name: "Learn" },
  { id: 7, name: "Plans & Benefits" },
  { id: 8, name: "Supports" },
];

export const investingInformation = [
  {
    id: 1,
    title: "Low fees meet higher yields",
    desc: "Your money&apos;s always making more with low-fee investing and high-interest savings",
  },
  {
    id: 2,
    title: " Unmatched access",
    desc: "Get sophisticated investment opportunities traditionally reserved for industry insiders and the ultra-wealthy",
  },
  {
    id: 3,
    title: "  Smart & simple",
    desc: " In just a few taps, set your financial goals in motion, and let our easy-to-use products handle the rest.",
  },
];

export const trustInformation = [
  {
    id: 1,
    title: "$50+ billion",
    desc: "Assets under administration",
  },
  {
    id: 2,
    title: "$1 million",
    desc: "CDIC coverage on eligible deposits",
  },
  {
    id: 3,
    title: "4x lower",
    desc: "Management fees than the average Canadian mutual fund.",
  },
];

export const footerMenu = [
  {
    id: 1,
    name: "About us",
    offSpring: [
      "Our company",
      "Newsroom",
      "Careers",
      "Wealthsimple Foundation",
      "Giveback program",
      "Advisor insights",
    ],
  },
  {
    id: 2,
    name: "Legal",
    offSpring: ["Accessibility", "Privacy policy", "Terms of use"],
  },
  {
    id: 3,
    name: "Accounts",
    offSpring: [
      "RRSP",
      "TFSA",
      "FHSA",
      "HISA",
      "Non-registered account",
      "Margin",
      "Spousal RRSP",
      "RESP",
      "Corporate",
      "LIRA",
      "All accounts",
    ],
  },
  {
    id: 4,
    name: "Products",
    offSpring: [
      "Managed investing",
      "Self-directed investing",
      " Private credit",
      " Private equity",
      "Cash",
      "Crypto",
      "Tax",
      "Mortgages",
      "For Business",
    ],
  },
  {
    id: 5,
    name: "Social",
    offSpring: ["Instagram", "X", "YouTube", "LinkedIn"],
  },
  {
    id: 6,
    name: "Support",
    offSpring: ["Transfer an account", "Help centre", "Contact us"],
  },
];

export const pricing = [
  {
    id: 1,
    asset: "$100,000 IN ASSETS",
    title: "Premium",
    points: [
      "0.4% management feese on managed investing accounts",
      "2.5% interest on your Cash account",
      "Goal setting with an advisor",
    ],
    image: price,
    color: "bg-white",
    assetColor: "bg-slate-200 font-oswald",
    textColor: "text-customBlack font-pt",
  },
  {
    id: 2,
    asset: "$500,000 IN ASSETS",
    title: "Generation",
    points: [
      "0.2%-0.4% management feese on managed investing accounts",
      "4% interest on your Cash account",
      "Experienced team of advisors",
    ],
    image: price2,
    color: "bg-black",
    assetColor: "bg-slate-800 font-oswald",
    textColor: "text-white font-pt",
  },
];

export const meetingInformation = [
  {
    id: 1,
    title: "Speak to an advisor",
    desc: "Premium and Generation clients have access to goal setting and financial planning.",
  },
  {
    id: 2,
    title: "Connect with our team",
    desc: "Have account-related inquiries? Our team is here to support you.",
  },
  {
    id: 3,
    title: "Self-serve help",
    desc: "Find answers to your investing questions in our help centre, personal finance how-tos, or right in the app.",
  },
];
